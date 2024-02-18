import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
`;
export const StyledDiv = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;

  h3 {
    text-align: left;
    font-size: 34px;
    font-weight: 900;
    line-height: 1.3;
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 220px;
  height: 20px;
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;

  color: var(--primery-color-white);
  background-color: var(--primery-color-blue);

  border: none;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(64, 123, 255, 0.4);

  &:hover,
  &:focus {
    background-color: var(--secondary-color-blue);
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;
