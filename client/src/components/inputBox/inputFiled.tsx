type InputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
};

export function InputField({
  value,
  onChange,
  error,
  placeholder = "Enter text",
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-md
          bg-zinc-900
          px-4 py-2
          text-sm text-zinc-100
          placeholder-zinc-500
          outline-none
          ring-1 ring-zinc-800
          focus:ring-2 focus:ring-zinc-600
          transition
        "
      />
      {error && (
        <span className="text-xs text-red-400">{error}</span>
      )}
    </div>
  );
}
