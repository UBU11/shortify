import { useState } from "react";
import { inputSchema } from "../../schema/inputSchema";
import { InputField } from "../inputBox/inputFiled";
import { PrimaryButton } from "../buttons/InputBtn";

export default function UrlInput() {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");

  const handleSubmit = () => {
    const result = inputSchema.safeParse({ value });

    if (!result.success) {
      const [err] = result.error.issues;
      setError(err.message);
      return;
    }

    setError(undefined);
    console.log("Validate value: ", result.data.value)
  };

   return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputField
        value={value}
        onChange={setValue}
        error={error}
        placeholder="Minimal input"
      />
      <PrimaryButton label="Submit" onClick={handleSubmit} />
    </div>
  );
}
