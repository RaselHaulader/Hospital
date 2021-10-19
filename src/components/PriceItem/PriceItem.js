import React from 'react';
import './PriceItem.css';

const PriceItem = ({type, price}) => {
    return (
        <div className="col-12 col-md-4 p-4">
            <div className="rounded-3 price-container">
                <div className="text-center pb-2 price-section py-4 ">
                    <h3>{type}</h3>
                    <p>$<span>{price}</span><small>/Month</small></p>
                </div>
                <div className="text-center">
                    <div className="text-start px-3 text-secondary">
                        <li> Blood Test</li>
                        <li> Urine Test</li>
                        <li> Liver check</li>
                        <li> Lunch Test</li>
                        <li> MRI </li>
                        <li> CityScan</li>
                    </div>
                    <button className=" border-0 rounded-pill w-75  text-white  me-0 py-2 mt-5  my-4 price-btn">Buy Now <i className="fas ms-3 fa-angle-right"></i></button>
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