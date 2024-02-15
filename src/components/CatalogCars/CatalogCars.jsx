import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectIsLoading,
} from '../../redux/carsDetails/carsSelectors';
import { getCars } from '../../redux/carsDetails/carsThunk';
import { Button } from '../Button/Button';

import Loader from '../Loader/Loader';
import {
  SpanModel,
  StyledList,
  TextBottom,
  TextTop,
} from './CatalogCars.styled';

function CatalogCars() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const cars = useSelector(selectCars);
  console.log('cars :>> ', cars);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const changeAddress = data => {
    // const text = 'пример тнкста для преобраз в массив слов';

    const arrey = data.split(' ').slice(-2);
    const firstWord = arrey[0].slice(0, arrey[0].length - 1);
    const secondWord = arrey[1];
    // console.log('firstWord :>> ', firstWord);
    // console.log('secondWord :>> ', secondWord);
    const result = `${firstWord} | ${secondWord}`;
    return result;
  };

  return (
    <>
      <StyledList>
        {cars.map(car => (
          <li key={car.id}>
            <img src={car.img ? car.img : defaultImg} alt={car.description} />
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
                  {changeAddress(car.address)} | {car.rentalCompany} | Premium
                </p>
                <p>
                  {car.type} | {car.model} | {car.mileage}
                </p>
              </TextBottom>
            </div>
            <Button></Button>
          </li>
        ))}
      </StyledList>
      {isLoading && <Loader />}
    </>
  );
}

export default CatalogCars;
