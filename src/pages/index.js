import {React,useState} from 'react'
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection'
import {homeObjTwo,homeObjThree, homeObjOne} from "../components/infoSection/Data";
import Product from '../components/Products'
//import Footer from '../components/Footer'

const Home = () => {
    
    const [isopen,setIsOpen] = useState(false); 
    
    const toogle = () =>
    {
        setIsOpen(!isopen);
    }

    return (
        <>
         <Sidebar isopen={isopen} toogle={toogle}/>
         <Navbar  toogle={toogle}/>
         <HeroSection />
         <InfoSection {...homeObjTwo} />
         <Product />
         <InfoSection {...homeObjOne}/>
            
        </>
    )
}
export default Home


