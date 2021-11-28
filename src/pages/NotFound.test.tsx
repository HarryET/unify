import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFoundPage } from './NotFound';

test('Renders without crashing', () => {
    render(<NotFoundPage />);
});

test('Has correct text', () => {
    render(<NotFoundPage />);
    const message = screen.getByText(/Page not found/i);
    expect(message).toBeInTheDocument();
    const code = screen.getByText(/404/i);
    expect(code).toBeInTheDocument();
});
