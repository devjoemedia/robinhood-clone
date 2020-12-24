import './App.css';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import Stats from './components/Stats';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <Header />
      </header>
      <div className="app__body">
        <div className="app__container">
          <NewsFeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
