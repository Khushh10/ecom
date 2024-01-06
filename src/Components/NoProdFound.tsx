import ERROR from '../Assets/Images/noproduct.png';
const NoProduct = () =>{
    return(
        <div className='flex justify-center items-center'>
            <img src={ERROR} alt='IMAGEE NOT FOUND' />
        </div>
    );
};

export default NoProduct;