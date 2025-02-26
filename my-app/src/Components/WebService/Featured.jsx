import Image from "next/image";

const insights = [
  { type: "Case Study", title: "Enabling Seamless Resale Operations Across E-Commerce", image: "/case1.webp" },
  { type: "Blogs", title: "Custom Web Application Development: Everything You Need to Know", image: "/case2.webp" },
  { type: "Case Study", title: "Empowering XQUIC for Automated Financial Accuracy", image: "/case2.jpg" },
  { type: "Blogs", title: "How Cloud Computing Can Transform Small Businesses", image: "/blog2.jpg" },
  { type: "Blogs", title: "Trends of Mobile Design: What's Next for Your Business?", image: "/blog3.jpg" },
  { type: "Case Study", title: "KUDO’s Journey to Bridging Global Communications", image: "/case3.jpg" },
  { type: "Blogs", title: "How Generative AI is Transforming Business Operations", image: "/blog4.jpg" },
  { type: "Case Study", title: "Automating Financial Insights for Smarter Business Decisions", image: "/case4.jpg" },
];

export default function Featured() {
  return (
    <section className="bg-black text-white px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h4 className="text-teal-400 uppercase tracking-wide text-sm">Featured Insights</h4>
        <h2 className="text-4xl font-bold mt-2">
          Stories of our <span className="text-teal-400">transformations</span> across
          <br /> Services and Industries
        </h2>
        <p className="text-lg text-gray-300 mt-3">From Concept to Completion</p>
        <button className="mt-6 bg-teal-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-teal-300">
          Explore More
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
          {insights.map((insight, index) => (
            <div key={index} className="relative group">
              <Image src={insight.image} alt={insight.title} width={300} height={200} className="rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg group-hover:bg-opacity-70 transition duration-300 p-4 flex flex-col justify-end">
                <p className="text-sm text-gray-300">{insight.type}</p>
                <h3 className="text-lg font-semibold text-white">{insight.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
