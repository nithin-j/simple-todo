import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      borderBottom: '2px #ccc solid',
      padding: '10px',
      margin: '5px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };
  checkmark = (e) => {};

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.checkmark.bind(this, id)}
          />{' '}
          {title}
          <button
            onClick={this.props.deleteToDo.bind(this, id)}
            style={btnDeleteStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

const btnDeleteStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 9px',
  float: 'right',
};
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
