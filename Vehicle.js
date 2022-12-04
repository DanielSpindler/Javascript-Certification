 class Vehicle {

        constructor(color, direction, currentSpeed, topSpeed, engineStarted) {
            this.color = color;
            this.direction = parseInt(direction);
            this.currentSpeed = parseInt(currentSpeed);
            this.topSpeed = parseInt(topSpeed);
            this.engineStarted = engineStarted;
        }
        accelerate(speed) {
            speed = parseInt(speed)
            if(this.currentSpeed + speed <= this.topSpeed){
            this.currentSpeed += speed
            console.log('accerlarting. speed is now ' + this.currentSpeed)
            } else {
                alert('cant drive that fast!')
            }
        }

        brake() {
            this.currentSpeed = 0
            console.log('braking, speed is now 0')
        }

        turnOn() {
            if (!this.engineStarted) {
                this.engineStarted = true
                console.log('turned on')
            } else {
                console.log('Already on')
            }
        }

        turnOff() {
            if (this.engineStarted) {
                this.engineStarted = false
                console.log('turned off')
            } else {
                console.log('Already off')
            }
        }

        turnLeft(degree) {
            degree = parseInt(degree)
            if (this.direction - degree >= 0) {
                this.direction -= degree
                console.log('turned left for ' + degree + 'degree current direction is ' + this.direction)
            } else {
                alert('Sorry, Thats not possible!')
            }
        }

        turnRight(degree) {
            degree = parseInt(degree)
            if (this.direction + degree <= 359) {
                this.direction += degree
                console.log('turned right for ' + degree + 'degree current direction is ' + this.direction)
            } else {
                alert('Sorry, Thats not possible!')
            }
        }
    }

    class Bus extends Vehicle {
        constructor(color,direction,currentSpeed,topSpeed,engineStarted,numberOfSeats) {
            super(color,direction,currentSpeed,topSpeed,engineStarted);
            this.numberOfSeats = numberOfSeats
        }
    }

    class Ambulance extends Vehicle {
        constructor(color,direction,currentSpeed,topSpeed,engineStarted) {
            super(color,direction,currentSpeed,topSpeed,engineStarted);
        }

        sirenOn() {
            console.log('siren is on')
        }

        sirenOff() {
            console.log('siren is off')

        }
    }