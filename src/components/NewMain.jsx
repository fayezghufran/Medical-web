import React from "react";
import Hero from "./main/Hero";
import Approach from "./main/Approach";
import BookConsult from "./main/BookConsult";
import Consult from "./main/Consult";
import DownloadPlay from "./main/DownloadPlay";
import Feature from "./main/Feature";
import AyurvedaPage from "./main/AyurvedaPage";
import CustomerStories from "./main/CustomerStories";
import MeetOurExperts from "./main/MeetOurExperts ";

const NewMain = () => {
  return (
    <>
      <Hero />
      <Feature />
      <AyurvedaPage />
      <Consult />
      <BookConsult />
      <Approach />
      <CustomerStories />
      <MeetOurExperts/>
      <DownloadPlay />
    </>
  );
};

export default NewMain;
