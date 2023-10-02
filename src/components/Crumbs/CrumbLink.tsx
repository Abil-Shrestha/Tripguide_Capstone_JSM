import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface IProps {
  label: string;
  link: string;
  page?: string;
  arrow?: boolean;
}

const styles = {
  link: 'text-cBlack-3 dark:text-cBlack-7 cursor-pointer',
  arrow: 'h-5 w-5 text-cBlack-3 dark:text-cBlack-7',
};

const CrumbLink = ({ label, link, page, arrow }: IProps) => (
  <>
    <Link href={link} className={styles.link}>
      <p className='cursor-pointer'>{label} {page}</p>
    </Link>
    {arrow && <MdKeyboardArrowRight className={styles.arrow} />}
  </>
);

export default CrumbLink;
