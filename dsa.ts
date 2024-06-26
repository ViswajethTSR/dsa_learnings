import { developer } from "./calculate_age";

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
        // let input: any = 205468;
        // this.insertMinusSymbolBetweenTwoEvenNUmbers(input);
        // const arr: number[] = [0, 25, -10, -3, 8, 7, 6, 5, -4, -1, 3, 2, 1];
        // this.sortTheGivenArray(arr);

        // const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, 4, 5, 5,];
        // this.findMaximumElement(arr1);
        // this.convertCapitalsToSmallAndSmalltoCapital();
        // this.printThe2dArray()
        // this.sumOfSquareOFArray();
        // this.sumAndProductOfArray();
        this.removeDuplicates()
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

    public insertMinusSymbolBetweenTwoEvenNUmbers(input: number) {
        let convertedStringInput = input.toString();
        console.log(convertedStringInput);
        const arr = new Array(...convertedStringInput.split(''));
        const formattedArr: string[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (parseInt(arr[i]) % 2 === 0 && parseInt(arr[i + 1]) % 2 === 0) {
                formattedArr.push(arr[i]);
                formattedArr.push('-');
                console.log(formattedArr);
            }
            else {
                formattedArr.push(arr[i]);
                console.log(formattedArr);
            }
        }
        console.log(formattedArr.join(''));
    }

    public sortTheGivenArray(arr: number[]) {

        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr);
    }
    public findMaximumElement(arr: any[]) {

        const elementCounts = arr.reduce((counts, value) => {
            counts.set(value, (counts.get(value) || 0) + 1);
            return counts;
        }, new Map());
        console.log(elementCounts);
        let maxCount = 0;
        let minCount = 1;
        let maxvalue = 0;
        let minValue = 0;
        for (const elementCount of elementCounts) {
            if (elementCount[1] > maxCount) {
                maxCount = elementCount[1];
                maxvalue = elementCount[0];
            }
            if (elementCount[1] <= 1) {
                minCount = elementCount[1];
                minValue = elementCount[0];
            }

        }
        console.log(`Max:${maxvalue} (${maxCount} times)\nMin:${minValue} (${minCount} times)`);
    }

    public convertCapitalsToSmallAndSmalltoCapital() {
        const string: string = "The Quick Brown Fox";
        const stringArr: string[] = string.split(' ');
        for (let i = 0; i < stringArr.length; i++) {
            const splitedString: string[] = stringArr[i].split('');
            for (let i = 0; i < splitedString.length; i++) {
                if (i === 0) {
                    splitedString[i] = splitedString[i].toLocaleLowerCase();
                }
                else {
                    splitedString[i] = splitedString[i].toLocaleUpperCase();
                }
            }
            stringArr[i] = splitedString.join('');
        }
        const formattedString: string = stringArr.join(' ')
        console.log(formattedString);
    }

    public printThe2dArray() {
        const array2d: number[][] = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
        for (const arr of array2d) {
            console.log(`row ${array2d.indexOf(arr)}`);
            // console.log(...arr);
            for (const number of arr) {
                console.log(number);
            }
        }
    }
    public sumOfSquareOFArray() {
        const numberArr = [1, 2, 3, 4, 5, 6];
        let sum = 0;
        numberArr.forEach((a) => {
            const square = Math.pow(a, 2);
            sum += square;
        })
        console.log(sum);
    }
    public sumAndProductOfArray() {
        const numberArr = [1, 2, 3, 4, 5, 6];
        let sum = 0;
        let product = 1;
        numberArr.forEach((a) => {
            sum += a;
            product *= a;
        });
        console.log(sum, product);
    }
    public removeDuplicates() {
        const arr: any[] = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 3, 3, 4, 5, 5,];
        const filteredArr: any[] = [];
        for (const num1 of arr) {
            for (const num2 of arr) {
                if (num1 === num2 && !filteredArr.includes(num2)) filteredArr.push(num2);
            }
        }
        
        console.log(filteredArr);
    }
}
new DataStructureLearnings(developer.name, developer.age).executionMethod();