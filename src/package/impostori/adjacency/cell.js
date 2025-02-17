// Copyright (c) 2024 James Reid. All rights reserved.
//
// This source code file is licensed under the terms of the MIT license, a copy
// of which may be found in the LICENSE.md file in the root of this repository.
//
// For a template copy of the license see one of the following 3rd party sites:
//      - <https://opensource.org/licenses/MIT>
//      - <https://choosealicense.com/licenses/mit>
//      - <https://spdx.org/licenses/MIT>

/**
 * @file Exports functions to manage cell adjacencies, functions to get row,
 *      column, or box of a given cell index, and function returning adjacent
 *      indexes of a given cell index.
 * @author James Reid
 */

// @ts-check

// @@imports-types
/* eslint-disable no-unused-vars -- Types only used in comments. */
import { GridCell, CellType } from "../../types/index.js"
/* eslint-enable no-unused-vars -- Close disable-enable pair. */

// @@body
/**
 *
 * @param {GridCell} cell
 * @param {GridCell} targetCell
 * @returns {GridCell}
 */
const removeCellAdjacency = (cell, targetCell) => {
    const targetIndex = targetCell.index

    const optionalIndex = cell.adjacentIndexes.optional.indexOf(targetIndex)
    const allIndex = cell.adjacentIndexes.all.indexOf(targetIndex)
    if (optionalIndex === - 1 || allIndex === - 1) { return cell }

    const all = [...cell.adjacentIndexes.all]
    all.splice(allIndex, 1)

    const optional = [...cell.adjacentIndexes.optional]
    optional.splice(optionalIndex, 1)

    const type = { ...cell.adjacentIndexes.type }
    const key = /** @type {CellType} */ (targetCell.type.toLowerCase())
    type[key] = [...type[key]]
    type[key].splice(type[key].indexOf(targetIndex), 1)

    const adjacentIndexes = { ...cell.adjacentIndexes, all, optional, type }
    return { ...cell, adjacentIndexes }
}

/**
 *
 * @param {GridCell} cell
 * @param {GridCell} targetCell
 * @returns {GridCell}
 */
const addCellAdjacency = (cell, targetCell) => {
    const targetIndex = targetCell.index
    if (cell.adjacentIndexes.all.includes(targetIndex)) { return cell }

    const all = [...cell.adjacentIndexes.all, targetIndex]
    const optional = [...cell.adjacentIndexes.optional, targetIndex]

    const type = { ...cell.adjacentIndexes.type }
    const key = /** @type {CellType} */ (targetCell.type.toLowerCase())
    type[key] = [...type[key], targetIndex]

    const adjacentIndexes = { ...cell.adjacentIndexes, all, optional, type }
    return { ...cell, adjacentIndexes }
}

/**
 *
 * @param {GridCell} cell
 * @param {GridCell} targetCell
 * @returns {GridCell}
 */
const requireCellAdjacency = (cell, targetCell) => {
    const targetIndex = targetCell.index

    const optionalIndex = cell.adjacentIndexes.optional.indexOf(targetIndex)
    if (optionalIndex === - 1) { return cell }

    const required = [...cell.adjacentIndexes.required]
    required.push(targetIndex)

    const optional = [...cell.adjacentIndexes.optional]
    optional.splice(optionalIndex, 1)

    const adjacentIndexes = { ...cell.adjacentIndexes, required, optional }
    return { ...cell, adjacentIndexes }
}

/**
 * Calculates indexes of all possible orthogonally adjacent hex cells given the
 * index of a center hex cell. Each cell may have up to 6 orthogonally adjacent
 * cells - all indexes out of range (0 to 35) for the grid are omitted, and
 * wrap around indexes are obviously also omitted, as these cells are not
 * adjacent to each other on the grid.
 *
 * Wrap around indexes indexes on the opposite side of the grid when the
 * provided central index is in the leftmost or rightmost column.
 *
 * @param {number} index
 * @returns {number[]}
 */
const getAdjacentIndexes = index => {
    // offset array representing the index offsets from a central hex cell to
    // each of the 6 orthogonally adjacent hex cells
    return [- 6, - 5, - 1, 1, 5, 6].flatMap(offset => {
        const adjacentIndex = index + offset
        const columnOffset = Math.abs(adjacentIndex % 6 - index % 6)
        // omit index if it is out of range for the grid, or if it is a
        // wraparound index to a column on the other side of the grid
        return adjacentIndex > 35 || adjacentIndex < 0 || columnOffset > 1 ? []
            : [adjacentIndex]
    })
}

/**
 *
 * @param {*} index
 * @returns {number}
 */
const getRow = index => {
    return Math.floor(index / 6)
}

/**
 *
 * @param {*} index
 * @returns {number}
 */
const getColumn = index => {
    return index % 6
}

/**
 *
 * @param {*} index
 * @returns {number}
 */
const getBox = index => {
    const row = getRow(index)
    const column = getColumn(index)
    return Math.floor(row / 2) * 2 + Math.floor(column / 3)
}

// @@exports
export {
    removeCellAdjacency,
    addCellAdjacency,
    requireCellAdjacency,
    getAdjacentIndexes,
    getRow,
    getColumn,
    getBox
}
