import React, { useState } from 'react'
import Row from './row'
export default function Table() {
    const width = '80%';
     const [Total, setTotal] = useState({
        total:[
            {amount: 0, name: "row0"}
        ],
        grandTotal:0
    });

    const parentToChild = (e) => {
        let temp=Total
        let updated=false
        temp.total.forEach(ele => {
            if(ele.name===e.row){
                ele.amount=e.amt
                updated=true
            }
        });
        if(!updated){
            temp.total.push({name:e.row, amount:e.amt})
        }
        temp.grandTotal=temp.total.reduce(function(acc,curr){
            return acc+curr.amount
        },0)
        setTotal({
            total:temp.total,
            grandTotal:temp.grandTotal
        })
    }

    function addNewRow(){
        let temp=Total
        temp.total.push({amount: 0, name: "row"+(temp.total).length})
        setTotal({
            total:temp.total,
            grandTotal:temp.grandTotal
        })
    }

    return (
        <div>
            <table align='center' width={width}>
                <thead>
                    <tr>
                        <th>Include/discard</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                {Total.total.map((curr,index)=> (
                    <Row key={index}
                        Testprop={parentToChild}
                        rowName={'row'+index}
                    ></Row>
                ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td><button onClick={addNewRow}>Add New Row</button></td>
                        <td colSpan='3' align='right'>Total</td>
                        {<td>{Total.grandTotal}</td>}
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
