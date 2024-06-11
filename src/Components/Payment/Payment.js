import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Payment = () => {
    const [PaymentData, setPaymentData] = useState();
    useEffect(() => {
        data()
    }, [])
    const data = () => {
        axios.get("http://localhost:5000/payment/getPayment").then((res) => {
            console.log("resresrsersrsres==", res);
            console.log("res.datares.datares.data==", res.data);
            console.log("res.datares.datares.data==", res.data.data);

            setPaymentData(res.data);
        })
            .catch((error) => {
                console.error("fetching error == ", error);
            })
    }
    console.log("PaymentDataPaymentData--", PaymentData);
    return (
        <>
          
            <div>
                <table className='table table-bordered'>
                    <tr>
                        <th>Order Id</th>
                        <th>amount</th>
                        <th>currency</th>
                        <th>status</th>
                    </tr>
                    {PaymentData?.data.map((PData, index) => (
                        <tr>
                            <td>{PData.orderId}</td>
                            <td>{PData.amount}</td>
                            <td>{PData.currency}</td>
                            <td>{PData.status}</td>
                        </tr>
                    ))
                    }
                </table>
            </div>
        </>
    )
}

export default Payment

