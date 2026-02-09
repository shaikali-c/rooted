import { Field } from "./_ext/catalyst/fieldset";
import { Text } from "./_ext/catalyst/text";

export default function FormError({ children }) {
  return (
    <Field>
      <Text
        className={
          "text-red-600 bg-red-200 p-2 flex gap-2 items-center rounded-md px-5"
        }
      >
        {children}
      </Text>
    </Field>
  );
}
