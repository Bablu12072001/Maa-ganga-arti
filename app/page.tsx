import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Booking from './components/Booking/Booking'
import Client from "./components/Client/index"
import Scrolling from "./components/Scrolling/scrollong"
import BookEvent from "./components/BookEvent/index"
import BookingCard from "./components/BookingCard/index"
import AllGallery from "./components/allGallery/index"
 
 
import Newsletter from './components/Newsletter/Newsletter';
 



export default function Home() {
  return (
    
    <main>
      <Banner />
      <Scrolling/>
      <Features />
      <Cook />
      <Expert />
      <Booking/>
      <Gallery />
      <AllGallery/>
      <Client />
      <BookingCard/>
      <BookEvent/>
      {/* <Newsletter /> */}
      </main>
      
  )
}
