
export function Tracker(props)
{
    let idx = props.index;
    let total = props.total;

    if(!props?.zeroBased)
        idx += 1;

    const widthPercent = (Math.max(idx, 1) / total) * 100 + "%";

    return <div className="tracker">
            <span>Step {idx} of {total}</span>
            <div className="progress-bar">
                <div className="inner" style={{ "width": widthPercent }}></div>
            </div>
    </div>
}