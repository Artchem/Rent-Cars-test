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
    height: 100%;
    width: auto;
    object-fit: cover;
    margin-bottom: 14px;
    border-radius: 10px;
  }
`;

export const ImgWrapper = styled.div`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;
`;

export const TextTop = styled.div`
  display: flex;
  justify-content: space-between;

  width: 274px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
`;

export const SpanModel = styled.span`
  color: var(--primery-color-blue);
`;

export const TextBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* justify-content: space-between; */
  width: 274px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 28px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.5;
`;

export const StyledBtn = styled.button`
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
