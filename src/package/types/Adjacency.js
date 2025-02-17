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
 * @file Adjacency type declaration.
 * @author James Reid
 */

// @ts-check

// @@no-imports

// @@body
/**
 * Object containing upper and lower cell indexes (sorted by size not position
 * on grid), and a unique identifier which identifies the adjacency from the
 * frame of the grid rather than the frame of the cell (i.e. for every unique
 * adjacency, two cells will point to it; the adjacency of cell 1 to cell 2 is
 * the same as the adjacency of cell 2 to cell 1, and must therefore not have
 * multiple identifiers).
 *
 * ---
 * **WARNING** The adjacency type should not be confused with the raw adjacent
 * indexes of an individual {@link GridCell}
 * ---
 *
 * @summary Object containing 2 adjacent cell indexes and a unique identifier
 * @typedef {object} Adjacency
 * @property {number} upperIndex - Higher of the two adjacency cell indexes
 * @property {number} lowerIndex - Lower of the two adjacency cell indexes
 * @property {number} id - Unique adjacency id in the number format "xxyy" where
 *      "xx" is the upper index, and "yy" is the lower index
 * @property {string} string
 */

// @@exports
/**
 * @ignore
 * @type {Adjacency}
 */
export let Adjacency
