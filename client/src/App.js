
import './App.css';

// components
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" />
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
