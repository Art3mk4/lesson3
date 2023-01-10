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

describe('Grid component', () => {
	it('should change grid component', async () => {
		const { container } = render(<App />);
		const grid = screen.getAllByTestId('grid-test-id');
		expect(grid).toHaveLength(1);

		const divElement0 = screen.getAllByTestId('grid-test-cell-0-0');
		await userEvent.click(divElement0[0]);
		const divClicked0 = container.getElementsByClassName('grid-test-cell-0-0');
		expect(divClicked0.length).toBe(1);

		const divElement5 = screen.getAllByTestId('grid-test-cell-5-5');
		await userEvent.click(divElement5[0]);
		const divClicked5 = container.getElementsByClassName('grid-test-cell-5-5');
		expect(divClicked5.length).toBe(1);
	});
});
