import React from 'react';
import './PriceItem.css';

const PriceItem = () => {
    return (
        <div className="col-12 col-md-4 p-4">
            <div className="border rounded-3">
                <div className="text-center pb-2 price-section py-4 ">
                    <h5>Basic</h5>
                    <p>$<span>57</span><small>/Month</small></p>
                </div>
                <div className="text-center">
                    <div className="text-start px-3 text-secondary">
                        <li> Blood Test</li>
                        <li> Urin Test</li>
                        <li> Liver check</li>
                        <li> Lunch Test</li>
                    </div>
                    <button className=" border-0 rounded-pill w-75 ps-5 text-white ms-3 me-0 py-2 mt-5 pe-1 my-4 price-btn">Buy Now <i className="fas ms-3 fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default PriceItem; <div>
    <div>

    </div>
    <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div></div>