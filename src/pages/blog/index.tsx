import { useEffect } from 'react';

import { BlogCardHorizontal, BlogCardVertical } from '@components';
import { blogs } from '@constants/blogs';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='max-w-6xl xl:mx-auto mx-4 sm:mx-16 font-DMSans'>
        <h1 className='text-center text-[39px] xs:text-[48px] sm:text-[64px] md:text-[80px] block mt-12'>Travel Blog</h1>
        <div className='mx-auto w-[104px] h-[10px] rounded-md bg-[#FA8F54] mt-2 mb-12' />
        {/* Grid */}
        <div className='grid grid-cols-12 gap-4 lg:gap-10 w-full'>
          <BlogCardHorizontal blog={blogs[0]} />
          {blogs.slice(0).map((blog, i) => (
            <BlogCardVertical blog={blog} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
