import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './components/SignUp';
import Profile from './pages/Profile';

// Import des pages de services
import TelemarketingB2B from './pages/services/TelemarketingB2B';
import LeadGeneration from './pages/services/LeadGeneration';
import CyberConsulting from './pages/services/CyberConsulting';
import ROICalculator from './pages/services/ROICalculator';
import AIScriptGenerator from './pages/services/AIScriptGenerator';
import AIDashboard from './pages/services/AIDashboard';
import BusinessProcessAutomation from './pages/services/BusinessProcessAutomation';
import AITraining from './pages/services/AITraining';
import VulnerabilityScan from './pages/services/VulnerabilityScan';

// Import des pages de formation
import CyberAdvanced from './pages/training/CyberAdvanced';
import ThreatAnalysis from './pages/training/ThreatAnalysis';
import CloudSecurity from './pages/training/CloudSecurity';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              
              {/* Routes des services */}
              <Route path="/services/vulnerability-scan" element={<VulnerabilityScan />} />
              <Route path="/services/telemarketing-b2b" element={<TelemarketingB2B />} />
              <Route path="/services/lead-generation" element={<LeadGeneration />} />
              <Route path="/services/cyber-consulting" element={<CyberConsulting />} />
              <Route path="/services/roi-calculator" element={<ROICalculator />} />
              <Route path="/services/ai-script-generator" element={<AIScriptGenerator />} />
              <Route path="/services/ai-dashboard" element={<AIDashboard />} />
              <Route path="/services/business-process-automation" element={<BusinessProcessAutomation />} />
              <Route path="/services/ai-training" element={<AITraining />} />

              {/* Routes des formations */}
              <Route path="/training/cyber-advanced" element={<CyberAdvanced />} />
              <Route path="/training/threat-analysis" element={<ThreatAnalysis />} />
              <Route path="/training/cloud-security" element={<CloudSecurity />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;