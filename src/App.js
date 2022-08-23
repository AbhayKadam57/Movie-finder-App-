
import './App.css';
import { Search } from './Search';
import Pagination from './Pagination';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1>Movie App</h1>
      <Search/>
      <Pagination/>
      <Card/>
    </div>
  );
}

export default App;
