import { styled } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 274px;
  height: 44px;
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
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;

// export const Button = styled.button`
//   display: flex;
// `;
