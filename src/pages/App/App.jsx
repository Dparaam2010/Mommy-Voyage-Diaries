import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewTips from '../NewTips/NewTips';
import TipsPage from '../TipsPage/TipsPage';
import NavBar from '../../components/NavBar/NavBar';
import EditForm from '../../components/EditForm/EditForm';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <h1>Welcome to Mommy's Little Travel Treasures!</h1>
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/tips/new" element={<NewTips />} />
              <Route path="/tips" element={<TipsPage />} />
              <Route path="/updatetips:id" element={<EditForm/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
      
    </main>
  );
}
