import React from "react";

const SidebarSort = ({ sort }) => {
  // Destructuring props
  const { sorting, setSorting } = sort;

  // Onchange handler
  const sortHandler = e => {
    setSorting(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='sidebar-content'>
      <h4>Sort</h4>
      <select
        name='sort'
        id='lws-sort'
        value={sorting}
        onChange={sortHandler}
        className='w-full max-w-[150px] border-2 rounded-md text-gray-500'>
        <option value=''>Default</option>
        <option value='newest'>Newest</option>
        <option value='most_liked'>Most Liked</option>
      </select>
    </div>
  );
};

export default SidebarSort;
