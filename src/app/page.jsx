import Image from 'next/image'
import './page.css'
import * as DateHelper from 'date-fns'
import getDateFromString from '@/helpers/getDateFromString'
import getWeekBefore from '@/helpers/getWeekBefore'

const Home = () => {
  console.log(getDateFromString("01-02-2024 "));
  console.log(getWeekBefore(getDateFromString("01-02-2024 ")));


  // console.log(DateHelper.startOfWeek(new Date(testDate.getFullYear(),testDate.getMonth(),testDate.getDay()-7)).toLocaleDateString());

  return (
    <main >
      <h1>excel helper</h1>

    </main>  
  )
}

export default Home;