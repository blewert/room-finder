"use client"

import React from "react"
import { useState } from "react";
import { ArrowLeft, ArrowRight, Pointer } from "lucide-react"
import { useSearchParams } from 'next/navigation'
import "./page.sass"
import { InfoPointSteps } from "./infopointsteps"
import { Tracker } from "./tracker";

export default function Page ({params})
{
    const { slug } = React.use(params);

    const [ curPageIdx, setCurPageIdx ] = useState(0);

    let data = "Straight ahead of your current location will be a large set of stairs.\n- Climb the stairs until you reach `the landing` with checkered tiles.\n- Walk up the small set of stairs to your right and turn left towards the `double doors`.\n- Scan the `Salto Lock` on the **right hand side** to unlock them.\n\n*Please swipe right to the next step.*";
    // data = "Go up the stairs and turn right. `C117` will be on your right."
    let title = "Up the main staircase"

    return <main className="info-point-page">
        <nav>
            {/* <span>Turn right</span> */}
            <ArrowLeft className="icon" />
        </nav>
        <article>
            <div className="jumbo">

            </div>

            <div className="step-content">
                <h1>{title}</h1>

                <InfoPointSteps markdown={data}/>
            </div>
        </article>
        <footer>
            <button><ArrowLeft className="nav-button-bottom"/></button>
            <Tracker index={curPageIdx + 2} total={5} />
            <button><ArrowRight className="nav-button-bottom"/></button>
        </footer>
    </main>
}