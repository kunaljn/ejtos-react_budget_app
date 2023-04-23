import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { currency } = useContext(AppContext);

    const [selectedValue, setSelectedValue] = useState(currency);
    
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    
    return (
        <button className='alert' style={{background: "lightgreen"}}>
          <span>Currency : 
              <select style={{ border: "None", background: "lightgreen" }} defaultvalue={selectedValue} onChange={handleSelectChange}>
                <option value="£">(£ Pound) </option>
                <option value="$">($ Dollar) </option>
                <option value="€">(€ Euro) </option>
                <option value="₹">(₹ Rupee) </option>
            </select>
            </span>
        </button>
      );
    }
    
    // return (
    //     <div className='alert alert-success'>
    //         <span>Currency: £
    //             {
    //             <dropdown
    //             required='required'
    //             type='number'
    //             min="960"
    //             max="20000"
    //             value={Budget}
    //             id='cost'
    //             style={{ marginLeft: '1rem' , size: 10}}
    //             onChange={(event) => setBudget(event.target.value)}>
    //             </dropdown>
    //             }
    //         </span>
    //     </div>
    // );

export default ChangeCurrency;