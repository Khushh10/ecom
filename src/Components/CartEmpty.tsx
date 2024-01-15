import cartError from '../Assets/Images/noItems.jpg'

function CartEmpty() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <img src={cartError} alt='IMAGEE NOT FOUND' />
            </div>
        </>
    );
};

export default CartEmpty;