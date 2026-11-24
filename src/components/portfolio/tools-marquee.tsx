const TOOLS = [
  "Premiere Pro",
  "DaVinci Resolve",
  "After Effects",
  "Lightroom",
  "Photoshop",
  "n8n",
  "Make",
  "Zapier",
  "OpenAI",
  "WhatsApp Agents",
];

export const ToolsMarquee = () => {
  const loop = [...TOOLS, ...TOOLS];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-black/8 bg-[#f8f5ee] py-5"
    >
      <div className="flex w-max animate-trusted-marquee motion-reduce:animate-none">
        {loop.map((tool, index) => (
          <span
            key={`${tool}-${index}`}
            className="flex items-center gap-6 px-6 font-redhat text-[13px] font-semibold uppercase tracking-[0.22em] text-black/35"
          >
            {tool}
            <span className="size-1 rounded-full bg-black/20" />
          </span>
        ))}
      </div>
    </div>
  );
};
