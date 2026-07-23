import React from 'react';

const Navbar = () => {
  return (
    <div className='sticky bg-[#081C30] h-14 text-center text-white'>
      outer
      <div className='bg-[#f7f7f7] h-20 text-left text-[#081C30] text-3xl'>
        inner
      </div>
    </div>
  );
};

export default Navbar;