import { StyledNav, StyledNavLink } from './AppBar.styled';

function AppBar() {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Cars catalog </StyledNavLink>
        <StyledNavLink to="/favorites">Cars favorites</StyledNavLink>
      </StyledNav>
    </>
  );
}

export default AppBar;
