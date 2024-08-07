import { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';

const DropDownMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='dropdown-menu '>
      <a href="/" className="profile " onClick={toggleMenu}>
        <div className='menu-trigger py-2'>
          <img className='h-12 w-auto' src={profile} alt="profile" />
        </div>
      </a>
      <ul className={`menu ${menuOpen ? 'open' : ''} text-darkblue mt-2 py-2 px-4`}>
        <li className='w-16'>
          <Link to='/Login' className='hover:font-bold'>Login</Link>
        </li>
        <li className='w-16'>
          <Link to='/Signup' className='hover:font-bold '>Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;