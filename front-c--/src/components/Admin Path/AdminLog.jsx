import React, { useState, useEffect } from "react";
import axios from 'axios';
import adminLogStyles from "../../styles/AdminLog.module.css";
import Header from "../Global/Header.jsx";


const LogTable = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('../../../../../back-c--/database-logs.log')
    .then(response => {
      const logRows = response.data.split('\n');
      setLogs(logRows);
    })
    .catch(error => console.error('Error fetching logs:', error));  
  }, []);

  return (
    <>
    <Header></Header>
    <div>
        <div className={adminLogStyles.formContainerBackrgound_second}>
        <div className={adminLogStyles.mainText}>Logs</div>
       </div>
      <table className={adminLogStyles.tableLog}>
        <thead>
          <tr>
            <th>Log Entry</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default LogTable;