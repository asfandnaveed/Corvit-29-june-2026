import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import News from "./pages/news/News"
import Shop from "./pages/shop/Shop"
import Detail from "./pages/shop/Detail"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Loginnew"
// import Login from "./pages/auth/Login"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Shop/>}/>
          <Route path="/home" element={ <Home />}/>
          <Route path="/news" element={ <News />} />
          <Route path="/shop" element={ <Shop/>} />
          <Route path="/shop/detail/:id" element={ <Detail/>} />
          <Route path="/register" element={ <Register/>}/>
          <Route path="/login" element={ <Login/>}/>
          

        </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App
