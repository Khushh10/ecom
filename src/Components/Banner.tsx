import bannerD from '../Assets/Images/bannerrrr.png'
function Banner() {
    return (
        <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap " style={{ justifyContent: 'center' }}>
                <div className="md:w-full pr-4 pl-4 mt-4">
                    <div className="container mx-auto sm:px-4" id="banner">
                        <img src={bannerD} alt="Banner Dikh Raha Hai" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;