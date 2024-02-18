import { useSelector } from 'react-redux';
import CarItem from '../../components/CarItem/CarItem';
import { selectFavoriteCars } from '../../redux/carsDetails/carsSelectors';
import { StyledList, StyledTitle } from './FavoritesPage.styled';

const FavoritePage = ({ props }) => {
  console.log('props :>> ', props);
  const favoriteCars = useSelector(selectFavoriteCars);
  return (
    <div>
      <StyledTitle>Favorite cars</StyledTitle>
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
    </div>
  );
};

export default FavoritePage;
