function fizz(i: number) {
    return i % 3 == 0;
}

function buzz(i: number) {
    return i % 5 == 0;
}

for (let i = 1; i <= 100; i++) {
    let result = "";

    if (fizz(i))
        result += "Fizz";
    if (buzz(i))
        result += "Buzz";

    if (result === "")
        result = i.toString();

    console.log(result);
}