import React, { useEffect, useState } from 'react'
import * as api from '../../API'
import Nav from '../nav/Nav'
import { Link } from "react-router-dom";
import "./allCustomers.css"

const AllCustomers = () => {
  
  const [details, setDetails] = useState()

  useEffect(() => {
    
    api.getAllCostomers()
    .then( res => {
      const { data } = res
     // console.log(data)
      setDetails(data)
    } )

  }, [])
  
  console.log(details);

  return (
    <div>
        < Nav />
        {details ? 
          <h1 className="numberofclients text-right p-4 lg:px-8"> {details.length} customers</h1> : 
          ""
        }

        <div className="container">
        {        
          details ? 
          details.map( detail => (
             <div key={detail.name} className="clients w-4/5 lg:w-2/3 p-2 mt-4">
                <Link to={`/customers/${detail._id}`} >
                  <h2> {detail.name} </h2>
                </Link>
             </div>
          )) : 
          (<h1 className='loading' >Loading...</h1>)
        }
        </div>
        
    </div>
  )
}

export default AllCustomers