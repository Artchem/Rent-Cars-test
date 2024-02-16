import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress } from '../../helpers/getAddress';
import {
  getFiltredCars,
  selectIsLoading,
} from '../../redux/carsDetails/carsSelectors';
import { getCars } from '../../redux/carsDetails/carsThunk';

import defaultCar from '../../assets/default.jpg';
import Loader from '../Loader/Loader';
import {
  ImgWrapper,
  SpanModel,
  StyledBtn,
  StyledList,
  TextBottom,
  TextTop,
} from './CatalogCars.styled';
import { ModalCar } from '../ModalCar/ModalCar';

function CatalogCars() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredCars = useSelector(getFiltredCars);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const openModal = car => {
    setIsModalOpen(true);
    setSelectedCar(car);
    // console.log('modal open :>> ');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // console.log('modal close :>> ');
  };

  return (
    <>
      <StyledList>
        {filteredCars.map(car => (
          <li key={car.id}>
            <ImgWrapper>
              <img src={car.img ? car.img : defaultCar} alt={car.description} />
            </ImgWrapper>

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
            <StyledBtn type="button" onClick={() => openModal(car)}>
              Learn more
            </StyledBtn>
          </li>
        ))}
      </StyledList>
      {isModalOpen && (
        <ModalCar
          car={selectedCar}
          onClose={() => {
            closeModal();
          }}
        />
      )}
      {isLoading && <Loader />}
    </>
  );
}

export default CatalogCars;
