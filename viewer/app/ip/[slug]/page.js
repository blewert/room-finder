"use client"

import React, { useEffect } from "react"
import { useState } from "react";
import { ArrowLeft, ArrowRight, Pointer } from "lucide-react"
import { useSearchParams } from 'next/navigation'
import "./page.sass"
import { InfoPointSteps } from "./infopointsteps"
import { Tracker } from "./tracker";

import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

function getFirstPage()
{
    let md = "You can get started by **swiping right**, or using the buttons at the bottom of this page.\n*Swipe right to begin*\n"

    return <article className="centered">
        <div className="step-content">
            <h1>Getting started</h1>
            <InfoPointSteps markdown={md}/>
        </div>
    </article>
}

export default function Page ({params})
{
    const { slug } = React.use(params);
    const [ curPageIdx, setCurPageIdx ] = useState(0);


    let data = "Straight ahead of your current location will be a large set of stairs.\n- Climb the stairs until you reach `the landing` with checkered tiles.\n- Walk up the small set of stairs to your right and turn left towards the `double doors`.\n- Scan the `Salto Lock` on the **right hand side** to unlock them.\n\n*Please swipe right to the next step.*";
    // data = "Go up the stairs and turn right. `C117` will be on your right."
    let title = "Up the main staircase"

    let slides = Array.from({ length: 5 }).map(
        (el, index) => {
            return <article>
                <div className="jumbo">
                    <img src={"/doors.jpg"} loading="lazy" />
                </div>

                <div className="step-content">
                    <h1>{title}</h1>

                    <InfoPointSteps markdown={data} />
                </div>
            </article>
        }
    );

    slides = [getFirstPage(), ...slides];

    const [swiper, setSwiper] = useState(null);

    function getTracker()
    {
        if(!swiper)
            return null;

        return <Tracker index={curPageIdx} total={slides.length} />
    }

    function swipeSlide(dir)
    {
        if(!swiper)
            return;

        swiper.slideNext();
    }

    let updateLoop = null;

    function onSlideChange(data)
    {
        if(!swiper)
            return;

        if(updateLoop)
            return;

        setCurPageIdx(data.activeIndex);
    }

    return <main className="info-point-page">
            <nav>
                {/* <span>Turn right</span> */}
                <ArrowLeft className="icon" />
            </nav>
            <Swiper onTransitionEnd={onSlideChange} modules={[Virtual]} spaceBetween={20} onSwiper={setSwiper} virtual>
                    {slides.map((e, i) => {
                        return <SwiperSlide key={e + i} virtualIndex={i}>
                            {e}
                        </SwiperSlide>
                    })}
            </Swiper>
            <footer>
                <button onClick={swipeSlide.bind(1)}><ArrowLeft className="nav-button-bottom"/></button>
                {getTracker()}
                <button onClick={swipeSlide.bind(-1)}><ArrowRight className="nav-button-bottom"/></button>
            </footer>
        </main>
}