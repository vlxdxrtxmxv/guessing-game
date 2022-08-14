class GuessingGame {
    constructor() {
        this.middle = 0;
        this.max = 0;
        this.min = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.middle = Math.round((this.max + this.min) / 2);
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;