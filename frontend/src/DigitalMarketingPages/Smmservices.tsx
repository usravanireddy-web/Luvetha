import { useState } from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Plus, Minus } from "lucide-react";
// Heroicons for icons
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import smm from '../assets/smm.png'
import SumanaaLogo from "../assets/sumanaaLogo1.png";
import PartnerLogoB from "../assets/logoimg.png";
import PartnerLogoC from "../assets/logo.png";
import GTR from "../assets/golden.png";
import Vagtha from "../assets/vagtha.png";
import Dharani from "../assets/dharani logo.png";
import IshaaSilks from "../assets/ishaa.png";
import Vibrant from "../assets/vibrant.webp"; 

type BrandItem={
  src : string;
  alt : string
}

const localLogos: BrandItem[] = [
  { src: SumanaaLogo, alt: "Sumana" },
  { src: PartnerLogoB, alt: "Partner B" },
  { src: PartnerLogoC, alt: "Partner C" },
  { src: GTR, alt: "Golden Ratio" },
  { src: Vagtha, alt: "Vagtha" },
  { src: Dharani, alt: "Dharani" },
  { src: IshaaSilks, alt: "Ishaa Silks" },
  {src:Vibrant,alt:'Vibrant'}
 
];
import twitteradvataising from '../assets/twitteradvataising.png'
import instagramadvataising from '../assets/instagramadvataising.png'
import  linkedinadvataising from '../assets/linkedinadvataising.png'
import facebookadvataising from '../assets/facebookadvataising.png'
import youtubeadvataising from '../assets/youtubeadvataising.png'
import aat from '../assets/aat.png'

