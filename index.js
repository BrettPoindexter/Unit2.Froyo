// vanilla,vanilla,vanilla,strawberry,coffee,coffee
const user = prompt("Enter froyo flavors separated by commas: ");

const flavorCount = (input) => {
    const flavors = input.split(',');

    const flavorAmount = {};

    for (let i = 0; i < flavors.length; i++) {
        const flavor = flavors[i].trim();

        if (flavorAmount[flavor]) {
            flavorAmount[flavor]++;
        } else {
            flavorAmount[flavor] = 1;
        }
    }
    return flavorAmount;
}

console.table(flavorCount(user));