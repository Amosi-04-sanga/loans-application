import React, { useState } from 'react'
import Nav from '../nav/Nav'
import FileBase from 'react-file-base64'
import * as api from '../../API'
import { useNavigate } from "react-router-dom"

import "./register.css"

const Register = () => {
  const navigate = useNavigate()
  const [isshown, setIsshown] = useState(false)
  const [details, setDetails] = useState({
    name: "",
    photo: "",
    tell: "",
    loan: "",
    bonds: [],
    homeadress: "",
  })

  const handleSubmit = e => {
    e.preventDefault()

    const { name, photo, tell, bonds, homeadress, loan } = details

    if (name && tell && bonds && homeadress && loan && photo) {
      api.addNewCustomer(details)
        .then(res => {
          const { data } = res
          console.log(data)
        })
        .catch(error => console.log(error))

      navigate("/customers")

      setDetails({
        name: "",
        photo: "",
        tell: "",
        loan: "",
        bonds: [],
        homeadress: "",
      })

    } else {
      setIsshown(true)
      setTimeout(() => {
        setIsshown(false)
      }, 5000);
    }


  }

  const stringToArray = str => {
    return str.split(",")
  }

  return (
    <div>
      < Nav />
      <div className="register-section p-4 lg:py-16 lg:px-8">
        <p className={isshown ? "show" : "hidden"} >please fill all form fields </p>
        <div className="flex-column">
          <h1 className='text-md uppercase' >register new client</h1>
          <div className="h-1 w-1/3 bg-blue-200 "></div>
        </div>
        <div className="form">
          <form method='post' autoComplete='off' className='py-2' onSubmit={handleSubmit}>
            <div className="row">
              <label className='block' >Enter full name:</label>
              <input
                type="text"
                name="name"
                value={details.name}
                className="p-1"
                onChange={e => setDetails({ ...details, name: e.target.value })}
              />
            </div>

            <div className="row">
              <label className='block' >Enter loan amount:</label>
              <input
                type="text"
                name="loan"
                className='block p-1'
                value={details.loan}
                onChange={e => setDetails({ ...details, loan: e.target.value })}
              />
            </div>

            <div className="row">
              <label className='block' >Enter phone number:</label>
              <input
                type="text"
                name="tell"
                value={details.tell}
                className='block p-1'
                onChange={e => setDetails({ ...details, tell: e.target.value })}
              />
            </div>

            <div className="row">
              <label className='block' >Enter home adress:</label>
              <input
                type="text"
                name="homeadress"
                value={details.homeadress}
                className='block p-1'
                onChange={e => setDetails({ ...details, homeadress: e.target.value })}
              />
            </div>

            <div className="row">
              <label className='block' >Enter list of bonds:</label>
              <input
                type="text"
                name="bonds"
                value={details.bonds}
                className='block p-1'
                onChange={e => setDetails({ ...details, bonds: stringToArray(e.target.value) })}
              />
            </div>

            <div className="row">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setDetails({ ...details, photo: base64 })
                }
              />
            </div>


            <input className='submit block hover:bg-blue-300 transition duration-300 cursor-pointer btn p-1 px-2 bg-blue-200 mx-auto' type="submit" />

          </form>
        </div>
      </div>
    </div>
  )
}

export default Register


