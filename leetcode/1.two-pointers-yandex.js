function maxConsecutiveElements(inputStr) {
    let result = 0;
    let curLetterIdx = 0;
    while (curLetterIdx < inputStr.length) {
        let nextLetterIdx = curLetterIdx;
        while (nextLetterIdx < inputStr.length && inputStr[nextLetterIdx] == inputStr[curLetterIdx]) {
            nextLetterIdx++;
        }
        result = Math.max(result, nextLetterIdx - curLetterIdx);
        curLetterIdx = nextLetterIdx;
    }
    return result;
}

console.log(maxConsecutiveElements('success'));

function get_next_dif_letter_idx(input_str, cur_letter_idx) {
    let next_letter_idx = cur_letter_idx;
    while (next_letter_idx < input_str.length &&
        input_str[next_letter_idx] === input_str[cur_letter_idx]) {
        next_letter_idx++;
    }
    return next_letter_idx;
}

function max_consecutive_elements(input_str) {
    let result = 0;
    let cur_letter_idx = 0;
    while (cur_letter_idx < input_str.length) {
        let next_letter_idx = get_next_dif_letter_idx(input_str, cur_letter_idx);
        result = Math.max(result, next_letter_idx - cur_letter_idx);
        cur_letter_idx = next_letter_idx;
    }
    return result;
}





