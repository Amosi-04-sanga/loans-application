import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from '../nav/Nav'
import * as api from '../../API'
import moment from 'moment'
import "./CustomerDetails.css"

const CustomerDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [client, setClient] = useState({})
  const [amount, setAmount] = useState("")
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    api.getSingleCustomer(id)
      .then(res => {
        const { data } = res
        //console.log(data)
        setClient(data)
      })
  }, [id])

  console.log(client)

  const handleSubmit = e => {
    e.preventDefault()

    const obj = {
      date: new Date(),
      amount
    }

    if (amount) {
      api.updateCustomer(obj, id)
      .then(res => {
        const { data } = res
        console.log(data)
      })
      .catch(error => console.log(error))

    setAmount("")
    setIsActive(false)

    navigate(0)

    } else {
       alert("please don't missout amount!")
    }
  }

/*  const debtCalc = () => {

    if (client) {
      const arr = client.refund

      let sum = 0;
      arr.forEach(item => {
        sum += item.amount
      });

      console.log(sum);
    }


  } */

  const popOutForm = () => {
    setIsActive(true)
  }

  return (
    <div>
      < Nav />

      <div className={isActive ? "form-open" : "form-closed"}>
        <form method='post' autoComplete='off' className='p-2 w-60 lg:w-80 bg-orange-300' onSubmit={handleSubmit}>
          <div className="row">
            <label className='block' >Enter amount:</label>
            <input
              type="text"
              name="amount"
              value={amount}
              className="p-1"
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <input className='submit hover:bg-blue-300 transition duration-300 cursor-pointer btn p-1 px-2 bg-blue-200 mx-auto' type="submit" />
        </form>
      </div>

      <div className="container details-section">
        <div className={ isActive ? "details-section-inner" : "" }></div>
        <div className="heading mx-auto">
          <h1 className='pt-4 lg:pt-8 uppercase' >customer details</h1>
          <div className="underline h-1 bg-blue-200"></div>
        </div>
        <button onClick={popOutForm} className='btn bg-blue-200 p-2 block ml-auto mr-4 transition duration-300 hover:bg-blue-400' >refund</button>


        <div className="container my-8 py-4">
          {
            client ?
              <div className="container-inner">

                <div className="client-photo-wrapper bg-blue-600 mx-auto p-px">
                  <img className='client-photo' src={client.photo} alt={client.name} />
                </div>

                <div className="client-details lg:w-4/5 w-full p-2 py-6 ml-20 lg:p-8 mt-10">
                  <ul>
                    <li>Full name: {client.name} </li>
                    <li>Tell: {client.tell} </li>
                    <li>Home adress: {client.homeadress} </li>
                    <li>Loan date: {moment(client.createdAt).format("DD MMM, YYYY")} </li>
                    <li>Loan amount: {client.loan}/= </li>
                    <li>Amount left: {client.amount} </li>
                  </ul>


                </div>

                <div className="refunds  lg:w-4/5 w-full p-2 py-6 ml-20 lg:p-8 mt-10">
                  {

                    client.refund ?
                      client.refund.map(obj => (

                        <p key={Math.random()} className='day-refund mb-2' > {obj.amount}/= on {moment(obj.date).format("DD MMM, YYYY")} </p>
                      )) :
                      ""
                  }
                </div>

              </div> :
              "loading..."
          }
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails


