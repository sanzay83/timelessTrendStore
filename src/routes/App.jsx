// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Collection from "./Collection";
import Footer from "../components/Footer";
import About from "./About";
import "../styles/App.css";
import AdminLogin from "../components/AdminLogin";
import AdminRegistration from "../components/AdminRegistration";
import AdminDashboard from "../components/AdminDashboard";
import AdminAddItem from "../components/AdminAddItem";
import ForYouList from "../components/ForYouList";
import AdvertiseComponent from "../components/AdvertiseComponent";

function App() {
  return (
    <div className="App">
      <AdvertiseComponent />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ForYouList />
            </>
          }
        />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/additem" element={<AdminAddItem />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegistration />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
