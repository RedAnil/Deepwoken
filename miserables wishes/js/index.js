class Calculator {
    knowlknowledgeFieldedge;
    knowledgeField;
    wishOffsetField;
    knowledge;
    wishes;
    offset;
    constructor() {
        this.knowledgeField = document.querySelector("#knowledge").addEventListener("change", (event) => {
            this.calcuateWishesForKnowledge(event.target.value);
        });
        this.wishesField = document.querySelector("#wishes").addEventListener("change", (event) => {
            this.calculateKnowledgeForWishes(event.target.value);
        });
        this.wishOffsetField = document.querySelector("#startingWishes").addEventListener("change", (event) => {
            this.changeOffset(event.target.value);
        });
        this.knowledge = 0;
        this.wishes = 0;
        this.offset = 0;
    }


    calcuateWishesForKnowledge(value) {
        this.knowledge = Number(value)
        this.wishes = 0
        for (let fullKnowledgeCost = (15 + (this.offset* 5 )); fullKnowledgeCost <= this.knowledge; fullKnowledgeCost += (15 + (5 * (this.wishes + this.offset)))) {
            this.wishes++
        }
        document.querySelector("#wishes").value = this.wishes;
    }

    calculateKnowledgeForWishes(value) {
        this.wishes = Number(value);
        this.knowledge = 0;
        for (let wishAmount = 1 + this.offset; wishAmount <= (this.wishes + this.offset); wishAmount++) {
            console.log(wishAmount)
            this.knowledge += (15 + (5 * wishAmount));
        }
        document.querySelector("#knowledge").value = this.knowledge;
    }


    changeOffset(value) {
        this.offset = Number(value)
        if (this.wishes != 0 || document.querySelector("#wishes").value != "" || document.querySelector("#wishes").value != null) {
            this.wishes = document.querySelector("#wishes").value;
            this.calculateKnowledgeForWishes(this.wishes);
        } else {
            if (this.knowledge != 0 || document.querySelector("#knowledge").value != "" || document.querySelector("#knowledge").value != null) {
                this.knowledge = document.querySelector("#knowledge").value;
                this.calcuateWishesForKnowledge(this.knowledge);
            }
        }
        

    }

}

const raasjeSucks = new Calculator();
