import React from 'react';
import API from '../api';

export default class PersonRemove extends React.Component {
  state = {
    id: '',
    loading: false
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });

    try {
      const response = await API.delete(`/${this.state.id}`);
      console.log('User deleted:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error deleting user:', error.response.data);
      } else {
        console.error('Error deleting user:', error.message);
      }
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    let buttonText = 'Delete';
    if (this.state.loading) {
      buttonText = 'Deleting...';
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit" disabled={this.state.loading}>
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}
