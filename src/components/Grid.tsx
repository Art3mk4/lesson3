import React, {useCallback, useMemo, MouseEventHandler, MouseEvent} from 'react'
import './Grid.css'

const cellSize = 30 // In pixels
const cellColors = ['ffffff', '7ed957'] // In hexadecimal

function Grid(props) {
	const getCellColor = (cell) => {
		if (cell > 9) cell = 9
		return `#${cellColors[cell]}`
	}

  const handleClick = useCallback((e:MouseEventHandler<HTMLDivElement>) => {
    event.target.classList.add(event.target.getAttribute('data-testid'))
    e.preventDefault()
  })

  const drowRow = useMemo(() => {
    const handleMouseDown = (event: MouseEvent<HTMLDivElement>, i, j) => props.onCell(event, i, j)
    const handleMouseOver = (event: MouseEvent<HTMLDivElement>, i, j) =>  props.onCell(event, i, j)
    return props.grid.map((row, i) =>
           				row.map((cell, j) => (
           					<div
           						data-testid={`grid-test-cell-${i}-${j}`}
           						key={`${i}-${j}`}
           						onMouseDown={(event) => handleMouseDown(event, i, j)}
           						onMouseOver={(event) => handleMouseOver(event, i, j)}
           						onClick={handleClick}
           						style={{
           							width: cellSize,
           							height: cellSize,
           							// Set color based on cell iteration
           							backgroundColor: getCellColor(cell),
           						}}
           					/>
           				))
           			)
  })

    return (<div className="grid"
                data-testid="grid-test-id"
                style={{gridTemplateColumns: `repeat(${props.numCols}, ${cellSize}px)`}}>
                {drowRow}
            </div>)
}

export default Grid;