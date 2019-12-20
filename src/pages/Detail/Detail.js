import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Detail.scss'

const data = {
    'images' : 'https://image.aladin.co.kr/product/18456/45/cover500/s382636510_1.jpg',
    'title': '팩트풀니스',
    'subtitle': '우리가 세상을 오해하는 10가지 이유와 세상이 생각보다 괜찮은 이유',
    'star': '5',
    'author': '한스 로슬링',
    'publisher': '김영사',
    'pubdate': '20190310',
    'description': '전 세계 100만부 돌파 세계 지성계를 사로잡은 글로벌 베스트셀러 마침내 출간 <br />전 세계적으로 확증편향이 기승을 부리는 탈진실의 시대에, 막연한 두려움과 편견을 이기는 팩트의 중요성을 일깨우는 세계적 역작',
    'comment': '세상을 정확히 분석하는 여러 방식을 배울 수 있는 좋은 책'
};

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            detail: {}
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/bookdetail?id=1')
        .then(data => data.json())
        .then(data=>{
            this.setState({detail:data});
        });
    }
    render(){
        const { detail } = this.state;
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
                                <div className="imgbox"><img src={detail.bigimages} alt="" /></div>
                            </div>
                            <div className="box_area">
                                <h2 className="detail_title">{detail.title}</h2>
                                <p className="detail_subtitle">{detail.subtitle}</p>
                                <div className="detail_stars">
                                    <span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span><span className="star"></span>
                                </div>
                            </div>
                        </section>
                        <section className="detail_column basic_info_column">
                            <h2 className="hidden">상세 책 정보</h2>
                            <div className="box_area">
                                <dl>
                                    <dt>지은이</dt>
                                    <dd>{detail.author}</dd>
                                </dl>
                                <dl>
                                    <dt>출판사</dt>
                                    <dd>{detail.publisher}</dd>
                                </dl>
                                <dl>
                                    <dt>출판연도</dt>
                                    <dd>{detail.pubdate}</dd>
                                </dl>
                            </div>
                        </section>
                        <section className="detail_column description_column">
                            <div className="box_area">
                                <h2 className="main_title">책 설명</h2>
                                <p className="detail_description">
                                    {detail.description}
                                </p>
                            </div>
                        </section>
                        <section className="detail_column my_comment_column">
                            <h2 className="hidden">책 감상</h2>
                            <div className="box_area">
                                <p className="detail_comment">
                                    {detail.comment}
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