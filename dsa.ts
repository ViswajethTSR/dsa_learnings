class DataStructureLearnings {

    //main method
    async executionMethod() {
        const pallindrome = await this.isPallindrome(235);
        console.log(`The given number is ${(pallindrome == true ? "pallindrome" : "not pallindrome")}`);
        const fibonacci = await this.generateFibonacci(10);
        console.log(`The generated fibonacci series are  ${fibonacci}`);

    }

    //pallindrome
    async isPallindrome(number: number): Promise<boolean> {
        if (number < 0) return false;
        return number === +number.toString().split("").reverse().join("");
    }

    //Fibonacci series
    async generateFibonacci(number: number): Promise<number[]> {
        const fibonacci = [0, 1];
        for (let i = 2; i < number; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        return fibonacci;
    }

    //Anagram
    async isAnagram(actualString: string, derivedString: string): Promise<boolean> {
        actualString = actualString.split("").sort().join("");
        derivedString = derivedString.split("").sort().join("");
        return actualString === derivedString;

    }
}

new DataStructureLearnings().executionMethod();