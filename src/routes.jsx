import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import MaintenanceRequests from "./components/Pages/MaintenanceRequests";

const AppRouter = () => {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [payments, setPayments] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const mockResponse = await fetch("/data.json");
      const res = await mockResponse.json();
      console.log(res, "res");
      const { expenses, maintenanceRequests, payments, properties } = res;
      setMaintenanceRequests(maintenanceRequests);
      setPayments(payments);
      setProperties(properties);
      setExpenses(expenses);
      setData(res);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<App data={data} />} />
          <Route
            exact
            path="/maintenance"
            element={<MaintenanceRequests maintenanceRequests={maintenanceRequests} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
