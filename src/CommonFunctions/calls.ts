export function elecData(data: Array<TProduct>, choiced: Array<TProduct>) {
    data.forEach((dat) => {
        if (dat.category === 'electronics') {
            choiced.push(dat);
            console.log("Electric Data", choiced);
        }
    })
}

export function menData(data: Array<TProduct>, choiced:Array<TProduct>) {
    data.forEach((dat) => {
        if (dat.category === "men's clothing") {
            choiced.push(dat);
            console.log("Mens Data", choiced);
        }
    })
}

export function wData(data: Array<TProduct>, choiced: Array<TProduct>) {
    data.forEach((dat) => {
        if (dat.category === "women's clothing") {
            console.log("Women's Data", dat);
        }
    })
}