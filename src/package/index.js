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
 * @file Package entrypoint.
 * @author James Reid
 */

// @ts-check

// @@no-imports

// @@body
/**
 * Please find general todo tasks for repository in the comment block below:
 *
 * @todo resolve progress queue to prevent the -1 case from causing generate
 * @todo change random "shuffle" to "permute"
 * @todo cause grid solve to fail if number of grids is too large and or prevent
 *      random dropout on adj pruning from being too high
 * @todo iteratively increase random dropout to target dropout, solving each
 *      time to prevent an impossible solve (?)
 * @todo move cell and grid adj files to another dir - name ?
 * @todo refactor print to generate module and update to display clearer
 * @todo refactor getAdjacencyData to just getAdjacency
 * @todo resolve gridEqual function in ./impostori/generate/grid
 * @todo move print function out of ./impostori/grid dir
 * @todo update types of all functions etc. to ensure no any type, and return
 *      types are set where required.
 * @todo refactor cli manager and widget methods to return void rather than bool
 * @todo refactor "create" and "delete" widget to "register" and "unregister" in
 *      cli widget manager
 * @todo re-add hash to BitBuffer, or alternatively add version check to
 *      deserializing process
 * @todo fix circular dependency warnings when building
 * @todo refactor Resource to not use __ prefix
 * @todo refactor IDs to Ids
 * @todo implement QR code generation with the api below, or use a suitable
 *      npm package (https://www.qrcode-monkey.com/qr-code-api-with-logo/)
 * @todo move twin and prune into adjacency folder
 * @todo add grading documentation (see personal google drive for google sheets
 *      on distribution fitting)
 */

// @@exports
export * from "./impostori/index.js"
