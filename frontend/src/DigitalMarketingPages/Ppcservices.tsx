import { useState } from 'react'
import ppc from '../assets/ppc.png'
export default function PPCServices(props) {

  const AccordionItem = ({ title, content, index, active, setActive }) => {
    const isOpen = active === index;

    return (
      <div className="border-b border-gray-300">
        <button
          onClick={() => setActive(isOpen ? null : index)}
          className="w-full flex justify-between items-center text-left py-5 group"
        >
          {/* Title */}
          <span className="text-[20px] md:text-[24px] font-medium text-[#040922]">
            {title}
          </span>

          {/* Boxed Icon (Fusion Style) */}
          <span
            className={`
    w-8 h-8 flex items-center justify-center 
    border border-gray-400 rounded-sm 
    bg-white text-black 
    transition-all duration-300
    group-hover:bg-[#076ad7] group-hover:text-white
  `}
          >
            {isOpen ? "−" : "+"}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[800px] pb-6" : "max-h-0"
            }`}
        >
          <p className="text-gray-700 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    );
  };
  const [active, setActive] = useState(0);

  return (<>

    <div className="relative overflow-hidden bg-[#040922]">

      {/* Background Mask */}
      <div
        className="absolute top-0 left-0 z-[6] min-h-full min-w-full bg-cover bg-center opacity-100 scale-x-[-1]"
        style={{
          backgroundImage: `url${ppc}`,
        }}
      />

      {/* Content Section */}
      <section className="relative z-10 px-4 py-20 md:py-28">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Pay Per Click Services
          </h1>
        </div>
      </section>

    </div>
    <section className="bg-[#ffffff] py-12 md:py-20 px-6">
      <div className="max-w-[1248px] mx-auto">

        {/* ROW 1 → Image + Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* LEFT IMAGE */}
          <div className="w-full md:w-[52%]">
            <img
              src={ppc}
              alt="PPC campaign services"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-[48%] text-[#040922]">

            <h4 className="text-2xl md:text-[42px] font-medium leading-tight mb-6">
              Luvetha Tech Solutins: Achieving Success with Top-Quality PPC Services
            </h4>

            <p className="text-[#040922] leading-relaxed mb-4">
              Marketers, let’s cut to the chase for a moment. How confident are you in your understanding of sponsored advertising, particularly PPC, on a scale of 1-10?
            </p>

            <p className="text-[#040922] leading-relaxed">
              Despite the fact that 45% of small businesses dabble in online advertising, many of us still lack familiarity with PPC advertising. It’s undeniably one of the most disruptive forms of advertising in the modern era.
            </p>

          </div>
        </div>

        {/* ROW 2 → Full Width Text */}
        <div className="mt-12 text-[#040922] leading-relaxed space-y-4">

          <p>
            PPC ads empower companies to meticulously plan their advertising budget, implement innovative strategies, and target audiences precisely when they’re actively seeking products or services similar to what the company offers.
          </p>

          <p>
            As a well-established PPC services agency based in India, we boast six years of proven expertise in effectively managing PPC advertising campaigns for numerous reputable businesses.
          </p>

          <p>
            Our mission is simple: to help businesses secure exceptional leads. We achieve this through highly customized, optimized campaigns that are laser-focused on delivering tangible ROI.
          </p>

        </div>

        {/* Bottom Separator */}
        <div className="border-t border-white/20 mt-10"></div>

      </div>
      <div className="w-full mt-8 mb-2">
        <div className="border-t border-gray-300"></div>
      </div>
    </section>

    <section className="bg-white py-6 md:py-10 px-6">
      <div className="max-w-[1248px] mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-[42px] font-normal text-[#040922] leading-tight mb-6">
          What Is The Importance Of PPC Services?
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          The importance of PPC (Pay-Per-Click) services in today’s digital landscape cannot be overstated. PPC advertising offers businesses a targeted and cost-effective way to reach their desired audience online. By placing ads on search engines, social media platforms, and other digital channels, businesses can ensure their brand is visible to potential customers at the exact moment they are searching for products or services. Additionally, PPC allows for precise budget control, allowing businesses to allocate resources efficiently and track the return on investment (ROI) of their advertising efforts in real-time. Ultimately, PPC services play a crucial role in driving website traffic, generating leads, and increasing sales for businesses of all sizes.
        </p>

      </div>
    </section>

    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1248px] mx-auto">

        <h2 className="text-3xl md:text-[42px] font-normal text-[#040922] mb-6 leading-tight">
          Why Choose Luvetha Tech Solutins For PPC Services
        </h2>

        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          Choose Luvetha Tech Solutins for PPC services and unlock unparalleled expertise and results. With years of experience and a proven track record, we tailor campaigns to your unique goals. Benefit from transparent communication, detailed reporting, and maximum ROI. Trust{" "}
          {/* <a 
        href="https://ratnamsolutions.com/" 
        className="text-[#076ad7] hover:underline"
      > */}
          Luvetha Tech Solutins
          {/* </a>{" "} */}
          for your PPC success.
        </p>

      </div>
    </section>

    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1248px] mx-auto">

        <h2 className="text-3xl md:text-[42px] font-normal text-[#040922] mb-6 leading-tight">
          Reach Your Audience at the Right Time with Tailored PPC Services!
        </h2>

        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          At Luvetha Tech Solutins, we understand the importance of reaching your target audience precisely when they’re looking for your products or services...
          {/* <a
        href="https://clutch.co/profile/ratnam-solutions"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#076ad7] hover:underline ml-1"
      >
        PPC management
      </a>, */}
          we craft strategic campaigns that maximize your visibility and ROI.
        </p>

      </div>
      <div className="max-w-[1248px] mx-auto px-6 mt-[30px] mb-[10px]">
        <div className="border-t border-gray-300"></div>
      </div>
    </section>


    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-[1248px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-[42px] font-normal text-[#040922] mb-8">
          Understanding PPC Marketing
        </h2>

        {/* A. How PPC Works */}
        <h5 className="text-[20px] font-bold text-[#040922] mb-6">
          A. How PPC Works
        </h5>

        <div className="space-y-0">
          <AccordionItem
            title="Ad Auction Process"
            content="In the realm of PPC advertising, the ad auction process is fundamental. It begins when a user initiates a search query..."
            index={0}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Cost-per-Click (CPC) Model"
            content="The Cost-per-Click (CPC) model is the cornerstone of PPC advertising..."
            index={1}
            active={active}
            setActive={setActive}
          />
        </div>

        {/* B Section */}
        <h5 className="text-[20px] font-bold text-[#040922] mt-14 mb-6">
          B. Types of PPC Advertising
        </h5>

        <div>
          <AccordionItem
            title="Search Ads"
            content="Search ads are targeted text-based ads displayed with search results..."
            index={2}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Display Ads"
            content="Display ads are visually striking ads on websites, blogs, or apps..."
            index={3}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Social Media Ads"
            content="Social media ads are targeted ads on platforms like Facebook, Instagram..."
            index={4}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Remarketing"
            content="Remarketing, or retargeting, is a PPC strategy targeting users..."
            index={5}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Google Shopping Ads"
            content="Google Shopping Ads display product images, prices..."
            index={6}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="In-Stream Ads On YouTube"
            content="In-stream ads on YouTube are video ads that play before, during, or after videos..."
            index={7}
            active={active}
            setActive={setActive}
          />
        </div>

        {/* C Section */}
        <h5 className="text-[20px] font-bold text-[#040922] mt-14 mb-6">
          C. Benefits of PPC Marketing
        </h5>

        <div>
          <AccordionItem
            title="Immediate Visibility"
            content="PPC advertising offers instant visibility..."
            index={8}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Highly Targeted"
            content="PPC allows for precise targeting..."
            index={9}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Measurable ROI"
            content="With robust tracking and analytics tools..."
            index={10}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Flexible Budgeting"
            content="PPC offers flexibility in budgeting..."
            index={11}
            active={active}
            setActive={setActive}
          />

          <AccordionItem
            title="Scalability"
            content="PPC campaigns can be easily scaled..."
            index={12}
            active={active}
            setActive={setActive}
          />
        </div>

      </div>
    </section>
  </>)
}