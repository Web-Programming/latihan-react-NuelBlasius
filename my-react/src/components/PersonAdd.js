import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: null,
    loading: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleImageChange = event => {
    this.setState({ avatar: event.target.files[0] });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });

    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email
    };

    const formData = new FormData();
    formData.append('first_name', user.first_name);
    formData.append('last_name', user.last_name);
    formData.append('email', user.email);
    if (this.state.avatar) {
      formData.append('avatar', this.state.avatar);
    }

    try {
      const res = await axios.post(`https://reqres.in/api/users`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res);
      console.log(res.data);
      this.setState({ firstName: '', lastName: '', email: '', avatar: null });
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
          </label>
          <label>
            Avatar:
            <input type="file" name="avatar" onChange={this.handleImageChange} />
          </label>
          <button type="submit" disabled={this.state.loading}>
            {this.state.loading ? 'Adding...' : 'Add User'}
          </button>
        </form>
      </div>
    );
  }
}
