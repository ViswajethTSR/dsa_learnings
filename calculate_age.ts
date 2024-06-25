export const calculateAge = (birthdate: Date): number => {

    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    const dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;

}

export const developer: IDeveloper = {
    name: "Viswajeth TSR",
    email: "viswa.dev.in@gmail.com",
    age: calculateAge(new Date(2003, 5, 4))
}

interface IDeveloper {
    name: string,
    email: string,
    age: number,
}