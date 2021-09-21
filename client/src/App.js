import { Button } from './components';

function App() {
  const funsion = () => {
    alert('wena choro!');
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello World!</h1>
        <Button func={funsion} text={'wena'} />
      </header>
    </div>
  );
}

export default App;
