import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css';
import useDebounce from '@/hooks/useDebounce';
import FilterListIcon from '@mui/icons-material/FilterList';
import MobileFilters from '@/components/MobileFilters';
import MainFilters from '@/components/MainFilters';
import SortSelect from '@/components/SortSelect';

function Filters({ filters, setFilters }) {
    const [searchQuery, setSearchQuery] = useState(filters.search);
    const debouncedSearchQuery = useDebounce(searchQuery, 1000);
    const [priceRange, setPriceRange] = useState(filters.priceRange);
    const debouncedPriceRange = useDebounce(priceRange, 1000);
    const [ratingRange, setRatingRange] = useState(filters.ratingRange);
    const debouncedRatingRange = useDebounce(ratingRange, 1000);
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    };
    const toggleMobileFilters = () => {
        setShowMobileFilters(!showMobileFilters);
    }

    const handlePriceSliderChange = (e, newValue) => {
        setPriceRange(newValue);
    };
    const handleRatingSliderChange = (e, newValue) => {
        setRatingRange(newValue);
    }

    useEffect(() => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            search: debouncedSearchQuery,
            priceRange:debouncedPriceRange,
            ratingRange: debouncedRatingRange,
        }));
    }, [debouncedSearchQuery, debouncedPriceRange, debouncedRatingRange]);


    return (
        <div className={styles.filters_section}>
            <button
                className={styles.filters_button}
                onClick={toggleMobileFilters}
                color="primary"
            >
                <FilterListIcon/>
                Filters
            </button>
            <MainFilters
                toggleMobileFilters={toggleMobileFilters}
                handleInputChange={handleInputChange}
                filters={filters}
                priceRange={priceRange}
                handlePriceSliderChange={handlePriceSliderChange}
                ratingRange={ratingRange}
                handleRatingSliderChange={handleRatingSliderChange}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            {showMobileFilters &&
                <MobileFilters
                    toggleMobileFilters={toggleMobileFilters}
                    handleInputChange={handleInputChange}
                    filters={filters}
                    priceRange={priceRange}
                    handlePriceSliderChange={handlePriceSliderChange}
                    ratingRange={ratingRange}
                    handleRatingSliderChange={handleRatingSliderChange}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            }
            <div className={styles.sort_wrapper}>
                <SortSelect
                    handleInputChange={handleInputChange}
                    filters={filters}
                />
            </div>
        </div>
    );
}

export default Filters;