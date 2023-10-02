import { CrumbLink } from '@components';

interface IProps {
  label?: string ;
  step: number;
}

const styles = {
  container: 'flex items-center text-[14px] font-normal font-DMSans',
  current: 'text-cBlack-5 dark:text-cBlack-4',
};

const Crumbs = ({ label, step }: IProps) => {
  const page = label?.toLowerCase();

  switch (step) {
    case 0:
      return (
        <div className={styles.container}>
          <p className={styles.current}>Home</p>
        </div>
      );
    case 1:
      return (
        <div className={styles.container}>
          <CrumbLink label='Home' link='/' arrow />
          <p className={styles.current}>{label}  </p>
        </div>
      );
    case 2:
      return (
        <div className={styles.container}>
          <CrumbLink label='Home' link='/' arrow />
          <CrumbLink label={label} link={`/listing/${page}`} page='List' arrow />
          <p className={styles.current}>{label} Details</p>
        </div>
      );
    case 3:
      return (
        <div className={styles.container}>
          <CrumbLink label='Home' link='/' arrow />
          <CrumbLink label={label} link={`/listing/${page}`} page='List' arrow />
          <CrumbLink label={label} link='/details/abc' page='Details' arrow />
          <p className={styles.current}>Confirm and pay</p>
        </div>
      );
    case 4:
      return (
        <div className={styles.container}>
          <CrumbLink label='Home' link='/' arrow />
          <CrumbLink label={label} link={`/listing/${page}`} page='List' arrow />
          <CrumbLink label={label} link='/details/abc' page='Details' arrow />
          <CrumbLink label='Confirm and pay' link='/confirm' arrow />
          <p className={styles.current}>Congratulations</p>
        </div>
      );
    default:
      return (
        <div className={`${styles.container} text-red-500 italic font-medium`}>Add a step* prop!</div>
      );
  }
};

export default Crumbs;
