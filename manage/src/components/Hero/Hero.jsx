import { illustrationIntro } from "../../assets";

const Hero = () => {
  return (
    <section>
      {/* Flex container */}
      <div className="container flex flex-col-reverse items-center px-6 mt-10 space-y-0 md:space-y-0 md:flex-row">
        {/* Left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
        </div>

        {/* Right item */}
        <div className="md:w-1/2">
          <img src={illustrationIntro} alt="Illustration Intro Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
