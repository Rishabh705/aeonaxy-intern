import MaxWidthWrapper from './MaxWidthWrapper';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
const Header = () => {
  return (
    <div className='bg-white sticky z-50 top-0 inset-x-0'>
      <header className='relative bg-white border-b border-gray-300'>
        <MaxWidthWrapper className="max-w-screen-2xl">
          <div className='flex flex-row items-center justify-between py-4 lg:py-7'>
            <div className='flex items-center gap-4 lg:gap-14'>
              <Link to='/'>
                <img src='/paypal.svg' alt='PayPal' className='w-8 h-auto' />
              </Link>
              <nav className='hidden lg:flex flex-grow gap-16 text-blue-900'>
                <Link to='/' className='text-lg font-medium'>Personal</Link>
                <Link to='/' className='text-lg font-medium'>Business</Link>
                <Link to='/' className='text-lg font-medium'>Developer</Link>
                <Link to='/' className='text-lg font-medium'>Help</Link>
              </nav>
            </div>
            <div className='flex items-center gap-3 lg:gap-5'>
              <Link to='/' className='text-sm md:text-lg  text-blue-900 font-medium border-2 border-blue-800 rounded-full px-5 py-2 lg:px-8 lg:py-3 hover:bg-blue-800 hover:text-white'>
                Log In
              </Link>
              <Link to='/' className='text-sm md:text-lg font-medium bg-blue-800 text-white rounded-full px-5 py-2 lg:px-8 lg:py-3'>
                Sign Up
              </Link>
              <Hamburger />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Header;
