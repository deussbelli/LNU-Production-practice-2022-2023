import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import editUsersStyles from "../../styles/AdminEditUsers.module.css";
import Header from "../Global/Header.jsx";
import block_user from "../../images/blocked.png";
import delete_user from "../../images/delete.png";
import change_status from "../../images/status-change.png";
import edit_user from "../../images/edit.png";


const EditUsers = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);  

    useEffect(() => {
      axios.get('/api/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    }, []);
  
    const handleDeleteUser = async (userId) => {
      try {
        await axios.delete(`/api/users/${userId}`);
        setUsers(users.filter(user => user.id !== userId));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };
  
    const mockUsers = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',        
        hash: "$2b$12$16.YA3n1sO9L4gNrdiCq4evs3Ko3EE0LqoTPhaRqHXanOyfXQlczG",
        phoneNumber: '123-456-7890',
        dateOfBirth: '1990-01-01',
        address: '123 Main St, City',
        orderHistory: 'Order1, Order2',
        status: 'User',
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        hash: "$2b$12$EZZPSxVzN15sEFcqU7DdbOWOnfdUZhdghe0P5/fx7J6F8/VddXEDK",
        phoneNumber: '987-654-3210',
        dateOfBirth: '1995-05-15',
        address: '456 Oak St, Town',
        orderHistory: 'Order3, Order4',
        status: 'Admin',
      },
    ];
    
    useEffect(() => {
      if (users.length === 0) {
        setUsers(mockUsers);
      }
    }, [users]);
    
  
    const handleEditUser = (userId) => {
        console.log(`Editing user with ID: ${userId}`);
        navigate(`/profile/${userId}`); 
        /* navigate(`/edit-user/${userId}`);*/
      };
    
      const handleBlockUser = async (userId) => {
        console.log(`Blocking user with ID: ${userId}`);
    
       try {
          await axios.put(`/api/users/${userId}/block`);
          console.log(`User with ID ${userId} has been blocked.`);
        } catch (error) {
          console.error('Error blocking user:', error);
        }
      };
    
      const handleChangeStatus = async (userId) => {
        console.log(`Changing status for user with ID: ${userId}`);
    
         /*try {
            await axios.put(`/api/users/${userId}/change-status`);
            console.log(`Status has been changed for user with ID ${userId}.`);
          } catch (error) {
            console.error('Error changing user status:', error);
          }*/
      };
  
    return (
      <>
      <Header></Header>
      <div className={editUsersStyles.editUsersContainer}>
        <div className={editUsersStyles.formContainerBackrgound_second}>
          <div className={editUsersStyles.mainText}>USERS</div>
        </div>
        <br></br>
        <table className={editUsersStyles.usersTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Hash</th>
              <th>Phone Number</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Order History</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.email}</td>                
                <td>{user.hash}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>{user.orderHistory}</td>
                <td>{user.status}</td>
                <td>
                  <button className={editUsersStyles.editButton} onClick={() => handleEditUser(user.id)}>                            
                  <img src={edit_user} alt="Edit" className={editUsersStyles.edit} /></button>
                  <button className={editUsersStyles.blockButton} onClick={() => handleBlockUser(user.id)}>
                  <img src={block_user} alt="Block" className={editUsersStyles.block} /></button>
                  <button className={editUsersStyles.statusButton} onClick={() => handleChangeStatus(user.id)}>
                  <img src={change_status} alt="Change Status" className={editUsersStyles.status} /></button>
                  <button className={editUsersStyles.deleteButton} onClick={() => handleDeleteUser(user.id)}>
                  <img src={delete_user} alt="Delete" className={editUsersStyles.delete} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
    );
  };
  
  export default EditUsers;