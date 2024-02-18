import { useSelector } from 'react-redux';
import CarItem from '../../components/CarItem/CarItem';
// import FilterCars from '../../components/FilterCars/FilterCars';
import { selectFavoriteCars } from '../../redux/carsDetails/carsSelectors';
import { Conteiner, StyledList, StyledTitle } from './FavoritesPage.styled';

const FavoritePage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  return (
    <Conteiner>
      <StyledTitle>Favorite cars</StyledTitle>

      {/* <Conteiner>
        <FilterCars />
      </Conteiner> */}

      <div>
        {favoriteCars.length === 0 ? (
          <>
            <div>You haven't chosen your favorite cars yet</div>
          </>
        ) : (
          <StyledList>
            {favoriteCars.map(item => (
              <CarItem key={item.id} car={item} />
            ))}
          </StyledList>
        )}
      </div>
    </Conteiner>
  );
};

export default FavoritePage;
