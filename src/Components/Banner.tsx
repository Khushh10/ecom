import bannerD from '../Assets/Images/bannerrrr.png';


const Banner = () => {
    return (
        <div className="container">
            <div className="row" style={{ justifyContent: 'center' }}>
                <div className="col-md-12 mt-4">
                    <div className="container" id="banner">
                        <img src={bannerD} alt="Banner Dikh Raha Hai" style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;