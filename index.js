const pyramid = (n, row = 0, level = '') => {
    // Complete
    if (n === row) {
        // return levelArr.join('\n');
        console.log(level);
        return;
    }

    // Handling a row
    if (2 * n - 1 === level.length) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add = '';
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add += '#';
    } else {
        add += ' ';
    }

    return pyramid(n, row, level + add);
};

/*
const pyramid = n => {
    const midpoint = Math.floor((2 * n - 1) / 2);
    let level = '';
    for (let row = 0; row < n; row++) {
        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }

            if (column === 2 * n - 2) {
                level += '\n';
            }
        }
    }

    return level;
}
*/

module.exports = {
    pyramid
}