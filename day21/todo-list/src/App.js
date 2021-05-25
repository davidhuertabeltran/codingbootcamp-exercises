import './App.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="App">
      <div>
            <TodoItem text="take out the trash"/>
            <TodoItem text="buy vegetables"/>
            <TodoItem text="pay the bills"/>
        </div>
    </div>
  );
}

export default App;
