import React from 'react';
import ReactDom from 'react-dom';

// 创建第一个节点 讲解jsx语法， jsx中如何使用js语法 style className
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

// 动态添加属性 利用props 只读不能扩展 
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

 



// state 声明周期

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
//             show: true,
//             name: 'cst'
//         }
//     },
//     componentWillMount: function () {
//         console.log('componetWillMount');
//         var self = this;
//         setTimeout(function () {
//             console.log(self)
//             self.setState({show: false, name: 'jc'})
//         }, 3000)
//     },
//     shouldComponentUpdate: function (a, b) {
//         console.log('shouldComponentUpdate');
//         // props只读不能扩展
//         // this.props.name = 'lalalala';
//         // console.log(this.props.name);
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
//                 <h1>{this.props.name}</h1>
//                 <h2>{this.state.name}</h2>
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
// );
// // 移除组件
// ReactDom.unmountComponentAtNode(
//     <App/>,
//     document.getElementById('root')
// )




// refs this

// var App = React.createClass({
//     getInitialState: function () {
//         return {
//             value: 'cst'
//         }
//     },
//     onHandleChange: function () {
//         this.setState({value:this.refs.inp.value});
//     },
//     render: function () {
//         return (
//             <div>
//                 <input type='text' value={this.state.value} ref='inp' onChange={this.onHandleChange}/>
//                 <span>{this.state.value}</span>
//             </div>
//         )
//     }
// })


// ReactDom.render(<App/>, document.getElementById('root'));


// //规定传输数据的类型
// // Cst.propTypes = {
// //     arr: React.PropTypes.object
// // }
// // Cst组件接受外部数据 arr = {arr1}等形式  

// var App = React.createClass({
//     render: function () {
//         return (
//             <div>            
//                 <Cst arr={arr} />
//                 <Cst arr={arr2} />
//             </div>
//         )
//     }
// })

// Mask

// var Mask = React.createClass({
//     render: function () {
//         var styles = {
//             position: 'absolute',
//             left: 0,
//             right: 0,
//             bottom: 0,
//             top: 0,
//             background: 'black',
//             opacity: 0.5
//         }
//         return (
//             <div style={styles}>
//                 {this.props.children}
//             </div>
//         )   
//     }
// });

// var Dialog = React.createClass({
//     render: function () {
//         var styles = {
//             position: 'absolute',
//             width: '100%',
//             height: 200,
//             background: 'orange',
//             fontSize: 20,
//             lineHeight: 200,
//             textAlign: 'center',
//             color: 'white'
//         }
//         if (this.props.show) {
//             styles.display = 'block';
//         }else {
//             styles.display = 'none';
//         }
//         return (
//             <div onClick={this.props.onClick}>
//                 <Mask>
//                     <div style={styles}>{this.props.name}</div>
//                 </Mask>
//             </div>
//         )
//     }
// });
// var App = React.createClass({
//     getInitialState: function () {
//         return {
//             show: true,
//         }
//     },
//     onHandleClick: function () {
//         this.setState({show: false});
//     },
//     render: function () {
//         return (
//             <div>
//                 <Dialog name={this.props.name} show={this.state.show} onClick={this.onHandleClick}/>
//             </div>
//         )
//     }
// }) 
// ReactDom.render(<App name='cst'/>, document.getElementById('root'));