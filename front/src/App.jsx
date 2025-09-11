import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLanguage } from './store/languageSlice';
import { selectTheme } from './store/themeSlice';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Page Layouts
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Admissions from './pages/Admissions.jsx';
import Campus from './pages/Campus.jsx';
import StudentsParents from './pages/StudentsParents.jsx';
import FacultyStaff from './pages/FacultyStaff.jsx';
import NewsEvents from './pages/NewsEvents.jsx';
import ResourcesDownloads from './pages/ResourcesDownloads.jsx';
import Alumni from './pages/Alumni.jsx';
import Contact from './pages/Contact.jsx';

// Import Sub-Pages
import OurStory from './pages/About/OurStory.jsx';
import VisionValues from './pages/About/VisionValues.jsx';
import Leadership from './pages/About/Leadership.jsx';
import Accreditations from './pages/About/Accreditations.jsx';
import Curriculum from './pages/Academics/Curriculum.jsx';
import Programs from './pages/Academics/Programs.jsx';
import Calendar from './pages/Academics/Calendar.jsx';
import Process from './pages/Admissions/Process.jsx';
import Criteria from './pages/Admissions/Criteria.jsx';
import Tuition from './pages/Admissions/Tuition.jsx';
import Apply from './pages/Admissions/Apply.jsx';
import VirtualTour from './pages/Campus/VirtualTour.jsx';
import Facilities from './pages/Campus/Facilities.jsx';
import Portal from './pages/StudentsParents/Portal.jsx';
import ParentResources from './pages/StudentsParents/Resources.jsx';
import PTA from './pages/StudentsParents/PTA.jsx';
import Profiles from './pages/FacultyStaff/Profiles.jsx';
import Careers from './pages/FacultyStaff/Careers.jsx';
import News from './pages/NewsEvents/News.jsx';
import EventCalendar from './pages/NewsEvents/EventCalendar.jsx';
import Blog from './pages/NewsEvents/Blog.jsx';
import Forms from './pages/ResourcesDownloads/Forms.jsx';
import Policies from './pages/ResourcesDownloads/Policies.jsx';
import Downloads from './pages/ResourcesDownloads/Downloads.jsx';
import Network from './pages/Alumni/Network.jsx';
import SuccessStories from './pages/Alumni/SuccessStories.jsx';
import AlumniEvents from './pages/Alumni/Events.jsx';
import Details from './pages/Contact/Details.jsx';
import Map from './pages/Contact/Map.jsx';
import Inquiry from './pages/Contact/Inquiry.jsx';

// Auth pages
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';

import { useEffect } from 'react';

function App() {
  const currentLanguage = useSelector(selectLanguage);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  return (
    <Router>
      <div
        dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
        className={`${theme} bg-background-light dark:bg-background-dark min-h-screen text-text-light dark:text-text-dark font-sans`}
      >
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />}>
              <Route index element={<OurStory />} />
              <Route path="our-story" element={<OurStory />} />
              <Route path="vision-values" element={<VisionValues />} />
              <Route path="leadership" element={<Leadership />} />
              <Route path="accreditations" element={<Accreditations />} />
            </Route>

            <Route path="/academics" element={<Academics />}>
              <Route index element={<Curriculum />} />
              <Route path="curriculum" element={<Curriculum />} />
              <Route path="programs" element={<Programs />} />
              <Route path="calendar" element={<Calendar />} />
            </Route>

            <Route path="/admissions" element={<Admissions />}>
              <Route index element={<Process />} />
              <Route path="process" element={<Process />} />
              <Route path="criteria" element={<Criteria />} />
              <Route path="tuition" element={<Tuition />} />
              <Route path="apply" element={<Apply />} />
            </Route>

            <Route path="/campus" element={<Campus />}>
              <Route index element={<VirtualTour />} />
              <Route path="virtual-tour" element={<VirtualTour />} />
              <Route path="facilities" element={<Facilities />} />
            </Route>

            <Route path="/students-parents" element={<StudentsParents />}>
              <Route index element={<Portal />} />
              <Route path="portal" element={<Portal />} />
              <Route path="resources" element={<ParentResources />} />
              <Route path="pta" element={<PTA />} />
            </Route>

            <Route path="/faculty-staff" element={<FacultyStaff />}>
              <Route index element={<Profiles />} />
              <Route path="profiles" element={<Profiles />} />
              <Route path="careers" element={<Careers />} />
            </Route>

            <Route path="/news-events" element={<NewsEvents />}>
              <Route index element={<News />} />
              <Route path="news" element={<News />} />
              <Route path="calendar" element={<EventCalendar />} />
              <Route path="blog" element={<Blog />} />
            </Route>

            <Route path="/resources" element={<ResourcesDownloads />}>
              <Route index element={<Forms />} />
              <Route path="forms" element={<Forms />} />
              <Route path="policies" element={<Policies />} />
              <Route path="downloads" element={<Downloads />} />
            </Route>

            <Route path="/alumni" element={<Alumni />}>
              <Route index element={<Network />} />
              <Route path="network" element={<Network />} />
              <Route path="success-stories" element={<SuccessStories />} />
              <Route path="events" element={<AlumniEvents />} />
            </Route>

            <Route path="/contact" element={<Contact />}>
              <Route index element={<Details />} />
              <Route path="details" element={<Details />} />
              <Route path="map" element={<Map />} />
              <Route path="inquiry" element={<Inquiry />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
