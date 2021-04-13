import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import ListItem from './component/ListItem';

function App() {
  const numbers = [1,2,3,4,5,6,7,8,9]
  const clickListItem = () =>{
    alert('item click');
  }

  return (
    <div className="App">
      <Hello></Hello>
      {numbers.map((number) =>{
        return <ListItem number={number} handleClick={clickListItem}></ListItem>
      })}
    </div>
  );
}

export default App;
