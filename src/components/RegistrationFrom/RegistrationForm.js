// import React, { Component } from 'react';

// export default class RegistrationForm extends Component {
//   state = { name: '', email: '', password: '' };

//   onSubmit = e => {
//     e.preventDefault();
//   };

//   onChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   render() {
//     const { name, email, password } = this.state;
//     return (
//       <form onSubmit={this.onSubmit} action="">
//         <input
//           type="email"
//           value={email}
//           onChange={this.onChange}
//           name="email"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={this.onChange}
//           name="password"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={this.onChange}
//           name="password"
//         />
//         <input type="name" value={name} onChange={this.onChange} name="name" />
//         <button type="submit">Sign up</button>
//       </form>
//     );
//   }
// }
