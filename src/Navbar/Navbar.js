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
        <div class="navbar">
            <div class="navbar-payments">
                <div class="nav-top">
                    <div class="company-icon-image">
                        <div class="rectangle"></div>
                        <div class="frame">
                            <div class="text-wrapper">Nishyan</div>
                            <div class="div">Visit store</div>
                        </div>
                        <img class="image" src={user} alt='user' />
                        <img class="img" src={chevron_down} alt='down'/>
                    </div>
                    
                    <div class="pages">
                        <div class="basenav-button-2">
                            <img class="img" src={home} alt='home' />
                            <div class="text-wrapper-2">Home</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={order} alt='order' />
                            <div class="text-wrapper-2">Orders</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={product} alt='product' />
                            <div class="text-wrapper-2">Products</div>
                        </div>
                            <div class="basenav-button-2">
                            <img class="img" src={delivery} alt='delivery' />
                        <div class="text-wrapper-2">Delivery</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={marketing} alt='marketing' />
                            <div class="text-wrapper-2">Marketing</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={analytics} alt='analytics' />
                            <div class="text-wrapper-2">Analytics</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={payments} alt='payments' />
                            <div class="text-wrapper-2">Payments</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={tools} alt='tools' />
                            <div class="text-wrapper-2">Tools</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={discounts} alt='discounts' />
                            <div class="text-wrapper-2">Discounts</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={audience} alt='audience' />
                            <div class="text-wrapper-2">Audience</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={appearance} alt='appearance' />
                            <div class="text-wrapper-2">Appearance</div>
                        </div>
                        <div class="basenav-button-2">
                            <img class="img" src={plugins} alt='plugins' />
                            <div class="text-wrapper-2">Plugins</div>
                        </div>
                    </div>
                </div>
                <div class="basenav-bottom">
                    <div class="frame-2">
                        <div class="outline-wallet-wrapper">
                            <div class="outline-wallet">
                                {/* <img class="wallet" src="img/wallet.svg" /> */}
                            </div>
                        </div>
                        <div class="frame-3">
                            <div class="text-wrapper-3">Available credits</div>
                            <div class="text-wrapper-4">222.10</div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Navbar;