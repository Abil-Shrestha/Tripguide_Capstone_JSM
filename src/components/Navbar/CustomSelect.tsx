import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface CustomSelectProps {
  type: string;
  menu: any;
  open: boolean;
  selected: any;
  setOpen: any;
  setValue: any;
  styles: string;
}

const CustomSelect = ({ menu, open, setOpen, styles, type, setValue, selected }: CustomSelectProps) => {
  const [filteredMenu, setFilteredMenu] = useState(menu);

  useEffect(() => {
    const clickOutside = (e) => {
      if (e.target.closest('#menu') || e.target.closest('.menu-btn')) return;
      setOpen(false);
    };
    window.addEventListener('click', clickOutside);

    return () => window.removeEventListener('click', clickOutside);
  }, []);

  useEffect(() => {
    setFilteredMenu(menu);
  }, [open]);

  const handleSearch = (e) => {
    if (type === 'language') {
      setFilteredMenu(() => menu.filter((item) => (
        item.country_name.toLowerCase().includes(e.target.value.toLowerCase())
      )));
    } else {
      setFilteredMenu(() => menu.filter((item) => (
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
          || item.code.toLowerCase().includes(e.target.value.toLowerCase())
      )));
    }
  };

  return (
    <div className='relative font-DMSans' id='menu'>
      {open && (
        <div className={styles}>
          {/* Close X */}
          <div className='h-5 w-full flex justify-end items-center pr-2'>
            <button type='button' onClick={() => setOpen(false)}>
              <img src='/assets/icons/x.png' alt='close' className='h-3 w-3' />
            </button>
          </div>
          {/* Search Bar With Search Icon On Left */}
          <div className='bg-[#FCFCFD] dark:bg-cBlack-3/10 flex items-center p-2 pl-3 rounded-md mt-4 mb-2 w-[90%] mx-auto'>
            <AiOutlineSearch className='text-gray-400' />
            <div className='h-4 border-l border-gray-200 mx-4' />
            <input
              type='text'
              name='search'
              onChange={handleSearch}
              className='bg-[#FCFCFD] text-[16px] dark:bg-cBlack-2/10 placeholder:text-gray-300 placeholder:font-[10] focus:outline-none caret-gray-300'
              placeholder={type === 'language' ? 'Search language' : 'Search currency...'}
            />
          </div>
          {/* Scrollable Menu */}
          <div className='rounded-md w-[90%] mx-auto mt-4'>
            <ul className='flex flex-col gap-2'>
              {filteredMenu.map((item, i) => (
                <li key={i}>
                  <button type='button' onClick={() => setValue(item)} className='w-full'>
                    {type === 'language' ? (
                      <div className='flex items-center justify-between w-full hover:bg-[#F4F5F6] dark:hover:bg-cBlack-5/10 p-2 rounded-md transition-colors duration-200 ease-in-out'>
                        <div className='flex items-center gap-3'>
                          <img src={item.image} alt='country' className='h-5 w-5 xs:h-6 xs:w-6 rounded-full' />
                          <p>{item.country_name}</p>
                        </div>
                        {item.country_code === selected.country_code && (
                        <div>
                          <img src='/assets/icons/bluecircle.png' alt='check' className='h-5 w-5' />
                        </div>
                        )}
                      </div>
                    ) : (
                      <div className='flex items-center justify-between w-full hover:bg-[#F4F5F6] dark:hover:bg-cBlack-5/10 p-2 rounded-md transition-colors duration-200 ease-in-out'>
                        <div className='flex items-center gap-3 uppercase text-left'>
                          <p className=''>{item.code}</p>
                          <p className='truncate w-32 text-gray-400'>({item.name.slice(0, 15)})</p>
                        </div>
                        {item.code === selected.code && (
                        <div>
                          <img src='/assets/icons/bluecircle.png' alt='check' className='h-5 w-5' />
                        </div>
                        )}
                      </div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
