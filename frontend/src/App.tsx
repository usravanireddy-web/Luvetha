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
// import FounderCard from "./components/FounderCard";

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
import DataServices  from "./pages/DataServices";
import WebLandingPage from "./pages/WebLandingPage";
import DigitalMarketingLandingPage from "./pages/DigitalMarketingLandingPage";
import MarketingLandingPage1 from "./pages/MarketingLandingPage1";
import LuvethaHomePage from "./pages/LuvethaHomePage";
import HomepageContent from "./pages/HomepageContent";
import CustomDevelopment from "./pages/CustomeDevelopment";
import ItConsulting from "./pages/ItConsulting";
import DataAnalyticsDashboard from "./pages/DataAnalytics";
import DataAnalytics from "./pages/DataAnalytics";
import MobileAppDevelopment from "./pages/MobileApps";
import RetailServicesPage from "./pages/RetailServices";
import DatabaseMaintenance from "./pages/DatabaseMaintance";
import SEOPage from "./DigitalMarketingPages/SeoPage";
import SMMServices from "./DigitalMarketingPages/Smmservices";
import PPCServices from "./DigitalMarketingPages/Ppcservices";
import UIUXDesign from "./WebDesignpages/UIUXDesign";
import EcommerceServiceDevelopment from "./WebDesignpages/EcommerceServicesPage";
import WordpressDevelopment from "./WebDesignpages/WordpressDevelopment";
import WebDevelopmentApplication from "./WebDesignpages/WebDevelopmentApplication";
import MobileApplicationDevelopment from "./WebDesignpages/MobileApplicationDev";


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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ourwork" element={<OurWork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:id" element={<JobDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path="/dataservices" element={<DataServices />} />
        <Route path="/weblandingpage" element={<WebLandingPage />} />
        <Route path="/digitalmarketinglandingpage" element={<DigitalMarketingLandingPage />} />
        <Route path="/marketinglandingpage1" element={<MarketingLandingPage1 />} />
        <Route path="/luvethahomepage" element={<LuvethaHomePage />} />
        <Route path="/homepagecontent" element={<HomepageContent />} />
        <Route path="/customdevelopment" element={<CustomDevelopment />} />
        <Route path="/itconsulting" element={<ItConsulting />} />
        <Route path="/dataanalytics" element={<DataAnalyticsDashboard />} />
        <Route path="/mobileapps" element={<MobileAppDevelopment />} />
        <Route path="/retailservices" element={<RetailServicesPage />} />
        <Route path="/databasemaintenance" element={<DatabaseMaintenance />} />
      <Route path="/seo" element={<SEOPage />} />
    <Route path="/smm" element={<SMMServices />} />
        <Route path="/ppc" element={<PPCServices />} />
         <Route path="/uiux" element={<UIUXDesign />} />
          <Route path="/ecommercedevelopment" element={<EcommerceServiceDevelopment/>} />
           <Route path="/wordpressdevelopment" element={<WordpressDevelopment />} />
            <Route path="/webapplicationdevelopement" element={<WebDevelopmentApplication/>} />
             <Route path="/mobile-application" element={<MobileApplicationDevelopment/>} />
      
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
