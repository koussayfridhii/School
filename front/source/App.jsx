import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Placeholder component for pages that are not yet created
const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center py-20 px-4 text-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
    <div className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-brand dark:text-brand-light">{title}</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">This page is under construction. Please check back later!</p>
    </div>
  </div>
);

// Layout components for nested routes
const SectionLayout = ({ title, children }) => (
    <div>
        <h2 className="text-3xl md:text-4xl font-bold pt-12 pb-8 text-center bg-gray-50 dark:bg-gray-800/50">{title}</h2>
        <div className="container mx-auto px-4 py-8">
            {children || <Outlet />}
        </div>
    </div>
);

import HomePage from './pages/home/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import Protect from './components/Protect';

// Page Components (Placeholders)
import OurStory from './pages/about/OurStory';
import VisionAndValues from './pages/about/VisionAndValues';
import Leadership from './pages/about/Leadership';
import Accreditations from './pages/about/Accreditations';
import CurriculumOverview from './pages/academics/CurriculumOverview';
import Programs from './pages/academics/Programs';
import AcademicCalendar from './pages/academics/AcademicCalendar';
import AdmissionsProcess from './pages/admissions/AdmissionsProcess';
import Criteria from './pages/admissions/Criteria';
import TuitionAndFees from './pages/admissions/TuitionAndFees';
import ApplyNow from './pages/admissions/ApplyNow';
import VirtualTour from './pages/campus/VirtualTour';
import FacilitiesOverview from './pages/campus/FacilitiesOverview';
import StudentPortal from './pages/students-parents/StudentPortal';
import ParentResources from './pages/students-parents/ParentResources';
import PTA from './pages/students-parents/PTA';
import FacultyProfiles from './pages/faculty/FacultyProfiles';
import Careers from './pages/faculty/Careers';
import News from './pages/news-events/News';
import EventCalendar from './pages/news-events/EventCalendar';
import Blog from './pages/news-events/Blog';
import FormsLibrary from './pages/resources/FormsLibrary';
import Policies from './pages/resources/Policies';
import Downloads from './pages/resources/Downloads';
import AlumniNetwork from './pages/alumni/AlumniNetwork';
import SuccessStories from './pages/alumni/SuccessStories';
import AlumniEvents from './pages/alumni/AlumniEvents';
import ContactUs from './pages/contact/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
const NotFound = () => <Placeholder title="404: Page Not Found" />;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="about" element={<SectionLayout title="About Us" />}>
            <Route index element={<OurStory />} />
            <Route path="vision-values" element={<VisionAndValues />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="accreditations" element={<Accreditations />} />
          </Route>

          <Route path="academics" element={<SectionLayout title="Academics" />}>
            <Route index element={<CurriculumOverview />} />
            <Route path="programs" element={<Programs />} />
            <Route path="academic-calendar" element={<AcademicCalendar />} />
          </Route>

          <Route path="admissions" element={<SectionLayout title="Admissions" />}>
            <Route index element={<AdmissionsProcess />} />
            <Route path="criteria" element={<Criteria />} />
            <Route path="tuition-fees" element={<TuitionAndFees />} />
            <Route path="apply-now" element={<ApplyNow />} />
          </Route>

          <Route path="campus" element={<SectionLayout title="Campus & Facilities" />}>
            <Route index element={<FacilitiesOverview />} />
            <Route path="virtual-tour" element={<VirtualTour />} />
          </Route>

          <Route path="student-life" element={<SectionLayout title="Students & Parents" />}>
            <Route index element={<StudentPortal />} />
            <Route path="parent-resources" element={<ParentResources />} />
            <Route path="pta" element={<PTA />} />
          </Route>

          <Route path="faculty" element={<SectionLayout title="Faculty & Staff" />}>
            <Route index element={<FacultyProfiles />} />
            <Route path="careers" element={<Careers />} />
          </Route>

          <Route path="news" element={<SectionLayout title="News & Events" />}>
            <Route index element={<News />} />
            <Route path="event-calendar" element={<EventCalendar />} />
            <Route path="blog" element={<Blog />} />
          </Route>

          <Route path="resources" element={<SectionLayout title="Resources & Downloads" />}>
            <Route index element={<FormsLibrary />} />
            <Route path="policies" element={<Policies />} />
            <Route path="downloads" element={<Downloads />} />
          </Route>

          <Route path="alumni" element={<SectionLayout title="Alumni" />}>
            <Route index element={<AlumniNetwork />} />
            <Route path="success-stories" element={<SuccessStories />} />
            <Route path="events" element={<AlumniEvents />} />
          </Route>

          <Route path="contact" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          {/* Auth Routes */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route
            path="dashboard"
            element={
              <Protect>
                <Dashboard />
              </Protect>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
