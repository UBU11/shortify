type PrimaryButtonProps = {
  label: string;
  onClick: () => void;
};

export function PrimaryButton({ label, onClick }: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        rounded-md
        bg-[#f5f1e8]
        px-6 py-2
        text-sm font-medium
        text-zinc-900
        hover:bg-[#ebe6da]
        active:scale-[0.98]
        transition
      "
    >
      {label}
    </button>
  );
}
