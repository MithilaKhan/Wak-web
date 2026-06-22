import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import WhyChooseUs from "./components/WhyChooseUs";

const ServiceDetails = () => {
    return (
        <div className=" container">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  mx-auto px-4 py-12">
                <div className="lg:col-span-2 space-y-8">
                    <Header />
                    <About />
                    <Services />
                    <Technologies />
                    <WhyChooseUs />

                </div>
                <div className="lg:col-span-1">
                    <Pricing />
                </div>
            </div>

            <Contact />
        </div>
    );
};

export default ServiceDetails;