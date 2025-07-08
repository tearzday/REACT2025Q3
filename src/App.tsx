import Search from './components/search/Search';
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
      <Search />

      <Card info={cardInfo} />
    </div>
  );
}

export default App;
