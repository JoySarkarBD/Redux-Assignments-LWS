import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSalary,
  searched,
} from "../../features/filterJob/filterJobSlice";

const FilterJobs = () => {
  // dispatch
  const dispatch = useDispatch();

  const { type, salaryType, search } = useSelector(state => state.filterJob);

  // Filter by search
  const searchHandle = e => {
    dispatch(searched(e.target.value));
  };

  // Filter by salary type
  const salaryHandle = e => {
    dispatch(changeSalary(e.target.value));
  };

  return (
    <div className='md:flex space-y-2 md:space-y-0 justify-between mb-10 '>
      <h1 className='lws-section-title'>{type} Available Jobs</h1>
      <div className='flex gap-4'>
        <div className='search-field group flex-1'>
          <i className='fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500'></i>
          <input
            type='text'
            placeholder='Search Job'
            className='search-input'
            id='lws-searchJob'
            value={search}
            onChange={searchHandle}
          />
        </div>
        <select
          id='lws-sort'
          name='sort'
          autoComplete='sort'
          className='flex-1'
          value={salaryType}
          onChange={salaryHandle}>
          <option>Default</option>
          <option value='ascending'>Salary (Low to High)</option>
          <option value='descending'>Salary (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterJobs;
