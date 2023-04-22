import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeType } from "../../features/filterJob/filterJobSlice";

const Sidebar = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Filter type of sidebar
  const typeHandler = type => dispatch(changeType(type));

  return (
    <div className='sidebar'>
      <nav>
        <ul className='space-y-4'>
          <li>
            <Link
              to='/'
              className='main-menu menu-active'
              id='lws-alljobs-menu'
              onClick={() => typeHandler("All")}>
              <i className='fa-solid fa-briefcase'></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className='space-y-6 lg:space-y-2 '>
              <li>
                <Link
                  className='sub-menu'
                  to='/internship'
                  id='lws-internship-menu'
                  onClick={() => typeHandler("Internship")}>
                  <i className='fa-solid fa-stop !text-[#FF5757] mr-2'></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link
                  className='sub-menu'
                  to='/fulltime'
                  id='lws-fulltime-menu'
                  onClick={() => typeHandler("Full Time")}>
                  <i className='fa-solid fa-stop !text-[#FF8A00] mr-2'></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link
                  className='sub-menu'
                  to='/remote'
                  id='lws-remote-menu'
                  onClick={() => typeHandler("Remote")}>
                  <i className='fa-solid fa-stop !text-[#56E5C4] mr-2'></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/addjob' className='main-menu' id='lws-addJob-menu'>
              <i className='fa-solid fa-file-circle-plus mr-2'></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
