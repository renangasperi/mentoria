class RankingController {
  constructor(data = {}) {
    this.status = data.status || 'CLOSED';
  }
  getElement() {
    return document.getElementById('game-ranking');
  }
  open() {
    const element = this.getElement();
    element.classList.add('game-ranking--enabled');
    this.createPlayersList()
  }
  close() {
    const element = this.getElement();
    element.classList.remove('game-ranking--enabled');
  }
  toggleRanking() {
    if (this.status === 'OPENED') {
      this.close();
      this.status = 'CLOSED';
      return;
    }
    if (this.status === 'CLOSED') {
      this.open();
      this.status = 'OPENED';
      return;
    }
  }
  createPlayersList() {
    const element = document.getElementById('ranking-list');
    const players = this.getPlayers()
    const list = player => players.reduce((accumulator, { nickname, score }) => {
      accumulator += `
        <li class="game-ranking__list-item">
          <span class="game-ranking__list-item-player">${nickname}</span>
          <span class="game-ranking__list-item-score">${score} pontos</span>
        </li>
        `
      return accumulator
    }, '')
    element.innerHTML = list();
  }
  getPlayers() {
    const players = localStorage.getItem('players');
    const playersParsed = JSON.parse(players);
    return playersParsed;
  }
}

export default new RankingController();