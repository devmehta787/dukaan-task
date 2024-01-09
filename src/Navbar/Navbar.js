import './Navbar.css';
import user from '../img/user.svg'
import chevron_down from '../img/chevron_down.svg'
import home from '../img/home.svg'
import order from '../img/order.svg'
import product from '../img/product.svg'
import delivery from '../img/delivery.svg'
import marketing from '../img/marketing.svg'
import analytics from '../img/analytics.svg'
import payments from '../img/payments.svg'
import tools from '../img/tools.svg'
import discounts from '../img/discount.svg'
import audience from '../img/audience.svg'
import appearance from '../img/appearance.svg'
import plugins from '../img/plugin.svg'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-payments">
                <div className="nav-top">
                    <div className="company-icon-image">
                        <div className="rectangle"></div>
                        <div className="frame">
                            <div className="text-wrapper-2">Nishyan</div>
                            <div className="text-wrapper-2">Visit store</div>
                        </div>
                        <img className="image" src={user} alt='user' />
                        <img className="img" src={chevron_down} alt='down'/>
                    </div>
                    
                    <div className="pages">
                        <div className="basenav-button-2">
                            <img className="img" src={home} alt='home' />
                            <div className="text-wrapper-2">Home</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={order} alt='order' />
                            <div className="text-wrapper-2">Orders</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={product} alt='product' />
                            <div className="text-wrapper-2">Products</div>
                        </div>
                            <div className="basenav-button-2">
                            <img className="img" src={delivery} alt='delivery' />
                        <div className="text-wrapper-2">Delivery</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={marketing} alt='marketing' />
                            <div className="text-wrapper-2">Marketing</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={analytics} alt='analytics' />
                            <div className="text-wrapper-2">Analytics</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={payments} alt='payments' />
                            <div className="text-wrapper-2">Payments</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={tools} alt='tools' />
                            <div className="text-wrapper-2">Tools</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={discounts} alt='discounts' />
                            <div className="text-wrapper-2">Discounts</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={audience} alt='audience' />
                            <div className="text-wrapper-2">Audience</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={appearance} alt='appearance' />
                            <div className="text-wrapper-2">Appearance</div>
                        </div>
                        <div className="basenav-button-2">
                            <img className="img" src={plugins} alt='plugins' />
                            <div className="text-wrapper-2">Plugins</div>
                        </div>
                    </div>
                </div>
                <div className="basenav-bottom">
                    <div className="frame-2">
                        <div className="outline-wallet-wrapper">
                            <div className="outline-wallet">
                                {/* <img className="wallet" src="img/wallet.svg" /> */}
                            </div>
                        </div>
                        <div className="frame-3">
                            <div className="text-wrapper-3">Available credits</div>
                            <div className="text-wrapper-4">222.10</div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;