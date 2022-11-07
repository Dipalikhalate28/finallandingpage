import { Style } from '@mui/icons-material';
import { Divider, Grid, Paper, Typography } from '@mui/material'
import { style } from '@mui/system';
import React from 'react'
// import '../style/footer.css'
import styles from "../styles/footer.module.css";

function Footer() {
    return (
        <Grid container  sm={12} md={12} lg={12}
             className={styles.footer}>
                
            <Grid item className={styles["heading-container"]}>
                <Typography variant='h2'>humancloud</Typography>
            </Grid>
            <Grid item className={styles.location}>
                <div className={styles.heading}>HEADQUARTER</div>
                <div className={styles.detail}>
                    <span>California</span>
                    <p>14100 Saratoga-Sunnyvale Road, Saratoga, CA-95070, USA</p>
                </div>

                <div className={styles.heading}>DEVELOPMENT CENTRES</div>
                <Grid className={styles.detail}>
                    <span>Pune</span>
                    <p>Level 2, Prime Business Bay, Opp. Croma, Veerbhadra Nagar, Baner, Pune 411045, India</p>
                </Grid>
                <div className={styles.detail}>
                    <span>Hyderabad</span>
                    <p>T-Hub 2.0, 20, Inorbit Mall Rd, Madhapur, Telangana 500081, India</p>
                </div>
            </Grid>
            <Divider orientation={styles.vertical} flexItem />
            <Grid className={styles.contact} container>
                <Grid className={styles.detail}>
                    <div className={styles.heading}>CONTACT</div>
                    <span>Sales</span>
                    <p>sales@humancloud.co.in <br />India: +91 85301 16304 <br />US: +1 661 577 4443</p>
                    <span>Customer Care</span>
                    <p>info@humancloud.co.in</p>
                </Grid>
                <Grid className={styles.detail}>
                    <div className={styles.heading}>QUICK LINKS</div>
                    <span>About Us</span>
                    <span>Careers</span>
                    <span>Blogs</span>
                    <span>Contact Us</span>
                </Grid>
                <Grid className={styles.detail}>
                    <div className={styles.heading}>FOLLOW</div>
                    <Grid className={styles['email-container']}>
                        <input type="text" name="email" placeholder='your email ...' id="email" />
                        <div>Subscribe</div>
                    </Grid>
                </Grid>

            </Grid>
            
        </Grid>
    )
}

export default Footer