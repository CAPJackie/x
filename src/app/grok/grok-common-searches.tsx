const actions = [
  {
    label: "Create Images",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-twitter-light-gray">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        <path d="M8.5 13.5l2.5-3 2 2.5 1.5-1.5 2.5 3H8.5z" />
        <circle cx="9.5" cy="9.5" r="1.5" />
      </svg>
    ),
  },
  {
    label: "Edit Image",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-twitter-light-gray">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    ),
  },
  {
    label: "Latest News",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-twitter-light-gray">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h12v2H6zm0 4h8v2H6z" />
      </svg>
    ),
  },
];

export default function GrokCommonSearches() {
  return (
    <div className="flex flex-row gap-2 px-4 pb-3">
      {actions.map((action) => (
        <button
          key={action.label}
          className="flex flex-col items-start gap-2 p-3 rounded-2xl bg-[#1a1a1a] hover:bg-[#222] transition-colors flex-1 border-[0.5px] border-twitter-light-gray"
        >
          {action.icon}
          <span className="text-twitter-light-gray text-[13px] font-normal leading-tight text-left">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
}
