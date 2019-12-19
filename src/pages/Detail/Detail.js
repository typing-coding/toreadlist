import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Detail.scss'

class Detail extends Component {
    render(){
        return (
            <div className="wrap">
                <header className="header">
                    <button type="button" className="btn_header_back"><span className="hidden">뒤로</span></button>
                    <h1 className="page_title">To Read List</h1>
                </header>
                <div className="container">
                    <div className="detail_view">
                        <section className="detail_column basic_column">
                            <h2 className="hidden">기본 책 정보</h2>
                            <div className="detail_img">
                                <div className="imgbox"><img src="" alt="" /></div>
                            </div>
                            <div className="box_area">
                                <h2 className="detail_title">제목</h2>
                                <p className="detail_subtitle">부제목</p>
                                <div className="detail_stars">
                                    <span className="star"></span><span className="star"></span><span className="star"></span>
                                </div>
                            </div>
                        </section>
                        <section className="detail_column basic_info_column">
                            <h2 className="hidden">상세 책 정보</h2>
                            <div className="box_area">
                                <dl>
                                    <dt>지은이</dt>
                                    <dd>지은이 이름</dd>
                                </dl>
                                <dl>
                                    <dt>출판사</dt>
                                    <dd>출판사 이름</dd>
                                </dl>
                                <dl>
                                    <dt>출판연도</dt>
                                    <dd>0000</dd>
                                </dl>
                            </div>
                        </section>
                        <section className="detail_column description_column">
                            <div className="box_area">
                                <h2 className="main_title">책 설명</h2>
                                <p className="detail_description">
                                    책 설명 TEXT
                                </p>
                            </div>
                        </section>
                        <section className="detail_column my_comment_column">
                            <h2 className="hidden">책 감상</h2>
                            <div className="box_area">
                                <p className="detail_comment">
                                    책 감상 코멘트
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail