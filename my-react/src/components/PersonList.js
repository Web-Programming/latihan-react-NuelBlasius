import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
    loading: true
  }

  componentDidMount() {
    axios.get(`https://reqres.in/api/users`)
      .then(res => {
        const persons = res.data.data;
        this.setState({ persons, loading: false });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <ul>
        {this.state.persons.map(person => (
          <li key={person.id} style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={person.avatar} 
              alt={`${person.first_name} ${person.last_name}`} 
              style={{ width: 50, height: 50, borderRadius: '50%', marginRight: 10 }} 
            />
            <span>
              {person.first_name} {person.last_name} - {person.email}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
