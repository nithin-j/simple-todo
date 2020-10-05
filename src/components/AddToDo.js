import React, { Component } from 'react';

export class AddToDo extends Component {
  state = {
    title: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: '' });
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          id=''
          value={this.state.title}
          onChange={this.onChange}
          style={{ flex: '10', padding: '5px', margin: '5px 1% 5px 10%' }}
          placeholder='Add ToDo......'
        />
        <input
          type='submit'
          value='Insert'
          className='btn'
          style={{ flex: '1', margin: '5px 10% 5px 1%' }}
        />
      </form>
    );
  }
}

export default AddToDo;
