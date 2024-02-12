import { useEffect } from "react"

const arrivalData = {
    Products: [false, false, false, false],
    Vendors: [false, false, false, false]
}

function Trial() {
    useEffect(() => {
        console.log(Array.from(Object.keys(arrivalData)))
    }, [])
    return (
        <div>

        </div>
    )
}
export default Trial