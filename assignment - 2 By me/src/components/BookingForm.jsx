import { React, useState } from 'react';
import nextId from "react-id-generator";
import { useDispatch, useSelector } from 'react-redux';
import { bookFlight } from '../redux/BookTicketAndCancle/actions';

const BookingForm = () => {

  const {bookFlightReducer} = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const [ticketDetails, setTicketDetails] = useState({
    from:"", 
    to:"", 
    date:"", 
    guest:"", 
    ticketClass:""
  });

  const handleInputValue= (e)=>{
    let value = e.target.value;
    
    if (e.target.name === "from") {
      setTicketDetails({
        ...ticketDetails,
        from: value
      });
    }else if (e.target.name === "to") {
      setTicketDetails({
        ...ticketDetails,
        to: value
      });
    } else if (e.target.name === "date") {
      setTicketDetails({
        ...ticketDetails,
        date: value
      });
    } else if (e.target.name === "guests") {
      setTicketDetails({
        ...ticketDetails,
        guest: value
      });
    } else if (e.target.name === "ticketClass") {
      setTicketDetails({
        ...ticketDetails,
        ticketClass: value
      });
    }
  }

  const {from, to, date, guest, ticketClass} = ticketDetails;
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const ticketData = {
      ...ticketDetails,
      id:nextId()
    }
    dispatch(bookFlight(ticketData));
    resetForm();
  }

  const resetForm = () =>{
    setTicketDetails({
      ...ticketDetails,
      from:"", 
      to:"", 
      date:"", 
      guest:"", 
      ticketClass:""
    });
    
  }

    return (
     
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select 
                  className="outline-none px-2 py-2 w-full" 
                  name="from" 
                  id="lws-from"
                  value={from}
                  onChange={(e)=>handleInputValue(e)}
                  required
                >
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select 
                  className="outline-none px-2 py-2 w-full" 
                  name="to"
                  id="lws-to" 
                  value={to}
                  onChange={(e)=>handleInputValue(e)}
                  required>
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input type="date" 
                className="outline-none px-2 py-2 w-full date" 
                name="date" 
                id="lws-date"  
                value={date}
                onChange={(e)=>handleInputValue(e)}
                required 
              />
            </div>
  
            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select 
                  className="outline-none px-2 py-2 w-full" 
                  name="guests" 
                  id="lws-guests" 
                  value={guest}
                  onChange={(e)=>handleInputValue(e)}
                  required
                >
                  <option value="" hidden>Please Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>
  
            {/* <!-- Class --> */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select 
                  className="outline-none px-2 py-2 w-full" 
                  name="ticketClass" 
                  id="lws-ticketClass" 
                  value={ticketClass}
                  onChange={(e)=>handleInputValue(e)}
                  required
                >
                  <option value="" hidden>Please Select</option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>
  
            <button className="addCity" type="submit" id="lws-addCity">
              <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
        </div>
    );
};

export default BookingForm;