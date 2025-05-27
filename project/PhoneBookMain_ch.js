import './PhoneBookMain_ch.css'


        // 연락처 데이터 배열 (보통은 외부 JSON 파일에서 가져옴)
        const data = [
        {"id":"1", "pic": "Marvin.png", "name": "Marvin McKinney", "hp": "(480) 555-0103","email" :"tim.jennings@example.com" },
            { "id":"2","pic": "Eleanor.png", "name": "Eleanor Pena", "hp": "(209) 555-0104","email" :"Eleanor.123@example.com"  },
            {"id":"3", "pic": "Guy.png", "name": "Guy Hawkins", "hp": "(307) 555-0133","email" :"Strongmarvi@example.com"  },
            { "id":"4","pic": "Esther.png", "name": "Esther Howard", "hp": "(239) 555-0108","email" :"Esther123@example.com"  },
            { "id":"5","pic": "Kathryn.png", "name": "Kathryn Murphy", "hp": "(225) 555-0118","email" :"Kathrn123@example.com"  },
            { "id":"6","pic": "Ralph.png", "name": "Ralgo hover", "hp": "(808) 555-0111","email" :"bill.sanders@example.com"  }
        ];

        // 연락처 항목을 삽입할 DOM 요소 선택 (.container)
        const container = document.querySelector(".container2");

        // 연락처 데이터 배열을 순회하면서 각 항목을 HTML로 생성하여 삽입
        data.forEach(obj => {
            // 템플릿 문자열로 연락처 항목 생성
            const contactHTML = `
                <div class="contact">
                    
                    <!-- 이미지를 클릭하면 detail2.html?id=해당 id 로 이동 -->
            <a href="detail2.html?id=${obj.id}">
                <img src="${obj.pic}" alt="${obj.name}">
            </a>

                    <!-- 이름과 전화번호 목록 -->
                    <ul>
                        <li><strong></strong> ${obj.name}</li>
                        <li><strong></strong> ${obj.hp}</li>
                    </ul>
                </div>
            `;

            // 생성된 HTML을 .container 내부에 추가
            container.innerHTML += contactHTML;
        });
