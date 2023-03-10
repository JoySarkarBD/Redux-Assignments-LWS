import React from 'react';
import BookingForm from './BookingForm';
import ShowBookTickets from './ShowBookTickets';

const BookTicket = () => {
    return (
        <section>
            {/*  <!-- Input Data --> */}
                <BookingForm/>

            {/*  <!-- Preview Data --> */}
                <ShowBookTickets/>
        </section>
    );
};

export default BookTicket;