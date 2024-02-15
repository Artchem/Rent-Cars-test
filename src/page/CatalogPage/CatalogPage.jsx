// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCars } from '../../redux/carsDetails/carsSelectors';
// import { getCars } from '../../redux/carsDetails/carsThunk';

import CatalogCars from '../../components/CatalogCars/CatalogCars';

function CatalogPage() {
  // const dispatch = useDispatch();
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  // console.log('isLoggedIn  Navigation :>> ', isLoggedIn);

  // const auto = useSelector(selectCars);
  // console.log('auto :>> ', auto);

  // useEffect(() => {
  //   dispatch(getCars());
  // }, [dispatch]);

  return (
    <>
      <CatalogCars />
    </>
  );
}

export default CatalogPage;
