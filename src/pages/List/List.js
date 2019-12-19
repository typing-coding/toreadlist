import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './List.scss'

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            booklist: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/booklist')
        .then(data => data.json())
        .then(data=>{
            this.setState({booklist:data});
        });
    }
    render(){
        const { booklist } = this.state;
        return (
            <div className="wrap">
                <header className="header">
                    <button type="button" className="btn_header_back"><span className="hidden">뒤로</span></button>
                    <h1 className="page_title">To Read List</h1>
                </header>
                <div className="container">
                    <ul>
                        {
                            booklist.map((item,index)=>(
                                    <li key={`booklist${index}`}>
                                        <Link to="/detail" className="book_breif">
                                            <div className="imgbox"><img src={item.images} alt="" /></div>
                                            <div className="book_info">
                                                <p className="book_title">{item.title}</p>
                                                <p className="book_subtitle">{item.subtitle}</p>
                                                <div className="book_stars">
                                                    <span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default List