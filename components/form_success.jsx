import { Field } from "./_ext/catalyst/fieldset";
import { Text } from "./_ext/catalyst/text";

export default function FormSuccess({ children }) {
  return (
    <Field>
      <Text
        className={
          "text-green-600 bg-green-300 p-2 flex gap-2 items-center rounded-md px-5"
        }
      >
        {children}
      </Text>
    </Field>
  );
}
