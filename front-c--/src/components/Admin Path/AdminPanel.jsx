import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import adminPanelStyles from "../../styles/AdminPanel.module.css";
import toast, { Toaster } from "react-hot-toast";
import Header from "../Global/Header.jsx";
import exit from "../../images/logout.png";

function AdminPanel(){

    return(
        <>
        <Toaster />
        <Header></Header>
        <div className={adminPanelStyles.formContainerBackrgound_second}>
        <div className={adminPanelStyles.mainText}>Admin Panel</div>
       </div>
        <div className={adminPanelStyles.sidebar}>
        <Link to="/edit-users" className={adminPanelStyles.link_users}>
         Edit Users
        </Link>
        <Link to="/edit-products" className={adminPanelStyles.link_products}>
         Edit Products
        </Link>
        <Link to="/admin-log" className={adminPanelStyles.link_log}>
         Log
        </Link>
        <Link to="/log-in" className={adminPanelStyles.linkToExit}>
          <img src={exit} alt="exit" className={adminPanelStyles.exit} />
         Log out
        </Link>
        </div>
        </>
  );
}

export default AdminPanel;

