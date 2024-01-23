import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
export default function UserDetails() {
    const { userId } = useParams()
    const [products, setProducts] = useState<Array<string>>([])
    const location = useLocation()
    useEffect(() => {
        console.log(location.pathname.slice(7))
        const fetchproducts = () => {
            fetch(`https://fakestoreapi.com/products/category/${userId}`)
                .then((res) => res.json())
                .then((json) => {
                    setProducts(json);
                });
        }
        fetchproducts();
        console.log(products)
    }, [location.pathname,userId])
    return (
        <div>Details about users {userId}</div>
    );
};