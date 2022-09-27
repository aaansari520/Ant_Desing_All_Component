import React from "react";
import AppAbout from "../Components/home/about";
import AppContact from "../Components/home/contact";
import AppFaq from "../Components/home/faq";
import AppFeatures from "../Components/home/features";
import AppHero from "../Components/home/hero";
import AppPricing from "../Components/home/pricing";
import AppWorks from "../Components/home/works";

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppWorks />
      <AppFaq />
      <AppPricing />
      <AppContact />
    </div>
  );
};

export default AppHome;
