import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from './pages/newpage';
import Layout from './components/Layout'
import Home from './components/Home'
import Expenses1 from './pages/Expenses1';
export default function App() {
return (
  <div>
  {/*<Layout>Sample </Layout>
  <Home />*/}
  <Expenses1/>
  </div>
);
};
