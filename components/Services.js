import React, { useEffect } from 'react'
import style from "../styles/services.module.css"
import { partnersimage } from '../images/svgexports'
import { clientsimage } from '../images/svgexports'
import { useState } from 'react'
import { Card } from '@mui/material'
import { Stack } from '@mui/system'

function Services() {
    const [width, setWidth] = useState("")
    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, []);

    const updateWidthAndHeight = () => {
        console.log(window.innerWidth)
        setWidth(window.innerWidth);
    };
    return (
        <Stack className={style.services}>
            <div className={style["services-text"]}>
                <div>Services</div>
                <div>A platform connecting partners and clients for improved and efficient collaboration.</div>
            </div>
           

           
        </Stack>
    )
}

export default Services
