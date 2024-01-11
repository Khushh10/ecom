import { useEffect } from 'react';
import ERROR from '../Assets/Images/noproduct.png';
interface NoProdProps {
    setShowData: React.Dispatch<React.SetStateAction<boolean>>;
    setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
    noProductHandle: () => void;
    allData: () => void;
}
function NoProduct(props: NoProdProps) {
    useEffect(() => {
        props.allData();
    })
    
    return (
        <>
            <div className='flex justify-end items-end mt-2 mx-2'>
                <button onClick={props.noProductHandle} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Back To Search
                </button>
            </div>
            <div className='flex justify-center items-center'>
                <img src={ERROR} alt='IMAGEE NOT FOUND' />

            </div>
        </>

    );
};

export default NoProduct;