

class DataStructureLearnings {


    async executionMethod() {
        const pallindrome = await this.isPallindrome(232);
        console.log(pallindrome);


    }

    //pallindrome
    async isPallindrome(number: number): Promise<boolean> {
        if (number < 0) return false;
        return number === +number.toString().split("").reverse().join("");
    }

    //fibonacci series
    async generateFibonacci(number:number):Promise<number[]>{
        const fibonacci=[0];
        for(let i=1;i<number;i++){
            

        }


        return [];

    }

}

new DataStructureLearnings().executionMethod();