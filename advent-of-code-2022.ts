const fs = require('node:fs');
const readline = require('node:readline');

async function readLineByLine(inputFile: string) {
    const fileStream = fs.createReadStream(inputFile);
    let lines: string[] = [];

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
    let sums: bigint[] = [];
    let index = 0;
    sums[index] = BigInt(0);
    for (const line of lines) {
        try {
            let calories: number = parseInt(line);
            let caloriesBig: bigint = BigInt(calories);
            sums[index] += caloriesBig;
        } catch (error) {
            index++;
            sums[index] = BigInt(0);
        }
    }
    sums.sort((a: BigInt, b: BigInt) => (a < b) ? -1 : ((a > b) ? 1 : 0));
    console.log(sums[sums.length - 1]);
}

async function day1B() {
    var lines: string[] = [];
    lines = await readLineByLine('inputs/day1input.txt');
    let sums: bigint[] = [];
    let index = 0;
    sums[index] = BigInt(0);
    for (const line of lines) {
        try {
            let calories: number = parseInt(line);
            let caloriesBig: bigint = BigInt(calories);
            sums[index] += caloriesBig;
        } catch (error) {
            index++;
            sums[index] = BigInt(0);
        }
    }
    sums.sort((a: BigInt, b: BigInt) => (a < b) ? -1 : ((a > b) ? 1 : 0));
    console.log(sums[sums.length - 1] + sums[sums.length - 2] + sums[sums.length - 3]);
}

//Uncomment the function you want to test!
//day1A();
//day1B();