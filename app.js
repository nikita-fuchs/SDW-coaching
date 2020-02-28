const maschine = require('./kebapmaschine')

async function main() {
    var stuff = await maschine.schneiden("Salami");
    var things = await maschine.schneiden("Brot");
}

main()