var Player = function (playername) {
    this.playername = playername
    this.livesLeft = 3
    this.score = 0
    this.speed = 0 //didnt understand for what.
    this.gridLocationX = 0
    this.gridLocationY = 0

    Player.prototype.die = () => {
        if (this.livesLeft === 0) {
            alert("you died")
        }
    }

    Player.prototype.moveLeft = () => {
        if (this.gridLocationX > 0) this.gridLocationX = this.gridLocationX - 1
    }

    Player.prototype.moveRight = () => {
        if (this.gridLocationX < 9) this.gridLocationX = this.gridLocationX + 1
    }

     Player.prototype.moveUp = () => {
        if (this.gridLocationY > 0) this.gridLocationY = this.gridLocationY - 1
    }

     Player.prototype.moveDown = () => {
        if (this.gridLocationY < 9) this.gridLocationY = this.gridLocationY + 1
    }
}
