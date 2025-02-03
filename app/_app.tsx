import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && !["/login", "/register"].includes(router.pathname)) {
      router.push("/login");
    }
  }, [router]);

  return <Component {...pageProps} />;
}
