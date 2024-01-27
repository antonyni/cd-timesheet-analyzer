'use client'
import './page.css'
import handleFileUpload from '@/helpers/handleFileUpload';
import { useState,useEffect} from 'react';

const Home = () => {
  const [timesheet , setTimesheet] = useState();
  const [schedule , setSchedule] = useState();
  const upLoadAndInsert = (event) => {
    handleFileUpload(event,setTimesheet);
  }
  // useEffect(()=>{
  //   console.log(test);

  // },[test]);
  return (
    <main >
      <h1>CD Timesheet Analyzer</h1>
      <h2>Upload Timesheet</h2>
      <p>instructions: In the Time Clock tab, go to timesheets and export the current week</p>
      <input type="file" onChange={event => upLoadAndInsert(event,setTimesheet)} />
      <h2>Upload Shift Schedule</h2>
      <p>instructions: In the Job Scheduling tab, while on the desired week click on "Actions" and then "Export week"</p>
      <input type="file" onChange={event => upLoadAndInsert(event,setSchedule)} />
      
    </main>  
  )
}

export default Home;