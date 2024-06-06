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
    //main method
    executionMethod() {
        return __awaiter(this, void 0, void 0, function* () {
            const pallindrome = yield this.isPallindrome(235);
            console.log(`The given number is ${(pallindrome == true ? "pallindrome" : "not pallindrome")}`);
            const fibonacci = yield this.generateFibonacci(10);
            console.log(`The generated fibonacci series are  ${fibonacci}`);
        });
    }
    //pallindrome
    isPallindrome(number) {
        return __awaiter(this, void 0, void 0, function* () {
            if (number < 0)
                return false;
            return number === +number.toString().split("").reverse().join("");
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
    //Anagram
    //Using basic method
    isAnagram(actualString, derivedString) {
        return __awaiter(this, void 0, void 0, function* () {
            actualString = actualString.split("").sort().join("");
            derivedString = derivedString.split("").sort().join("");
            return actualString === derivedString;
        });
    }
}
new DataStructureLearnings().executionMethod();
