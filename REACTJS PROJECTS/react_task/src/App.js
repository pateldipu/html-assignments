// import logo from './logo.svg';
import './App.css';
import Dropdown from './component/Dropdown'

const options = [
  { label: 'Item 1', value: 'item1' },
  { label: 'Item 2', value: 'item2' },
  // Add more items here
];
function App() {
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
