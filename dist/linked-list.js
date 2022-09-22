"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10                                             
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null
//                 }
//             }
//         }
//     }
// }
// };

var ListNode = function ListNode(data) {
    _classCallCheck(this, ListNode);

    this.data = data;
    this.next = null;
};

var LinkedList = function () {
    function LinkedList() {
        var head = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        _classCallCheck(this, LinkedList);

        this.head = head;
    }

    _createClass(LinkedList, [{
        key: "size",
        value: function size() {
            var count = 0;
            var node = this.head;
            while (node) {
                count++;
                node = node.next;
            }
            return count;
        }
    }, {
        key: "clear",
        value: function clear() {
            this.head = null;
        }
    }, {
        key: "getLast",
        value: function getLast() {
            var lastNode = this.head;
            if (lastNode) {
                while (lastNode.next) {
                    lastNode = lastNode.next;
                }
            }
            return lastNode;
        }
    }, {
        key: "getFirst",
        value: function getFirst() {
            return this.head;
        }
    }]);

    return LinkedList;
}();

var node1 = new ListNode(2);
var node2 = new ListNode(5);
node1.next = node2;

var list = new LinkedList(node1);

console.log(list.size());