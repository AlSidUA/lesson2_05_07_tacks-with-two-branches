//Задача № 1
/*Якщо ми перерахуємо всі натуральні числа нижче
10, кратні 3 або 5, то отримаємо 3, 5, 6, 9. Сума цих кратних
дорівнює 23. Завершіть розв`язання так, щоб воно повернуло
суму всіх кратних 3 або 5 нижче переданого числа. Крім того,
якщо число від`ємне, поверніть 0. (Якщо число кратне 3 і 5,
порахуйте його один раз*/

//Варіант 1
const naturalNumber = (limit) => {
    let Result = 0;
        for (let i = 1; i < limit; i++) {
            if (i%3===0||i%5===0) {
                Result+=i
                }else if(limit<0){
                return 0
            }
        }
    return Result
}

export default naturalNumber;

    

  //Варіант 2

/*const naturalNum = (limit) => {
    let Arr = [];
        for (let i = 1; i < limit; i++) {
            if (i%3===0||i%5===0) {
                Arr.push(i);
            }else if(limit<0){
                return 0
            }
        }
    return Arr.reduce((acc, curr)=>acc+curr, 0);
}

//export default naturalNum;*/

