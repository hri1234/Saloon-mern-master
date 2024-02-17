import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import './App.css'
import Header from "./Components/Layout/Header";
import WorkSedule from "./Components/Pages/Team/WorkSedule";
import Employee from "./Components/Pages/Team/Employee";
import Products from "./Components/Pages/Product/Products";
import Supplier from "./Components/Pages/Product/Supplier";
import Notfound from "./Components/Layout/Notfound";
import Orders from "./Components/Pages/Product/Orders";
import Client from "./Components/Pages/Clients/Client";
import Campaings from "./Components/Pages/Marketing/Campaings";
import Automated from "./Components/Pages/Marketing/Automated";
import Partnersite from "./Components/Pages/Marketing/Partnersite";
import Media from "./Components/Pages/Marketing/Media";
import Celender from "./Components/Pages/Celender/Celender";
import Statics from "./Components/Pages/Overview/Statics";
import Goals from "./Components/Pages/Overview/Goals";
import CustomerReview from "./Components/Pages/Overview/CustomerReview";
import Service from "./Components/Pages/TheManu/AllService/Service";
import Depilation from "./Components/Pages/TheManu/Depilation/Depilation";
import Message from "./Components/Pages/TheManu/Message/Message";
import Hair from "./Components/Pages/TheManu/Hair/Hair";
import Face from "./Components/Pages/TheManu/Face/Face";
import Discount from "./Components/Pages/TheManu/Discount/Discount";
import  ReportOne from "./Components/Pages/Reports/ReportOne";
import Billing from "./Components/Billing/Billing";
import ReportTwo from "./Components/Pages/Reports/ReportTwo";
import Pricelevel from "./Components/Pages/TheManu/Pricelavel/Pricelevel";
import Value_detail from "./Components/Pages/Setting/Value_detail";
import Opening_hour from "./Components/Pages/Setting/Opening_hour";
import Resources from "./Components/Pages/Setting/Resources";
import Finance from "./Components/Pages/Setting/Finance";
import Bussiness_detail from "./Components/Pages/Setting/Bussiness_detail";
import Bank_detail from "./Components/Pages/Setting/Bank_detail";
import Notifications from "./Components/Pages/Setting/Notifications";
import Contacting from "./Components/Pages/Setting/Contacting";
import Onlinebooking from "./Components/Pages/Setting/Onlinebooking";
import Onlinebookingsetting from "./Components/Pages/Setting/Onlinebookingsetting";
import Onlinebookingintregration from "./Components/Pages/Setting/Onlinebookingintregration";
import Report from "./Components/Pages/AllReport/Report";
import Reportbooking from "./Components/Pages/AllReport/Reportbooking";
import ClientForm from "./Components/Pages/Marketing/ClientForm";
import Clientapp from "./Components/Pages/Marketing/Clientapp";
import Forms from "./Components/Pages/Celender/Forms";
import Salesoverview from "./Components/Pages/AllReport/Salesoverview";
import Servicesales from "./Components/Pages/AllReport/Servicesales";
import Salebyemployee from "./Components/Pages/AllReport/Salebyemployee";
import Salesreportotd from "./Components/Pages/AllReport/Salesreportotd";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Celender />}> </Route>
        <Route path="/static" element={<Statics />}> </Route>
        <Route path="/goal" element={<Goals />}> </Route>
        <Route path="/customer_review" element={<CustomerReview />}> </Route>
        <Route path="/service" element={<Service />}> </Route>
        <Route path="/depilation" element={<Depilation />}> </Route>
        <Route path="/message" element={<Message />}> </Route>
        <Route path="/hair" element={<Hair />}> </Route>
        <Route path="/face" element={<Face />}> </Route>
        <Route path="/price_level" element={<Pricelevel />}></Route>
        <Route path="/discount" element={<Discount />}> </Route>
        <Route path="/work_sedule" element={<WorkSedule />}> </Route>
        <Route path="/employee" element={<Employee />}> </Route>
        <Route path="/product" element={<Products />}> </Route>
        <Route path="/supplier" element={<Supplier />}> </Route>
        <Route path="/supplier" element={<Supplier />}> </Route>
        <Route path="/order" element={<Orders />}> </Route>
        <Route path="/client" element={<Client />}> </Route>
        <Route path="/campaings" element={<Campaings />}> </Route>
        <Route path="/automated" element={<Automated />}> </Route>
        <Route path="/partner_site" element={<Partnersite />}> </Route>
        <Route path="/media" element={<Media />}> </Route>
        <Route path="/client_form" element={<ClientForm />}> </Route>
        <Route path="/client_app" element={<Clientapp />}> </Route>
        <Route path="/reportone" element={<ReportOne/>}> </Route>
        <Route path="/reporttwo" element={<ReportTwo/>}> </Route>
        <Route path="/billing" element={<Billing/>}> </Route>
        <Route path="/vanue_detail" element={<Value_detail/>}> </Route>
        <Route path="/opening_hour" element={<Opening_hour/>}> </Route>
        <Route path="/resources" element={<Resources/>}> </Route>
        <Route path="/finance" element={<Finance/>}> </Route>
        <Route path="/bussiness_detail" element={<Bussiness_detail/>}> </Route>
        <Route path="/bank_detail" element={<Bank_detail/>}> </Route>
        <Route path="/notification" element={<Notifications/>}> </Route>
        <Route path="/contacting" element={<Contacting/>}> </Route>
        <Route path="/online_booking" element={<Onlinebooking/>}> </Route>
        <Route path="/online_booking_setting" element={<Onlinebookingsetting/>}> </Route>
        <Route path="/online_booking_intergrations" element={<Onlinebookingintregration/>}> </Route>
        <Route path="/report" element={<Report/>}> </Route>
        <Route path="/report_booking" element={<Reportbooking/>}> </Route>
        <Route path="/sales_overview" element={<Salesoverview/>}> </Route>
        <Route path="/service_sales" element={<Servicesales/>}> </Route>
        <Route path="/sale_by_employee" element={<Salebyemployee/>}> </Route>
        <Route path="/sales_report_otd" element={<Salesreportotd/>}> </Route>
        <Route path="/form" element={<Forms/>}> </Route>
        <Route path="*" element={<Notfound />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
