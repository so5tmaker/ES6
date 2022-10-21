// Function to return the count of
// elements which are not in
// the correct position when sorted
function cntElements(arr, n) {

    // To store a copy of the
    // original array
    // Copy the elements of the given
    // array to the new array
    let copy_arr = [...arr];

    // To store the required count
    let count = 0;

    // Sort the original array
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {

        // If current element was not
        // at the right position
        if (arr[i] != copy_arr[i]) {
            count++;
        }
    }
    return count;
}

// Driver code

let arr = [1, 2, 6, 2, 4, 5];
let n = arr.length;

console.log(cntElements(arr, n));