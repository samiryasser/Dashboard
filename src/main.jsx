import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { NotFound } from "./Components/NotFound";
import "./index.css";
import { Bar } from "./Pages/Bar/Bar";
import { Calendar } from "./Pages/Calendar/Calendar";
import { Contact } from "./Pages/Contact/Contact";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Faq } from "./Pages/Faq/Faq";
import { Form } from "./Pages/Form/Form";
import { Invoices } from "./Pages/Invoices/Invoices";
import { Line } from "./Pages/Line/Line";
import { Map } from "./Pages/Map/Map";
import { Pie } from "./Pages/Pie/Pie";
import { Team } from "./Pages/Team/Team";
import Tempy from "./Pages/Tempy";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="map" element={<Map />} />
      <Route path="tempy" element={<Tempy />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
