import CatalogCars from '../../components/CatalogCars/CatalogCars';
import FilterCars from '../../components/FilterCars/FilterCars';
import { Conteiner } from './CatalogPage.styled';

function CatalogPage() {
  return (
    <>
      <Conteiner>
        <FilterCars />
      </Conteiner>

      <CatalogCars />
    </>
  );
}

export default CatalogPage;
