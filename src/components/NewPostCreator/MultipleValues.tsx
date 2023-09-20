import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const CustomAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-popupIndicator {
    width: 200px; /* Установите желаемую ширину */
  }
`;

export default function Tags({
  categories, setInputValue, inputValue, setSelectedCategoriesValues,
}:any) {
  const [open, setOpen] = React.useState(false);
  const handleCategoriesChange = ((e:any, newValue:any) => {
    console.log('newValue', newValue);
    setSelectedCategoriesValues(newValue);
  });
  // const filteredCategories = categories.filter((option:any) => option.title.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 3);
  return (
    <Stack
      spacing={3}
      sx={{
        // width: 0,
      }}
    >
      <CustomAutocomplete
        multiple
        id="tags-standard"
        options={categories}
        getOptionLabel={(option:any) => option.name}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
          setOpen(newInputValue !== '');
        }}
        open={open}
        onClose={() => setOpen(false)}
        onChange={handleCategoriesChange}
        // defaultValue={[categories[13]]}\
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            // label="Multiple values"
            placeholder="Select categories that are related to your post"

          />
        )}
        renderOption={(props, option:any) => (
          <li {...props}>
            <img
              src={option.imageUrl}
              style={{
                width: '35px',
                height: '35px',
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: '10px',
              }}
            />
            <span>{option.name}</span>
            {/* {option.title} */}
          </li>
        )}
      />

    </Stack>
  );
}
