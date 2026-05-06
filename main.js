document.addEventListener('DOMContentLoaded', () => {
    /* 1. Intersection Observer for Scroll Animations */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll, .matrix-card, .timeline-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        revealObserver.observe(el);
    });

    /* 2. Glass Nav Scroll Effect */
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(13, 17, 23, 0.85)';
            nav.style.height = '70px';
        } else {
            nav.style.background = 'rgba(13, 17, 23, 0.5)';
            nav.style.height = '80px';
        }
    });

    /* 3. Simple Particle/Neuron Background Concept */
    const createParticles = () => {
        const container = document.getElementById('particle-container');
        if (!container) return;

        for (let i = 0; i < 20; i++) {
            const dot = document.createElement('div');
            dot.classList.add('particle');
            dot.style.cssText = `
                position: absolute;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                background: ${Math.random() > 0.5 ? '#0088ff' : '#00ffc3'};
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${Math.random() * 0.5 + 0.1};
                filter: blur(1px);
                animation: floatAround ${Math.random() * 10 + 20}s linear infinite;
            `;
            container.appendChild(dot);
        }
    };

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes floatAround {
            0% { transform: translate(0, 0); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            100% { transform: translate(0, 0); }
        }
    `;
    document.head.appendChild(style);
    createParticles();

    /* 4. Form Handling */
    const inquiryForm = document.getElementById('inquiry-form');
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = inquiryForm.querySelector('button');
            const originalText = submitBtn.textContent;

            submitBtn.disabled = true;
            submitBtn.textContent = '제출 중...';

            // Artificial delay for premium feel
            setTimeout(() => {
                alert('문의가 접수되었습니다. 곧 연락드리겠습니다.');
                submitBtn.textContent = '제출 완료';
                inquiryForm.reset();
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }

    /* 5. Expertise Modal Logic */
    const modal = document.getElementById('expertise-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('modal-close');

    const expertiseData = {
        'ra': {
            title: 'Regulatory Affairs (RA)',
            icon: 'shield-check',
            sections: [
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
        'ai': {
            title: 'AI Modeling & Strategy',
            icon: 'cpu',
            sections: [
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
        'biz': {
            title: 'Corporate Strategy',
            icon: 'trending-up',
            sections: [
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
    };

    const openModal = (type) => {
        const data = expertiseData[type];
        if (!data) return;

        let contentHtml = `
            <div class="modal-detail-type">
                <div class="icon-box"><i data-lucide="${data.icon}"></i></div>
                <h2>${data.title}</h2>
            </div>
        `;

        data.sections.forEach(section => {
            contentHtml += `
                <div class="modal-section">
                    <h4>${section.header}</h4>
                    <div class="modal-data-list">
                        ${section.items.map(item => `
                            <div class="modal-data-item">
                                <div class="item-meta">${item.meta}</div>
                                <div class="item-main">${item.main}</div>
                                <div class="item-sub">${item.sub}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        modalContent.innerHTML = contentHtml;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('.card-detail-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const type = btn.getAttribute('data-expertise');
            openModal(type);
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    /* Existing Intersection Observer Logic remains active */
});
