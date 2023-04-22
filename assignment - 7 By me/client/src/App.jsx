import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/internship' element={<Home />} />
            <Route path='/fulltime' element={<Home />} />
            <Route path='/remote' element={<Home />} />
            <Route path='/editjob' element={<EditJob />} />
            <Route path='/addjob' element={<AddJob />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
