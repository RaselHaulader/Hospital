import React from 'react';
import PriceItem from '../PriceItem/PriceItem';
import './ChoosePrice.css';

const ChoosePrice = () => {
    return (
        <div className="my-5 py-5" >
            <div>
                <div className="pricing-Heading text-center">
                    <h1 className="my-5">Choose Pricing Plan</h1>
                    <p className="text-secondary w-50 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam delectus ducimus quos eveniet. Neque eveniet, vel ut quod iure quam.</p>
                </div>
                <div className="row container mx-auto">
                  <PriceItem></PriceItem>
                  <PriceItem></PriceItem>
                  <PriceItem></PriceItem>
                </div>
            </div>
        </div>
    );
};

export default ChoosePrice;