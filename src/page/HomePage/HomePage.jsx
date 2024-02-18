import { StyledDiv, StyledNavLink, StyledTitle } from './HomePage.styled';

function HomePage() {
  return (
    <>
      <div>
        <StyledTitle></StyledTitle>
      </div>
      <StyledDiv>
        <h3>Your long-term car rental for a few month</h3>
        <p>
          Are you looking for a long-term car rental in Ukraine? What are the
          advantages of a classic long-term car rental and when are other
          solutions such as a car subscription suitable? Questions and answers
          about long-term car rental can be found here.
        </p>
        <StyledNavLink to="/catalog">Cars catalog </StyledNavLink>
      </StyledDiv>
    </>
  );
}

export default HomePage;
