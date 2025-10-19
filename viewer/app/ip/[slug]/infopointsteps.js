import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

export function InfoPointSteps(props)
{
    let [ mdHtml, setMdHtml ] = useState(null);
    const md = props.markdown;

    useEffect(() => {
        const htmlContent = remark().use(html).process(md).then(function (res)
        {
            // console.log(res);
            setMdHtml(res.toString());
        });
    });
    
    if (mdHtml == null)
        return null;

    // console.log(mdHtml);

    return <div className="step-desc" dangerouslySetInnerHTML={{ __html: mdHtml }}>
    </div>

    return <div className="step-desc">
        <ol>
            <li><span>At the top of the stairs, you should see two double doors.</span></li>
            <li><span>Scan the <kbd>Salto Lock</kbd> on the <b>right hand-side</b> to unlock them.</span></li>
            <li><span>Proceed through the doors.</span></li>
            <li><span>Proceed through the doors.</span></li>
        </ol>
    </div>
}