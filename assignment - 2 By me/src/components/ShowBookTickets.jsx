import React from 'react';
import { useSelector } from 'react-redux';
import SingleTicketData from './SingleTicketData';

const ShowBookTickets = () => {
    const {bookFlightReducer} = useSelector((state) => state);
    return (
        <>
            {bookFlightReducer.length &&  
            <div className="table-container">
            <table className="booking-table">
                <thead className="bg-gray-100/50">
                <tr className="text-black text-left">
                    <th>Destination From</th>
                    <th>Destination To</th>
                    <th className="text-center">Journey Date</th>
                    <th className="text-center">Guests</th>
                    <th className="text-center">Class</th>
                    <th className="text-center">Delete</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                {/* <!-- Row 1 --> */}
            

    {
    bookFlightReducer.map(ticketData =>{
        return <SingleTicketData key={ticketData.id} ticketData={ticketData}/>
    })
    }
            
                </tbody>
            </table>
            </div>}
        </>
    );
};

export default ShowBookTickets;