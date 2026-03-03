import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import uiux from '../assets/uiux.png'

export default function UIUXDesign(props){
  function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Q1: How can UI/UX improve user engagement?",
      answer:
        "A: Intuitive navigation, responsive design, and personalized interactions contribute to heightened user engagement.",
    },
    {
      question: "Q2: Is UI more important than UX or vice versa?",
      answer:
        "A: Both are integral; a seamless user interface (UI) contributes to a positive user experience (UX), and vice versa.",
    },
    {
      question:
        "Q3: Can accessibility features enhance the user experience for everyone?",
      answer:
        "A: Yes, accessible design features benefit all users, creating a more inclusive and user-friendly environment.",
    },
    {
      question:
        "Q4: How often should I update my UI/UX design to stay relevant?",
      answer:
        "A: Regular updates ensure your design remains in sync with evolving user expectations and technological advancements.",
    },
    {
      question: "Q5: Is it necessary to conduct user testing in UI/UX design?",
      answer:
        "A: Absolutely. User testing provides invaluable insights, helping designers refine their creations based on real user experiences.",
    },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-300 rounded-lg bg-white shadow-sm"
          >
            {/* Question */}
            <button
              onClick={() =>
                setActiveIndex(isActive ? null : index)
              }
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <span className="text-lg md:text-xl font-medium text-gray-900">
                {faq.question}
              </span>

              <span className="ml-4">
                {isActive ? (
                  <Minus className="text-sky-600" size={20} />
                ) : (
                  <Plus className="text-gray-600" size={20} />
                )}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isActive ? "max-h-40 px-6 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-700 text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

    return(<>
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
          UI/UX Solutions
          </h1>
        </div>
      </section>
</div>

 <section className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Top Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT IMAGE */}
            <div>
              <img
                src={uiux}
                alt="UI UX Design Services"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Ever wondered why some apps just work while others feel cumbersome?
                The secret lies in effective UI UX design. In this post, we’ll explore
                how thoughtful UI design services and intuitive UX design services
                can transform digital products.
                <br /><br />
                Whether you’re a startup or an established brand, understanding
                these design principles will help you meet user needs and boost
                engagement.
              </p>
            </div>
          </div>

          {/* ===================== */}
          {/* MAIN CONTENT SECTION */}
          {/* ===================== */}

          <div className="mt-16">

            {/* TITLE */}
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Professional Expert UI/UX Web Designer Services in Kukatpally, Hyderabad
            </h2>

            {/* PARAGRAPHS */}
            <div className="mt-6 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Luvetha Tech Solutins, as a UI/UX development company, is dedicated
                to establishing a strong business identity for its clients through
                exceptional UI/UX design services.
              </p>

              <p>
                Focusing on user-centric design principles, we go beyond mere
                aesthetics, striving to create experiences that resonate with
                your target audience.
              </p>

              <p>
                Whether you’re launching a new website, a mobile app, or
                revamping an existing platform, our UI/UX design services are
                customized to meet your specific needs.
              </p>

              <p>
                By partnering with us, you’re investing in more than just design —
                you’re investing in the success of your digital ecosystem.
              </p>
            </div>

            {/* SEPARATOR */}
            <div className="border-t border-gray-300 my-12"></div>

            {/* SECOND TITLE */}
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
              UI/UX Services in Web Designer
            </h2>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              We stand as a preeminent and reliable provider of UI/UX Web Designer Services, distinguished by our proficiency in crafting innovative and seamlessly integrated customer experiences. 
              Our team of UI/UX designers operates as an extension of your business, meticulously comprehending your unique needs and operational requirements. 
              Through this collaborative approach, we create a prototype that serves as the foundation for your forthcoming web solution—a testament to our commitment to delivering designs that blend delightfulness with functionality.
            </p>

            {/* SEPARATOR */}
            <div className="border-t border-gray-300 my-12"></div>

            {/* BENEFITS TITLE */}
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Benefits of our UI/UX Services
            </h2>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              Experience a digital transformation with the benefits of our unparalleled UI/UX Solutions. 
              At Luvetha Tech Solutins Pvt Ltd, we prioritize user-centric design to enhance your digital platforms. Our expert designers seamlessly blend aesthetics with functionality, ensuring your users enjoy a captivating and intuitive experience.
              With our services, expect increased user engagement, reduced bounce rates, and elevated brand credibility. We optimize navigation, prioritize responsiveness, and create visually stunning interfaces, leading to higher customer
            </p>

          </div>

        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900 mb-10">
      Frequently Asked Questions
    </h2>

    <FAQAccordion />

  </div>
</section>
    </>)
}