interface IProps {
  detail: {
    detail: string;
    price: number;
  },
  idx: number;
}

const BookedDetails = ({ detail, idx }: IProps) => (
  <div key={idx} className='flex justify-between'>
    <p className='text-cBlack-4 dark:text-cBlack-6'>{detail.detail}</p>
    <p className='text-cBlack-3 dark:text-cBlack-6'>${detail.price}</p>
  </div>
);

export default BookedDetails;
