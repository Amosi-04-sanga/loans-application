import React, { useState } from 'react'
import Nav from '../nav/Nav';
import * as api from '../../API'
import "./Home.css"
import swal from 'sweetalert'


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
      swal({
        title: "error!",
        text: "please fill all cresidentials",
        dangerMode: true,
      })
    }
  }

  return (
    <>
      < Nav />
      <div className="md:px-10">
        <header className='text-center text-2xl lg:text-3xl mt-20 uppercase lg:w-2/3 mx-auto' >
          <h1 className='pb-4' >welcome abroad:</h1>
          <h1>we provide loans for small businesses for affordale rate</h1>
        </header>
        <main className='my-20' >
          <svg className='w-16 h-16 md:w-20 md:h-20 mt-28 mb-8 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M292.7 342.3C289.7 345.3 288 349.4 288 353.7V416h62.34c4.264 0 8.35-1.703 11.35-4.727l156.9-158l-67.88-67.88L292.7 342.3zM568.5 167.4L536.6 135.5c-9.875-10-26-10-36 0l-27.25 27.25l67.88 67.88l27.25-27.25C578.5 193.4 578.5 177.3 568.5 167.4zM256 0v128h128L256 0zM256 448c-16.07-.2852-30.62-9.359-37.88-23.88c-2.875-5.875-8-6.5-10.12-6.5s-7.25 .625-10 6.125l-7.749 15.38C187.6 444.6 181.1 448 176 448H174.9c-6.5-.5-12-4.75-14-11L144 386.6L133.4 418.5C127.5 436.1 111 448 92.45 448H80C71.13 448 64 440.9 64 432S71.13 416 80 416h12.4c4.875 0 9.102-3.125 10.6-7.625l18.25-54.63C124.5 343.9 133.6 337.3 144 337.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12C248.5 413.2 252.2 415.6 256 415.9V347c0-8.523 3.402-16.7 9.451-22.71L384 206.5V160H256c-17.67 0-32-14.33-32-32L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V448H256z" /></svg>
          <h1 className='text-xl text-center uppercase' >terms and conditions to get loan</h1>
          <p className="terms-desc indent-2 my-4 mb-px">Lorem ipsum dolor, veritatis. Esse beatae nihil  Et aliquid non hic quos quod perferendis error, excepturi odio. Impedit, molestiae.</p>
          <div className='terms-list my-2 pl-2' >
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="my-20">
            <svg className='w-16 h-16 md:w-20 md:h-20 mt-20 mb-8 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM176 128c35.35 0 64 28.65 64 64s-28.65 64-64 64s-64-28.65-64-64S140.7 128 176 128zM272 384h-192C71.16 384 64 376.8 64 368C64 323.8 99.82 288 144 288h64c44.18 0 80 35.82 80 80C288 376.8 280.8 384 272 384zM496 320h-128C359.2 320 352 312.8 352 304S359.2 288 368 288h128C504.8 288 512 295.2 512 304S504.8 320 496 320zM496 256h-128C359.2 256 352 248.8 352 240S359.2 224 368 224h128C504.8 224 512 231.2 512 240S504.8 256 496 256zM496 192h-128C359.2 192 352 184.8 352 176S359.2 160 368 160h128C504.8 160 512 167.2 512 176S504.8 192 496 192z" /></svg>
            <h1 className='text-xl text-center uppercase' >our work time</h1>
            <p className='work-time indent-2 my-2' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut vel unde nam quos quibusdam, hic dolorem ut cumque minima iure sit accusantium, deleniti nulla, corporis reprehenderit. Odio fugiat quae officiis?</p>
          </div>
          <div className="my-20">
            <svg className='w-16 h-16 md:w-20 md:h-20 mt-28 mb-8 mx-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M282.5 64H320C355.3 64 384 92.65 384 128V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H101.5C114.6 26.71 150.2 0 192 0C233.8 0 269.4 26.71 282.5 64zM192 128C209.7 128 224 113.7 224 96C224 78.33 209.7 64 192 64C174.3 64 160 78.33 160 96C160 113.7 174.3 128 192 128zM105.4 230.5C100.9 243 107.5 256.7 119.1 261.2C132.5 265.6 146.2 259.1 150.6 246.6L151.1 245.3C152.2 242.1 155.2 240 158.6 240H216.9C225.2 240 232 246.8 232 255.1C232 260.6 229.1 265.6 224.4 268.3L180.1 293.7C172.6 298 168 305.9 168 314.5V328C168 341.3 178.7 352 192 352C205.1 352 215.8 341.5 215.1 328.4L248.3 309.9C267.9 298.7 280 277.8 280 255.1C280 220.3 251.7 192 216.9 192H158.6C134.9 192 113.8 206.9 105.8 229.3L105.4 230.5zM192 384C174.3 384 160 398.3 160 416C160 433.7 174.3 448 192 448C209.7 448 224 433.7 224 416C224 398.3 209.7 384 192 384z" /></svg>
            <h1 className='uppercase text-md text-center' >have any query? message us</h1>
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
      </div>
        <footer className='mt-10 h-40 bg-gray-600' >
          @2022
        </footer>
    </>
  )
}

export default Home


