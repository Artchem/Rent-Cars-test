import logoCars from './logoCars.json';
import { Autocomplete, TextField } from '@mui/material';
import { StyledText } from './FilterCars.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/carsDetails/filterCarsSlice';

export default function FilterCars() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);
  return (
    <>
      <StyledText>Car brand</StyledText>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={logoCars}
        inputValue={filterValue}
        onInputChange={(evt, newInputValue) => {
          dispatch(setFilter(newInputValue));
        }}
        name="filter"
        value={filterValue}
        isOptionEqualToValue={option => option}
        sx={{
          width: 224,
          backgroundColor: '#F7F7FB',
          borderRadius: '14px',
          border: 'none',

          button: {
            width: '24px',
            justifyContent: 'flex-end',
          },
          label: { color: 'var(--primery-color-black)' },

          fieldset: { padding: '0px', border: 'none' },
        }}
        renderInput={params => <TextField {...params} label="Enter the text" />}
      />
    </>
  );
}
