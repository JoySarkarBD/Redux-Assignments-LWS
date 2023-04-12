import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterSorting } from "../../features/savedBlogs/savedBlogsSlice";

const SidebarFilter = () => {
  // dispatch
  const dispatch = useDispatch();

  // Use State
  const [statusFilter, setStatusFilter] = useState("all");
  // console.log(statusFilter);

  // Onchange handler
  const statusChangeHandler = e => {
    if (e.target.value === "all") {
      // console.log(e.target.value);
      setStatusFilter("all");
      dispatch(filterSorting(e.target.value));
    } else {
      // console.log(e.target.value);
      setStatusFilter("saved");
      dispatch(filterSorting(e.target.value));
    }
  };

  return (
    <div className='sidebar-content'>
      <h4>Filter</h4>
      <div className='radio-group'>
        {/* <!-- handle filter on button click --> */}
        <div>
          <input
            type='radio'
            name='filter'
            id='lws-all'
            checked={statusFilter === "all" ? true : false}
            className='radio'
            value='all'
            onChange={statusChangeHandler}
          />
          <label htmlFor='lws-all'>All</label>
        </div>
        <div>
          <input
            type='radio'
            name='filter'
            id='lws-saved'
            className='radio'
            onChange={statusChangeHandler}
            checked={statusFilter === "saved" ? true : false}
            value='saved'
          />
          <label htmlFor='lws-saved'>Saved</label>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilter;
