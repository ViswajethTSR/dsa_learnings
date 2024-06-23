"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DataStructureLearnings {
    constructor(name, age) {
        this.arr = [1, 12, 0, 23, 34, 45, 56, 67, 78, 89, 90, 100];
        console.log(`Hello I'm ${name} and I'm ${age} old `);
    }
    //main method
    executionMethod() {
        return __awaiter(this, void 0, void 0, function* () {
            // const pallindrome = await this.isPallindrome("121");
            // console.log(`The given input is ${(pallindrome == true ? "pallindrome" : "not pallindrome")}`);
            // const fibonacci = await this.generateFibonacci(100);
            // console.log(`The generated fibonacci series are  ${fibonacci}`);
            // this.isPresentArray(53).then((a) => console.log(a ? "The given input present in the array" : "THe given input is not present in array"));
            // this.findMaxAndMin()
            //     .then((a) => console.log(a));    
            this.findDuplicatesByMyMethod();
            // this.findMaxAndMin();
        });
    }
    isPresentArray(number) {
        return __awaiter(this, void 0, void 0, function* () {
            const arr = this.arr;
            for (const num of arr) {
                if (num === number)
                    return true;
            }
        });
    }
    findMaxAndMin() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = {
                min: 0,
                max: 0,
            };
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
        });
    }
    //Pallindrome
    isPallindrome(input) {
        return __awaiter(this, void 0, void 0, function* () {
            // if (number < 0) return false;
            return input === input.toString().split("").reverse().join("");
        });
    }
    //Fibonacci series
    generateFibonacci(number) {
        return __awaiter(this, void 0, void 0, function* () {
            const fibonacci = [0, 1];
            for (let i = 2; i < number; i++) {
                fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
            }
            return fibonacci;
        });
    }
    //Find duplicates
    findDuplicates(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            let elementCount = {};
            let duplicates = [];
            arr.forEach(item => {
                if (elementCount[item]) {
                    elementCount[item]++;
                }
                else {
                    elementCount[item] = 1;
                }
            });
            for (let item in elementCount) {
                if (elementCount[item] > 1) {
                    duplicates.push(Number.parseInt(item));
                }
            }
            console.log("Duplicates:", duplicates);
        });
    }
    findDuplicatesByMyMethod() {
        return __awaiter(this, void 0, void 0, function* () {
            const arr = [1, 2, 2, 3, 4, 1];
            const maps = arr.reduce((counts, value) => {
                counts.set(value, (counts.get(value) || 0) + 1);
                return counts;
            }, new Map());
            for (const map of maps) {
                if (map[1] > 1)
                    console.log(map[0]);
            }
        });
    }
    //Anagram
    isAnagram(actualString, derivedString) {
        return __awaiter(this, void 0, void 0, function* () {
            actualString = actualString.split("").sort().join("");
            derivedString = derivedString.split("").sort().join("");
            return actualString === derivedString;
        });
    }
}
new DataStructureLearnings("Viswajeth TSR", 21).executionMethod();
