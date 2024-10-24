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
        this.knowledge = Number(value) - (this.offset * 15 + 5 * ((this.offset-1) * (this.offset/2)))
        // w = (-29 + sqrt(841 + (8k))) / 2
        this.wishes = Math.floor((-29 + Math.sqrt(841 + (8*this.knowledge))) / 2);

        document.querySelector("#wishes").value = this.wishes;
    }

    calculateKnowledgeForWishes(value) {
        this.wishes = Number(value) + this.offset;
        // k = w(15) + w((w-1)/2)
        this.knowledge = this.wishes * 15 + 5 * ((this.wishes-1) * (this.wishes/2))
        document.querySelector("#knowledge").value = this.knowledge;
    }


    changeOffset(value) {
        this.offset = Number(value)
        if (this.wishes != 0 || document.querySelector("#wishes").value != "" || document.querySelector("#wishes").value != null) {
            this.wishes = Number(document.querySelector("#wishes").value);
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
