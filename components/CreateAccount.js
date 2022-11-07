import { Card, Stack } from '@mui/material'
import React from 'react'
import styles from '../styles/createaccount.module.css'
import Button from '@mui/material/Button';

function CreateAccount() {
  const stylediv={ fontSize: '20px' }
  return (
    <Stack>
    <div className={styles.createaccount}>
      <div>
        <div style={stylediv}>Single Stop knowledge store for all.</div>
        <p>A little bit of information that talks about the product, urging the partner/client to sign up.</p>
        <Button variant="contained" className={styles.createbtn}>Create Account</Button>

        {/* <div style={{ background: '#FF9E00', color: '#fff', width: '200px', padding: '5px 20px', textAlign: 'center', borderRadius: '20px' }}>Create Account</div> */}
      </div>
    </div>
    </Stack>
  )
}

export default CreateAccount