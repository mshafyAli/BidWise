const Banner = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto py-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 w-full">
          <div className="flex items-center gap-4 pt-10 md:pt-0">
            <div className="w-5 h-[1px] bg-white hidden md:block"></div>
            <h1 className="text-white md:text-sm text-base">
              Digital Marketing Agency In Dubai
            </h1>
          </div>
          <h1 className=" text-white font-bold text-4xl pt-10 hidden md:block">
            We Activate <br />
            Businesses & Brands <br />
            for the <span className="text-primary"> Digital Change</span>{" "}
          </h1>

          <h1 className="text-white font-bold text-3xl pt-6 md:hidden block">We Activate Businesses & Brands for the <span className="text-primary">Digital Change</span></h1>
        </div>

        <div className="md:w-1/3 w-full md:mt-16 mt-6 text-white md:text-sm text-base">
          <p>
            Maven Tech Digital is an accomplished digital transformation company in
            Dubai with a progressive perspective. We offer scalable web and
            mobile solutions coupled with digital marketing services under one
            roof — without silos or handoffs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
