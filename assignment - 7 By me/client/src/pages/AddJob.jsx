import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createJob } from "../features/Jobs/jobsSlice";

const AddJob = () => {
  // use selector
  const { isLoading, isError } = useSelector(state => state.jobs);

  // dispatch
  const dispatch = useDispatch();

  // Navigation
  const navigate = useNavigate();

  // useState
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");

  // add a new job
  const addJobHandler = e => {
    e.preventDefault();
    dispatch(
      createJob({
        title,
        type,
        salary: salary,
        deadline,
      })
    );
    resetHandler();
    navigate("/");
  };

  // reset handler
  const resetHandler = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  return (
    <div className='lg:pl-[14rem] mt-[5.8125rem]'>
      <main className='max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]'>
        <h1 className='mb-10 text-center lws-section-title'>Add New Job</h1>

        <div className='max-w-3xl mx-auto'>
          <form onSubmit={addJobHandler} className='space-y-6'>
            <div className='fieldContainer'>
              <label
                htmlFor='lws-JobTitle'
                className='text-sm font-medium text-slate-300'>
                Job Title
              </label>
              <select
                id='lws-JobTitle'
                name='lwsJobTitle'
                required
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}>
                <option hidden selected>
                  Select Job
                </option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className='fieldContainer'>
              <label htmlFor='lws-JobType'>Job Type</label>
              <select
                id='lws-JobType'
                name='lwsJobType'
                required
                type='text'
                value={type}
                onChange={e => setType(e.target.value)}>
                <option hidden selected>
                  Select Job Type
                </option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className='fieldContainer'>
              <label htmlFor='lws-JobSalary'>Salary</label>
              <div className='flex border rounded-md shadow-sm border-slate-600'>
                <span className='input-tag'>BDT</span>
                <input
                  type='number'
                  name='lwsJobSalary'
                  id='lws-JobSalary'
                  required
                  className='!rounded-l-none !border-0'
                  placeholder='20,00,000'
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className='fieldContainer'>
              <label htmlFor='lws-JobDeadline'>Deadline</label>
              <input
                type='date'
                name='lwsJobDeadline'
                id='lws-JobDeadline'
                required
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
              />
            </div>

            <div className='text-right'>
              <button
                type='submit'
                id='lws-submit'
                disabled={isLoading}
                className='cursor-pointer btn btn-primary w-fit'>
                Submit
              </button>
            </div>

            {!isLoading && isError && (
              <p className='error'>There was an error occurred</p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddJob;
