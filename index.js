const main = (operator, num1, num2) => {
    if (operator == "+") {
        const data = add(num1, num2);
        console.log(data);
    } else if (operator == "-") {
        const data = subtract(num1, num2);
        console.log(data);
    } else if (operator == "*") {
        const data = multiply(num1, num2); // Fixed typo here
        console.log(data);
    } else if (operator == "/") {
        const data = divide(num1, num2);
        console.log(data);
    } else {
        console.log("There is a problem");
    }
};

const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

main("+", 2, 6);
main("-", 2, 6);
main("*", 2, 6);
main("/", 2, 6);
