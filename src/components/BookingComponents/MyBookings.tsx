import Image from 'next/image';
import React from 'react';

const MyBookings = ({ booking }) => (
  <div className='flex flex-col space-y-8'>
    <div className='flex flex-row justify-between items-center bg-white rounded-lg px-8 py-2'>
      <div className='flex flex-row justify-between items-center space-x-4'>
        <div className='h-32 w-36 '>
          <Image src='/HomeDestination/kuta.jpg' height={250} width={300} objectFit='contain' style={{ borderRadius: '5px' }} />
        </div>
        <div className='flex flex-col space-y-2'>
          <p className='text-cBlack-3 '> Baan Wanglang Riverside </p>
          <p className='text-cBlack-4 text-sm'> Kuta, Bali </p>
          <p className='text-cBlack-4 text-sm'> Indonesia </p>
        </div>
      </div>
      <div className='flex flex-col'>
        <p> Booked on {booking?.booked_on_date} </p>
        {/* convert booked_at_date to string format */}
      </div>
    </div>
    <div className='flex flex-row justify-between items-center bg-white rounded-2xl p-8'>
      <div className='flex flex-col space-y-2'>
        <p className='text-cBlack-3 font-semibold'> Booking ID: {booking?.booking_id} </p>
        <p className='text-cBlack-4 '> Check In Date: {booking?.booking_start_date} </p>
        <p className='text-cBlack-4 '> Check Out Time: {booking?.booking_end_date} </p>
        <p className='text-cBlack-4 '> Room Type: {booking?.booking_status} </p>
        <p className='text-cBlack-4 '> Number of Rooms: 3 </p>
      </div>
      <div className='flex flex-col space-y-2 text-center'>
        <p className='text-cBlack-1 text-lg'> {booking.booking_currency} {' '} {booking?.booking_price} </p>
        <p className='text-[#628DFE] text-sm hover:underline hover:cursor-pointer'> Booking Conditions </p>
        <button type='button' className='bg-cBlack-7 py-2 px-12 rounded-lg'> Manage Booking </button>
        <button type='button' className='py-2 px-12 bg-primaryBlue text-cBlack-7 rounded-lg'> Book Again </button>
      </div>
    </div>
  </div>
);

export default MyBookings;
