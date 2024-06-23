class DataStructureLearnings {

    arr: number[] = [1, 12, 0, 23, 34, 45, 56, 67, 78, 89, 90, 100];

    constructor(name: string, age: number) {
        console.log(`Hello I'm ${name} and I'm ${age} old `);
    }

    //main method
    async executionMethod(): Promise<void> {
        // const pallindrome = await this.isPallindrome("121");
        // console.log(`The given input is ${(pallindrome == true ? "pallindrome" : "not pallindrome")}`);
        // const fibonacci = await this.generateFibonacci(100);
        // console.log(`The generated fibonacci series are  ${fibonacci}`);
        // this.isPresentArray(53).then((a) => console.log(a ? "The given input present in the array" : "THe given input is not present in array"));
        // this.findMaxAndMin()
        //     .then((a) => console.log(a));    

        this.findDuplicatesByMyMethod();
        // this.findMaxAndMin();
    }

    async isPresentArray(number: number): Promise<boolean | undefined> {
        const arr: number[] = this.arr;
        for (const num of arr) {
            if (num === number) return true;
        }
    }

    async findMaxAndMin(): Promise<{ min: number, max: number }> {

        let result = {
            min: 0,
            max: 0,
        }

        const numberArr = this.arr;
        let min = numberArr[0];
        let max = numberArr[0];
        for (const number of numberArr) {
            if (max < number) {
                max = number;
            }
            if (min > number) {
                min = number;
            }
        }
        return result = {
            max: max,
            min: min,
        };

    }

    //Pallindrome
    async isPallindrome(input: string): Promise<boolean> {
        // if (number < 0) return false;
        return input === input.toString().split("").reverse().join("");
    }

    //Fibonacci series
    async generateFibonacci(number: number): Promise<number[]> {
        const fibonacci = [0, 1];
        for (let i = 2; i < number; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci;
    }

    //Find duplicates
    async findDuplicates(arr: number[]) {

        let elementCount: { [key: number]: number } = {};

        let duplicates: number[] = [];

        arr.forEach(item => {
            if (elementCount[item]) {
                elementCount[item]++;
            } else {
                elementCount[item] = 1;
            }
        });

        for (let item in elementCount) {
            if (elementCount[item] > 1) {
                duplicates.push(Number.parseInt(item));
            }
        }
        console.log("Duplicates:", duplicates);
    }

    async findDuplicatesByMyMethod() {

        const arr: number[] = [1, 2, 2, 3, 4, 1];
        
        const maps: any = arr.reduce((counts, value) => {
            counts.set(value, (counts.get(value) || 0) + 1);
            return counts;
        }, new Map<number, number>());

        for (const map of maps) {
            if (map[1] > 1)console.log(map[0]);
        }
    }

    //Anagram
    async isAnagram(actualString: string, derivedString: string): Promise<boolean> {
        actualString = actualString.split("").sort().join("");
        derivedString = derivedString.split("").sort().join("");
        return actualString === derivedString;

    }
}

new DataStructureLearnings("Viswajeth TSR", 21).executionMethod();