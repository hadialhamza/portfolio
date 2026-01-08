import React from "react";

const SocialButton = ({ icon: Icon, href, label, hoverColor, shadowColor }) => (
    <div className="group relative flex flex-col items-center">
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 p-3.5 rounded-lg text-slate-500 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700 cursor-pointer bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm ${hoverColor} ${shadowColor} hover:shadow-lg hover:-translate-y-1`}
            aria-label={label}
        >
            <Icon size={24} />
        </a>
        <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm whitespace-nowrap pointer-events-none z-20">
            {label}
        </span>
    </div>
);

export default SocialButton;
