class GuessingGame {
    constructor() {
        this.biggest = 0;
        this.smallest = 0;
        this.answer = 0;
    }

    setRange(min, max) {
        this.smallest = min;
        this.biggest = max;
    }

    guess() {
        this.answer = this.smallest + Math.round((this.biggest - this.smallest) / 2);
        return this.answer;
    }

    lower() {
        this.biggest = this.answer;
    }

    greater() {
        this.smallest = this.answer;
    }
}

module.exports = GuessingGame;
