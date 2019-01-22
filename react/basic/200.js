//  https://juejin.im/post/5c0c7304f265da613e22106c

// Component（组件

// 类组件（class component）或者函数式组件
// Component
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// // PureComponent
// class Welcome extends React.PureComponent {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// // functional component
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// element
// 描述dom节点
// {
//     type: 'button',
//         props: {
//         className: 'button button-blue',
//             children: {
//             type: 'b',
//                 props: {
//                 children: 'OK!'
//             }
//         }
//     }
// }

// 虚拟dom与diff算法
//  element只是dom节点或者组件实例的一种纯对象描述而已
//

