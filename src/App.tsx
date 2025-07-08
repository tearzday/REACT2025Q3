import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';

function App() {
  return (
    <div className="app">
      <Input
        type="text"
        placeholder="placeholder"
        className="text"
        onChange={(event) => console.log(event.target.value)}
      ></Input>
      <Button onClick={() => console.log('click')}>Search</Button>
    </div>
  );
}

export default App;
