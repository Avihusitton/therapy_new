import HomePage from './pages/HomePage';
import TherapyPage from './pages/TherapyPage';
import CouplesPage from './pages/CouplesPage';
import ReservistsWorkshopsPage from './pages/ReservistsWorkshopsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AccessibilityPage from './pages/AccessibilityPage';

export const PAGES = {
    "HomePage": HomePage,
    "therapy": TherapyPage,
    "couples": CouplesPage,
    "reservists-workshops": ReservistsWorkshopsPage,
    "about": AboutPage,
    "contact": ContactPage,
    "terms": TermsPage,
    "privacy": PrivacyPage,
    "accessibility": AccessibilityPage,
}

export const pagesConfig = {
    mainPage: "HomePage",
    Pages: PAGES,
};