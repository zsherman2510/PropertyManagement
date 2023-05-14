import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import MaintenanceRequests from "./components/Pages/MaintenanceRequests";
import Payments from "./components/Pages/Payments";
import Tenants from "./components/Pages/Tenants";
import Properties from "./components/Pages/Properties";

const AppRouter = () => {
  

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route
            exact
            path="/maintenance"
            element={<MaintenanceRequests />}
          />
          <Route
            exact
            path="/properties"
            element={<Properties />}
          />
          <Route
            exact
            path="/payments"
            element={<Payments />}
          />
          <Route
            exact
            path="/tenants"
            element={<Tenants  />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
