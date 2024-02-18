import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFiltredCars,
  selectCars,
  selectCurrentPage,
  selectError,
  selectIsLoading,
} from '../../redux/carsDetails/carsSelectors';
import { getCars } from '../../redux/carsDetails/carsThunk';
import Loader from '../Loader/Loader';
import { BtnLoadMore, Conteiner, StyledList } from './CatalogCars.styled';
import CarItem from '../CarItem/CarItem';
import { setCurrentPage } from '../../redux/carsDetails/currentPageSlice';

function CatalogCars() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredCars = useSelector(getFiltredCars);
  const currentPage = useSelector(selectCurrentPage);
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (currentPage === 1 && cars.length < 12) {
      dispatch(getCars(currentPage));
    }
  }, [dispatch, currentPage, cars.length]);

  const loadMore = () => {
    const page1 = currentPage + 1;
    dispatch(setCurrentPage(page1));
    dispatch(getCars(page1));
  };

  return (
    <>
      <Conteiner>
        <StyledList>
          {filteredCars.map(item => (
            <CarItem key={item.id} car={item} />
          ))}
        </StyledList>
        {filteredCars.length !== 0 && currentPage < 3 && (
          <BtnLoadMore type="button" onClick={loadMore}>
            Load more
          </BtnLoadMore>
        )}

        {isLoading && <Loader />}
        {error && <p>{error}</p>}
      </Conteiner>
    </>
  );
}

export default CatalogCars;
