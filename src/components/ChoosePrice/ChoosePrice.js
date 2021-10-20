import React from 'react';
import PriceItem from '../PriceItem/PriceItem';
import './ChoosePrice.css';

const ChoosePrice = () => {
    return (
        <div id="prices" className="my-5 py-5" >
            <div data-aos="fade-down"   data-aos-once="false"  data-aos-duration="1500">
                <div className="pricing-Heading text-center">
                    <h1 className="my-5">Choose Pricing Plan</h1>
                    <p className="text-secondary w-50 mx-auto">If you are covered by one of these insurances, you are responsible for paying the co-pays and deductibles at the time of service. </p>
                </div>
                <div className="row container mx-auto">
                  <PriceItem price='57' type='Basic'></PriceItem>
                  <PriceItem price='77' type='Standard'></PriceItem>
                  <PriceItem price='97' type='Prime'></PriceItem>
                </div>
            </div>
        </div>
    );
};

export default ChoosePrice;