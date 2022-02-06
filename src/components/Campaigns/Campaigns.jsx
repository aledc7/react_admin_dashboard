import React from 'react';
import './campaigns.css';
import { ArrowDownward, ArrowUpward, } from '@mui/icons-material';

function Campaigns() {
    return (
        <div className='campaigns'>
            <div className="campItem">
                <span className="campTitle"> Revanue </span>
                <div className="campcontainer">
                    <span className="campMoney">$18.560.300</span>
                    <span className="campMoneyRate">
                        - 11.4 <ArrowDownward className='arrows negative'/> 
                    </span>
                </div>
                <span className="compSubt">Compare to las month</span>
            </div>
            <div className="campItem">
                <span className="campTitle"> Sales </span>
                <div className="campcontainer">
                    <span className="campMoney">$12.760.300</span>
                    <span className="campMoneyRate"> 
                        - 1.4 <ArrowDownward  className='arrows negative'/> 
                    </span>
                </div>
                <span className="compSubt">Compare to las month</span>
            </div>
            <div className="campItem">
                <span className="campTitle"> Cost </span>
                <div className="campcontainer">
                    <span className="campMoney">$15.360.300</span>
                    <span className="campMoneyRate"> 
                        2.4 <ArrowUpward className='arrows' /> 
                    </span>
                </div>
                <span className="compSubt">Compare to las month</span>
            </div>
        </div>

        

    )
}



export { Campaigns };
