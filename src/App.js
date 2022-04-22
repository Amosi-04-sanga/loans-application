import AllCustomers from "./components/allCustomers/AllCustomers";
import CustomerDetails from "./components/customerDetails/CustomerDetails";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import "./index.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/customers" element={<AllCustomers />} />
            <Route path="/customers/new" element={<Register />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
