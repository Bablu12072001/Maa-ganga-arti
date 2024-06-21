import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'Maa Ganga Arti',
  description: 'please join us for puja',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}