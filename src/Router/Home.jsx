import { useRef } from 'react'
import Services from "../components/Main/Services"
import Experience from "../components/Experience/Experience"
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import styles from './Home.module.css'



const Home = () => {
    const servicesRef = useRef(null); // Create a ref for the Services section
return(
    <>
<div className="m-0 p-4"><Hero scrollToServices={() => servicesRef.current.scrollIntoView({ behavior: 'smooth' })} /></div>
<div className={`mx-1 mt-14  ${styles.homeContainer}`} ref={servicesRef}><Services /></div>
<div className="m-0 p-4"><Experience /></div>
<div className="m-0 p-4"><Footer /></div>



</>
)
}

export default Home