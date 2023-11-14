import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component'
import Authenication from './routes/authenitcation/authenication.component';
import PasswordReset from './routes/passwordreset/passwordreset.component';

function App() {
  return (
    <Routes>
    <Route path='/' element={<Navigation/>}>
    <Route  index element={<Home />} />
    <Route  path="/auth" element={<Authenication />} />
    <Route  path="/home" element={<Home />} />
    <Route path="/password-reset" element={<PasswordReset />} />
    </Route>
  </Routes>
  );
}

export default App;
