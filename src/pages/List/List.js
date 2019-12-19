import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './List.scss'

class List extends Component {
    render(){
        return (
            <div className="wrap">
                <header className="header">
                    <button type="button" className="btn_header_back"><span className="hidden">뒤로</span></button>
                    <h1 className="page_title">To Read List</h1>
                </header>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/detail" className="book_breif">
                                <div className="imgbox"><img src="" alt="" /></div>
                                <div className="book_info">
                                    <p className="book_title">제목</p>
                                    <p className="book_subtitle">부제목</p>
                                    <div className="book_stars">
                                        <span className="star"></span>
                                        <span className="star"></span>
                                        <span className="star"></span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/detail" className="book_breif">
                                <div className="imgbox"><img src="" alt="" /></div>
                                <div className="book_info">
                                    <p className="book_title">제목</p>
                                    <p className="book_subtitle">부제목</p>
                                    <div className="book_stars">
                                        <span className="star"></span>
                                        <span className="star"></span>
                                        <span className="star"></span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/detail" className="book_breif">
                                <div className="imgbox"><img src="" alt="" /></div>
                                <div className="book_info">
                                    <p className="book_title">제목</p>
                                    <p className="book_subtitle">부제목</p>
                                    <div className="book_stars">
                                        <span className="star"></span>
                                        <span className="star"></span>
                                        <span className="star"></span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default List