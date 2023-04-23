import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [ Budget, setBudget] = useState(budget)

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                {
                <input
                required='required'
                type='number'
                min="960"
                max="20000"
                value={Budget}
                id='cost'
                style={{ marginLeft: '1rem' , size: 10}}
                onChange={(event) => setBudget(event.target.value)}>
                </input>
                }
            </span>
        </div>
    );
};
export default Budget;