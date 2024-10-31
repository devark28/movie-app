const WatchButton = ({ href }) => (
    <a
        className="flex gap-1 items-center bg-white/10 rounded-full overflow-hidden active:bg-white/10 hover:bg-white/15 p-2 px-4"
        href={href}
    >
        <PlayIcon size={18} className="fill-slate-50 shrink-0" />
        Watch Now
    </a>
);

export default WatchButton;