class person {
    static name = "John Smith";
    static gender = "M";
    static height = 170;
    static weight = 60;
    constructor(name, gender, height, weight) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
        this.BMI = (weight / (height * height)).toFixed(2);
    }

    weightStatus(BMI) {
        let bmiStatus;
        if (this.BMI < 18.5) {
            bmiStatus = `Underweight`;
        } else if (this.BMI < 25) {
            bmiStatus = "Normal Weight";
        } else if (this.BMI < 30) {
            bmiStatus = "Overweight";
        } else {
            bmiStatus = "Obese";
        }
        return bmiStatus;
    }
    Share() {
        let createH1 = document.createElement("h1");
        createH1.innerHTML = `Name: ${this.name} | Gender: ${this.gender} | Height: ${this.height} | Weight: ${this.weight} | BMI: ${this.BMI} ${this.weightStatus()}`;
        document.body.appendChild(createH1);
    }
}

const person1 = new person("Mary Jane", "F", 1.80, 40);
person1.Share();
const person2 = new person("John Doe", "M", 1.75, 60);
person2.Share();
const person3 = new person("Jenica Blindatu", "M", 1.84, 80);
person3.Share();
const person4 = new person("Mihai Viteazu", "M", 1.50, 70);
person4.Share();

console.log(person1, person2, person3, person4);

// let p1 = document.getElementById('1').innerHTML = person1.name;
