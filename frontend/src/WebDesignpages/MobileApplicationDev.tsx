import { useState } from 'react';

import {
  FaDatabase,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaPaintBrush,
  FaHourglassHalf,
  FaMobileAlt,
  FaHeadset,
} from "react-icons/fa"
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import mobileapplicationdev from '../assets/mobileapplicationdev.png'
export default function MobileApplicationDevelopment() {


  const accordionData = [
    {
      title: "Expertise",
      content:
        "Our seasoned team of developers possesses in-depth knowledge and expertise in the latest mobile technologies, ensuring the delivery of high-quality and future-ready applications.",
    },
    {
      title: "User-Centric Design",
      content:
        "We believe in creating mobile applications that not only meet business objectives but also provide a seamless and enjoyable user experience. Our user-centric design approach ensures that your app engages and delights users.",
    },
    {
      title: "Innovation",
      content:
        "In the fast-evolving world of mobile technology, we stay ahead of the curve by incorporating the latest trends and innovations. Whether it’s augmented reality, artificial intelligence, or other cutting-edge features, we can integrate them into your mobile application.",
    },
    {
      title: "Custom Solutions",
      content:
        "Recognizing that each business is unique, we tailor our mobile application development services to align with your specific needs and goals. Your success is our priority.",
    },
    {
      title: "Transparent Process",
      content:
        "We believe in transparency and collaboration. Throughout the development journey, you’ll have clear insights into the progress of your mobile application, ensuring that it meets your expectations.",
    },
  ];
  const steps = [
    {
      icon: <FaDatabase />,
      title: "Requirement Analysis",
      description:
        "The first step in our journey is to assess the precise requirements of our clients and to understand their end-to-end business goals and objectives.",
    },
    {
      icon: <FaLaptopCode />,
      title: "The Conceptualization",
      description:
        "Our team conceptualizes the app design, navigation, and look and feel to ensure that it is in sync with the client’s requirements and the audience’s expectations.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Integration with Existing Features",
      description:
        "In order to simplify the flow of information without compromising privacy, our apps are designed to seamlessly integrate with any independently designed application.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Design",
      description:
        "We design feature-rich and user-friendly mobile apps for various mobile platforms with our skilled team of designers.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Coding",
      description:
        "We deliver high-performing apps with robust code that can seamlessly run on all the latest platforms and versions.",
    },
    {
      icon: <FaHourglassHalf />,
      title: "QA & Testing",
      description:
        "We rigorously test all of our mobile apps to ensure they are safe and bug-free.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Play Store / App Store Submission",
      description:
        "Besides submitting these apps to the respective app stores with all the necessary information, we also provide App Store Optimization services to help them rank high.",
    },
    {
      icon: <FaHeadset />,
      title: "Support & Maintenance",
      description:
        "Our ongoing support and maintenance programs ensure that your app is always up-to-date and performing at its best.",
    },
  ];

  const [activeTab, setActiveTab] = useState("hybrid");

  const tabs = [
    {
      id: "native",
      title: "Native App Development",
      content: (
        <>
          <p className="mb-2">
            Mobile apps that run on specific devices and operating systems are known
            for their incredible performance since they can easily use device-specific
            software and hardware. Our mobile app development company offers the complete
            life cycle of services for the development of stable, secure, and scalable native
            apps that are known for their advanced features and optimum speed.
          </p>
          <p className="mb-2">
            With our high-performance apps, you can reach a wider customer base and scale your business.
          </p>
          <p className="mb-2">
            In addition to native apps for Android, iOS, and Windows mobile devices, we also design
            and develop apps with immersive features such as 3D Touch, multitasking, and beacon technology.
          </p>
          <p>
            In order to enhance your business rankings, our native app developers strive to build competent solutions.
          </p>
        </>
      ),
    },
    {
      id: "hybrid",
      title: "Hybrid App Development",
      content: (
        <>
          <p className="mb-2">
            These apps are cost-effective and offer a native-like experience with a simple backend design.
            They are compatible with multiple mobile platforms such as iOS, Android, etc. We offer
            flawless hybrid apps that seamlessly work on all platforms. They employ advanced technologies
            to help our clients maximize sales and profitability.
          </p>
          <p className="mb-2">
            You can get a robust hybrid app that fully meets your needs.
          </p>
          <p className="mb-2">
            One of the strongest points of our mobile app development company is its transparency,
            excellent UX architecture, high coding standards, and cutting-edge technology.
          </p>
          <p>
            A team of our developers is fully proficient in framework tools such as React Native, Xamarin,
            Ionic, Sencha, PhoneGap, etc.
          </p>
        </>
      ),
    },
  ];
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
              Mobile Application Development
            </h1>
          </div>
        </section>
      </div>

      <section className="relative  overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-28 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Image Column */}
          <div className="lg:w-[52%] md:w-1/2 w-full flex justify-center lg:justify-start animate-fadeInUp">
            <img
              src={mobileapplicationdev}
              alt="Mobile Application Development"
              className="w-full max-w-lg rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Text Column */}
          <div className="lg:w-[48%] md:w-1/2 w-full text-[#040922] animate-fadeInUp">
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              Welcome to <strong>Luvetha Tech Solutions</strong>, offering full-service
              mobile app design, development, integration, testing, maintenance,
              and management services for iOS, Android, React Native, and Flutter.
              In the dynamic landscape of mobile technology, we stand as your
              reliable partner, dedicated to crafting innovative and user-centric
              mobile solutions.
            </p>
            <p className="mb-4 text-base md:text-lg leading-relaxed">
              At Luvetha Tech Solutins, we understand the transformative power of mobile
              applications in today’s digital era. Our team of skilled developers
              is committed to delivering bespoke mobile apps that cater to your
              unique business requirements. From concept to deployment, we
              prioritize precision, creativity, and functionality to ensure your
              mobile application stands out in the competitive market.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Our goal is to provide you with custom functionality thoroughly
              designed to meet the needs of your business, finding the right
              balance between quality, price, and project requirements.
            </p>
          </div>
        </div>

        {/* Animations */}
        <style>
          {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1s ease forwards; }
        `}
        </style>
      </section>

      <section className="bg-[#d8d8d826] py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Tabs Navigation */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6 md:mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left py-3 px-4 mb-2 md:mb-0 rounded-md font-medium text-lg md:text-xl w-full md:w-auto transition-all duration-300
                ${activeTab === tab.id
                    ? "bg-white text-blue-600 border-b-4 border-blue-600"
                    : "bg-white/20 text-gray-900 hover:bg-white/40"
                  }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="bg-white/20 rounded-lg p-6 md:p-8 text-gray-900">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="tab-content animate-fadeIn">
                    {tab.content}
                  </div>
                )
            )}
          </div>

        </div>

        {/* Simple fade-in animation */}
        <style>
          {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.5s ease forwards; }
        `}
        </style>
      </section>



      <section className="relative overflow-hidden bg-[#040922]">
        {/* Background SVG mask */}
        {/* <div
        className="absolute inset-0 transform scale-x-[-1] opacity-100"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg%20width%3D%221920%22%20height%3D%22954%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23prefix__prefix__clip0_77_23452%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1353%20308.5c0%20255.507-131.58%20485.45-341.45%20645.5-187.291%20142.83-436.933%20230-711.05%20230C-280.78%201184-752%20792.025-752%20308.5S-280.78-567%20300.5-567c450.743%200%20835.31%20235.692%20985.3%20567%2043.44%2095.948%2067.2%20199.916%2067.2%20308.5z%22%20fill%3D%22rgba%284%2C9%2C34%2C1%29%22%2F%3E%3Cpath%20d%3D%22M1321.57%20538C1357.08%20287.516%201273.7%2089.91%201127-.418L1374.18-6c65.77%20100.68-15.89%20431.512-52.61%20544zM312%20955c432.242%200%20746.77-180.667%20850-271-90.34%20157.09-176.766%20246.121-208.688%20271H312z%22%20fill%3D%22rgba%2866%2C90%2C158%2C1%29%22%20fill-opacity%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M1344.5%20427c0-252.4-212.67-390.833-319-428.5H1373c70%2082.4%2010.17%20320-28.5%20428.5z%22%20fill%3D%22rgba%2866%2C90%2C158%2C1%29%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1337%20184.5c0%20324.402-198.63%20609.049-497.356%20769.5H0V0h1285.8c-149.99-331.308-534.557-567-985.3-567C-280.78-567-752-175.025-752%20308.5c0%2040.898%203.371%2081.142%209.895%20120.549C-617.527%20811.461-207.995%201092%20278%201092c206.311%200%20398.842-50.56%20561.644-138h171.906C1221.42%20793.95%201353%20564.007%201353%20308.5c0-53.218-5.71-105.326-16.64-155.925.42%2010.596.64%2021.239.64%2031.925z%22%20fill%3D%22rgba%2866%2C90%2C158%2C1%29%22%20fill-opacity%3D%22.5%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22prefix__prefix__clip0_77_23452%22%3E%3Cpath%20fill%3D%22rgba%2866%2C90%2C158%2C1%29%22%20d%3D%22M0%200h1920v954H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E")`,
          backgroundSize: "cover",
        }}
      ></div> */}

        {/* Content */}
        <div className="relative max-w-[1248px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center lg:justify-end">
          <div className="w-full lg:w-3/4 xl:w-3/4 lg:ml-28 flex flex-col gap-8 text-gray-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Luvetha Tech Solutions
            </h2>

            <div className="space-y-6">
              <p>

                Luvetha Tech Solutions

                helps companies adapt to the changing nature of business operations
                and market dynamics caused by mobile technology. We’re a full-stack
                mobile app development company that builds high-impact mobile apps
                that solve real business problems.
              </p>

              <p>
                We have perfected our design thinking, agile development, quality
                assurance, and app store submission processes for 18 years. By
                developing over 30 mobile apps, we’ve helped companies improve
                customer experiences, build new technical capabilities, modernize
                products and services, optimize internal processes, increase
                business agility, and enter new markets.
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>Business value</li>
                <li>We’re More Than A Vendor</li>
                <li>Mobile-Specific Expertise</li>
                <li>100% transparency</li>
                <li>Rapid Turnover</li>
                <li>
                  Strong{" "}

                  UX and UI expertise

                </li>
                <li>Agile Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-4 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-900">
            Mobile Application Development Process
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-10 top-0 w-1 bg-blue-600 h-full hidden md:block"></div>

            {/* Steps */}
            <div className="flex flex-col space-y-10 md:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex md:items-start md:pl-20 md:pr-10"
                >
                  {/* Icon */}
                  <div className="absolute left-0 top-0 md:top-1/2 transform md:-translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="bg-white p-6 rounded-lg shadow-md w-full">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-left-top py-16 md:py-24"
        style={{
          backgroundImage:
            "url('https://ratnamsolutions.com/wp-content/uploads/2024/08/clientBg-1.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* ===== Heading with Separator ===== */}
          <div className="flex items-center justify-center mb-12">
            <div className="hidden md:block h-[1px] w-24 bg-gray-300"></div>
            <h4 className="mx-6 text-2xl md:text-3xl font-bold text-[#040922] text-center">
              Tech Stacks We Work On
            </h4>
            <div className="hidden md:block h-[1px] w-24 bg-gray-300"></div>
          </div>

          {/* ===== Logo Carousel ===== */}
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll gap-12 items-center">

              {/* Logos (Duplicate for Infinite Effect) */}
              {[
                "react-js-1.png",
                "reactnative-1.png",
                "vue-1.png",
                "andriod-1.png",
                "angularjs-1.png",
                "aspnet-1.png",
                "django-1.png",
                "flutter-1.png",
                "java-1.png",
                "mongo-1.png",
                "mysql-1.png",
                "nodejs-1.png",
                "php-1.png",
                "python-1.png",
              ].concat([
                "react-js-1.png",
                "reactnative-1.png",
                "vue-1.png",
                "andriod-1.png",
                "angularjs-1.png",
                "aspnet-1.png",
                "django-1.png",
                "flutter-1.png",
                "java-1.png",
                "mongo-1.png",
                "mysql-1.png",
                "nodejs-1.png",
                "php-1.png",
                "python-1.png",
              ]).map((logo, index) => (
                <img
                  key={index}
                  src={`https://ratnamsolutions.com/wp-content/uploads/2024/08/${logo}`}
                  alt="tech"
                  className="h-8 md:h-10 w-auto object-contain hover:-translate-y-1 transition duration-300"
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-[1248px] mx-auto space-y-8">
          {/* Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-normal mb-4" style={{ fontFamily: "'Kumbh Sans', sans-serif" }}>
              Why Choose Luvetha Tech Solutins?
            </h2>
            <p className="text-gray-700 text-lg md:text-xl">
              Embark on a journey of mobile excellence with Ratnam Solution Private Limited. Whether you’re launching a new app or enhancing an existing one, our Mobile Application Development services are designed to elevate your digital presence.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {accordionData.map((item, idx) => (
              <Disclosure key={idx}>
                {({ open }) => (
                  <div className="border border-gray-300 rounded-md">
                    <Disclosure.Button className="flex justify-between w-full px-4 py-3 text-left text-lg font-medium text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                      <span>{item.title}</span>
                      <ChevronUpIcon
                        className={`${open ? "transform rotate-180" : ""
                          } w-5 h-5 text-indigo-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-3 text-gray-700 bg-white border-t border-gray-300">
                      {item.content}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </section>




    </>
  )
}