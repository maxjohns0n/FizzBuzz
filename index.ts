function is_multiple_of(i: number, divisor: number) {
    return i % divisor == 0;
}

function fizz(i: number) {
    return is_multiple_of(i, 3);
}

function buzz(i: number) {
    return is_multiple_of(i, 5);
}

function bang(i: number) {
    return is_multiple_of(i, 7);
}

for (let i = 1; i <= 100; i++) {
    let result = "";

    if (fizz(i))
        result += "Fizz";
    if (buzz(i))
        result += "Buzz";
    if (bang(i))
        result += "Bang";

    if (result === "")
        result = i.toString();

    console.log(result);
}
