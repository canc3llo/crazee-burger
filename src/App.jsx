import { Routes, Route } from "react-router"
import LoginPage from "./components/pages/login/LoginPage"
import OrderPage from "./components/pages/order/OrderPage"

function App(){
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/order" element={<OrderPage/>}/>
    </Routes>
  )
}

export default App
