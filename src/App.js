// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/Loader/Loader';
// import Layout from './components/Layout/Layout';
// import { selectCars } from './redux/carsDetails/carsSelectors';
// import { getCars } from './redux/carsDetails/carsThunk';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./page/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./page/FavoritesPage/FavoritesPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<div></div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
