document.addEventListener('DOMContentLoaded', () => {
  const iphoneModels = [
    { name: "아이폰 1세대", releaseYear: "2007", description: "애플의 혁신, 첫 스마트폰.", image: "images/iphone-1.jpg" },
    { name: "아이폰 3G", releaseYear: "2008", description: "3G 네트워크 지원 시작.", image: "images/iphone-3g.jpg" },
    { name: "아이폰 3GS", releaseYear: "2009", description: "속도 개선과 비디오 녹화 기능 추가.", image: "images/iphone-3gs.jpg" },
    { name: "아이폰 4", releaseYear: "2010", description: "레티나 디스플레이 도입.", image: "images/iphone-4.jpg" },
    { name: "아이폰 4S", releaseYear: "2011", description: "Siri 음성 비서 기능 탑재.", image: "images/iphone-4s.jpg" },
    { name: "아이폰 5", releaseYear: "2012", description: "라이트닝 커넥터 도입, 화면 크기 증가.", image: "images/iphone-5.jpg" },
    { name: "아이폰 5S", releaseYear: "2013", description: "터치 ID 지문 인식 추가.", image: "images/iphone-5s.jpg" },
    { name: "아이폰 5C", releaseYear: "2013", description: "다양한 색상의 플라스틱 케이스.", image: "images/iphone-5c.jpg" },
    { name: "아이폰 6", releaseYear: "2014", description: "더 큰 화면과 NFC 지원.", image: "images/iphone-6.jpg" },
    { name: "아이폰 6 Plus", releaseYear: "2014", description: "아이폰 최초의 패블릿.", image: "images/iphone-6plus.jpg" },
    { name: "아이폰 6S", releaseYear: "2015", description: "3D Touch 기능 추가.", image: "images/iphone-6s.jpg" },
    { name: "아이폰 6S Plus", releaseYear: "2015", description: "아이폰 6S의 대형 버전.", image: "images/iphone-6splus.jpg" },
    { name: "아이폰 SE (1세대)", releaseYear: "2016", description: "작은 폼 팩터의 강력한 성능.", image: "images/iphone-se.jpg" },
    { name: "아이폰 7", releaseYear: "2016", description: "방수 기능과 듀얼 카메라 시스템.", image: "images/iphone-7.jpg" },
    { name: "아이폰 7 Plus", releaseYear: "2016", description: "아이폰 7의 대형 버전, 포트레이트 모드 추가.", image: "images/iphone-7plus.jpg" },
    { name: "아이폰 8", releaseYear:     "2017", description: "무선 충전 도입.", image: "images/iphone-8.jpg" },
      { name: "아이폰 8 Plus", releaseYear: "2017", description: "아이폰 8의 대형 버전, 더 나은 카메라 기능.", image: "images/iphone-8plus.jpg" },
      { name: "아이폰 X", releaseYear: "2017", description: "풀 스크린 디자인과 Face ID 도입.", image: "images/iphone-x.jpg" },
      { name: "아이폰 XR", releaseYear: "2018", description: "컬러풀한 디자인과 A12 칩셋.", image: "images/iphone-xr.jpg" },
      { name: "아이폰 XS", releaseYear: "2018", description: "아이폰 X의 업그레이드 버전.", image: "images/iphone-xs.jpg" },
      { name: "아이폰 XS Max", releaseYear: "2018", description: "더 큰 화면을 가진 아이폰 XS.", image: "images/iphone-xsmax.jpg" },
      { name: "아이폰 11", releaseYear: "2019", description: "듀얼 카메라 시스템, 울트라 와이드 앵글.", image: "images/iphone-11.jpg" },
      { name: "아이폰 11 Pro", releaseYear: "2019", description: "트리플 카메라 시스템과 더 밝은 OLED 디스플레이.", image: "images/iphone-11pro.jpg" },
      { name: "아이폰 11 Pro Max", releaseYear: "2019", description: "아이폰 11 Pro의 대형 버전.", image: "images/iphone-11promax.jpg" },
      { name: "아이폰 SE (2세대)", releaseYear: "2020", description: "1세대 SE의 후속 모델, 놀라운 성능.", image: "images/iphone-se2020.jpg" },
      { name: "아이폰 12 Mini", releaseYear: "2020", description: "작은 크기에 놀라운 기능, 5G 지원.", image: "images/iphone-12mini.jpg" },
      { name: "아이폰 12", releaseYear: "2020", description: "5G 지원과 새로운 디자인.", image: "images/iphone-12.jpg" },
      { name: "아이폰 12 Pro", releaseYear: "2020", description: "프로 카메라 시스템과 5G 지원.", image: "images/iphone-12pro.jpg" },
      { name: "아이폰 12 Pro Max", releaseYear: "2020", description: "아이폰 12 Pro의 대형 버전, 더 나은 카메라 성능.", image: "images/iphone-12promax.jpg" },
      { name: "아이폰 13 Mini", releaseYear: "2021", description: "작지만 강력한 성능, 개선된 카메라.", image: "images/iphone-13mini.jpg" },
      { name: "아이폰 13", releaseYear: "2021", description: "더 밝은 디스플레이와 빠른 성능.", image: "images/iphone-13.jpg" },
      { name: "아이폰 13 Pro", releaseYear: "2021", description: "프로모션 기술과 더 나은 카메라 시스템.", image: "images/iphone-13pro.jpg" },
      { name: "아이폰 13 Pro Max", releaseYear: "2021", description: "가장 큰 디스플레이와 최고의 성능.", image: "images/iphone-13promax.jpg" },
    { name: "아이폰 14", releaseYear: "2022", description: "혁신적인 기술과 빠른 5G 연결성.", image: "images/iphone-14.jpg" },
    { name: "아이폰 14 Max", releaseYear: "2022", description: "더 큰 화면과 더 나은 배터리 수명.", image: "images/iphone-14max.jpg" },
    { name: "아이폰 14 Pro", releaseYear: "2022", description: "프로 카메라 시스템 업그레이드와 뛰어난 디스플레이.", image: "images/iphone-14pro.jpg" },
    { name: "아이폰 14 Pro Max", releaseYear: "2022", description: "최고의 성능과 최대 크기의 디스플레이.", image: "images/iphone-14promax.jpg" },
    { name: "아이폰 15", releaseYear: "2023", description: "차세대 기술과 놀라운 성능.", image: "images/iphone-15.jpg" },
    { name: "아이폰 15 Max", releaseYear: "2023", description: "아이폰 15의 기능을 더 큰 화면으로.", image: "images/iphone-15max.jpg" },
    { name: "아이폰 15 Pro", releaseYear: "2023", description: "전문가급 카메라와 최상의 성능.", image: "images/iphone-15pro.jpg" },
    { name: "아이폰 15 Pro Max", releaseYear: "2023", description: "비교할 수 없는 성능과 최고의 디스플레이.", image: "images/iphone-15promax.jpg" }
    ];


    const listElement = document.getElementById('iphone-list');

    iphoneModels.forEach(model => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('iphone-item');
        itemElement.innerHTML = `
            <h2>${model.name}</h2>
            <img src="${model.image}" alt="${model.name}">
            <p>출시 연도: ${model.releaseYear}</p>
            <p>${model.description}</p>
        `;
        listElement.appendChild(itemElement);
    });
});
