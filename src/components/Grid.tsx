import React from 'react';
import './Grid.css';

const cellSize = 30; // In pixels
const cellColors = ['ffffff', '7ed957']; // In hexadecimal

function Grid(props) {
	const getCellColor = (cell) => {
		if (cell > 9) cell = 9;
		return `#${cellColors[cell]}`;
	};

	const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
		event.target.classList.add(event.target.getAttribute('data-testid'));
		e.preventDefault();
	};

	return (
		<div
			className="grid"
			data-testid="grid-test-id"
			style={{
				gridTemplateColumns: `repeat(${props.numCols}, ${cellSize}px)`,
			}}
		>
			{props.grid.map((row, i) =>
				row.map((cell, j) => (
					<div
						data-testid={`grid-test-cell-${i}-${j}`}
						key={`${i}-${j}`}
						onMouseDown={(event) => props.onCell(event, i, j)}
						onMouseOver={(event) => props.onCell(event, i, j)}
						onClick={handleClick}
						style={{
							width: cellSize,
							height: cellSize,
							// Set color based on cell iteration
							backgroundColor: getCellColor(cell),
						}}
					/>
				))
			)}
		</div>
	);
}

export default Grid;
