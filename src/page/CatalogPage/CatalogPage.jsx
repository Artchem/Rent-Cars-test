import CatalogCars from '../../components/CatalogCars/CatalogCars';
import MultipleSelect from '../../components/FilterCars/FilterCars';
import { Conteiner } from './CatalogPage.styled';

function CatalogPage() {
  return (
    <>
      <Conteiner>
        <MultipleSelect />
      </Conteiner>

      <CatalogCars />
    </>
  );
}

export default CatalogPage;
