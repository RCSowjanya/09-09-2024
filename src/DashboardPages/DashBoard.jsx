import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

import DashboardHeader from "./DashboardHeader";
import Users from "./Users";
import Orders from "./Orders";
import Leads from "./Leads";
import Proposals from "./Proposals";
import Quotations from "./Quotations";
import SolarInstallers from "./SolarInstallers";
import Feedback from "./Feedback";
import Sales from "./Sales";
import TotalLeadsChart from "./TotalLeadsChart";
import AverageTimeChart from "./AverageTimeChart";
import OutstandingInvoicesChart from "./OutstandingInvoicesChart";
import Installers from "./Installers";
import ConversionRateChart from "./ConversionRateChart";
import TotalCommissionChart from "./TotalCommissionChart";
import AverageDealChart from "./AverageDealChart";
import CustomerRFQs from "./CustomerRFQs";
import CustomerDetails from "./CustomerDetails";

const DashBoard = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [sidebarWidth, setSidebarWidth] = useState("w-60"); // Default sidebar width

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarWidth("w-0"); // Sidebar collapsed on mobile
      } else {
        setSidebarWidth("w-60"); // Sidebar expanded on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTitle = () => {
    switch (activeItem) {
      case "dashboard":
        return "Dashboard";
      case "customerRFQs":
        return "CustomerRFQs";
      case "users":
        return "Customers";
      case "leads":
        return "Leads";
      case "proposals":
        return "Proposals";
      case "orders":
        return "Orders";
      case "quotations":
        return "Quotations";
      case "solarInstallers":
        return "Solar Installers";
      case "customerDetails":
        return "CustomerDetails";
      case "Installers":
        return "Solar Installers";
      case "feedback":
        return "Feedback";
      default:
        return "Dashboard";
    }
  };

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return (
          <div className="m-[2%]">
            <Sales />
            <div className="flex gap-2 justify-center mt-9 pb-20">
              <div className="w-1/3">
                <ConversionRateChart />
              </div>
              <div className="w-1/3">
                <TotalCommissionChart />
              </div>
              <div className="w-1/3">
                <AverageDealChart />
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-9">
              <div className="w-1/3">
                <TotalLeadsChart />
              </div>
              <div className="w-1/3">
                <AverageTimeChart />
              </div>
              <div className="w-1/3">
                <OutstandingInvoicesChart />
              </div>
            </div>
          </div>
        );
      case "users":
        return <Users />;
      case "customerRFQs":
        return <CustomerRFQs />;
      case "orders":
        return <Orders />;
      case "leads":
        return <Leads />;
      case "proposals":
        return <Proposals />;
      case "quotations":
        return <Quotations />;
      case "solarInstallers":
        return <SolarInstallers setActiveItem={setActiveItem} />;
      case "Installers":
        return <Installers />;
      case "customerDetails":
        return <CustomerDetails />;
      case "feedback":
        return <Feedback />;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        className={`fixed top-0 left-0 h-full ${sidebarWidth} transition-all duration-300`}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div
        className={`transition-all duration-300`}
        style={{
          marginLeft: sidebarWidth === "w-60" ? "16rem" : "4rem",
          width: `calc(100% - ${sidebarWidth === "w-60" ? "16rem" : "4rem"})`,
        }}
      >
        <DashboardHeader title={getTitle()} />
        {renderContent()}
      </div>
    </div>
  );
};

export default DashBoard;
