export function jewData(data:Array<TProduct>) {
    data.forEach((dat) => {
        if (dat.category === 'jewelery') {
            // choiced.push(dat);
            console.log("Jewelery Data", dat);
        }
    })
}

export function elecData(data:Array<TProduct>){
    data.forEach((dat) => {
        if (dat.category === 'electronics') {
            // choiced.push(dat);
            console.log("Electric Data",dat);
        }
    })
}

export function menData(data:Array<TProduct>){
    data.forEach((dat) => {
        if (dat.category === "men's clothing") {
            // choiced.push(dat);
            console.log("Mens Data",dat);
        }
    })
}

export function wData(data:Array<TProduct>){
    data.forEach((dat)=>{
        if (dat.category === "women's clothing") {
            console.log("Women's Data",dat);
        }
    })
}