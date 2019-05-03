var ladder = {
    step: 0,
    up() {
    this.step++;
    return this.ladder;
    },
    down() {
    this.step--
    return this.ladder;
    },
    showStep: function() { // shows the current step
    alert( this.step );
    }
    };
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

ladder.up().up().down().showStep(); // 1