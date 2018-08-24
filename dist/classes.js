'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
    function Task() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _classCallCheck(this, Task);

        this.title = title;
        this.done = false;
        console.log('The task is creating...');
    }

    _createClass(Task, [{
        key: 'complete',
        value: function complete() {
            this.done = true;
            console.log('The task "' + this.title + '" was completed.');
        }
    }]);

    return Task;
}();

;

var task = new Task('To clean a room');
var task2 = new Task('To buy food');

console.log(task.title);
console.log(task2.title);

task2.complete();
// console.log(typeof task);
// console.log(task instanceof Task);