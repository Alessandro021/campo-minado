function createBoard(rows, columns){
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row: row,
                column: column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

function spreadMines(board, minesAmount){
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while(minesPlanted < minesAmount){
        const rowSel = parseInt(Math.random() * rows, 10)
        const columnSel = parseInt(Math.random() * columns, 10)

        if(!board[rowSel][columnSel].mined){
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}

export function createMineBoard(rows, columns, minesAmount){
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export function cloneBoard(board){
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

function getNeighbors(board, row, column){
    const neighbors = []
    const rows = [row -1, row, row + 1]
    const columns = [column -1, column, column +1]

    rows.forEach( r => {
        columns.forEach(c => {
            const different = r !== row || c !== column;
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if(different && validRow && validColumn){
                neighbors.push(board[r][c])
            }
        })
    })

    return neighbors
}

function safeNeighborhood(board, row, column){
    return getNeighbors(board, row, column).every(({ mined }) => !mined)
}

export function openField(board, row, column){
    const field = board[row][column]
    if(!field.opened){
        field.opened = true
        if(field.mined){
            field.exploded = true
        } else if(safeNeighborhood(board, row, column)){
            getNeighbors(board, row, column).forEach(n => 
                openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

function fields(board){
    return board.concat(...board)
}

export function hadExplosion(board){
    return fields(board).filter(field => field.exploded).length > 0
}

function pendding(field){
    return ((field.mined && !field.flagged) || (!field.mined && !field.flagged))
}

export function wonGame(board){
    return fields(board).filter(pendding).length === 0
}

export function showMines(board){
    return fields(board).filter(field => field.mined)
    .forEach(field => field.opened = true)
}

export function invertFlag(board, row, column){
    const field = board[row][column]
    field.flagged = !field.flagged
}

export function flagsUsed(board){
    return fields(board).filter(field => field.flagged).length
}