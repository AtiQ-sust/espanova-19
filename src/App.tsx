import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import JobApply from "./pages/JobApply";
import HajjUmrah from "./pages/HajjUmrah";
import SaudiTourism from "./pages/SaudiTourism";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ManpowerExport from "./pages/ManpowerExport";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import Guides from "./pages/Guides";
import News from "./pages/News";
import Success from "./pages/Success";
import Candidates from "./pages/Candidates";
import VisaTicketing from "./pages/VisaTicketing";
import HolidayPackages from "./pages/HolidayPackages";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/manpower" element={<ManpowerExport />} />
          <Route path="/services/hajj-umrah" element={<HajjUmrah />} />
          <Route path="/services/saudi-tourism" element={<SaudiTourism />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/visa-ticketing" element={<VisaTicketing />} />
          <Route path="/services/holiday-packages" element={<HolidayPackages />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/apply" element={<JobApply />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources/guides" element={<Guides />} />
            <Route path="/news" element={<News />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
</HelmetProvider>
);

export default App;
