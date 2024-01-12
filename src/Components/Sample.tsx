import Cardd from "./Cardd";
import { Link } from "react-router-dom";

const Sample = () => {
    return (
        <>
            <Link to="/users">
                <div className="bg-[#F5F5F7]">
                    <div className="flex flex-wrap justify-center mt-10">
                        <div className="flex text-center">
                            <p className="text-4xl antialiased font-bold">Get in touch</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="flex text-center mb-2">
                            <p className="text-xl antialiased font-bold p-4 text-[#6E6E73]">Find your way in</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Cardd />
                        <Cardd />
                        <Cardd />
                        <Cardd />
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Sample;