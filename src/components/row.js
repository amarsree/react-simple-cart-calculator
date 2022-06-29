import React,  { useState } from 'react'

export default function Row(props) {
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
    let amt=0;
    if(price===''){
      price=0;
    }
    if(count===''){
      count=0;
    }
    if(is_checked){
      amt=calculateProduct(parseInt(price) ,parseInt(count))
      setAmount(amt)
      props.Testprop({'amt':amt,'row': props.rowName})
    }
  }

  function chengeCheckbox(e){
    let amt=0
    if((e.target.checked)){
        amt= calculateProduct(price,count)
      }
      setAmount(amt)
      props.Testprop({'amt':amt,'row': props.rowName}) 
      setChecked(!is_checked)
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
