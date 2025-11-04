"use client";

import { Todo } from "../models/todo";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}

export default function ClientTodoItem({ todo, onToggle }: Props) {
  return (
    <li className="flex items-center space-x-4 p-3 border rounded shadow-sm bg-gray-50">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5"
      />
      <span className={todo.completed ? "line-through text-gray-500" : ""}>
        {todo.title}
      </span>
    </li>
  );
}
