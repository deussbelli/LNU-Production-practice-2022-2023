import React from "react";
import { Link } from "react-router-dom";
import footer from "../../styles/Footer.module.css"

function Footer() {

    return (
        <>
            <div className={footer.footerContainer}>
                <ul className={footer.list}>
                    <li>Instagram</li>
                    <li>Email</li>
                    <li>License</li>
                    <li>Telegram</li>
                    <li>Contacts</li>
                    <li>Refund</li>
                </ul>
            </div>
        </>
    )
}

export default Footer