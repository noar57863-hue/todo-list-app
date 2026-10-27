import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">ניהול משימות</h1>
      <TodoList />
    </div>
  );
}

export default App;