import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addValue } from '../../Store/slice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../MovieList/data';
import styles from './Movie.module.scss';
import { Grid } from '@mui/material';
import { BsDot, } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import Header from '../Header/Header';
import { MdDateRange, MdEventAvailable, MdEventSeat } from "react-icons/md";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '6px',
    p: 2,
};
const MovieDetails = () => {
    const params = useParams();
    const [total, setTotal] = useState();
    const [getdata, setGetdata] = useState();
    const [booking, setBooking] = useState(1);
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState();
    const [date, setDate] = useState();
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const book = [];
    const increment = (e) => {
        e.preventDefault();
        if (getdata.available_seats <= booking) {
            toast.error("Booking is Full", {
                position: toast.POSITION.TOP_CENTER
            });
            return
        } else {
            setBooking(booking + 1);
            setPrice(getdata.price * (booking + 1));
        }
    }
    const decrement = (e) => {
        e.preventDefault();
        if (booking <= 0) {
            setBooking(0);
        } else {
            setBooking(booking - 1);
            setPrice(price - getdata.price);
        }
    }
    const getcount = async () => {
        for (let i = 0; i < data.length; i++) {
            if (params.movie === data[i].name.toLowerCase().split(" ").join("")) {
                await setTotal(i);
            }
        }
        setGetdata(data[total])
    }
    const getdate = (e) => {
        setDate(e.target.value)
    }
    const handleproceed = (e) => {
        e.preventDefault();
        if (date) {
            if (booking > 0) {
                toast.success("SuccessFully Booked", {
                    position: toast.POSITION.TOP_CENTER
                });
                setOpen(false);
                book.push(getdata);
                book.push(booking)
                book.push(price);
                book.push(date);
                dispatch(addValue(book));
                navigate('/');
            } else {
                toast.error("Select At least 1 Sheat", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        } else {
            toast.error("Select Date", {
                position: toast.POSITION.TOP_CENTER
            });
        }

    }
    useEffect(() => {
        getcount();
    }, [total])
    return (
        <>
            <Header />
            <section className={styles.movie_details}>
                <Grid container spacing={5} className={styles.movie_listbox}>
                    <Grid item xs={12} md={4} lg={3}>
                        <img src={getdata && getdata.poster} alt="poster" />
                    </Grid>
                    <Grid item xs={12} md={8} lg={5}>
                        <div className={styles.movie_desc}>
                            <h2><BsDot className={styles.name_dot} />{getdata && getdata.name}</h2>
                            <p className={styles.display_set}>  {getdata && getdata.description}</p>
                            <p className={styles.display_set}> <BiCategoryAlt /> Category  &nbsp;<b> {getdata && getdata.genre}</b></p>
                            <p className={styles.display_set}> <MdDateRange /> Release Date &nbsp;<b>{getdata && getdata.release_date}</b></p>
                            <p className={styles.display_set}> <MdEventAvailable />  Available Seats &nbsp; <b>{getdata && getdata.available_seats}</b></p>
                            <p className={styles.display_set}> <IoTicketSharp /> Price &nbsp;<b>{getdata && getdata.price} RS</b></p>
                            <button className={styles.book_btn} onClick={handleOpen}>Book Now</button>
                        </div>
                    </Grid>
                </Grid>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
                    <Box sx={style}>
                        <form>
                            <h3><MdEventSeat /> Book Seats</h3>
                            <div className={styles.total_seats}>
                                <p><span className={styles.user_booking}>{booking}</span></p>
                            </div>
                            <div className={styles.btn_group}>
                                <button onClick={decrement}>Remove</button>
                                <button onClick={increment}>Add</button>
                            </div>
                            <div className={styles.time_set}>
                                <h4>Select Booking Date</h4>
                                <input type="datetime-local" name='date' value={date} onChange={getdate} required />
                            </div>
                            <p>Total Avalibal Seats {getdata && getdata.available_seats}</p>
                            <h3>{price} Rs.</h3>
                            <button onClick={handleproceed} className={styles.proceed_btn}>Proceed</button>
                        </form>
                    </Box>
                </Modal>
            </section>
        </>
    )
}

export default MovieDetails;