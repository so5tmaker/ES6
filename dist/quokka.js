"use strict";

/* We've started Quokka for you automatically on this file.
 *
 * To open a new Quokka file:
 *   - Press `⌘ K, J` to create a new JavaScript File
 *   - Press `⌘ K, T` to create a new TypeScript File
 *   - Press `⌘ K, L` to open an interactive sample from:
 *     https://github.com/wallabyjs/interactive-examples
 *
 * To start/restart Quokka on an existing file:
 *   - Press `⌘ K, Q`
*/
function find_average(array) {
  return array.reduce(function (i, prev) {
    return i + prev;
  }, 0) / (array.length === 0 ? 1 : array.length);
}

console.log(find_average([]));