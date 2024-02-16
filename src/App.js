import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './utils/router/privateRoute';
import Home from './pages/home';
import AuthRootComponent from './pages/auth';
import LayoutComponent from './components/layout';
// import WatchListComponent from './pages/watchlist';
// import NewsComponent from './pages/news';
// import SettingsComponent from './pages/settings';
// import QuotesComponent from './pages/quotes';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route element={<LayoutComponent />}>
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="login" element={<AuthRootComponent />} />
          <Route path="register" element={<AuthRootComponent />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
