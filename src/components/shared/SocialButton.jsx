const SocialButton = ({
  icon: Icon,
  href,
  label,
  name,
  color,
  glowClass,
  download,
  onClick,
}) => {
  // Allow label or name prop
  const tooltipText = label || name;

  const content = (
    <>
      <div
        className={`absolute inset-0 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200 ${glowClass}`}
      ></div>
      <div
        className={`relative z-10 p-3 bg-slate-800 rounded-xl border border-slate-700 ${color} shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer`}
      >
        <Icon size={25} />
      </div>
      {tooltipText && (
        <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700 shadow-sm whitespace-nowrap pointer-events-none z-20">
          {tooltipText}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={download ? "_self" : "_blank"}
        rel={download ? "" : "noopener noreferrer"}
        download={download}
        onClick={onClick}
        className="group relative flex flex-col items-center"
        aria-label={tooltipText}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col items-center"
      role="button"
      aria-label={tooltipText}
    >
      {content}
    </div>
  );
};

export default SocialButton;
