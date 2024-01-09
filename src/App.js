import './App.css';
import Body from './Body/Body';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Overview from './Overview/Overview';

function App() {
  return (
    <div className='payments-cashfree'>
      <div>
        <Navbar />
      </div>
      <div >
        <Header />
        <Overview/>
        <Body/>
      </div>
      
    </div>
  );
}

export default App;
