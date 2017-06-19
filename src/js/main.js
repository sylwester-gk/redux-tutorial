import SimpleCounter from "./components/simpleCounter";
import TodoList from './components/todoList';
import React from "react";
import ReactDOM from "react-dom";
import testAll from './test/test'

testAll();

ReactDOM.render(<SimpleCounter />, document.getElementById('simple-counter'));
ReactDOM.render(<TodoList />, document.getElementById('todos'));
