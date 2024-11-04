import React from 'react';
import styles from '../app/page.module.css';
import { MenuItem, Select, Slider, TextField } from '@mui/material';


function MainFilters( { handleInputChange, filters, priceRange, handlePriceSliderChange, ratingRange, handleRatingSliderChange, searchQuery, setSearchQuery }) {
    return (
        <div className={styles.filters}>
            <div className={styles.inputs}>
                <TextField
                    size="small"
                    name="search"
                    label="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{maxWidth: "150px"}}
                />
                <Select
                    name="category"
                    value={filters.category}
                    onChange={handleInputChange}
                    displayEmpty
                    size="small"
                    variant="outlined"
                >
                    <MenuItem value="">
                        <em>All Categories</em>
                    </MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Footwear">Footwear</MenuItem>
                    <MenuItem value="Clothing">Clothing</MenuItem>
                </Select>
                <Select
                    name="brand"
                    value={filters.brand}
                    onChange={handleInputChange}
                    displayEmpty
                    variant="outlined"
                    size="small"
                >
                    <MenuItem value="">
                        <em>All Brands</em>
                    </MenuItem>
                    <MenuItem value="Brand A">Brand A</MenuItem>
                    <MenuItem value="Brand B">Brand B</MenuItem>
                    <MenuItem value="Brand C">Brand C</MenuItem>
                    <MenuItem value="Brand D">Brand D</MenuItem>
                    <MenuItem value="Brand E">Brand E</MenuItem>
                </Select>
            </div>
            <div className={styles.sliders}>
                <div className={styles.slider_wrapper}>
                    <label htmlFor="priceRange">Price Range:</label>
                    <Slider
                        id="priceRange"
                        name="priceRange"
                        value={priceRange}
                        onChange={handlePriceSliderChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={500}
                        getAriaLabel={() => 'Price range'}
                        disableSwap
                        sx={{width: '150px'}}
                    />
                </div>
                <div className={styles.slider_wrapper}>
                    <label htmlFor="ratingRange">Rating Range:</label>
                    <Slider
                        id="ratingRange"
                        name="ratingRange"
                        value={ratingRange}
                        onChange={handleRatingSliderChange}
                        valueLabelDisplay="auto"
                        min={0}
                        max={5}
                        getAriaLabel={() => 'Rating range'}
                        disableSwap
                        sx={{width: '150px'}}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainFilters;