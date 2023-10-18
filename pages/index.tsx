import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import {
  HomePage,
  HomeSecond,
  HomeThird,
  HomeFourth,
  HomeFifth,
  HomeSixth,
  Footer,

} from "../devlink";
export default function Home() {
  
  return(
    <>
    <HomePage />
    <HomeSecond />
    <HomeThird />
    <HomeFourth />
    <HomeFifth />
    <HomeSixth />
    <Footer />
    </>

  );
};
