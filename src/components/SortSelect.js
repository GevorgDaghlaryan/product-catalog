import React from 'react';
import { MenuItem, Select } from '@mui/material';

function SortSelect({handleInputChange, filters} ) {

    return (
        <Select
            name="sortOrder"
            value={filters.sortOrder}
            onChange={handleInputChange}
            displayEmpty
            size="small"
            variant="outlined"
            sx={{ maxWidth: "200px" }}
        >
            <MenuItem value="">
                <em>Sort by: Default</em>
            </MenuItem>
            <MenuItem value="price_asc">Price: Low to High</MenuItem>
            <MenuItem value="price_desc">Price: High to Low</MenuItem>
            <MenuItem value="rating_asc">Rating: Low to High</MenuItem>
            <MenuItem value="rating_desc">Rating: High to Low</MenuItem>
        </Select>
    );
}
export default SortSelect;