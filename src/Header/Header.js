import './Header.css';
import question from '../img/question.svg';
import search from '../img/search.svg';
import message from '../img/message.svg';
import dropdown from '../img/dropdown.svg';


function Header() {
  return (
    <div className="dashboard-header">
      <div className="frame">
        <div className="dashboard-wrapper">
            <div className="dashboard">Payments</div>
        </div>
        <div className="how-to-use">
            <img className="outlined-help" src={question} alt='How to use' />
            <div className="text-wrapper">How it works</div>
        </div>
      </div>
      <div className="div">
        <img className="icons-search" src={search} alt='Search'/>
        <div className="text-wrapper-2">Search features, tutorials, etc.</div>
      </div>
      <div className="component-wrapper">
        <div className="component">
            <img className="icons-menu" src={message} alt='message'/>
            <img className="icons-menu" src={dropdown} alt='dropdown'/>
        </div>
      </div>
    </div>
  );
}

export default Header;