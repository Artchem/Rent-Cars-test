import {
  AgeSpan,
  Backdrop,
  ImgWrapper,
  InfoDiv,
  ModalWindow,
  SpanModel,
  StyledAccessories,
  StyledBtn,
  StyledBtnClose,
  StyledConditions,
  StyledDescription,
} from './ModalCars.styled';
import defaultCar from '../../assets/default.jpg';
import { getAddress } from '../../helpers/getAddress';
import icons from '../../assets/icons.svg';
import { useEffect } from 'react';

export const ModalCar = ({ onClose, car }) => {
  const {
    make,
    year,
    model,
    type,
    img,
    address,
    engineSize,
    fuelConsumption,
    id,
    description,
    accessories,
    functionalities,
    mileage,
    rentalConditions,
    rentalPrice,
  } = car;

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const mileageUi = mileage / 1000;
  const conditionsArray = rentalConditions.split('\n');
  const minimalAge = conditionsArray[0].split(':');

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <div>
          <ImgWrapper>
            <img
              src={img ? img : defaultCar}
              alt={description}
              width={461}
              height={248}
            />
          </ImgWrapper>
          <div>
            <h2>
              {make} {model && <SpanModel>{model}</SpanModel>}, {year}
            </h2>

            <InfoDiv>
              <ul>
                <li>
                  <p>{getAddress(address)}</p>
                </li>
                <li>
                  <p>Id: {id}</p>
                </li>
                <li>
                  <p>Year: {year}</p>
                </li>
                <li>
                  <p>Type: {type}</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>Fuel Consumption: {fuelConsumption}</p>
                </li>
                <li>
                  <p>Engine Size: {engineSize}</p>
                </li>
              </ul>
            </InfoDiv>
          </div>
          <StyledDescription>{description}</StyledDescription>
        </div>

        <StyledAccessories>
          <h3>Accessories and functionalities:</h3>
          <div>
            <ul>
              {accessories.map((accessory, index) => (
                <li key={index}>
                  <p>{accessory}</p>
                </li>
              ))}
            </ul>
            <ul>
              {functionalities.map((functional, index) => (
                <li key={index}>
                  <p>{functional}</p>
                </li>
              ))}
            </ul>
          </div>
        </StyledAccessories>

        <StyledConditions>
          <h3>Rental Conditions:</h3>
          <ul>
            {conditionsArray.map((condition, index) => (
              <li key={index}>
                <p>
                  {index === 0 ? (
                    <>
                      {minimalAge[0]}: <AgeSpan>{minimalAge[1]}</AgeSpan>
                    </>
                  ) : (
                    condition
                  )}
                </p>
              </li>
            ))}
            <li>
              <p>
                Mileage: <AgeSpan>{mileageUi}</AgeSpan>
              </p>
            </li>
            <li>
              <p>
                Price: <AgeSpan>{rentalPrice.slice(1)}$</AgeSpan>
              </p>
            </li>
          </ul>
        </StyledConditions>

        <StyledBtn type="button">Rental car</StyledBtn>

        <StyledBtnClose onClick={onClose} type="button">
          <svg width="24" height="24">
            <use href={icons + '#icon-x'}></use>
          </svg>
        </StyledBtnClose>
      </ModalWindow>
    </Backdrop>
  );
};
