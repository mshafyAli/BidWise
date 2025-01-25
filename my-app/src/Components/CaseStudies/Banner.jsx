const Banner = () => {
  return (
    <div className="bannerColor  h-auto">
      <div className="layout md:py-16 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center pb-20">
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
              amazing clients. We are fully-integrated agency to bag case
              studies covering digital marketing, advertising, design&
              development, packaging, PR and much more; all from a single
              dedicated team.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        
      <div
            className="absolute bottom-0 left-0 w-full h-32 bg-white"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 90% 0)",
            }}
          />
      </div>
    </div>
  );
};

export default Banner;
