import ERROR from '../Assets/Images/noproduct.png';

function NoProductFound() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <img src={ERROR} alt='IMAGEE NOT FOUND' />
            </div>
        </>
    );
};

export default NoProductFound;