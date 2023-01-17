import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { Grid } from './components/Grid';

describe('App component', () => {
	it('should renders app component', () => {
		render(<App />);
		const app = screen.getAllByTestId('app-test-id');
		expect(app).toHaveLength(1);
		const grid = screen.getAllByTestId('grid-test-id');
		expect(grid).toHaveLength(1);
	});
});