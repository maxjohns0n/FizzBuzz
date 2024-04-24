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

function bong(i: number) {
    return is_multiple_of(i, 11);
}

function fezz(i: number) {
    return is_multiple_of(i, 13);
}

function do_reverse(i: number) {
    return is_multiple_of(i, 17);
}

for (let i = 1; i <= 357; i++) {
    let result: string[] = [];

    if (fizz(i))
        result.push("Fizz");
    if (fezz(i))
        result.push("Fezz");
    if (buzz(i))
        result.push("Buzz");
    if (bang(i))
        result.push("Bang");

    if (bong(i)) {
        result = result.filter((word) => word === "Fezz"); // Bong must appear either on its own or only with Fezz
        result.push("Bong");
    }

    if (do_reverse(i))
        result.reverse();

    if (!result.length)
        result = [i.toString()];

    console.log(result.join(""));
}
