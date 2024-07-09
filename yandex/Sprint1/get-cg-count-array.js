let sequence = "your_sequence_here"; // Replace with your actual sequence
let cumulative_sums = [0];
let cg_count = 0;

for (let position = 0; position < sequence.length; position++) {
    if (sequence[position] === 'C' || sequence[position] === 'G') {
        cg_count += 1;
    }
    cumulative_sums.push(cg_count);
}

// Define your left and right indices
let left = 0; // Replace with your actual left index
let right = 5; // Replace with your actual right index

console.log(cumulative_sums[right] - cumulative_sums[left]);