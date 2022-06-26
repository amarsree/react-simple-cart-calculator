import React, { useState } from 'react'
import Row from './row'
export default function Table() {
    const width = '80%';
    const [GrandTotal, setGrandTotal] = useState(0);
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
                    <Row
                        setGrandTotalChanger={setGrandTotal}
                        valGrandTotal={GrandTotal}
                    ></Row>

                    <Row
                        setGrandTotalChanger={setGrandTotal}
                        valGrandTotal={GrandTotal}
                    ></Row>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan='4' align='right'>Total</td>
                        <td>{GrandTotal}</td>
                    </tr>

                </tfoot>
            </table>
        </div>
    )
}
