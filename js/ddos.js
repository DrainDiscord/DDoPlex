const DEFAULT_FETCH_OPTIONS = {
  method: 'GET',
  follow: 0,
  headers: {
    'X-Forwarded-For': ''
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min - 1) + min

class DDoS {
  constructor(botCount = 12) {
    if(typeof botCount !== 'number') throw new TypeError('Invalid parameter type')
    botCount = Math.max(1, botCount)

    this.count = 12
    this.bots = []
    this.create()
    this.start()
  }
  
  create() {
    for(let i = 0; i < this.count; i++) {
      this.bots[i] = randomIp(
  } 

  start() {
    const count = this.count * this.count
    for(let i = 0; i < count; i++) {
      
  }
}

module.exports = DDoS
