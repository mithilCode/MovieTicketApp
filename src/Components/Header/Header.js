import React,{ useState } from 'react'
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '800px',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius: '6px',
  p: 2,
};
const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    navigate('/');
  }
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const selectedValue = useSelector((state) => state.movie.values);
  return (
    <header className={styles.header}>
      <nav>
        <h2 onClick={handleclick}>Movie App</h2>
        <button onClick={handleOpen}>Booking</button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
          <Box sx={style}>
            <h3>Your Booking</h3>
            <table border="2" className={styles.table_set}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Total Ticket</th>
                  <th>Total Price</th>
                  <th>Booking Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  selectedValue && selectedValue.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item[0].name}</td>
                        <td>{item[0].price}</td>
                        <td>{item[1]}</td>
                        <td>{item[1]*item[0].price}</td>
                        <td>{item[3]}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </Box>

        </Modal>
      </nav>
    </header>
  )
}

export default Header;