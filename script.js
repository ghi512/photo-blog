const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', () => {
    // 이미지가 30개 이상일 경우 모든 이미지 삭제
    if(gridContainer.children.length >= 30) {
        const confirmed = confirm("이미지가 30개 찼습니다. 모든 사진을 지우시겠습니까?");
        if(confirmed) {
            gridContainer.innerHTML = ""; // 이미지 모두 삭제
        }
    }
    else { // 이미지 생성 조건 추가
        // 이미지 생성을 위한 랜덤한 숫자 생성
        const randomNumber = Math.floor(Math.random() * 1000) + 1;

        // 이미지 생성
        const image = document.createElement('img');
        image.src = `https://picsum.photos/500?random=${randomNumber}`; // 이미지 주소
        image.alt = 'Random Image'; // 대체 텍스트

        // 이미지를 그리드 컨테이너에 추가
        gridContainer.appendChild(image);
    }

});
