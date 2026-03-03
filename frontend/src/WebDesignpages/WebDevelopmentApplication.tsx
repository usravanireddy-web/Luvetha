import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import webapplicationdevelopment from '../assets/webapplicationdevelopment.png'
import websiteImg from '../assets/websitedevelopment.png'
import custoumdev from '../assets/custoumdev.png'
import ecomerceDev from '../assets/ecommerce.png'
import enterprisewebdev from '../assets/enterprisewebdev.png'
import supportandmaintaince from '../assets/supportandmaintaince.png'
import cmsdev from '../assets/cmsdev.png'
export default function WebDevelopmentApplication(props){
    return(
    <>
<div className="relative overflow-hidden bg-[#040922]">

      {/* Background Mask */}
      <div
        className="absolute top-0 left-0 z-[6] min-h-full min-w-full bg-cover bg-center opacity-100 scale-x-[-1]"
        // style={{
        //   backgroundImage: `url(${webapplicationdevelopment})`,
        // }}
      />

      {/* Content Section */}
    <section className="relative z-10 px-4 py-20 md:py-28">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-3xl font-semibold md:text-5xl">
          Web Application Development
          </h1>
        </div>
      </section>
</div>

<section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <div className="w-full">
              <a href="/" className="block overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={webapplicationdevelopment}
                  alt="Web Application Development"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                To modernize an enterprise, the first step is the development of
                web applications. Luvetha Tech Solutins Private Limited is a trusted
                web application development company with over 20 web app
                developers in India.
              </p>

              <p>
                By digitizing operations and enhancing accessibility, we utilize
                the latest technologies, including cloud-native, IoT, AI, and
                machine learning, to ensure seamless integration for enterprise
                modernization.
              </p>

              <p>
                We offer web application development services to engineer
                innovative web-based solutions and reengineer existing ones for
                enterprises of all sizes and shapes.
              </p>

              <p>
                Having catered to both start-ups and Fortune 500 companies, we
                excel in providing high-quality UI/UX and complete restructuring
                of applications.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
<section className="bg-white py-14 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="text-[#040922] text-4xl mb-5">
             <i className="fas fa-shield-halved"></i>
        </div>

        <h5 className="text-xl font-semibold text-[#040922] mb-4 leading-tight">
          Secure Applications
        </h5>

        <p className="text-gray-600 leading-relaxed">
          To ensure the application is free of risks, we adhere to the latest
          data protection policies, benchmarks, and regulations.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="text-[#040922] text-4xl mb-5">
          <i className="fas fa-layer-group"></i>
        </div>

        <h5 className="text-xl font-semibold text-[#040922] mb-4 leading-tight">
          Scalability & Flexibility
        </h5>

        <p className="text-gray-600 leading-relaxed">
          Custom web apps that are highly scalable and can handle multiple
          requests simultaneously are designed for enterprises.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="text-[#040922] text-4xl mb-5">
         <i className="fas fa-gauge-high"></i>

        </div>

        <h5 className="text-xl font-semibold text-[#040922] mb-4 leading-tight">
          High Performance
        </h5>

        <p className="text-gray-600 leading-relaxed">
          Implementing Agile and DevOps to create a high-performance web app
          involves ensuring an error-free development environment.
        </p>
      </div>

    </div>
</div>
</section> 

{/* ================= WEB APP SERVICES SECTION ================= */}
<section className="bg-gray-50 py-12 md:py-20 px-4">
  <div className="max-w-7xl mx-auto">

    {/* ===== Section Heading ===== */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-[42px] font-normal text-[#040922] leading-tight">
        Web Application Development Services in Kukatpally
      </h2>

      <div className="mt-6 space-y-4 text-gray-600 max-w-4xl mx-auto leading-relaxed">
        <p>
          Welcome to Luvetha Tech Solutions Private Limited’s Web Application
          Development Services, where innovation meets functionality.
          Our team crafts tailored web applications aligned with your
          business needs.
        </p>

        <p>
          We engineer solutions that enhance user experiences and
          contribute to your overall business objectives.
        </p>

        <p>
          Our involvement is flexible and transparent, ensuring the
          most effective web development process for online success.
        </p>
      </div>
    </div>

    {/* ===== Services Grid ===== */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl">
        <img
          src={websiteImg}
          alt="Website Development"
          className="w-full h-52 object-cover rounded-md mb-6"
        />
        <h5 className="text-xl font-semibold text-center text-[#040922] mb-4">
          Website Development
        </h5>
        <p className="text-gray-600 text-center leading-relaxed">
          Our professional developers build static, dynamic, and single-page
          websites that are responsive and mobile-friendly.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl">
        <img
          src={custoumdev}
          alt="Custom Web Development"
          className="w-full h-52 object-cover rounded-md mb-6"
        />
        <h5 className="text-xl font-semibold text-center text-[#040922] mb-4">
          Custom Web Development
        </h5>
        <p className="text-gray-600 text-center leading-relaxed">
          We provide reliable software development solutions to address
          all your technology needs through custom web services.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl">
        <img
          src={ecomerceDev}
          alt="eCommerce App Development"
          className="w-full h-52 object-cover rounded-md mb-6"
        />
        <h5 className="text-xl font-semibold text-center text-[#040922] mb-4">
          eCommerce App Development
        </h5>
        <p className="text-gray-600 text-center leading-relaxed">
          Increase business sales by enabling customers to browse products
          online through innovative custom e-commerce websites.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl">
        <img
          src={cmsdev}
          alt="CMS Web Development"
          className="w-full h-52 object-cover rounded-md mb-6"
        />
        <h5 className="text-xl font-semibold text-center text-[#040922] mb-4">
          CMS Web Development
        </h5>
        <p className="text-gray-600 text-center leading-relaxed">
          We construct highly functional CMS systems and offer a complete
          range of CMS development services.
        </p>
      </div>

      {/* CARD 5 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl">
        <img
          src={enterprisewebdev}
          alt="Enterprise Web App Development"
          className="w-full h-52 object-cover rounded-md mb-6"
        />
        <h5 className="text-xl font-semibold text-center text-[#040922] mb-4">
          Enterprise Web App Development
        </h5>
        <p className="text-gray-600 text-center leading-relaxed">
          We develop enterprise applications that elevate your operations
          with feature-rich and scalable web services.
        </p>
      </div>

      {/* CARD 6 */}
      <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-xl">
        <img
          src={supportandmaintaince}
          alt="Support & Maintenance"
          className="w-full h-52 object-cover rounded-md mb-6"
        />
        <h5 className="text-xl font-semibold text-center text-[#040922] mb-4">
          Support & Maintenance
        </h5>
        <p className="text-gray-600 text-center leading-relaxed">
          Our team acts as your support partner, overseeing development
          while implementing valuable improvements.
        </p>
      </div>

    </div>

  </div>
</section>

{/* ================= TECH STACK SECTION ================= */}
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
    </>
    )
}