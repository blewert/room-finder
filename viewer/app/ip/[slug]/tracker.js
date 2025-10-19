
export function Tracker(props)
{
    let idx = props.index;
    let total = props.total-1;

    const widthPercent = (Math.max(idx, 1) / total) * 100 + "%";

    if(idx == 0)
    {
        return null;
    }

    return <div className="tracker">
            <span>Step {idx} of {total}</span>
            <div className="progress-bar">
                <div className="inner" style={{ "width": widthPercent }}></div>
            </div>
    </div>
}