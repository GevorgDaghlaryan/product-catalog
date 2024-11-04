import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '@/components/ProductList';

describe('ProductList Component', () => {
    test('renders DataNotFound component when no products are passed', () => {
        render(<ProductList products={[]} />);

        expect(screen.getByText(/no products found/i)).toBeInTheDocument();
    });
});
