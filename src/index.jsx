import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { hello } from './hello.ts';

console.log(hello('finch', 'wuhan'));

const Index = () => {
  return <div>Hello React</div>;
};

ReactDOM.render(<Index />, document.getElementById('root'));
