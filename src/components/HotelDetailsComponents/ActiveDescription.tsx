interface IProps {
  activeDescription: string;
  desc: string;
}

const descStyle = 'font-Roboto min-h-[80px] font-normal text-[16px] text-[#4A4E54] dark:text-cBlack-5';

const ActiveDescription = ({ activeDescription, desc }: IProps) => {
  switch (activeDescription) {
    case 'Features':
      return (
        <p className={descStyle}>Features</p>
      );
    case 'Virtual':
      return (
        <p className={descStyle}>Virtual</p>
      );
    case 'Price & Task History':
      return (
        <p className={descStyle}>Price & Task History</p>
      );
    default:
      return (
        <p className={descStyle}>
          {desc}
        </p>
      );
  }
};

export default ActiveDescription;
