import React, { useContext } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { basketContext } from '../../../Context/BasketContext';
import { NavLink, useNavigate } from 'react-router-dom';

function UserNavbar() {
    const navigate = useNavigate();
    const handleNavigateToBasket = () => {
        navigate("/basket")
    }
    const { basket, setBasket } = useContext(basketContext)
    return (
        <>
            <div className="header">
                <div className="header-wrapper">
                    <div className="logo-img">
                        <h1>COLOSHOP</h1>
                    </div>
                    <div className="head-navlist">
                        <ul>
                            <li><NavLink to="/" end className="nav-link" >Home</NavLink></li>
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
                        <i onClick={handleNavigateToBasket} className="bi bi-bag-check-fill"></i>
                        <span>({basket.length})</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserNavbar