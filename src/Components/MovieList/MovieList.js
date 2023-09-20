import React from 'react';
import styles from './MovieList.module.scss';
import { data } from './data';
import { RiMovie2Line } from "react-icons/ri";
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
const MovieList = () => {
    const navigate=useNavigate();
    const handleclick = (name) => {
        const nameset=name.toLowerCase().split(" ").join("");
        navigate(`/movie/${nameset}`);
    }
    return (
        <section className={styles.movie_list}>
            <Grid container spacing={3} className={styles.movie_listbox}>
                {data.map((item, index) => {
                    return (
                        <Grid item xs={12} md={4} lg={3} key={item.key}>
                            <div>
                                <div className={styles.movie_description}>
                                    <img src={item.poster} alt="" />
                                    <h3><RiMovie2Line />{item.name}</h3>
                                    <div className={styles.movie_details}>
                                        <p>Genre: <b>{item.genre}</b></p>
                                        <p>Relese Data: <b>{item.release_date}</b></p>
                                    </div>
                                    <button className={styles.booking_btn} onClick={()=>handleclick(item.name)}>Book Tickets</button>
                                </div>
                            </div>
                        </Grid>
                    )
                }
                )}
            </Grid>

        </section>
    )
}
export default MovieList;