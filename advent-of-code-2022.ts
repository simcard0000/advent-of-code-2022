const fs = require('node:fs');
const readline = require('node:readline');

async function readLineByLine(inputFile: string) {
    const fileStream = fs.createReadStream(inputFile);
    const lines: string[] = [];
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      lines.push(line);
    }
    return lines;
}

async function day1A() {
    var lines: string[] = [];
    lines = await readLineByLine('inputs/day1input.txt');
    const sums: bigint[] = [];
    let index = 0;
    sums[index] = BigInt(0);
    for (const line of lines) {
        try {
            const calories: number = parseInt(line);
            const caloriesBig = BigInt(calories);
            sums[index] += caloriesBig;
        } catch (error) {
            index++;
            sums[index] = BigInt(0);
        }
    }
    sums.sort((a: bigint, b: bigint) => (a < b) ? -1 : ((a > b) ? 1 : 0));
    console.log(sums[sums.length - 1]);
}

async function day1B() {
    var lines: string[] = [];
    lines = await readLineByLine('inputs/day1input.txt');
    const sums: bigint[] = [];
    let index = 0;
    sums[index] = BigInt(0);
    for (const line of lines) {
        try {
            const calories: number = parseInt(line);
            const caloriesBig = BigInt(calories);
            sums[index] += caloriesBig;
        } catch (error) {
            index++;
            sums[index] = BigInt(0);
        }
    }
    sums.sort((a: bigint, b: bigint) => (a < b) ? -1 : ((a > b) ? 1 : 0));
    console.log(sums[sums.length - 1] + sums[sums.length - 2] + sums[sums.length - 3]);
}

async function day2A() {
    var lines: string[] = [];
    lines = await readLineByLine('inputs/day2input.txt');
    const RPS: {[index: string]: number} = {
        A: 1,
        B: 2,
        C: 3,
        X: 1,
        Y: 2,
        Z: 3
    };
    let sum = 0n;
    for (const line of lines) {
        const turnMoves = line.split(" ");
        const opp = RPS[turnMoves[0]];
        const you = RPS[turnMoves[1]];
        if (opp == you) {
            sum += BigInt(you + 3);
        } else if ((you == 1 && opp == 3) || (you == 3 && opp == 2) || (you == 2 && opp == 1)) {
            sum += BigInt(you + 6);
        } else {
            sum += BigInt(you);
        }
    }
    console.log(sum);
}

async function day2B() {
    var lines: string[] = [];
    lines = await readLineByLine('inputs/day2input.txt');
    const RPS: {[index: string]: number} = {
        A: 1,
        B: 2,
        C: 3,
        X: 0,
        Y: 3,
        Z: 6
    };
    let sum = 0n;
    for (const line of lines) {
        const turnMoves = line.split(" ");
        const opp = RPS[turnMoves[0]];
        const state = RPS[turnMoves[1]];
        if (state == 3) {
            sum += BigInt(state + opp);
        } else if (opp == 3) {
            if (state == 6) {
                sum += BigInt(state + 1);
            } else {
                sum += BigInt(state + 2);
            }
        } else if (opp == 2) {
            if (state == 6) {
                sum += BigInt(state + 3);
            } else {
                sum += BigInt(state + 1);
            }
        } else if (opp == 1) {
            if (state == 6) {
                sum += BigInt(state + 2);
            } else {
                sum += BigInt(state + 3);
            }
        }
    }
    console.log(sum);
}

//Uncomment the function you want to test!
//day1A();
//day1B();
//day2A();
//day2B();