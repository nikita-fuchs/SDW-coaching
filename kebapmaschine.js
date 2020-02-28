const maschine = {
    schneiden: async function(gemuese) {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("Geschnitten :", gemuese)
                resolve(true)
            }, 2000);
        })
    }
}

module.exports = maschine