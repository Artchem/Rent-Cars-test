import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/carsDetails/carsFavoriteSlice';

import {
  BtnFavorite,
  ImgWrapper,
  SpanModel,
  StyledBtn,
  StyledItem,
  TextBottom,
  TextTop,
} from './CarItem.styled';
import { getAddress } from '../../helpers/getAddress';
import icons from '../../assets/icons.svg';
import defaultCar from '../../assets/default.jpg';
import { ModalCar } from '../ModalCar/ModalCar';
import { selectFavoriteCars } from '../../redux/carsDetails/carsSelectors';

function CarItem({ car }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const itemsFavoriteCars = useSelector(selectFavoriteCars);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavorite(car));

      setIsFavorite(true);
    } else {
      dispatch(removeFavorite(car.id));
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    if (itemsFavoriteCars !== null) {
      const carFavorite = itemsFavoriteCars.some(evt => evt.id === car.id);

      setIsFavorite(carFavorite);
    }
  }, [itemsFavoriteCars, car.id]);

  return (
    <>
      <StyledItem key={car.id}>
        <ImgWrapper>
          <img src={car.img ? car.img : defaultCar} alt={car.description} />
        </ImgWrapper>
        <BtnFavorite type="button" onClick={handleFavorite}>
          <svg
            style={{
              fill: isFavorite ? '#3470ff' : 'none',
            }}
            // isFavorite
            width="18"
            height="18"
          >
            <use href={icons + '#icon-favorite'}></use>
          </svg>
        </BtnFavorite>
        <div>
          <TextTop>
            <div>
              {car.make}
              <SpanModel> {car.model}</SpanModel>, {car.year}
            </div>
            <span>{car.rentalPrice}</span>
          </TextTop>
          <TextBottom>
            <p>
              {getAddress(car.address)} | {car.rentalCompany} | Premium
            </p>
            <p>
              {car.type} | {car.model} | {car.mileage}
            </p>
          </TextBottom>
        </div>
        <StyledBtn type="button" onClick={() => openModal()}>
          Learn more
        </StyledBtn>
      </StyledItem>

      {isModalOpen && (
        <ModalCar
          car={car}
          onClose={() => {
            closeModal();
          }}
        />
      )}
    </>
  );
}

export default CarItem;
