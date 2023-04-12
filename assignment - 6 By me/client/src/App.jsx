import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs/:blogId' element={<Blog />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
