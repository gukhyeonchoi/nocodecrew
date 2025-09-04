// 카드 그림 목록 기본값 (이모지 사용, 이미지 파일 넣고 싶으면 src 경로 변경)
const cardItems = ["🍎","🍋","🍉","🍇","🍓","🍌","🥝","🍒"];
const cards = [...cardItems, ...cardItems].sort(() => Math.random() - 0.5);
const board = document.getElementById('game-board');

let first, second;
let lockBoard = false;

// 게임판 그리기
cards.forEach((item, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front"></div>
      <div class="card-back">${item}</div>
    </div>
  `;
  card.addEventListener('click', flipCard);
  board.appendChild(card);
});

// 카드 뒤집기 함수
function flipCard() {
  if (lockBoard || this.classList.contains('flip')) return;
  this.classList.add('flip');

  if (!first) {
    first = this;
    return;
  }
  second = this;
  lockBoard = true;

  // 값 비교
  const firstVal = first.querySelector('.card-back').textContent;
  const secondVal = second.querySelector('.card-back').textContent;

  if (firstVal === secondVal) {
    first = null;
    second = null;
    lockBoard = false;
  } else {
    setTimeout(() => {
      first.classList.remove('flip');
      second.classList.remove('flip');
      first = null;
      second = null;
      lockBoard = false;
    }, 900);
  }
}
