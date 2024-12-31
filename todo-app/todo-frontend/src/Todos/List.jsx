import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };

  return (
    <>
      {todos
        .map((todo) => {
          return (
            <Todo
              key={todo._id}
              todo={todo}
              onClickComplete={onClickComplete}
              onClickDelete={onClickDelete}
            />
          );
        })
        .reduce((acc, cur, i) => [...acc, <hr key={i} />, cur], [])}
    </>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
};
