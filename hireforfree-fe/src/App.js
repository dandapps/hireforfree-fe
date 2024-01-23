import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component'
import Authenication from './routes/authenitcation/authenication.component';
import PasswordReset from './routes/passwordreset/passwordreset.component';
import NewUserLandingPage from './routes/landing-page/new-user-landing-page.component';
import SignInPage from './routes/signin-page/signin-page.component';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route  index element={<Home />} />
    <Route  path="/auth" element={<Authenication />} />
    <Route  path="/home" element={<NewUserLandingPage />} />
    <Route path="/password-reset" element={<PasswordReset />} />
    <Route path="/signin" element={<SignInPage />} />
    </Route>
  </Routes>
  );
}

export default App;
