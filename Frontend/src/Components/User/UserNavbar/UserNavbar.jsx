import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
function UserNavbar() {
  return (
    <>
    <div className="header">
        <div className="header-wrapper">
            <div className="logo-img">
                <h1>COLOSHOP</h1>
            </div>
            <div className="head-navlist">
                <ul>
                    <li>HOME</li>
                    <li>SHOP</li>
                    <li>PROMOTION</li>
                    <li>PAGES</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="icons">
            <i className="bi bi-search-heart"></i>
            <i className="bi bi-person"></i>
            <i className="bi bi-bag-check-fill"></i>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserNavbar