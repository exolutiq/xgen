// scripts/data.js
// ----------------------------------------------------
// 기본 데이터 설정
// ----------------------------------------------------
const defaultData = {
    expertise: [
        {
            id: 1,
            icon: 'shield-check',
            title: 'Regulatory Affairs (RA)',
            description: '식약처 인허가 심사 위원으로서의 전문성을 바탕으로, 복잡한 의료기기 인허가 프로세스를 명확하게 설계합니다.',
            ext_id: 'ra',
            modal_sections: [
                {
                    header: '핵심 자격 및 인증',
                    items: [
                        { meta: 'ISO 13485:2016', main: '의료기기 품질경영시스템 인증심사원', sub: 'IAC Global 정식 등록 인증심사원 (2023.04)' },
                        { meta: '국제 심사원', main: 'ISO 9001, 14001, 45001', sub: '품질, 환경, 안전보건 경영시스템 국제 심사원 자격 보유' },
                        { meta: '국가 공인', main: '정보통신산업기사 및 무선통신산업기사', sub: '국가기술자격 기반의 탄탄한 기술 이해도' }
                    ]
                },
                {
                    header: '주요 컨설팅 실적',
                    items: [
                        { meta: 'Global Certification', main: '말레이시아 및 해외 인허가 인증', sub: '지엠에이메디칼/엠큐어 등 의료기기 글로벌 진출 전략 수립' },
                        { meta: 'KGMP / 품질관리', main: '국내외 의료기기 제조 및 품질관리', sub: '스킨앤텍 미용기기 제조, 메카 KGMP 인증 등 다수의 품질 컨설팅 수행' },
                        { meta: 'Regulatory Strategy', main: '식약처 혁신 의료기기 자문', sub: '범부처 의료기기 연구개발 사업 및 심사 가이드라인 제정 참여' }
                    ]
                }
            ]
        },
        {
            id: 2,
            icon: 'cpu',
            title: 'AI Modeling & Strategy',
            description: '첨단 딥러닝 기술과 헬스케어 데이터를 결합하여 최적화된 의료 인공지능 모델링 및 사업화 전략을 자문합니다.',
            ext_id: 'ai',
            modal_sections: [
                {
                    header: '학술적 전문성',
                    items: [
                        { meta: 'Ph.D.', main: '동서의료공학 공학박사 (상지대학교)', sub: '의료 데이터와 공학 기술을 결합한 융복합 전문가' },
                        { meta: 'Education', main: '대학 및 전문기관 AI 강의', sub: '연세대학교 미래캠퍼스 인공지능 강의, 상지대학교 대학원 동서의료공학 강의교수' },
                        { meta: 'Software', main: 'SW Maestro Network', sub: '과학기술정보통신부 SW 마에스트로 과정을 통한 실무 역량 검증' }
                    ]
                },
                {
                    header: '헬스케어 AI 프로젝트',
                    items: [
                        { meta: 'Project', main: '스마트 실시간 자율신경 시스템 개발', sub: '평택대학교/평택FC 협업 실시간 데이터 판독 시스템 구축' },
                        { meta: 'XR / VR', main: 'XR 전문인력 양성 및 기술 자문', sub: '강원XR전문인력양성과정 및 가상현실 활용 기술 사업화' },
                        { meta: 'Training', main: '디지털 헬스케어 인공지능 특강', sub: '강원의료기기산업협회 소속 디지털 헬스케어 및 의료 빅데이터 교육 전담' }
                    ]
                }
            ]
        },
        {
            id: 3,
            icon: 'trending-up',
            title: 'Corporate Strategy',
            description: '스타트업부터 대형 의료기관까지, 기술 혁신과 규제 준수의 균형을 맞춘 비즈니스 성장 전략을 제시합니다.',
            ext_id: 'biz',
            modal_sections: [
                {
                    header: '기업 성장 및 멘토링',
                    items: [
                        { meta: 'KEIT', main: '한국산업기술평가관리원 평가위원', sub: '의료정보통신 분야 국가 과제 심사 및 기술 평가 참여' },
                        { meta: 'Global Market', main: '해외 시장 개척 및 마케팅 자문', sub: '홍콩 해외 마케팅(9천만 원 매출 달성), 중국 앱 개발 제작 컨설팅' },
                        { meta: 'Strategy', main: '비즈니스 모델 및 기술사업화', sub: 'DGIST MOI 기술경영과정 수료 기반의 실전 기술 창업 멘토링' }
                    ]
                },
                {
                    header: '창업 및 자문 이력',
                    items: [
                        { meta: 'Founder', main: '지엠에이메디칼 / 뉴로닉 대표', sub: '바이오 헬스케어 및 디지털 RA 전문 법인 직접 설립 및 운영' },
                        { meta: 'MOU', main: '정부 및 민간 기관 MOU 기술자문', sub: '강원테크노파크, 의료기기테크노밸리 등 주요 거점 기관 협력' },
                        { meta: 'Investment', main: '벤처 인증 및 투자 유치 지원', sub: '의료기기 제품 기술분석 보고서 기반의 투자 및 인증 전략 수립' }
                    ]
                }
            ]
        }
    ],
    background: [
        { id: 1, icon: 'book-open', title: 'Education', content: '<li>상지대학교 대학원 동서의료공학 <strong>공학박사</strong></li><li>상지대학교 대학원 동서의료공학 <strong>공학석사</strong></li><li>한국사이버대학교 벤처경영학 <strong>경영학사</strong></li>' },
        { id: 2, icon: 'award', title: 'Certifications', content: '<li><strong>ISO 13485:2016</strong> 의료기기 품질경영시스템 인증심사원</li><li><strong>ISO 9001/14001/45001</strong> 국제심사원</li><li><strong>Mechanical Design</strong> Dassault System Professional</li>' },
        { id: 3, icon: 'briefcase', title: 'Consulting Highlights', content: '<li><strong>MCare</strong> 말레이시아 해외 인허가 인증 컨설팅</li><li><strong>Skin & Tech</strong> 미용기기 제조 및 인허가 전략</li><li><strong>KEIT</strong> 한국산업기술평가관리원 평가위원 (~현재)</li>' },
        { id: 4, icon: 'star', title: '교육 컨설팅 수료증', content: '<li><strong>의료기기 RA 전문가</strong> 한국의료기기안전정보원 수료 (예시)</li>' }
    ],
    timeline: [
        { id: 1, year: '2025', title: '식약처 혁신 의료기기 자문 위원', description: '디지털 헬스케어 인허가 규제 혁신 및 심사 가이드라인 제정 참여.' },
        { id: 2, year: '2023', title: 'AI 헬스케어 솔루션 구축', description: '대형 대학병원과 협업한 실시간 인공지능 판독 시스템 개발 총괄.' },
        { id: 3, year: '2021', title: 'SW Maestro 수료', description: '과학기술정보통신부 주관 창의 도전형 SW 인재 육성 과정 최우수 프로젝트 수행.' }
    ],
    board: []
};

// ----------------------------------------------------
// 데이터 관리 함수 (로컬스토리지 기반)
// ----------------------------------------------------
const AppData = {
    init() {
        if (!localStorage.getItem('neuronic_data')) {
            localStorage.setItem('neuronic_data', JSON.stringify(defaultData));
        }
    },
    getAll() {
        this.init();
        return JSON.parse(localStorage.getItem('neuronic_data'));
    },
    saveAll(data) {
        localStorage.setItem('neuronic_data', JSON.stringify(data));
    },
    addPost(post) {
        const data = this.getAll();
        post.id = Date.now();
        post.created_at = new Date().toISOString().split('T')[0];
        post.reply = '';
        data.board.unshift(post);
        this.saveAll(data);
    }
};

window.AppData = AppData;
