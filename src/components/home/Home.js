import React, { useState } from 'react'
import Nav from '../nav/Nav';
import * as api from '../../API'
import "./Home.css"

const Home = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    const { name, email, message } = user

    if (name && email && message) {
      api.sendUserMessage(user)
        .then(res => {
          const { data } = res
          console.log("message send!");
          console.log(data)

          
        })
        .catch(error => console.log(error))
        
        setUser({
          name: "",
          email: "",
          message: ""
        })
    } else {
        alert("error!!!")
    }
  }

  return (
    <>
      < Nav />
      <header className='text-center text-2xl lg:text-3xl mt-20 uppercase lg:w-2/3 mx-auto' >
        <h1 className='pb-4' >welcome abroad:</h1>
        <h1>we provide loans for small businesses for affordale rate</h1>
      </header>
      <main className='my-20' >
        <h1 className='text-xl text-center uppercase' >➡️ terms and conditions to get loan</h1>
        <p className="terms-desc indent-2 my-4 mb-px">Lorem ipsum dolor, veritatis. Esse beatae nihil  Et aliquid non hic quos quod perferendis error, excepturi odio. Impedit, molestiae.</p>
        <div className='terms-list my-2 pl-2' >
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="my-20">
          <h1 className='text-xl text-center uppercase' >➡️ our work time</h1>
          <p className='work-time indent-2 my-2' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut vel unde nam quos quibusdam, hic dolorem ut cumque minima iure sit accusantium, deleniti nulla, corporis reprehenderit. Odio fugiat quae officiis?</p>
        </div>
        <div className="my-20">
          <h1 className='uppercase text-md text-center' >➡️ have any query? message us</h1>
          <div className="my-4 text-center">
            <form method='post' autoComplete='on' className='p-2 w-4/5 md:w-1/2 bg-orange-300 mx-auto' onSubmit={handleSubmit}>
              <div className="row">
                <input
                  type="text"
                  name="name"
                  placeholder='Enter your name...'
                  value={user.name}
                  className="p-1"
                  onChange={e => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  name="email"
                  placeholder='Enter your email...'
                  value={user.email}
                  className="p-1"
                  onChange={e => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="row">
                <textarea onChange={e => setUser({ ...user, message: e.target.value })} value={user.message} name="message" id="message" placeholder='Enter message' rows="10"></textarea>
              </div>
              <button className='block hover:bg-blue-300 transition duration-300 cursor-pointer btn p-2 px-8 bg-blue-200 mx-auto uppercase' type="submit" >SEND</button>
            </form>
          </div>
        </div>
      </main>
      <footer className='mt-10 h-40 bg-gray-600' >
          @2022
      </footer>
    </>
  )
}

export default Home


