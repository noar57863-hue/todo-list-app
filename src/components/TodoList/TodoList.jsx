import { useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    'ללמוד ריאקט',
    'להכין שיעורי בית',
    'לסדר את החדר',
    'לצאת להליכה',
    'לצאת להצביע בבחירות'
    
  ]);

  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();

    const trimmedInput = taskInput.trim();

    if (!trimmedInput) {
      alert('נא להקליד משימה');
      return;
    }

    if (tasks.includes(trimmedInput)) {
      alert('משימה זו כבר קיימת ברשימה');
      return;
    }

    setTasks([...tasks, trimmedInput]);
    setTaskInput('');
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleAddTask}>
        <input
          className="todo-input"
          type="text"
          placeholder="הקלד משימה חדשה..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="todo-button" type="submit">אישור</button>
      </form>

      <ul className="todo-list">
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>
    </div>
  );
}