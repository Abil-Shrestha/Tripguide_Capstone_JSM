interface IProps {
  label: string;
}

const Loading = ({ label }: IProps) => (
  <div className='flex gap-4 items-center justify-center h-[500px] w-full text-cBlack-1 dark:text-cBlack-8 font-DMSans text-[24px] font-bold'>
    <img src='/view-all-loader.png' alt='loader' className='h-5 w-5 animate-spin' />
    {label}
  </div>
);

export default Loading;
