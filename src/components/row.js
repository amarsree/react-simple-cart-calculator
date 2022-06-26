import React,  { useState } from 'react'

export default function Row({setGrandTotalChanger,valGrandTotal}) {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [is_checked, setChecked] = useState(true);

  function countChange(e){
    setCount((e.target.value))
      calculateAmountAndUpdate(price,e.target.value)
  }
  
  function countPrice(e){
    setPrice((e.target.value))
    calculateAmountAndUpdate(e.target.value,count)
  }

  function calculateAmountAndUpdate(price,count){
    if(price===''){
      price=0;
    }
    if(count===''){
      count=0;
    }
    setAmount(calculateProduct(parseInt(price) ,parseInt(count)))
    setGrandTotalChanger(parseInt(valGrandTotal)+parseInt(calculateProduct(price,count)))
  }

  function chengeCheckbox(e){
      setChecked(!is_checked)
      setAmount(calculateProduct(price,count))
  }

  function calculateProduct(price,count){
    return parseInt(price)*parseInt(count);
  }


  return (
    <tr>
      <td>
        <input type='checkbox' 
        defaultChecked={is_checked}  
        onChange={(e) => chengeCheckbox(e)} ></input>
      </td>
      <td>
        <input type='text' ></input>
      </td>
      <td>
        <input type='number' onChange={(e) => countPrice(e)} value={price} ></input>
      </td>
      <td>
        <input type='number' onChange={(e) =>countChange(e)} value={count} ></input>
      </td>

      <td>
        <p>{amount}</p>
      </td>
    </tr>
  )
}
