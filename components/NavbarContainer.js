import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px !important;
  background-color: ${ ({ blur }) => blur ? "transparent" : "inherit"};
  filter: ${ ({ blur }) => blur ? "blur(5px)" : "none"};
  display: flex;
  justify-content: center;
  margin: 16px 32px 32px;
  align-items: center;
`

export default NavbarContainer