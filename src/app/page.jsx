import Image from 'next/image'
import './page.css'
import UploadExcel from '@/components/UploadExcel'
import * as DateHelper from 'date-fns'
const Home = () => {
  console.log(DateHelper.getWeek(new Date("2023-1-31"),{weekStartsOn:0}));

  return (
    <main >
      <h1>excel helper</h1>
      <UploadExcel/>
      

    </main>  
  )
}

export default Home;