export default function SMMServices(props) {

    // Client logos (first carousel)
const clients1 = [
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/6-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/1-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/2-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/3-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/02/thebelgianwaffle.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/5-1.png",
];

// Second client carousel (many logos)
const clients2 = [
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Ankusha.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/The-Womens-Clinic.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/The-Concept-Clinic.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Studios-Stapatia.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Sri-Sri-Holistics.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Satya-Big.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Mygominds.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/La-Dezinors.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Clement-Grammar-School.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Anu-Rental-Bikes.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Acela-Services.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/hitachi.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/i4t.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/premierswimmingpool.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/vizagflorist.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/kmspico.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/anzasys.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/everneeds.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/nutrimealbox.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/TedX.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/indausglobal.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/SJ-Infotech.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/twaccha.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/hypersquad.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Hyra.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Immigrotech.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Indus-Hump.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/pickle.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Premier-Infratech.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/sadhana-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Skp.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/SPC-Infra-Projects.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Sri-Surya-Logistics.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/vips.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/vivotex.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/follow-ur-arts.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Gp-Unlock.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Health-365.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/Hitha.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Veminds.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Career-Germany.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/New-Look-Lalitharaj.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Bro-Car-Garage.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Konfido.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/AS-Consultancy.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Access2Fly.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Prop-Connect.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Satish-Dentist.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/SK-Jewellers-gems.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Glindco.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Ostrich-Solar-Energy-Solutions.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/lendingexpert.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Jaya-Ragavendra-mahalaxmi-Masala.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/ics_logo.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Feder-Path.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/dental.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/01/Canfin-Service.png",
];

// Third client carousel (recent)
const clients3 = [
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Vivekananda-school-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Laurus-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Vidyarthi-Vikas-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Insta-Token-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Harsha-Networks-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/SVC-Infra-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Veeramaneni-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Bhart-Udyog-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Niche-Softsol-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/G-mart-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/I-A-Design-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Tekisho-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Suguna-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/zpos-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Cimhans-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Mochive-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Star-Education-Academy-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Country-Oven-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Thirumala-Diagnostics-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Chennais-Amirta-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Career-Germany-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Legal-Capital-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/HABIBS-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/YELLOWCABS-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/CloudCode-01.png",
  "https://ratnamsolutions.com/wp-content/uploads/2025/08/Dezinors-01.png",
];

// Partners carousel
const partners = [
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/7-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/8-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/9-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/10-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/11-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/08/12-1.png",
  "https://ratnamsolutions.com/wp-content/uploads/2024/09/13.png",
];
type BrandItem = {
  src: string;
  alt: string;
};

const BrandGrid = ({ items }: { items: BrandItem[] }) => (
  <Swiper
    modules={[Autoplay, Navigation]}
    spaceBetween={16}
    slidesPerView={2}
    navigation
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop
    breakpoints={{
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
    }}
    className="py-4"
  >
    {items.map((item, index) => (
      <SwiperSlide key={`brand-${item.alt}-${index}`}>
   <div className="w-full h-40 
                flex items-center justify-center p-4
                border border-sky-500
                rounded-none
                transition-all duration-300
                hover:shadow-xl 
                hover:bg-white/5">
  <img
    src={item.src}
    alt={item.alt}
    className="w-full h-full object-contain"
  />
</div>
      </SwiperSlide>
    ))}
  </Swiper>
);
 const accordionData = [
    {
      title:
        "Establishing Clear Business and Social Media Marketing Objectives",
      content: `Determining specific business goals and marketing objectives 
      serves as the foundational step in any successful social media marketing endeavor. 
      Your objectives should be measurable, time-bound, and aligned with your business goals.`,
    },
    {
      title: "Recognize And Reach Your Target Market",
      content: `Social media empowers businesses to showcase their products 
      to the ideal customer base. Using analytics tools and form insights 
      helps identify and connect with the right audience effectively.`,
    },
    {
      title:
        "Industry Research: Maximizing Social Media Marketing Success with SEO Insights",
      content: `Strategic insights from industry research help businesses 
      avoid reinventing the wheel. Learn from competitors and apply 
      proven strategies to achieve faster success.`,
    },
    {
      title: "Understanding Your Business Goals",
      content: `Before starting social media marketing, identify whether 
      your goal is brand awareness, traffic, leads, or sales. 
      We align strategies directly with your business objectives.`,
    },
  ];
  const strategyData = [
  {
    title: "Engagement Optimization",
    content:
      "Actively engaging with comments, messages, and mentions across social media platforms to cultivate meaningful interactions and build a vibrant brand community.",
  },
  {
    title: "Social Media Advertising Optimization",
    content:
      "Implementing targeted paid advertising campaigns across social platforms to expand reach and achieve precise marketing goals.",
  },
  {
    title: "Strategic Social Media Strategy Development",
    content:
      "Crafting a thorough blueprint outlining objectives, audience demographics, content tactics, and KPIs for campaign success.",
  },
  {
    title: "Content Calendar Optimization",
    content:
      "Planning and scheduling posts in advance through meticulous content calendar management.",
  },
  {
    title: "Community Engagement and Management",
    content:
      "Building strong brand relationships through consistent interaction and community nurturing.",
  },
  {
    title: "Performance Monitoring and Optimization",
    content:
      "Tracking key metrics such as reach, engagement, and conversions to continuously improve strategy.",
  },
  {
    title: "Platform Selection",
    content:
      "Choosing the right platforms where your audience is most active and aligned with business objectives.",
  },
  {
    title: "Regular Reporting and Analysis",
    content:
      "Providing detailed reports, insights, and optimization recommendations for sustained growth.",
  },
];
const [activeStrategy, setActiveStrategy] = useState(null);

const toggleStrategy = (index) => {
  setActiveStrategy(activeStrategy === index ? null : index);
};
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
    <div className="relative overflow-hidden bg-[#040922]">

      {/* Background Mask */}
      <div
        className="absolute top-0 left-0 z-[6] min-h-full min-w-full bg-cover bg-center opacity-100 scale-x-[-1]"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20width%3D%221920%22%20height%3D%22954%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23prefix__clip0_77_23308)%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1173%200H0v954h1313l-140-238.5h70l70-119h70L1313%20477l70-119.5h-70l-70-119h-70l70-119.5-70-119zm747%200v954h113V0h-113z%22%20fill%3D%22rgba(4,9,34,1)%22/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content Section */}
 <section className="relative z-10 px-4 py-20 md:py-28">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-3xl font-semibold md:text-5xl">
            Social Media Marketing Services
          </h1>
        </div>
      </section>

    </div>

<section className="py-12 md:py-24 px-5">

  {/* Container - Max Width 1248px */}
  <div className="max-w-[1248px] mx-auto flex flex-wrap items-center">

    {/* LEFT COLUMN (52%) */}
    <div className="w-full md:w-[52%] md:pr-16 mb-12 md:mb-0">

      <img
        src={smm}
        alt="Best SMM Services"
        className="w-full rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
      />

    </div>

    {/* RIGHT COLUMN (48%) */}
    <div className="w-full md:w-[48%] md:pl-8 text-[#040922]">

      <h2 className="text-3xl md:text-[42px] font-medium leading-tight mb-6">
        What Are Social Media Marketing Services?
      </h2>

      <p className="text-lg leading-relaxed text-[#040922]">
        In the realm of marketing, it’s widely acknowledged that the most
        effective way to promote your products and services is to be present
        where your potential customers are—currently, that place is social
        media.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-[#040922]">
        With nearly 65% of the world’s population active on social media,
        it’s evident that social media marketing has become essential in
        today’s landscape.
      </p>

    </div>

  </div>

</section>
<section
        className="bg-cover bg-center py-12"
        style={{ backgroundImage: "url('/clientBg-1.jpg')" }}
      >
        <div className="container mx-auto px-4">
          {/* <h4 className="mb-8 text-center font-kumbh-sans text-3xl font-bold text-gray-900">
            Brands Trust Us
          </h4> */}

          <section className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-12 bg-gray-300" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    <span className="text-[#0091dd]">Brands</span> Trust Us
                  </h3>
                  <div className="h-px w-12 bg-gray-300" />
                </div>

                <BrandGrid items={localLogos} />
              </div>
            </section>
          {/* <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mb-8"
          >
            {clients1.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`client-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mb-8"
          >
            {clients2.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`client-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="mb-8"
          >
            {clients3.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`client-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}

          {/* <h4 className="mb-8 text-center font-kumbh-sans text-3xl font-bold text-gray-900">
            <span className="text-[#076ad7]">Our</span> Trusted Partners
          </h4>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`partner-${idx}`}
                  className="mx-auto h-auto max-w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </section>
  <section className="bg-white 
                    pt-8 pb-10 
                    md:pt-24 md:pb-24 
                    px-5">

  {/* Container - Max Width 1248px */}
  <div className="max-w-[1248px] mx-auto">

    {/* Heading */}
    <h2 className="text-3xl md:text-[42px] font-normal text-[#040922] mb-8 leading-tight">
      A more refined definition would be
    </h2>

    {/* Content */}
    <div className="space-y-5 text-lg leading-relaxed text-[#040922]">

      <p>
        <strong>Social Media Marketing:</strong>{" "}
        <em>
          “Involves creating tailored content for each social media platform to drive engagement and promote your business.”
        </em>
      </p>

      <p>
        Another compelling aspect is the daily average time spent by users,
        which currently stands at around 2.5 hours.
      </p>

      <p>
        Social media platforms offer businesses a unique opportunity to establish
        personal connections with both existing and potential customers. It’s akin
        to meeting someone for the first time—you strive to make a lasting impression.
        Social media serves a similar purpose. It’s where brands can present themselves
        in a compelling manner, ultimately leading to significant business growth.
      </p>

      <p>
        Crafting engaging content for social media, however, is no easy task.
        This is where partnering with a reputable social media marketing agency
        like <span className="font-medium">Luvetha Tech Solutins</span> becomes crucial.
        Our team of social media marketing experts comprehends every facet of the
        discipline, enabling us to devise a foolproof strategy that amplifies your
        campaign’s impact and creativity.
      </p>

      <p>
        Trust Luvetha Tech Solutins to elevate your social media marketing efforts
        and expand your business exposure.
      </p>

    </div>

  </div>
</section>
<section className="bg-[#f4f7ff] py-16 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center max-w-4xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
        Our Proficiency and Expertise in Social Media Advertising
      </h2>
      <p className="mt-6 text-gray-600 leading-relaxed">
        At Luvetha Tech Solutins, we pride ourselves on our extensive experience and expertise 
        in social media advertising. Our team leverages powerful platforms and advanced 
        technologies to drive measurable results for your business.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 p-6 text-center">
        <img
          src={facebookadvataising}
          alt="Facebook Advertising"
          className="rounded-md mb-6 w-full h-48 object-cover"
        />
        <h5 className="text-lg font-semibold mb-4">
          Facebook Advertising
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          Leveraging powerful targeting capabilities to craft compelling ad campaigns 
          that maximize engagement and conversions.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 p-6 text-center">
        <img
          src={instagramadvataising}
          alt="Instagram Advertising"
          className="rounded-md mb-6 w-full h-48 object-cover"
        />
        <h5 className="text-lg font-semibold mb-4">
          Instagram Advertising
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          Creating visually captivating ads that resonate with your audience 
          and drive brand awareness.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 p-6 text-center">
        <img
          src={twitteradvataising}
          alt="Twitter Advertising"
          className="rounded-md mb-6 w-full h-48 object-cover"
        />
        <h5 className="text-lg font-semibold mb-4">
          Twitter Advertising
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          Real-time campaigns designed to spark conversations and amplify 
          your brand message.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 p-6 text-center">
        <img
          src={linkedinadvataising}
          alt="LinkedIn Advertising"
          className="rounded-md mb-6 w-full h-48 object-cover"
        />
        <h5 className="text-lg font-semibold mb-4">
          LinkedIn Advertising
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          Targeting professionals and decision-makers to drive high-quality leads.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 p-6 text-center">
        <img
          src={youtubeadvataising}
          alt="YouTube Advertising"
          className="rounded-md mb-6 w-full h-48 object-cover"
        />
        <h5 className="text-lg font-semibold mb-4">
          YouTube Advertising
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          Delivering compelling video ads that capture attention and increase conversions.
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105 p-6 text-center">
        <img
          src={aat}
          alt="Advanced Analytics"
          className="rounded-md mb-6 w-full h-48 object-cover"
        />
        <h5 className="text-lg font-semibold mb-4">
          Advanced Analytics & Technologies
        </h5>
        <p className="text-gray-600 text-sm leading-relaxed">
          Using powerful analytics tools to monitor, optimize and maximize ROI.
        </p>
      </div>

    </div>
  </div>
</section>
 <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-6">
            How Should You Start Using Social Media Marketing Services For Your Business?
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-4xl">
            In today’s digital age, leveraging social media platforms has become 
            imperative for businesses striving to expand their reach and engage 
            effectively with their audience.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Title */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium bg-gray-50 hover:bg-gray-100 transition"
              >
                {item.title}
                {activeIndex === index ? (
                  <Minus size={20} />
                ) : (
                  <Plus size={20} />
                )}
              </button>

              {/* Content */}
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 py-5"
                    : "max-h-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

<section className="bg-white py-16 px-6">
  <div className="max-w-[1248px] mx-auto">

    {/* Separator */}
    <div className="border-t border-dashed border-gray-300 mb-10"></div>

    <div className="grid md:grid-cols-2 gap-12">

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-3xl md:text-[42px] font-normal text-[#040922] mb-6 leading-tight">
          Our Social Media Marketing Agency Strategy Includes
        </h2>

        <p className="text-gray-600 leading-relaxed mb-4">
          In the ever-evolving landscape of digital marketing, having a robust
          strategy is essential for any social media marketing agency to thrive.
        </p>

        <p className="text-gray-600 leading-relaxed">
          At our agency, we understand the importance of a strategic approach
          to achieve tangible results. Here’s an overview of our methodology.
        </p>
      </div>

      {/* RIGHT SIDE ACCORDION */}
      <div className="space-y-4">
        {strategyData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <button
              onClick={() => toggleStrategy(index)}
              className="w-full flex justify-between items-center text-left group"
            >
              <span className="text-lg md:text-xl font-medium text-gray-800 group-hover:text-[#076ad7] transition">
                {item.title}
              </span>

              <span className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded">
                {activeStrategy === index ? (
                  <Minus size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                activeStrategy === index
                  ? "max-h-96 mt-4"
                  : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

    </>
  );
}