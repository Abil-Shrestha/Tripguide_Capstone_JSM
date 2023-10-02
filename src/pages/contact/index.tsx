import { useEffect } from 'react';

import { GetInTouch } from '@components';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='max-w-7xl mx-6 md:mx-12 xl:mx-auto'>
        <GetInTouch />
      </div>
    </div>
  );
};

export default Contact;
