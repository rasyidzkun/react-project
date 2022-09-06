import { useState } from "react";
import dataFeatures from "./data-features.json";

const Features = () => {
  const [datas, setDatas] = useState(dataFeatures);

  return (
    <section>
      {/* Flex container */}
      <div className="container flex flex-col px-6 mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* Left Side */}
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          {/* Item */}
          {datas.map((data) => {
            return (
              <div
                className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
                key={data.id}
              >
                {/* Heading */}
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex items-center space-x-2">
                    <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                      {data.id}
                    </div>
                    <h3 className="text-base font-bold md:mb-4 md:hidden">
                      {data.h3}
                    </h3>
                  </div>
                </div>

                <div>
                  <h3 className="hidden mb-4 text-lg font-bold md:block">
                    {data.h3}
                  </h3>
                  <p className="text-darkGrayishBlue">{data.p}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
