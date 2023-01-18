import React, { useCallback } from 'react'
import { produce } from 'immer'
import Grid from './components/Grid'

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
const resolution = 33
const numRows = Math.floor(windowHeight / resolution)
const numCols = Math.floor(windowWidth / resolution)

const getEmptyGrid = () => {
	return Array.from({ length: numRows }).map(() =>
		Array.from({ length: numCols }).fill(0)
	)
}

export const App: React.FC<{}> = () => {

	const [grid, setGrid] = React.useState(getEmptyGrid)

	const onCell = useCallback((event, i, j) => {
        if (event.buttons === 1)
            // Primary button pressed
            // Toggle cell status
            setGrid(
                produce(grid, (gridCopy) => {
                    gridCopy[i][j] = grid[i][j] ? 0 : 1
                })
            )
    })

	return (
		<div data-testid="app-test-id">
			<Grid numCols={numCols} grid={grid} onCell={onCell} />
		</div>
	)
}

export default App