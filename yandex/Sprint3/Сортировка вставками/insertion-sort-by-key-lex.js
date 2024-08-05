// На этот раз карточка считается лучше, если на ней написано более короткое слово. 
// А если слова одинаковой длины — побеждает та карточка, на которой число больше.
// Теперь карточка «два» лучше, чем карточка «семь», но «три» лучше, чем «два».
// https://practicum.yandex.ru/learn/algorithms/courses/64238f3a-611a-4618-a86d-adf78b1990f3/sprints/275303/topics/6f583b01-7370-422a-ba94-71203f6e0c27/lessons/8b05a3ca-cec8-414d-86f0-f62d0220c01d/

let digit_lengths = [4, 4, 3, 3, 6, 4, 5, 4, 6, 6]; // длины слов «ноль», «один»,...

function key_for_card(card) {
    return [-digit_lengths[card], card];
}

let cards = [2, 3, 7];
cards.sort((a, b) => key_for_card(a) < key_for_card(b) ? -1 : 1);
console.log(cards);