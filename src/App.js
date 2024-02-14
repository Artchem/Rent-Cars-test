// import { useSelector } from 'react-redux';
// import { selectCars } from './redux/carsDetails/carsSelectors';
import { fetchCars } from './services/api';

function App() {
  // const auto = useSelector(selectCars);
  // console.log('auto :>> ', auto);
  const ca = fetchCars();
  // console.log('ca :>> ', ca);
  return <div></div>;
}

export default App;
