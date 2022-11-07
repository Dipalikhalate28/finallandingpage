import { Grid } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import styles from "../styles/navbar.module.css"

const Navbar = ({ scroll }) => {

    const [active, setActive] = useState("");

    return (
        <>
        <Grid container>
            <div
                className={
                    (scroll ? `${styles["nav-header"]} ${styles["scrolled"]}` : `${styles["nav-header"]}`) + active
                }
            >
                

                <div className={styles.navbar}>
                    <ul>
                        <li>About</li>
                        <li>Find Talent</li>
                        <li>Find Work</li>
                        <li>Blogs</li>
                        <li className={styles.active}>Let's Connect</li>
                    </ul>
                </div>
            </div>
            </Grid> 
        </>
    )
}

export default Navbar