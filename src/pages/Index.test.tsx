import React from 'react';
import { render, screen } from '@testing-library/react';
import { IndexPage } from './Index';

test('Renders without crashing', () => {
    render(<IndexPage />);
});
