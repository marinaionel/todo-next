"use client";

import { useState } from "react";
import ClientTodoItem from "./ClientTodoItem";
import { Todo } from "../models/todo";

export default function ClientTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const refreshTodos = async () => {
    const res = await fetch("/api/todos");
    if (!res.ok) return;
    const newTodos: Todo[] = await res.json();
    setTodos(newTodos);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500">
          No todos loaded yet. Click refresh to fetch.
        </p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <ClientTodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
          ))}
        </ul>
      )}

      <button
        onClick={refreshTodos}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refresh Todos
      </button>
    </div>
  );
}
