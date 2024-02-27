const { LinkedList } = require('./12_linked_list_youtube');

const init = () => {
    list = new LinkedList();

    list.append('a')
        .append('b')
        .append('c')
        .append('d');

    return list;
}

describe('Linked List', () => {
    test('Append', () => {
        let list = init();

        expect(list.append('x').toString()).toBe('a,b,c,d,x');
    })

})