const Banner = () => {
    return (
      <div className="md:w-[80%] w-[90%] mx-auto md:py-16 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* left side */}
          <div className="md:w-1/2 w-full">
            <div className="flex  items-center gap-4">
              <div className="w-5 h-[1px] bg-white hidden md:block"></div>
              <h1 className="text-white md:text-sm text-base">
                Digital Marketing Agency In Dubai
              </h1>
            </div>
  
            <h1 className=" text-white font-bold text-4xl pt-10 hidden md:block">
              We&nbsp;
              <span className="text-primary">
                Inspire & Innovate <br /> Brands
              </span>{" "}
              for the Digital Future
            </h1>
  
            <h1 className=" text-white font-bold text-3xl pt-10 md:hidden block">
              We <span className="text-primary">Inspire & Innovate Brands</span>{" "}
              for the Digital Future
            </h1>
          </div>
  
          <div className="md:w-1/3 w-full md:mt-16 my-8 text-white md:text-sm text-base">
            <p>
              Maven Tech Digital takes pride in highly successful projects for
              amazing clients. We are fully-integrated agency to bag case studies
              covering digital marketing, advertising, design& development,
              packaging, PR and much more; all from a single dedicated team.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  