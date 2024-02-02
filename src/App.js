import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Exchange from './Pages/Exchange/Exchange';
import LivePrices from './Pages/LivePrices/LivePrices';
import Wallet from './Pages/Wallet/Wallet';
import NFTMarket from './Pages/NFTMarket/NFTMarket';
import Transaction from './Pages/Transaction/Transaction';
import Settings from './Pages/Settings/Settings';
import News from './Pages/News/News';
import Inbox from './Pages/Inbox/Inbox';
import Layout from './Pages/Layout/Layout';
import PersonalInfo from './components/Settings/PersonalInfo/PersonalInfo';
import Security from './components/Settings/Security/Security.jsx';
import Currency from './components/Settings/Currency/Currency.jsx';
import Notifications from './components/Settings/Notifications/Notifications.jsx'
import Payment from './components/Settings/Payment/Payment.jsx'
import Integrations from './components/Settings/Integrations/Integrations.jsx'
import Verification from './components/Settings/Verification/Verification.jsx'
import UserProfile from './components/Settings/UserProfile/UserProfile.jsx'

function App() {
  return (
    <div className="App">
     
         <Routes>
            <Route path='/' element={<Layout/>}>
               <Route index element={<Dashboard />} />
               <Route path='exchange' element={<Exchange />} />
               <Route path='livePrices' element={<LivePrices />} />
               <Route path='wallet' element={<Wallet />} />
               <Route path='nftMarket' element={<NFTMarket />} />
               <Route path='transaction' element={<Transaction />} />
               <Route path='settings' element={<Settings />} >
                 <Route index element={<Navigate to="personalInfo" />} />
                 <Route path='personalInfo' element={<PersonalInfo />} />
                 <Route path='security' element={<Security />} />
                 <Route path='currency' element={<Currency />} />
                 <Route path='notifications' element={<Notifications />} />
                 <Route path='payment' element={<Payment />} />
                <Route path='integrations' element={<Integrations />} />
                <Route path='verification' element={<Verification />} />
               </Route>
               <Route path='/userProfile' element={<UserProfile />} />
               <Route path='news' element={<News />} />
               <Route path='inbox' element={<Inbox />} />
            </Route>
         </Routes>
    
    </div>
  );
}

export default App;


