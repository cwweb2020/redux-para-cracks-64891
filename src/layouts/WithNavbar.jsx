import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'


const WithNavbar = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default WithNavbar