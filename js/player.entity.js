import RankingController from './ranking-controller.js';

export default class Player {
  constructor(data = {}) {
    this.nickname = data.nickname;
    this.score = 0;
  }
  addPlayerToLocalStorage() {
    const players = RankingController.getPlayers() || [];
    players.push({ nickname: this.nickname, score: this.score });
    const playersSorted = this.playersSortedByScore(players);
    const playersStringify = JSON.stringify(playersSorted);
    localStorage.setItem('players', playersStringify);
  }
  playersSortedByScore(players) {
    return players.sort((a, b) => (a.score < b.score) ? 1 : -1);
  }
}