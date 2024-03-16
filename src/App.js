import { React } from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css"
import { action, Originals } from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      {/* //or we can use isSmall={true} isSmall default is true so we dont do anything */}
    </div>
  );
}

export default App;
