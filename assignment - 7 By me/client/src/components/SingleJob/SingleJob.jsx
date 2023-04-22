import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editActiveJob, removeJob } from "../../features/Jobs/jobsSlice";

const SingleJob = ({ job }) => {
  // dispatch
  const dispatch = useDispatch();

  // navigate
  const navigate = useNavigate();

  // destructure the job
  const { title, type, salary, deadline, id } = job || {};

  // edit a job
  const editJobHandler = () => {
    dispatch(editActiveJob(job));
    navigate(`/editjob`);
  };

  // Job Delete handler
  const deleteJobHandler = () => {
    dispatch(removeJob(id));
  };

  return (
    <div className='lws-single-job'>
      <div className='flex-1 min-w-0'>
        <h2 className='lws-title'>{title} </h2>
        <div className='job-footers'>
          <div className='lws-type'>
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            <i
              className={`fa-solid fa-stop text-lg mr-1.5 !text-[${
                type === "Internship"
                  ? "#FF5757"
                  : type === "Remote"
                  ? "#56E5C4"
                  : type === "Full Time"
                  ? "#FF8A00"
                  : null
              }]`}></i>
            {type}
          </div>
          <div className='lws-salary'>
            <i className='fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5'></i>
            BDT {salary}
          </div>
          <div className='lws-deadline'>
            <i className='fa-regular fa-calendar text-slate-400 text-lg mr-1.5'></i>
            Closing on {deadline}
          </div>
        </div>
      </div>
      <div className='mt-5 flex lg:mt-0 lg:ml-4'>
        <span className='hidden sm:block'>
          <button
            onClick={editJobHandler}
            type='button'
            className='lws-edit btn btn-primary'>
            <i className='fa-solid fa-pen text-gray-300 -ml-1 mr-2'></i>
            Edit
          </button>
        </span>

        <span className='sm:ml-3'>
          <button
            onClick={deleteJobHandler}
            type='button'
            className='lws-delete btn btn-danger '>
            <i className='fa-solid fa-trash text-gray-300 -ml-1 mr-2'></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleJob;
