// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
// import { selectCars } from './redux/carsDetails/carsSelectors';
// import { getCars } from './redux/carsDetails/carsThunk';

const Layout = lazy(() => import('./components/Layout/Layout'));
// const HomePage = lazy(() => import('./page/HomePage'));
const CatalogPage = lazy(() => import('./page/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./page/FavoritesPage/FavoritesPage'));

function App() {
  // const dispatch = useDispatch();

  // const auto = useSelector(selectCars);
  // console.log('auto :>> ', auto);

  // useEffect(() => {
  //   dispatch(getCars());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
}

export default App;
