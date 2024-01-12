import Rating from 'react-rating-stars-component';
const CommonCard = (props: { data: Array<TProduct> }) => {
    return (
        <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex">
            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-style w-full my-2 center shadow">
                <div className="my-2">
                    <img src="" className="max-w-full h-auto imagee w-full rounded rounded-t" alt='banner img' />
                </div>
                <div className="justifyy flex-auto p-3 flex flex-col text-center">
                    <p className="mb-0" style={{ overflow: 'hidden', height: '24px', fontSize: 'medium' }}>
                        <b>TITLE</b>
                    </p>
                    <h5 className="text-center">$PRICE</h5>
                    <p className="mb-0" style={{ overflow: 'hidden', height: '75px', fontSize: 'small' }}>
                        DESCRIPTION
                    </p>
                </div>
                <div className="flex items-center justify-center my-2">
                    <h5><Rating count={5} value={5} size={24} edit={false} /></h5><br />
                </div>
                <a href="#!" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-900 text-white hover:bg-gray-900 card-style cart">
                    Add to cart
                </a>
                <a href="#!" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-100 text-gray-800 hover:bg-gray-200 card-style cart my-2">
                    <i className="fas fa-heart fa-lg text-gray-600 px-1"></i>
                </a>
            </div>
        </div>
    );
};

export default CommonCard;