import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ThemeProvider from './components/ThemeProvider'; 
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx'
import { RouterProvider } from 'react-router-dom';
import HowToInterviewPage from './components/Subpages.jsx/HowToInterviewPage.jsx';
import ResumeAnalysisInfoPage from './components/Subpages.jsx/ResumeAnalysisInfoPage.jsx';
import PerformanceRatingPage from './components/Subpages.jsx/PerformanceRatingPage.jsx';
import FeedbackExplanationPage from './components/Subpages.jsx/FeedbackExplanationPage.jsx';
import SignupPage from './components/Authentication/SignupPage.jsx';
import LoginPage from './components/Authentication/LoginPage.jsx';
import FeaturesPage from './components/FeaturesPage.jsx';
import DomainSelectionPage from './components/Subpages.jsx/DomainSelectionPage.jsx';
import DomainInterviewSetupPage from './components/Subpages.jsx/DomainInterviewSetupPage.jsx';
import InterviewGuidelinesPage from './components/Subpages.jsx/InterviewGuidelinesPage.jsx';
import AIInterviewPage from './components/Subpages.jsx/AIInterviewPage.jsx';
import UserProfilePage from './components/Subpages.jsx/UserProfilePage.jsx';
import SessionDetail from './components/Subpages.jsx/SessionDetail.jsx';
import ResumeAnalysis from './components/Subpages.jsx/ResumeAnalysis.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/how-to-interview',
        element : <HowToInterviewPage />
      },
      {
        path: '/resume-analysis',
        element : <ResumeAnalysisInfoPage />
      },
      {
        path: '/performance-ratings',
        element: <PerformanceRatingPage />
      },
      {
        path: 'feedback-explanation',
        element: <FeedbackExplanationPage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: 'features',
        element: <FeaturesPage />
      },
      {
        path: '/domains',
        element: <DomainSelectionPage />
      },
      {
        path: '/takeInterview/:domain',
        element: <DomainInterviewSetupPage />
      },
      {
        path: 'guidelines',
        element: <InterviewGuidelinesPage />
      },
      {
        path: 'ai-interview',
        element: <AIInterviewPage />
      },
      {
        path: '/profile',
        element: <UserProfilePage />
      },
      {
        path : '/profile/session/:sessionId',
        element: <SessionDetail />
      },
      {
        path: 'resume-analysis/upload',
        element: <ResumeAnalysis />
      },
      {
        path: '/upload',
        element: <ResumeAnalysis />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
     <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
);
