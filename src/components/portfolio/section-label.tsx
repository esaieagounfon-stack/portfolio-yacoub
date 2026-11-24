type SectionLabelProps = {
  index: string;
  label: string;
};

export const SectionLabel = ({ index, label }: SectionLabelProps) => {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="font-redhat text-[12px] font-semibold tracking-[0.18em] text-black/40">
        {index}
      </span>
      <span className="h-px w-8 bg-black/15" />
      <span className="font-redhat text-[12px] font-semibold uppercase tracking-[0.22em] text-black/55">
        {label}
      </span>
    </div>
  );
};
