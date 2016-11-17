import React from 'react';
import ReactDom from 'react-dom';

// 创建第一个节点 讲解jsx语法， jsx中如何使用js语法
// var App = React.createClass({
//     render: function () {
//         var styles = {
//             width: 200,
//             height: 200,
//             background: 'red'
//         }
//         return (
//             <div style={styles}>
//                 <h1>Cst</h1>
//             </div>
//         )
//     }
// });

// ReactDom.render(
//     <App/>,
//     document.getElementById('root')
// );

// 动态添加属性 利用props
// var App = React.createClass({
//     render: function () {
//         var styles = {
//             width: 200,
//             height: 200,
//             background: 'red'
//         }
//         return (
//             <div style={styles}>
//                 <h1>{this.props.name}</h1>
//                 {this.props.dataList.map(function (ele, index) {
//                     return <li key={index}>{ele}</li>
//                 })}
//             </div>
//         )
//     }
// });

// var arrList = ['cst', 'jc', 'ld'];
// ReactDom.render(
//     <App name='duyi' dataList={arrList}/>,
//     document.getElementById('root')
// );

// 声明周期

// var App = React.createClass({
//     getDefaultProps: function() {
//         console.log('getDefaultProps');
//         return {
//             username: 'cst',
//             age: 18
//         };
//     },
//     getInitialState: function () {
//         console.log('getInitialState');
//         return {
//             show: true
//         }
//     },
//     componentWillMount: function () {
//         console.log('componetWillMount');
//         var self = this;
//         setTimeout(function () {
//             console.log(self)
//             self.setState({show: false})
//         }, 3000)
//     },
//     shouldComponentUpdate: function (a, b) {
//         console.log('shouldComponentUpdate');
//         // a: 将要改变的 props， b：将要改变的state
//         console.log(a, b)
//         // 返回false的时候 组件不会render   true的时候会render
//         return true;
//     },
//     componentWillUpdate: function () {
//         console.log('componentWillUpdate');
//     },
//     componentWillReceiveProps: function () {
//         console.log('componentWillReceiveProps');
//     },
//     componentWillUnmount: function() {
//         console.log('componentWillUnmount');
        
//     },
//     render: function () {
//         console.log('render');
//         var data = ['jc', 'cst', 'dg'];
//         return (
//             <div>
//                 <ul>
//                     {data.map(function (ele, index) {
//                         return <li key={index + 100}>{ele}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     },
// })

// ReactDom.render(
//     <App name='cst'/>,
//     document.getElementById('root')
// )
// // 移除组件
// ReactDom.unmountComponentAtNode(
//     <App/>,
//     document.getElementById('root')
// )






