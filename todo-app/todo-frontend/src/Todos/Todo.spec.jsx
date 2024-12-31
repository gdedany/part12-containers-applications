/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";

import Todo from "./Todo";
import "@testing-library/jest-dom";
import React from "react";

test("renders a todo", () => {
  const dummyTodo = {
    _id: "1",
    text: "Learn React Testing",
    done: false,
  };

  const mockOnClickComplete = jest.fn();
  const mockOnClickDelete = jest.fn();

  render(
    <Todo
      todo={dummyTodo}
      onClickComplete={mockOnClickComplete}
      onClickDelete={mockOnClickDelete}
    />
  );
  expect(screen.getByText("Learn React Testing")).toBeInTheDocument();
});
