'use client'
import './page.css'
import FileInput from '@/components/FileInput';
import { useState, useEffect } from 'react';
import simplifySchedule from '@/helpers/simplifySchedule';
import makeTimesheetAnalysis from '@/helpers/makeTimeSheetAnalysis';
import simplifyTeam from '@/helpers/simplifyTeam';
const Home = () => {
  const [timesheetExcel, setTimesheetExcel] = useState();
  const [scheduleExcel, setScheduleExcel] = useState();
  const [simplifiedSchedule, setSimplifiedSchedule] = useState();
  const [acceptablePercentage, setAcceptablePercentage] = useState(80);
  const [teamExcel, setTeamExcel] = useState();
  const [teamMap, setTeamMap] = useState();

  useEffect(() => {
    if (scheduleExcel) {
      simplifySchedule(scheduleExcel, setSimplifiedSchedule);
    }
  }, [scheduleExcel]);

  useEffect(() => {
    if (teamExcel) {
      simplifyTeam(teamExcel, setTeamMap);
    }
  }, [teamExcel]);

  return (
    <main >
      <h1>CD Timesheet Analyzer</h1>
      <h3>NOTE: for both exports, make sure all of the extra options are UNCHECKED except for direct manager on timesheets</h3>
      <h2>Upload Timesheet</h2>
      <p>instructions: In the Time Clock tab, go to timesheets and export the current week</p>
      <FileInput setWorksheet={setTimesheetExcel} />
      <h2>Upload Shift Schedule</h2>
      <p>instructions: In the Job Scheduling tab, click on View options, then List view, then choose the time frame and export.</p>
      <FileInput setWorksheet={setScheduleExcel} />
      <h2>Upload Teams</h2>
      <p>instructions: Upload an excel file with the First and Last Name and Team Name of the intern.</p>
      <FileInput setWorksheet={setTeamExcel} />
      
      {
        simplifiedSchedule && timesheetExcel?
          <div style={{ marginTop: "1em", marginBottom: "1em" }}>
            <div style={{ marginBottom: "1em", display: "flex" }}>
              <h3 style={{ margin: "0 .5em 0 0" }}>Acceptable attendance percentage: </h3>
              <input onChange={(event) => {
                setAcceptablePercentage(event.target.value);
              }
              }
                style={{ width: "30px" }} type="text" value={acceptablePercentage} />
            </div>
            <div>
              <button
                onClick={() => {
                  if (!acceptablePercentage) {
                    alert('set a valid percentage')
                  }
                  else {
                    makeTimesheetAnalysis(timesheetExcel, simplifiedSchedule, acceptablePercentage, teamMap);
                  }
                }
                }>
                Make Timesheet Analysis
              </button>
            </div>
          </div>

          : ""
      }
    </main>
  )
}

export default Home;