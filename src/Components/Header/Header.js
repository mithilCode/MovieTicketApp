import React from 'react'
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate('/');
  }
  return (
    <header className={styles.header}>
      <nav>
        <h2 onClick={handleclick}>Movie App</h2>
        <button>Booking</button>
      </nav>
    </header>
  )
}

export default Header;