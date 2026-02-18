import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="hero-overlay"></div>
            <div className="container">
                {/* Custom inner wrapper, no Bootstrap touched */}
                <div className="hero-inner">
                    <div className="hero-heading">
                        <h1>Quick and effective debt recovery solutions</h1>
                    </div>
                    <div className="hero-content">
                        <div className="">
                            <h4>No Collection • No Fee</h4>
                            <h4>20% Commission • No Upfront Charges</h4>
                            <p>Silver Moon Debt Collection is a Dubai-based debt recovery service helping businesses recover unpaid invoices quickly and professionally.</p>
                            <ul>
                                <li>Multilingual Agents: English • Arabic • Urdu</li>
                                <li>Professional & Discreet: Protect your reputation while we follow up</li>
                                <li>Transparent Pricing: Fixed 20% commission, only on successful recovery</li>
                            </ul>
                            <button className='banner-btn'>ENQUIRE NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
