"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Home() {
  const [helloWorld, setHelloWorld] = useState("불러오는중....");

  useEffect(() => {
    const getHelloWorld = async () => {
      const response = await fetch(
        process.env.NEXT_PUBLIC_SERVER_URL || "http://127.0.0.1:8080",
        {
          method: "GET",
        }
      );
      const result = await response.text();

      setHelloWorld(result);
    };

    getHelloWorld();
  }, []);

  return (
    <div>
      <Header renderCenter={() => <div>메인 페이지</div>} />

      <div className="flex justify-center items-center h-screen">
        <div>{helloWorld}</div>
      </div>
    </div>
  );
}
