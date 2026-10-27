import './TodoItem.css';

export default function TodoItem({ task }) {
  return (
    <li className="todo-item">
      {task}
    </li>
  );
}