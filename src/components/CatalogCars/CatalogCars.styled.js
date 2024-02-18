import { styled } from 'styled-components';

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 25px;
  margin-bottom: 100px;
  justify-content: center;
`;

export const BtnLoadMore = styled.button`
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  width: 90px;
  text-decoration: underline;
  color: var(--primery-color-blue);
  margin-bottom: 100px;
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--secondary-color-blue);
  }
`;
