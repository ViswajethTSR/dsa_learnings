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

        // this.findDuplicatesByMyMethod();
        // this.findMaxAndMin();
        // this.sortTheArrayLikeWave();
        this.transposeMatrix([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]);
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
            if (map[1] > 1) console.log(map[0]);
        }
    }

    async sortTheArrayLikeWave() {
        const arr: number[] = [23, 34, 75, 12, 67, 98, 65, 43, 150, 1500, 13, 20];
        arr.sort((a, b) => a - b);
        let temp: number = 0;

        for (let i = 0; i < arr.length - 1; i += 2) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;

        }
        console.log(arr);
    }

    //Anagram
    async isAnagram(actualString: string, derivedString: string): Promise<boolean> {
        actualString = actualString.split("").sort().join("");
        derivedString = derivedString.split("").sort().join("");
        return actualString === derivedString;

    }
    
    async transposeMatrix(array2d: number[][]) {

        const rows = array2d.length;
        const cols = array2d[0].length;

        const transposedMatrix: number[][] = new Array(cols).fill(null).map(() => new Array(rows).fill(0));
        console.log(transposedMatrix);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                transposedMatrix[j][i] = array2d[i][j];
            }
        }
        console.log(transposedMatrix);

    }
}

const calculateAge = (birthdate: Date): number => {

    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

const developer: IDeveloper = {
    name: "Viswajeth TSR",
    email: "viswa.dev.in@gmail.com",
    age: calculateAge(new Date(2003, 5, 4))
}

new DataStructureLearnings(developer.name, developer.age).executionMethod();

interface IDeveloper {
    name: string,
    email: string,
    age: number,
}