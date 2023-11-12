import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import PopularMenu from "./PolularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;