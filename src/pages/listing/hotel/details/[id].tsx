/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { HotelDetail, Loading } from '@components';
import { useGetHotelBookingDetailsQuery } from '@services/pricelineApi';

const HotelDetails = () => {
  const router = useRouter();
  const numberOfRooms = 1;
  const { id } = router.query;
  const { checkIn, checkOut } = useSelector((state) => state.global);
  const { data, isFetching } = useGetHotelBookingDetailsQuery({ checkOut: checkOut?.toISOString().split('T')[0], checkIn: checkIn?.toISOString().split('T')[0], id, numberOfRooms });

  if (isFetching) {
    return (
      <Loading label='Loading details...' />
    );
  }

  return (
    <HotelDetail detail={data} />
  );
};

export default HotelDetails;
