import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Main";
import Navbar from "./components/Navbar";
import ShoopingCart from "./components/ShoopingCart";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<ShoopingCart />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
