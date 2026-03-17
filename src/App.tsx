import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import PlannerPage from "./pages/PlannerPage";

import AIPlannerPage from "./pages/AIPlannerPage";

import GeneratedView from "./pages/GeneratedView";
import PlaceDetail from "./pages/PlaceDetail";
import PlanConfirm from "./pages/PlanConfirm";
import PricingPage from "./pages/PricingPage";
import EventsPage from "./pages/EventsPage";
import BlogPage from "./pages/BlogPage";

import type { ItineraryResponse } from "./services/api";

import "./App.css";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const [itineraryData, setItineraryData] = useState<ItineraryResponse | null>(
    null,
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.href.startsWith(window.location.origin)) {
        const path = anchor.getAttribute("href");
        if (path && !path.includes("#")) {
          e.preventDefault();
          window.history.pushState({}, "", path);
          setCurrentPath(path);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/planner":
        return (
          <PlannerPage
            onPlanGenerated={(data) => {
              setItineraryData(data);
              navigate("/generated");
            }}
          />
        );
      case "/ai-planner":
        return <AIPlannerPage />;

      case "/events":
        return <EventsPage />;
      case "/blog":
        return <BlogPage />;
      case "/pricing":
        return <PricingPage />;
      case "/generated":
        return <GeneratedView data={itineraryData} />;
      case "/confirm":
        return <PlanConfirm/>;

      case "/place-detail":
        return <PlaceDetail />;
      default:
        return <HomePage />;
    }
  };

  return <div className="App overflow-x-hidden">{renderPage()}</div>;
}

export default App;
