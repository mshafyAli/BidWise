import Image from "next/image";

const Award = () => {
  return (
    <div className="bg-AwardBg w-full bg-cover h-full ">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div className="md:py-10 py-4">
          <h1 className="text-6xl text-white font-bold">Awards</h1>

          <div className="pt-10 pb-24 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2 w-full">
              <h1 className="text-white font-bold text-3xl hidden md:block">
                <span className="font-semibold">Maven Tech Digital, a</span> <br />
                Synonym of Quality, Trust and <br /> Distinction
              </h1>
              <h1 className="text-white font-bold text-3xl block md:hidden">
                <span className="font-semibold">Maven Tech Digital, a&nbsp;</span>
                Synonym of Quality, Trust and Distinction
              </h1>
              <p className="text-white text-sm pt-2">
                Client satisfaction is one of our top priorities. Our
                consistency, dedication toward work, and constant innovation
                have won us several accolades in the last decade.
                <span className="font-bold">
                  {" "}
                  Hire web designers and web developers in Dubai
                </span>{" "}
                from Maven Tech Digital to build highly responsive, scalable, and
                robust web applications with a touch of finesse.
              </p>
            </div>

            <div className="flex gap-[2px] md:mt-24 mt-0">
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <Image src="/badge1.svg" width={96} height={96} alt="Badge 1" />
              </div>
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <Image src="/badge2.svg" width={96} height={96} alt="Badge 2" />
              </div>
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <Image src="/badge3.svg" width={96} height={96} alt="Badge 3" />
              </div>
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <Image src="/badge4.webp" width={96} height={96} alt="Badge 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
