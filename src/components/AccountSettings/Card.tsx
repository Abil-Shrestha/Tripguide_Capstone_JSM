import Link from 'next/link';
import React from 'react';

const Card = ({ item }) => (
  <div className='flex flex-col md:flex-row py-6 px-11 w-60 min-h-36 bg-white rounded-lg'>
    <Link href={item.path}>
      <div className='flex flex-col items-center justify-center cursor-pointer'>
        <div className={`${item.bgColor} w-12 h-12 p-3 rounded-full gap-3`}>
          {item.icon}
        </div>
        <div className='pt-3 space-x-1 text-center'>
          <h3 className='text-cBlack-2 text-base'>
            {item.label}
          </h3>
          <p className='text-cBlack-4 text-[10px] pt-1'>
            {item.caption}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
