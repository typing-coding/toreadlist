const express = require('express');

const router = express.Router();

const bookdata = [{
    'id': '1',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/145/943/14594377.jpg?type=m140&udate=20191217',
    'bigimages': 'https://image.aladin.co.kr/product/18456/45/cover500/s382636510_1.jpg',
    'title': '팩트풀니스',
    'subtitle': '우리가 세상을 오해하는 10가지 이유와 세상이 생각보다 괜찮은 이유',
    'star': '5',
    'author': '한스 로슬링',
    'publisher': '김영사',
    'pubdate': '20190310',
    'description': '전 세계 100만부 돌파 세계 지성계를 사로잡은 글로벌 베스트셀러 마침내 출간 <br />전 세계적으로 확증편향이 기승을 부리는 탈진실의 시대에, 막연한 두려움과 편견을 이기는 팩트의 중요성을 일깨우는 세계적 역작',
    'comment': '세상을 정확히 분석하는 여러 방식을 배울 수 있는 좋은 책'
},{
    'id': '2',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/150/770/15077085.jpg?type=m140&udate=20191031',
    'bigimages': 'https://image.aladin.co.kr/product/19654/27/cover500/8965135583_3.jpg',
    'title': '유럽 도시 기행 1',
    'subtitle': '아테네, 로마, 이스탄불, 파리 편',
    'star': '5',
    'author': '유시민',
    'publisher': '생각의길',
    'pubdate': '20190709',
    'description': '아테네 플라카지구, 로마의 포로 로마노, 이스탄불 골든 혼, 파리 라탱지구, 빈의 제체시온, 부다페스트 언드라시 거리, 이르쿠츠크 데카브리스트의 집, 이런 곳에 가고 싶었다. 다른 대륙에도 관심이 없지는 않았지만, 스무 살 무렵부터 내 마음을 설레게 만든 곳은 주로 유럽의 도시들이었다. 그곳 사람들이 훌륭한 사회를 만들어 좋은 삶을 산다고 생각했기 때문이다. <br />그들은 어떻게 더 자유롭고 너그럽고 풍요로운 사회를 만들 수 있었을까? 이 질문에 대한 답을 찾으려고 닥치는 대로 책을 읽다가 소설보다 더 극적인 역사의 사건들을 만났고, 그 주인공들이 살고 죽은 도시의 공간을 알게 되었다. 삶의 환희와 슬픔, 인간의 숭고함과 비천함, 열정의 아름다움과 욕망의 맹목성을 깨닫게 해주었던 사람과 사건의 이야기를 그곳에 가서 들어보고 싶었다.',
    'comment': '해당 도시들을 여행가기 전에 읽어보면 좋을 책'
},{
    'id': '3',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/108/443/10844357.jpg?type=m140&udate=20190828',
    'bigimages': 'https://image.aladin.co.kr/product/8778/30/cover500/8950958988_1.jpg',
    'title': '테드 토크',
    'subtitle': 'TED 공식 프레젠테이션 가이드',
    'star': '5',
    'author': '크리스 앤더슨',
    'publisher': '21세기북스',
    'pubdate': '20160725',
    'description': '18분의 기적, TED가 공개하는 마법 같은 스피치 노하우! <br /> TED는 1984년 미국에서 소수 엘리트들의 지적 사교모임으로 단발성 행사로 기획되었다. 기술(TECHNOLOGY), 엔터테인먼트(ENTERTAINMENT), 디자인(DESIGN)의 첫 자를 따서 ‘TED’라고 부르는 연례행사로 시작한 것은 1990년부터다. 이후 유료 서비스였던 강연 동영상을 무료로 전환하며 비영리 단체로 만들었고, ‘널리 퍼뜨려야 할 아이디어’라는 슬로건으로 작가, 정치인, 학자, 예술인, 과학자 등 각계각층의 강연자들을 무대에 올렸다. 100개의 무료 강연 동영상, 전 세계 시청횟수 39억 뷰. 사람들은 왜 유독 TED방식의 강연에 마음을 빼앗기는 걸까? 그리고 TED 강연의 무엇이 사람들의 마음을 움직이게 하는 걸까?',
    'comment': '그 TED의 사회자가 소개하는 최고의 PT들과 배울 점'
},{
    'id': '4',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/140/366/14036671.jpg?type=m140&udate=20181123',
    'bigimages': 'https://image.aladin.co.kr/product/16234/14/cover500/k782534278_1.jpg',
    'title': '어떻게 민주주의는 무너지는가',
    'star': '5',
    'author': '스티븐 레비츠키, 대니얼 지블랫',
    'publisher': '어크로스',
    'pubdate': '20181002',
    'description': '오늘날의 민주주의는 투표장에서 붕괴한다 <br /> 서로 적대하는 정당, 양극화된 정치, 파괴되는 규범, 선출된 독재자 <br /> 민주주의 붕괴 패턴을 통찰한 하버드대 정치학자의 역작 <br /> 트럼프 당선 직후, 전통을 자랑하는 민주주의조차 쉽게 무너질 수 있음을 깨달은 하버드대 정치학과 교수 스티븐 레비츠키와 대니얼 지블랫. 그들은 [뉴욕 타임스]에 “트럼프는 민주주의에 위협이 되는가?”라는 제목으로 민주주의의 위기를 경고하는 칼럼을 썼다. 그 글은 100만 회 이상의 조회수를 기록하며 큰 주목을 받았고, 출판사의 요청을 받아 이 책 『어떻게 민주주의는 무너지는가』로 거듭났다. 책은 출간 즉시 화제를 일으키며 [뉴욕 타임스] 논픽션 베스트셀러와 아마존 베스트셀러에 올랐고, [워싱턴포스트], [월스트리트 저널] 등 주요 매체가 강력 추천했다.',
    'comment': '트럼프에 대한 반감이 가득한 책'
},{
    'id': '5',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/137/189/13718988.jpg?type=m140&udate=20190202',
    'bigimages': 'https://image.aladin.co.kr/product/15079/56/cover500/k722533163_1.jpg',
    'title': '동물의 무기',
    'subtitle': '잔인하면서도 아름다운 극한 무기의 생물학',
    'star': '5',
    'author': '더글러스 엠린',
    'publisher': '북트리거',
    'pubdate': '20180620',
    'description': '잔인하면서도 아름다운 ‘극한 무기’의 파란만장한 자연사를 추적하다 <br /> 생물계 다양한 투쟁의 원리를 ‘무기의 진화’를 통해 들여다본 책이다. 몬태나대학교 생물학 교수인 더글러스 엠린은 열대우림과 해변을 누비고 다니며, 주목할 만한 동물들의 세계로 독자를 초대해 동물 무기의 미스터리를 파헤친다. 지난 20여 년 동안 아프리카, 호주, 중남미 전역으로 쇠똥구리를 쫓아다니며 이들의 무기 발달과 진화를 집요하게 연구해 온 저자는 생물계 전체로 관심사를 넓혀 동물 무기의 진화 이야기를 맛깔스럽게 풀어낸다.',
    'comment': '구성이 좋았던 책! 동물의 무기에서 본 딴 인간의 무기!'
},{
    'id': '6',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/120/587/12058772.jpg?type=m140&udate=20181011',
    'bigimages': 'https://image.aladin.co.kr/product/10945/67/cover500/s382532449_1.jpg',
    'title': '검사는 문관이다',
    'subtitle': 'PD수첩 검사의 검찰 개혁안, 북저널리즘',
    'star': '5',
    'author': '임수빈',
    'publisher': '스리체어스',
    'pubdate': '20170522',
    'description': '수사는 잘하는 것보다 바로 하는 것이 중요하다. <br />“검사는 공익의 대표자로서 인권옹호기관이다. 그런데 요즘에는 ‘살인검을 휘두르는 검찰’이라는 비판을 듣는다. 권력을 지향하거나 권력의 눈치를 보며 칼을 잘못 휘두른 탓이다. 검사는 무관이 아니라 문관이어야 한다. 검사의 기본업무는 칼잡이가 아니다. 공익의 대표자로서 인권을 보장하고 사회 구성원들이 적법 절차를 준수하게 만드는 것이 가장 중요한 임무다.”',
    'comment': '거시적인 관점이 아닌 우리의 삶과 밀접하게 연관되어 있는 검찰에 대한 경종'
},{
    'id': '7',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/135/875/13587592.jpg?type=m140&udate=20190517',
    'bigimages': 'https://image.aladin.co.kr/product/14461/76/cover500/8937436884_1.jpg',
    'title': '당선, 합격, 계급',
    'subtitle': '장강명 르포,문학상과 공채는 어떻게 좌절의 시스템이 되었나',
    'star': '5',
    'author': '장강명',
    'publisher': '민음사',
    'pubdate': '20180504',
    'description': '경직된 시스템, 병리적 현상에 대처하기 위한 답은 현장에 있다! <br />기자 출신 전업 작가 장강명의 첫 번째 르포르타주 『당선, 합격, 계급』. 2010년 이후 최단 기간 최다 문학상 수상자인 ‘당선의 신’ 장강명과 대기업, 건설회사, 언론사까지 두루 입사에 성공한 ‘합격의 신’ 장강명이 당선과 합격이라는 제도가 사회적 신분으로 굳어지며 계급화되는 메커니즘을 밝혀낸다. 11년 동안 현장에서 갈고닦은 취재력과 직설적이고 구체적인 비판, 가독성까지 더해 한국 사회에 만연한 부조리, 불합리의 민낯을 드러낸다.',
    'comment': '우리나라에 뿌리 박혀 있는 카르텔에 대한 시나리오'
},{
    'id': '8',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/149/310/14931051.jpg?type=m140&udate=20190629',
    'bigimages': 'https://image.aladin.co.kr/product/19221/89/cover500/k342635007_1.jpg',
    'title': '아마존 vs. 구글 미래전쟁',
    'subtitle': '두 거인이 벌이는 믿음과 꿈의 경쟁',
    'star': '5',
    'author': '강정우',
    'publisher': '시크릿하우스',
    'pubdate': '20190529',
    'description': '10년 전, 당신은 아마존과 구글에 중독되고 만 우리 모습을 예상했는가? 아마존과 구글은 각각 강력한 이커머스 플랫폼, 검색과 광고시장 그리고 스마트폰 운영 체계의 80퍼센트를 점유한 기업으로 성장했다. 두 기업은 전 세계 일반 소비자의 일상과 기업 운영에 있어 빼놓고 생각할 수 없는 필수 요소가 되었다. 그러나 이들은 멈추지 않는다. 아마존은 클라우드 비즈니스로 B2B IT 인프라시장을 슬그머니 독식해버렸고, 구글은 AI와 자율 주행 기술을 리드하고 있다. 물류 혁명, 로봇 전쟁, AI 대중화, 자율 주행, 클라우드, 헬스케어, 은행, 리테일, 데이터 과학, 우주탐사까지… 이들의 미래 전쟁 무대는 이미 우주로 확장되고 있다. 아마존, 구글은 어떤 새로운 기회를 발견했을까? 아마존, 구글이 꿈꾸고 있는 미래는 무엇일까? 그리고 이들이 멀고 거대해 보이는 꿈을 대차게 실행해나갈 수 있는 원동력은 무엇일까?',
    'comment': '미칠듯한 기술력 경쟁! 구글과 아마존이 그려내는 미래 세계의 단편'
},{
    'id': '9',
    'images' : 'https://bookthumb-phinf.pstatic.net/cover/062/194/06219429.jpg?type=m140&udate=20150828',
    'bigimages': 'https://image.aladin.co.kr/product/621/27/cover500/8956054347_2.jpg',
    'title': '심리학의 힘 P',
    'subtitle': '사람의 마음을 움직이는 11가지 비밀',
    'star': '5',
    'author': '전우영',
    'publisher': '북하우스',
    'pubdate': '20100115',
    'description': '스타에서 직장인까지, 사람들을 통해 들여다본 심리학의 힘! <br /> 사람의 마음을 움직이는 11가지 심리학적 개념을 설명한 책『심리학의 힘 P』. 베컴, 보아, 이창호, 문근영, 전도연, 이승환, 서태지, 박태환, 마이클 조던, 존 레넌 등 성공한 스타들의 행동을 통해 개인과 집단의 심리에 관한 11가지 이야기를 흥미진진하게 풀어놓는다. 성공한 스타에서부터 직장인까지 다양한 사람들의 생생한 이야기와 풍성한 사진이 담겨 있어 심리학적 개념을 이해하는 데 도움을 준다. 또한 개인과 개인이 모여 집단을 이룰 때의 심리도 함께 조명하고 있다.',
    'comment': '가볍게 읽기 좋은 심심풀이 심리학 이야기'
},{
    'id': '10',
    'images' : 'https://image.aladin.co.kr/product/17554/20/cover500/8954653847_1.jpg',
    'bigimages': 'https://image.aladin.co.kr/product/15141/31/cover500/k522533364_1.jpg',
    'title': '나는 매일 책을 읽기로 했다',
    'subtitle': '서른 살 고시 5수생을 10만 부 베스트셀러 작가로 만든 기적의 습관!',
    'star': '5',
    'author': '김범준',
    'publisher': '비즈니스북스',
    'pubdate': '20180629',
    'description': '스스로 인생의 낙오자라 칭했던 한 남자의 인생을 바꾼 기적의 독서습관! <br /> 경력이 쌓일수록 깊어지는 직장생활에 대한 불안, 커가는 아이들의 교육과 가족 부양에 대한 간절함, 고시 실패 이후 계속 내리막을 걷는 것 같은 절망감에 시달리던 저자가 ‘취미가 아닌 생활’처럼 책을 읽으면서 자신을 바꾸고 인생을 반전시킨 과정과 그 방법을 이야기하는 책이다. 불과 몇 년 전만해도 저자 역시 회사에서 버틸 때까지 일하다가 은퇴 후에 작은 가게라도 하게 되길 바랐던 평범한 직장인이었다. 그러나 막연한 미래가 아닌 ‘지금, 여기, 현실’에 맞는 책을 골라 읽기 시작하면서 일과 관계에서 자신의 모습을 조금씩 바꿔나갔다.',
    'comment': '책 읽는 습관에 대한 작가의 자기 보고식 에세이'
}];

router.get('/',(req, res) => {
    res.send('Hello World');
})

router.get('/booklist',(req, res) => {
    const data = bookdata;
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200);
    res.send(bookdata);
    res.end();
})

router.get('/bookdetail',(req, res) => {
    const id = req.query.id;
    const data = bookdata.filter(item=>{
        return item.id == id;
    })[0];
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200);
    res.send(data);
    res.end();
})

exports.router = router;