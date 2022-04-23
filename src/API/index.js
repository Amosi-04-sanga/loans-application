import axios from 'axios'

//const url = "https://loans-services.herokuapp.com/"
const url = "http://localhost:5000/customers"
const urlMsg = "http://localhost:5000/customers/messages"

export const getAllCostomers = () => axios.get(url)

export const addNewCustomer = customer => axios.post(url, customer)

export const sendUserMessage = msg => axios.post(urlMsg, msg)

export const getSingleCustomer = id => axios.get( `${url}/${id}` )

export const updateCustomer = (customer,id) => axios.patch( `${url}/${id}`, customer )


