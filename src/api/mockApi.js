import { products } from '@/data';

export function fetchProducts(filters) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredProducts = products;

            filteredProducts = filteredProducts
                .filter(product => !filters.category || product.category === filters.category)
                .filter(product => !filters.brand || product.brand === filters.brand)
                .filter(product =>
                    !filters.priceRange ||
                    (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
                )
                .filter(product =>
                    !filters.ratingRange ||
                    (product.rating >= filters.ratingRange[0] && product.rating <= filters.ratingRange[1])
                )
                .filter(product =>
                    !filters.search ||
                    product.name.toLowerCase().includes(filters.search.toLowerCase())
                );

            if (filters.sortOrder) {
                const [key, order] = filters.sortOrder.split('_');
                if ((key === 'price' || key === 'rating') && (order === 'asc' || order === 'desc')) {
                    filteredProducts.sort((a, b) => {
                        const comparison = key === 'price' ? a.price - b.price : a.rating - b.rating;
                        return order === 'asc' ? comparison : -comparison;
                    });
                }
            }

            resolve(filteredProducts);
        }, 500);
    });
}
