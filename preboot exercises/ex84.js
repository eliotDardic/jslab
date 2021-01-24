function boom() {
    for (let i = 1; i <= 100; i++) {
        (i % 7 == 0 || i / 10 == 7 || i % 10 == 7)
        console.log('Boom');
    } else console.log(i)
}

boom();

