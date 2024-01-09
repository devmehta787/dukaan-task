import './Overview.css';
import arrow from '../img/arrow.svg';


function Overview() { 
    return (
        <div className='frame'>
            <div className='text-wrapper'>Overview</div>
            <div className='group-wrapper'>
                <div className='group'>
                    <div className='overlap-group'>
                        <div className='div'>Last Month</div>
                        <img className='icons-arrow' src={arrow} alt='arrow'/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Overview;

