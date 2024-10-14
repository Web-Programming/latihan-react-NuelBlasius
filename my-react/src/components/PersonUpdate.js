import React from 'react';
import axios from 'axios';

export default class PersonUpdate extends React.Component {
  state = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    loading: false,
    error: null,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });

    const { id, firstName, lastName, email } = this.state;

    try {
      const response = await axios.put(`https://reqres.in/api/users/${id}`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
      });
      console.log('User updated:', response.data);
      this.setState({ id: '', firstName: '', lastName: '', email: '' });
    } catch (error) {
      const errorMsg = error.response ? error.response.data : error.message;
      this.setState({ error: errorMsg });
      console.error('Error updating user:', errorMsg);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { loading, error, firstName, lastName, email, id } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} value={id} required />
          </label>
          <label>
            First Name:
            <input type="text" name="firstName" onChange={this.handleChange} value={firstName} required />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" onChange={this.handleChange} value={lastName} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChange} value={email} required />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update User'}
          </button>
        </form>
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
      </div>
    );
  }
}
