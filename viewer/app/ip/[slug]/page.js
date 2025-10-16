"use client"

import React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useSearchParams } from 'next/navigation'
import "./page.sass"

export default function Page ({params})
{
    const { slug } = React.use(params);

    console.log(slug);

    return <main className="info-point-page">
        <nav>
            {/* <span>Turn right</span> */}
            <ArrowLeft className="icon" />
        </nav>
        <article>
            <div className="tracker">
                <span>1/5</span>
            </div>

            <div className="step-content">
                <div className="filler"></div>

                <h1>Go to the doors and do this something else</h1>

                <div className="step-desc">
                    <ol>
                        <li><span>At the top of the stairs, you should see two double doors.</span></li>
                        <li><span>Scan the <kbd>Salto Lock</kbd> on the <b>right hand-side</b> to unlock them.</span></li>
                        <li><span>Proceed through the doors.</span></li>
                        <li><span>Proceed through the doors.</span></li>
                    </ol>
                </div>
            </div>
        </article>
    </main>
}