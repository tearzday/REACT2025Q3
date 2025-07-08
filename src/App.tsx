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
    </div>
  );
}

export default App;
