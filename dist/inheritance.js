'use strict';

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function Task() {
    _classCallCheck(this, Task);

    console.log('Tasks creation');
};

var SubTask = function (_Task) {
    _inherits(SubTask, _Task);

    function SubTask() {
        _classCallCheck(this, SubTask);

        return _possibleConstructorReturn(this, (SubTask.__proto__ || Object.getPrototypeOf(SubTask)).apply(this, arguments));
    }

    return SubTask;
}(Task);

var task = new Task();
var subtask = new SubTask();

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask);
console.log(subtask instanceof Task);