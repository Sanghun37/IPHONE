document.addEventListener('DOMContentLoaded', function() {
    // 모든 .iphone-item 요소에 이벤트 리스너를 추가
    const iphoneItems = document.querySelectorAll('.iphone-item');
    iphoneItems.forEach(item => {
        item.addEventListener('click', function() {
            // data-model 속성에서 아이폰 모델 이름을 가져옴
            alert(`선택한 모델: ${this.getAttribute('data-model')}`);
        });
    });
});
