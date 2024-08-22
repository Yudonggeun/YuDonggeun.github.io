import React from 'react';
import './App.css';
import AuctionDetails from './pages/auction/detail/AuctionDetail';
import AuctionList from './pages/auction/list/AuctionList';
import LoginPage from './pages/Login';
import ChargePointPage from './pages/ChargePoint';
import ReceiptListPage from './pages/receipt/list/ReceiptList';
import Footer from "./pages/Footer";
import SignUpPage from "./pages/SignUp";
import {usePageStore} from "./store/PageStore";
import {useAuctionStore} from "./store/AuctionStore";

function App() {

  const { currentPage, setPage } = usePageStore();
  const { auctionId, setAuctionId } = useAuctionStore();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <AuctionList />;
      case 'auctionDetail':
        return <AuctionDetails auctionId={auctionId}/>;
      case 'login':
        return <LoginPage />;
      case 'charge':
        return <ChargePointPage />;
      case 'receiptList':
        return <ReceiptListPage />;
      case 'signup':
        return <SignUpPage />;
    }
  }

  return (
      <>
        <div>
          {renderPage()}
        </div>
        <Footer />
      </>
  );
}

export default App;
