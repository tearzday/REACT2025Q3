import Button from './components/UI/button/Button';
import Card from './components/UI/card/Card';
import Input from './components/UI/input/Input';

function App() {
  const cardInfo = {
    name: 'Card name',
    description: 'Card description',
    img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };
  return (
    <div className="app">
      <Input
        type="text"
        placeholder="placeholder"
        className="text"
        onChange={(event) => console.log(event.target.value)}
      ></Input>
      <Button onClick={() => console.log('click')}>Search</Button>

      <Card info={cardInfo} />
    </div>
  );
}

export default App;
