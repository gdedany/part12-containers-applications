import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import React from "react";

const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  console.log(todo);
  const doneInfo = (
    <>
      <span>This todo is done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
      </span>
    </>
  );

  const notDoneInfo = (
    <>
      <span>This todo is not done</span>
      <span>
        <button onClick={onClickDelete(todo)}> Delete </button>
        <button onClick={onClickComplete(todo)}> Set as done </button>
      </span>
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <span>{todo && todo.text}</span>
      {todo && todo.done ? doneInfo : notDoneInfo}
    </div>
  );
};
Todo.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onClickComplete: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
export default Todo;
