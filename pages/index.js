
import { useRouter } from 'next/router'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/landing')


  }, [])

  return (
    <div className={styles.container}>
    </div>
  )
}
