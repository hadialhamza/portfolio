const SkillCard = ({ tech }) => (
  <div className="relative group w-full cursor-default">
    {/* Background Gradient Effect on Hover */}
    <div className="absolute -inset-1 bg-linear-to-br from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500" />

    <div className="relative h-full flex flex-col justify-between p-4 bg-slate-900/95 border border-slate-800 rounded-xl transition-transform duration-300 group-hover:scale-103">
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-lg bg-slate-800 group-hover:scale-110 transition-transform duration-300">
          <tech.icon
            style={{
              color: tech.color === "#000000" ? undefined : tech.color,
            }}
            className={`w-6 h-6 transition-colors duration-300 ${
              tech.color === "#000000" ? "text-white" : ""
            }`}
          />
        </div>

        <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
          <tech.icon
            className="w-12 h-12 rotate-12"
            style={{ color: tech.color }}
          />
        </div>
      </div>

      <div>
        <h4 className="font-bold text-base text-slate-100 mb-1">{tech.name}</h4>
        <p className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">
          {tech.desc}
        </p>
      </div>
    </div>
  </div>
);

export default SkillCard;
