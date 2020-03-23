import RankingController from './ranking-controller.js';

export default class Player {
  constructor(data = {}) {
    this.nickname = data.nickname;
    this.score = 0;
  }
  addPlayerToLocalStorage() {
    const players = RankingController.getPlayers() || [];
    players.push({nickname: this.nickname, score: this.score });
    const playersStringify = JSON.stringify(players)
    localStorage.setItem('players', playersStringify);
  }
}