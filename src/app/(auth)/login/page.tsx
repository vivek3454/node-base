import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";
import Image from "next/image";
import Link from "next/link";

const Login = async () => {
  await requireUnauth();

  return <LoginForm />;
};

export default Login;
