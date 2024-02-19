import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import Assets from './components/ManScreen/Assets/Assets';
import Depositt from './components/ManScreen/Depositt/Depositt';
import Withdraw from "./components/ManScreen/Withdraw/Withdraw"
import Trade from "./components/ManScreen/Trade/Trade"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='assets' element={<Assets />} />
          <Route path='deposit' element={<Depositt />} />
          <Route path='withdraw' element={<Withdraw />} />
          <Route path='trade' element={<Trade />} />
          <Route path='exchange' element={<Exchange />} />
          <Route path='livePrices' element={<LivePrices />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='nftMarket' element={<NFTMarket />} />
          <Route path='transaction' element={<Transaction />} />
          <Route path='settings' element={<Settings />} />
          <Route path='news' element={<News />} />
          <Route path='inbox' element={<Inbox />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;


