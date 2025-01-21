import { FaLaptop, FaBook, FaSearchDollar, FaFileAlt } from "react-icons/fa";
import { FaBookOpenReader, FaGraduationCap } from "react-icons/fa6";

export default function GridCards() {
  const cards = [
    {
      title: "Assignment Help",
      description: `Ultimately, getting assignment help will secure your work's quality. Thus, why expert the entire extent of it alone when you can join hands with one of our assignment expert in the UK`,
      icon: <FaLaptop size={40} />,
    },
    {
      title: "Essay Help",
      description: `Don’t worry if you don’t have time to proofread your essays. Our expert proofreaders are here to ace your essays by removing all the minor mistakes.`,
      icon: <FaBookOpenReader size={40} />,
    },
    {
      title: "Coursework Help",
      description: `If you are looking for someone who can provide you with top quality Coursework help, then you have arrived at the perfect spot.British PhD Writers is considered as one of the best online Coursework help providers in the UK because of the remarkable quality of the services offered by our highly knowledgeable and qualified professionals.`,
      icon: <FaBook size={40} />,
    },
    {
      title: "Dissertation Help",
      description: `We know all the difficulties you face while doing your dissertations. We have effective solutions to all your dissertation concerns. Take our services to release your stress.`,
      icon: <FaGraduationCap size={40} />,
    },
    {
      title: "Research Paper Help",
      description: `We offer you complete assistance with your research paper. Our experienced editors and proofreaders are well-equipped with all the knowledge of research paper essentials.`,
      icon: <FaSearchDollar size={40} />,
    },
    {
      title: "Online Exam Help",
      description: `Are you struggling to prepare for your online exams? Do you need professional assistance to help you ace them? Look no further than Online Exam Help Expert! Our team of experienced tutors is here to provide you with top-quality online exam help.`,
      icon: <FaFileAlt size={30} />,
    },
  ];

  return (
    <div className="md:w-[75%] w-full mx-auto px-4">
      <div>
        <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary text-center hidden md:block">
          Achieve Academic Success With Ease Through Our
        </h1>
        <h2 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary text-center hidden md:block">
          &ldquo;Online Class Assistance&rdquo;
        </h2>
        <h1 className="text-xl md:text-3xl font-bold px-1 md:px-2 text-primary text-center  md:hidden block">
          Achieve Academic Success With Ease Through Our &ldquo;Online Class
          Assistance&rdquo;
        </h1>
        <p className="text-gray md:px-[9rem] pt-4 text-sm text-center">
          If you&apos;re looking to achieve academic success without the stress
          and hassle of attending classes, &quot;Online Class Assistance&quot;
          at British Phd Writers Helper can help. Our expert tutors are
          available to guide you through your coursework, offer personalized
          support, and ensure you stay on track to achieve your academic goals.
          Whether you&apos;re struggling with a particular subject or simply
          want to improve your overall academic performance, our &quot;online
          class assistance&quot; is designed to provide you with the tools and
          resources you need to succeed. With flexible scheduling options and a
          dedicated team of professionals, achieving academic success has never
          been easier or more convenient. We guarantee students an A or B on all
          their classwork.
        </p>
      </div>
      <div className="flex items-center justify-center pt-4 px-4">
        <a
          href={`https://wa.me/447397145697?text=${encodeURIComponent(
            "Hello British PhD Writers, I want to inquire about your services please."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row md:gap-6 items-center overflow-hidden group transition-all duration-500"
              >
                {/* Icon */}
                <div>
                  <div className="flex items-center justify-center w-[5.5rem] h-[5.5rem] bg-black group-hover:bg-white text-white group-hover:text-black rounded-full mb-4 transition-all duration-300 z-20 relative">
                    {card.icon}
                  </div>
                </div>
                <div className="relative z-10">
                  {/* Title */}
                  <h2 className="text-lg text-center md:text-start font-bold mb-2 text-black group-hover:text-white transition-colors duration-500">
                    {card.title}
                  </h2>
                  {/* Description */}
                  <p className="text-gray-600 text-sm text-center md:text-start group-hover:text-white transition-colors duration-500">
                    {card.description}
                  </p>
                </div>
                {/* Expanding Black Circle */}
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-black rounded-full transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:bottom-0 group-hover:right-0"></div>
              </div>
            ))}
          </div>
        </a>
      </div>
    </div>
  );
}
