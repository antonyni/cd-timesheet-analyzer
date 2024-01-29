import Image from 'next/image'
import './page.css'
import UploadExcel from '@/components/UploadExcel'

const Home = () => {
  return (
    <main >
      <h1>excel helper</h1>
      <UploadExcel/>
      

    </main>  
  )
}

export default Home;