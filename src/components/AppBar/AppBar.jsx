import { StyledNav, StyledNavLink } from './AppBar.styled';

function AppBar() {
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('isLoggedIn  Navigation :>> ', isLoggedIn);
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
