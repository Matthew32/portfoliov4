export default function Loading({hidden = false, className="relative overflow-hidden" }) {
    return <div hidden={hidden} className={className}>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
    </div>
};