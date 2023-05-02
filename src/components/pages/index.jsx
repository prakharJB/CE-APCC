import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "../common/Navbar.js";
import Footer from "../common/Footer.js";
import Home from "./Home.jsx";
import AboutUs from "./AboutUs.jsx";
import ContactUs from "./ContactUs.jsx";
import Collaborators from './Collaborators.jsx';
import News from './News.jsx';
import Publication from './Publication.jsx';
import Cohorts from './Cohorts.jsx';
import CohortDetails from './CohortsDetail.jsx';
import Resources from './Resource.jsx';
import NewsDashboard from "../common/News/NewsDashboard";
import NewsDetail from './NewsDetail.jsx';
import PublicationDashboard from "../common/Publication/PublicationDashboard";
import PublicationDetail from "./PublicationDetail.jsx";

const Pages = () => {
  return (
    <div className="main-container">
      <header><Navbar /></header>

      <main className="content">
        <Routes>
          <Route path={'/home'} element={<Home />} />
          {/* <Route path={'/aim'} element={<Navigate to="/about" />} /> */}
          <Route path={'/about'} element={<AboutUs />} />
          <Route path={'/contact'} element={<ContactUs />} />
          <Route path={'/collaborators'} element={<Collaborators />} />
          <Route path={'/news/*'} element={<News />}>
            <Route index element={<NewsDashboard />} />
            <Route path={'detail/:id'} element={<NewsDetail />} />
          </Route>
          <Route path={'/publication'} element={<Publication />}>
            <Route index element={<PublicationDashboard />} />
            <Route path={'detail/:id'} element={<PublicationDetail />} />
          </Route>
          <Route path={'/resource'} element={<Resources />} />
          <Route path={'/cohorts'} element={<Cohorts />} />
          <Route path={'/cohort-details'} element={<CohortDetails />} />
          <Route path={'/'} element={<Navigate to='/home' />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default Pages;