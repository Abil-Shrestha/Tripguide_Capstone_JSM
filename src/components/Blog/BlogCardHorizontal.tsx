import Link from 'next/link';
import { toast } from 'react-toastify';

interface IBlogCardHorizontalProps {
  blog: {
    id: number;
    title: string;
    author: string;
    author_title: string;
    category: string;
    rating: number;
    created_date: Date;
    image: string;
    tags: string[];
    author_image: string;
    description: string;
  }
}

const BlogCardHorizontal = ({ blog }:IBlogCardHorizontalProps) => {
  const handleShowToast = () => {
    toast.success('Coming soon!', {
      position: 'top-left',
      autoClose: 1000,
      closeOnClick: true,
      theme: 'colored',
    });
  };
  return (
    <div className='col-span-12 p-3 sm:p-6 bg-white dark:bg-cBlack-2 border dark:border-cBlack-2 border-gray-200 rounded-lg'>
      <div className='flex flex-col lg:flex-row gap-2 w-full'>
        <div className='w-full'>
          <img src={blog.image} alt='blog' className='rounded-lg object-cover h-full w-full' />
        </div>
        <div className='flex flex-col justify-between lg:pb-6 w-full lg:ml-6 lg:pr-16 xl:pr-32'>
          <div className='flex flex-col xs:flex-row gap-2 sm:gap-0 items-center justify-between mt-4 lg:mt-0'>
            <Link scroll={false} href='/'>
              <button
                type='button'
                className='border-2 border-[#f5f6fe] bg-[#f5f6fe] hover:bg-white hover:border-[#f5f6fe]
              dark:bg-cBlack-3 dark:border-cBlack-3 text-[#878CFF] dark:hover:text-white px-6 py-3 rounded-md
        transition-colors duration-200 ease-in-out capitalize'
              >
                {blog.category} Booking
              </button>
            </Link>
            <p className='text-gray-400 text-xl'>{blog.created_date.toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className='my-6 lg:my-0 w-full lg:pb-10'>
            <h3 className='text-[24px] lg:text-[28px] mb-2'>{blog.title}</h3>
            <p className='text-gray-400'>{blog.description}</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1 xs:gap-3'>
              <img src={blog.author_image} alt='author' className='h-10 w-10 lg:h-12 lg:w-12 rounded-full' />
              <div>
                <h3>{blog.author}</h3>
                <h4 className='text-sm text-gray-400'>{blog.author_title}</h4>
              </div>
            </div>
            <button
              type='button'
              onClick={handleShowToast}
              className='border-2 border-[#878CFF] bg-white dark:bg-cBlack-2 text-lg py-2 px-4 rounded-md'
            >Read <span className='hidden sm:inline-flex'>Article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardHorizontal;
