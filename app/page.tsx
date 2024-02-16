import Image from 'next/image'
import styles from './page.module.css'
import Userspage from './user/page'
import Scroller from './components/Scroller'

export default function Home() {
  return (
    <>
      <Userspage /> 
      <Scroller />
    </>
  )
}
