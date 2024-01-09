import './App.css';
import Body from './Body/Body';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className='payments-cashfree'>
      <div>
        <Navbar />
      </div>
      <div >
        <Header />
        <Body/>
      </div>
      
    </div>
  );
}

export default App;
