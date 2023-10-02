interface IProps {
  label: string;
  info: string;
}

const SummaryDetails = ({ label, info }: IProps) => (
  <p className='text-[14px] text-cBlack-5 dark:text-cBlack-7'>
    {label} <br />
    <span className='text-[16px] text-cBlack-4 dark:text-cBlack-5'>{info}</span>
  </p>
);

export default SummaryDetails;
