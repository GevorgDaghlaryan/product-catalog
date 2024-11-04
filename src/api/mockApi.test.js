import { fetchProducts } from './mockApi';

import {products as mockProducts} from '../data.js'

describe('fetchProducts', () => {
    it('should filter products by category', async () => {
        const filters = { category: 'Electronics' };
        const result = await fetchProducts(filters);
        expect(result).toEqual([mockProducts[0], mockProducts[1], mockProducts[3], mockProducts[5], mockProducts[6], mockProducts[8]]);
    });
    it('should filter products by brand', async () => {
        const filters = { brand: 'Brand A' };
        const result = await fetchProducts(filters);
        expect(result).toEqual([mockProducts[0], mockProducts[5]]);
    });
    it('should filter products by price range', async () => {
        const filters = { priceRange: [100, 200] };
        const result = await fetchProducts(filters);
        expect(result).toEqual([mockProducts[4]]);
    });
    it('should filter products by rating range', async () => {
        const filters = { ratingRange: [0, 3] };
        const result = await fetchProducts(filters);
        expect(result).toEqual([mockProducts[4], mockProducts[6], mockProducts[8]]);
    });

    it('should filter products by rating range', async () => {
        const filters = { ratingRange: [10, 20] };
        const result = await fetchProducts(filters);
        expect(result).toEqual([]);
    });

    it('should filter products by search query', async () => {
        const filters = { search: 'Jacket' };
        const result = await fetchProducts(filters);
        expect(result).toEqual([mockProducts[4], mockProducts[9],]);
    });

    it('should sort products by price in ascending order', async () => {
        const filters = { sortOrder: 'price_asc' };
        const result = await fetchProducts(filters);
        expect(result).toEqual([mockProducts[1], mockProducts[8], mockProducts[2], mockProducts[7], mockProducts[6], mockProducts[5], mockProducts[0], mockProducts[9], mockProducts[4], mockProducts[3]]);
    });

    it('should sort products by rating in ascending order', async () => {
        const filters = { sortOrder: 'rating_asc' };
        const result = await fetchProducts(filters);
        expect(result).toEqual([mockProducts[4], mockProducts[8], mockProducts[6], mockProducts[1], mockProducts[5], mockProducts[7], mockProducts[0], mockProducts[3], mockProducts[2], mockProducts[9]]);
    });

    it('should return all products if no filters are applied', async () => {
        const filters = {};
        const result = await fetchProducts(filters);
        expect(result).toEqual(mockProducts);
    });
});
