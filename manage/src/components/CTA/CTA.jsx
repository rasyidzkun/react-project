const CTA = () => {
  return (
    <section className="bg-brightRed">
      {/* Flex Container */}
      <div className="container flex flex-col items-center justify-center px-6 py-24 space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white md:max-w-xl md:text-left md:mx-6">
          Simplify how your team works today
        </h2>
        <button
          type="button"
          className="p-3 px-6 text-brightRed bg-white rounded-full shadow-2xl hover:opacity-90"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
