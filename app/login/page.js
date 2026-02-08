import { AuthLayout } from "@/components/_ext/catalyst/auth-layout";
import LoginForm from "@/components/login/form";
import { verifyJWT } from "@/lib/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PageLogin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth")?.value;
  if (token) {
    const payload = verifyJWT(token);
    if (payload) {
      redirect("/home");
    }
  }

  return (
    <main className="h-dvh w-screen flex items-center justify-center flex-col bg-neutral-100 text-gray-900 font-main">
      <div className="w-full md:w-auto">
        <AuthLayout>
          <LoginForm />
        </AuthLayout>
      </div>
    </main>
  );
}
