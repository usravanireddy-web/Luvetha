import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/ChatWidget";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ThankYouPage from "./components/ThankYouPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LandingPage from "./pages/LandingPage";
import CareersPage from "./components/Careers/Carriers";
import JobDetail from "./pages/Careers/JobDetailPage";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import DataServices from "./pages/DataServices";
import WebLandingPage from "./pages/WebLandingPage";
import DigitalMarketingLandingPage from "./pages/DigitalMarketingLandingPage";
import MarketingLandingPage1 from "./pages/MarketingLandingPage1";
import LuvethaHomePage from "./pages/LuvethaHomePage";
import HomepageContent from "./pages/HomepageContent";
import CustomDevelopment from "./pages/CustomeDevelopment";
// import ItConsulting from "./pages/ItConsulting";
import DataAnalyticsDashboard from "./pages/DataAnalytics";
import MobileAppDevelopment from "./pages/MobileApps";
import RetailServicesPage from "./pages/RetailServices";
import DatabaseMaintenance from "./pages/DatabaseMaintance";
import PowerBi from "./pages/Powerbi";
import AiDevelopment from "./pages/AiDevelopment";
import DataSceince from "./pages/DataSceince";
import AwsManagedServices from "./pages/Aws";
import Networking from "./pages/Networking";

const queryClient = new QueryClient();

/* ================= APP LAYOUT ================= */
const AppLayout = () => {
  const location = useLocation();

  // Hide layout only on thank-you page
  const hideLayout = location.pathname === "/thankyou";

  return (
    <>
      {!hideLayout && <Navigation />}

      <ScrollToTop />

      <Routes>
        {/* MAIN HOME PAGE */}
        <Route path="/" element={<HomepageContent />} />

        {/* OTHER PAGES */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:id" element={<JobDetail />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/dataservices" element={<DataServices />} />
        <Route path="/weblandingpage" element={<WebLandingPage />} />
        <Route path="/digitalmarketinglandingpage" element={<DigitalMarketingLandingPage />} />
        <Route path="/marketinglandingpage1" element={<MarketingLandingPage1 />} />
        <Route path="/luvethahomepage" element={<LuvethaHomePage />} />
        <Route path="/homepagecontent" element={<HomepageContent />} />
        <Route path="/customdevelopment" element={<CustomDevelopment />} />
        {/* <Route path="/itconsulting" element={<ItConsulting />} /> */}
        <Route path="/dataanalytics" element={<DataAnalyticsDashboard />} />
        <Route path="/mobileapps" element={<MobileAppDevelopment />} />
        <Route path="/retailservices" element={<RetailServicesPage />} />
        <Route path="/databasemaintenance" element={<DatabaseMaintenance />} />
        <Route path = "/powerbi" element = {<PowerBi />}/>
        <Route path="/aidevelopment" element={<AiDevelopment />} />
        <Route path="/datascience" element={<DataSceince />} />
        <Route path="/aws" element={<AwsManagedServices />} />
        <Route path="/networking" element={<Networking />} />


        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

/* ================= ROOT APP ================= */
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
          <ChatWidget />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
