import '../componentscss/App.css'
import Header from './Header';
import Movie from './Movie';
import data from '../data.json';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="main">
          {
            data.map((element, index) => {
              return (
                <Movie
                  key = {index}
                  title = {element.Title}
                  year = {element.Year}
                  poster = {element.Poster}
                />
              )
            })
          }
        </div>
    </div>
  );
}

export default App;
