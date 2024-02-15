import { styled } from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 25px;
  li {
    display: block;
    width: 274px;
  }
  img {
    display: block;
    height: 268px;
    width: 100%;
    margin-bottom: 14px;
    border-radius: 10px;
  }
`;

export const TextTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export const SpanModel = styled.span`
  color: var(--primery-color-blue);
`;

export const TextBottom = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  margin-bottom: 28px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.5;
`;
