import './detail_ch.css';
        // 연락처 데이터 배열 
        const data = [
        {"id":"1", "pic": "Marvin.png", "name": "Marvin McKinney", "hp": "(480) 555-0103","email" :"tim.jennings@example.com" },
            { "id":"2","pic": "Eleanor.png", "name": "Eleanor Pena", "hp": "(209) 555-0104","email" :"Eleanor.123@example.com"  },
            {"id":"3", "pic": "Guy.png", "name": "Guy Hawkins", "hp": "(307) 555-0133","email" :"Strongmarvi@example.com"  },
            { "id":"4","pic": "Esther.png", "name": "Esther Howard", "hp": "(239) 555-0108","email" :"Esther123@example.com"  },
            { "id":"5","pic": "Kathryn.png", "name": "Kathryn Murphy", "hp": "(225) 555-0118","email" :"Kathrn123@example.com"  },
            { "id":"6","pic": "Ralph.png", "name": "Ralph Edwards", "hp": "(808) 555-0111","email" :"bill.sanders@example.com"  }
        ];

        // URL에서 id 파라미터를 가져오기
        const params = new URLSearchParams(window.location.search);  // 현재 URL에서 쿼리 문자열을 파싱
        const id = params.get("id");  // id 파라미터 값 가져오기
         
        // 해당 id를 가진 연락처를 데이터 배열에서 찾기
        const person = data.find(p => p.id === id);  // id가 일치하는 사람을 찾아 반환
        
        // 만약 해당 연락처가 존재한다면
        if (person) {
            const contactDetailDiv = document.getElementById("contact-detail_ch");
            contactDetailDiv.innerHTML = `
                <div style="text-align: center;">
                    <img src="${person.pic}" alt="${person.name}">
                </div>
                <div class="contact-info_ch">
                    <strong>이름<br></strong> 
                    <span id="person-name">${person.name}</span>
                    <input type="text" id="name-input" value="${person.name}" style="display:none;" />
                    <button id="edit-name-btn">수정</button><p/>
                    
                    <strong>전화번호<br></strong> ${person.hp} <p/>
                    <strong>이메일<br></strong> ${person.email}
                </div>
            `;
        
            const nameSpan = document.getElementById("person-name");
            const nameInput = document.getElementById("name-input");
            const editButton = document.getElementById("edit-name-btn");
        
            editButton.addEventListener("click", () => {
                if (editButton.textContent === "수정") {
                    // 수정 모드로 전환
                    nameSpan.style.display = "none";
                    nameInput.style.display = "inline-block";
                    editButton.textContent = "저장";
                    nameInput.focus();
                } else {
                    // 저장 모드: 이름 적용
                    const newName = nameInput.value.trim();
                    if (newName !== "") {
                        person.name = newName;
                        nameSpan.textContent = newName;
                    }
                    nameSpan.style.display = "inline";
                    nameInput.style.display = "none";
                    editButton.textContent = "수정";
                }
            });
        } else {
            // 만약 해당 id의 사람이 없다면
            document.getElementById("contact-detail_ch").innerHTML = "<p>존재하지 않는 연락처입니다.</p>";  // 에러 메시지 출력
        }

        

        // 삭제 버튼 클릭 시 동작하는 함수
        function deleteContact() {
            // 사용자가 삭제 확인을 했을 때
            if (confirm("정말 삭제하시겠습니까?")) {
                // 이제 구현해야함
            }
        }
   