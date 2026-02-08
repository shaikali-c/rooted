import Editor from "@/components/editor";

export default async function SecretId({ params }) {
  const { secret_id } = await params;
  return <Editor id={secret_id} />;
}
