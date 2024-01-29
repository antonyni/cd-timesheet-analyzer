'use client'
import './page.css'
import FileInput from '@/components/FileInput';
import { useState, useEffect } from 'react';
import simplifySchedule from '@/helpers/simplifySchedule';
import makeTimesheetAnalysis from '@/helpers/makeTimeSheetAnalysis';
const Home = () => {
  const [timesheetExcel, setTimesheetExcel] = useState();
  const [scheduleExcel, setScheduleExcel] = useState();
  const [simplifiedSchedule, setSimplifiedSchedule] = useState();

  useEffect(() => {
    if (scheduleExcel) {
      console.log(scheduleExcel);
      simplifySchedule(scheduleExcel, setSimplifiedSchedule);
    }
  }, [scheduleExcel]);
  return (
    <main >
      <h1>CD Timesheet Analyzer</h1>
      <h3>NOTE: for both exports, make sure all of the extra options are UNCHECKED</h3>
      <h2>Upload Timesheet</h2>
      <p>instructions: In the Time Clock tab, go to timesheets and export the current week</p>
      <FileInput setWorksheet={setTimesheetExcel} />
      <h2>Upload Shift Schedule</h2>
      <p>instructions: In the Job Scheduling tab, while on the desired week click on "Actions" and then "Export week"</p>
      <FileInput setWorksheet={setScheduleExcel} />
      {
        simplifiedSchedule && timesheetExcel ?
          <div style={{ marginTop: "1em" }}>
            <button
              onClick={() => makeTimesheetAnalysis(timesheetExcel, simplifiedSchedule)
              }>
              Make Timesheet Analysis
            </button>
          </div>

          : ""
      }
    </main>
  )
}

export default Home;