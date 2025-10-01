"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DASHBOARD_DATA } from "../../src/data/dashboard-data";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctEmail = DASHBOARD_DATA.login.email;
  const correctPassword = DASHBOARD_DATA.login.password;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Lütfen e-posta ve şifrenizi girin.");
      return;
    }

    if (email === correctEmail && password === correctPassword) {
      router.push("/dashboard");
    } else {
      setError("Hatalı e-posta veya şifre girdiniz.");
    }
  };

  return (
    <div
      className="flex min-h-screen items-start justify-center bg-pink-50 dark:bg-gray-900 p-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-sm z-10 mt-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl  font-bold">Infofluencer</h1>
          <p className="text-gray-500 mt-2 text-lg">Markanızın hikayesini anlatacak doğru yüzleri bulmaya bir adım.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white/90 p-8 rounded-xl shadow-lg border border-gray-100">
          <CardContent className="grid gap-4 p-0">
            {error && <p className="text-sm font-medium text-red-600 bg-red-50 p-3 rounded-md border border-red-200">{error}</p>}

            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="E-posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 border-pink-200 focus:border-pink-500"
              />
            </div>

            <div className="grid gap-2">
              <Input
                id="password"
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 border-pink-200 focus:border-pink-500"
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-2 p-0 pt-6">
            <Button
              type="submit"
              className="w-full bg-purple-400 hover:bg-purple-500 text-white h-12 text-lg font-bold transition-colors duration-200"
              style={{ boxShadow: "0 4px 6px -1px rgba(192, 132, 252, 0.5), 0 2px 4px -2px rgba(192, 132, 252, 0.5)" }}
            >
              Giriş Yap
            </Button>

            <Button variant="outline" className="w-full text-purple-600 border-purple-200 hover:bg-purple-50">
              Google ile Giriş Yap
            </Button>
          </CardFooter>
        </form>
      </div>
    </div>
  );
}
