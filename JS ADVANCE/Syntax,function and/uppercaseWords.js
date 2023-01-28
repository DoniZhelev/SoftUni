function UpCaseWords(params) {
    let result = params.
    toUpperCase()
    .match(/\w+/g)
    .join(', ');

    console.log(result);
}

UpCaseWords('Functions in JS can be nested, i.e. hold other functions')