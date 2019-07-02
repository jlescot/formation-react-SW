import React from 'react';

function Task(props) {
  return (
    <li onClick={props.handleToggleStatus} style={{ cursor: 'pointer', lineHeight: '30px' }}>
      {props.done ? 'DONE' : 'TODO'} - {props.name}
    </li>
  );
}

export default Task;
