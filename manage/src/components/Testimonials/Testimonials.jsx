import { useState } from "react";
import { dataTestimonials } from "./data-testimonials";

const Testimonials = () => {
  const [datas, setDatas] = useState(dataTestimonials);

  return (
    <section>
      {/* Container */}
      <div className="container max-w-6xl px-6 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage ?
        </h2>

        {/* Testimonials container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonials */}
          {datas.map((data) => {
            return (
              <div
                className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
                key={data.id}
              >
                <img src={data.img} alt="Testimonials Image" className="w-28" />
                <h5 className="text-lg font-bold">{data.name}</h5>
                <p className="text-darkGrayishBlue text-sm">{data.p}</p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="my-12">
          <button
            type="button"
            className="p-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
