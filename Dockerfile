FROM ubuntu:trusty

###
# OS Packages Round 1
###
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
  # needed for `add-apt-repository` to function properly
  apt-transport-https \
  # provides `add-apt-repository` command
  software-properties-common \
  # used before round 2
  wget

###
# OS Packages Round 2
##
# refresh list with new repos
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install \
  build-essential \
  bundler \
  curl \
  git \
  imagemagick \
  libmagickcore-dev \
  libmagickwand-dev \
  libpq-dev \
  libxml2 \
  libxml2-dev \
  libxslt1-dev \
  locales \
  python-software-properties \
  zlib1g-dev

###
# Networking
###
# map localhost domain so we can oauth with 3rd parties
EXPOSE 80 8080

###
# Chrome for automated browser testing
# See https://stackoverflow.com/c/vydia/questions/32
###
RUN apt-get install -y xvfb libxss1 libappindicator1 libindicator7
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
# try to install chrome, which will fail, then install missing dependencies and reinstall
RUN dpkg -i google-chrome*.deb || apt-get install -y -f && dpkg -i google-chrome*.deb

##
# Neo4j Client
###

RUN add-apt-repository ppa:cleishm/neo4j
RUN apt-get update
RUN apt-get install neo4j-client libneo4j-client-dev -y

###
# Node
###
RUN wget https://nodejs.org/dist/v8.12.0/node-v8.12.0-linux-x64.tar.xz
RUN tar -xf node-v8.12.0-linux-x64.tar.xz --directory /usr/local --strip-components 1
# need gulp to generate assets
RUN npm -v
RUN npm install -g gulp@4.x
RUN npm install -g now@11.4.5


###
# Yarn
# From https://yarnpkg.com/en/docs/install#debian-stable
###
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get -y install yarn

###
# Node packages
###
COPY package.json ./
# gulp requires packages like 'del' to generate assets, so until we move everything except lint, flow and other dev-only tools from 'devDependencies', we have to install everything
RUN yarn install --pure-lockfile --production=false

# Log in directly to /vydia
WORKDIR /you
CMD ["/bin/bash"]


