import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  opacity: 1;
  visibility: visible;
`;

export const ModalWindow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 461px;
  max-height: 90vh;
  padding: 40px;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: scale(1) translate(-50%, -50%);

  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 3px 10px -0.5px rgba(0, 0, 0, 0.2);
  z-index: 100;

  img {
    display: block;
    height: auto;
    width: 100%;

    object-fit: cover;
    border-radius: 14px;
  }
  h2 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  width: 461px;
  height: 248px;
  overflow: hidden;
  align-items: center;
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const SpanModel = styled.span`
  color: var(--primery-color-blue);
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.5;
  ul {
    display: flex;
    gap: 10px;
  }
  li {
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 0;
      right: -5px;
      height: 100%;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;
export const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const StyledAccessories = styled.div`
  h3 {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  ul {
    display: flex;
    gap: 10px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    opacity: 0.5;
  }
  li {
    position: relative;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      top: 0;
      right: -5px;
      height: 100%;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;

export const StyledConditions = styled.div`
  h3 {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
  }
  div {
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 440px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
  li {
    background-color: #f9f9f9;
    border-radius: 35px;
    padding: 7px 14px;
  }
`;
export const AgeSpan = styled.span`
  color: var(--primery-color-blue);
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 168px;
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

export const StyledBtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  svg {
    stroke: var(--primery-color-black);

    &:hover,
    &:focus {
      stroke: var(--primery-color-blue);
    }
  }
`;
