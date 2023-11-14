import { Parallax } from "react-parallax";
import PropTypes from "prop-types";
const Cover = ({img, title}) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-[700px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center bg-black bg-opacity-30 p-24 text-neutral-content">
                        <div className="max-w-2xl text-white">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

Cover.propTypes = {
    img:PropTypes.string,
    title:PropTypes.string,
};
export default Cover;