import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sendMassageStyles from "../../styles/SendMassage.module.css";
import Header from "../Global/Header.jsx";

const EmailForm = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmails = registeredUsers.map(user => user.email);
    await sendEmails(userEmails, subject, message);
    alert('Alert sent successfully!');
  };

  const fetchRegisteredUsers = async () => {
    try {
      // Получаем список зарегистрированных пользователей с сервера
      const response = await axios.get('/api/registeredUsers');
      setRegisteredUsers(response.data);
    } catch (error) {
      console.error('Error while retrieving the list of registered users:', error);
    }
  };

  const sendEmails = async (userEmails, subject, message) => {
    try {
      // Отправляем POST-запрос с данными на сервер для отправки почты
      await axios.post('/api/sendEmails', { userEmails, subject, message });
    } catch (error) {
      console.error('Error sending mail:', error);
    }
  };

  return (
    <>
        <Header></Header>
        <div className={sendMassageStyles.formContainerBackrgound_second}>
            <div className={sendMassageStyles.mainText}>MESSAGE</div>
        </div>
        <div className={sendMassageStyles.formContainerBackrgound_one}>
        <form className={sendMassageStyles.massageForm} onSubmit={handleSubmit}>
        <label className={sendMassageStyles.massageSubject}>
        Message:
            <input className={sendMassageStyles.inputSubject}
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)} />
        </label>
        <br />
        <label className={sendMassageStyles.massageText}>
        <span className={sendMassageStyles.inputmassageLabel}>Input:</span>
            <textarea className={sendMassageStyles.inputMassageText}
            value={message} 
            onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="send">Send massage</button>
        </form>
        </div>
    </>
  );
};

export default EmailForm;
