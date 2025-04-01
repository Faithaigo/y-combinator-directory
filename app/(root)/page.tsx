import Hello from "@/app/components/hello";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Home | Next Js",
    description: "Y-Combinator app",
};
export default function Home() {

  return (
      <>
        <h1 className="text-3xl">Welcome to Next Js</h1>
        <Hello/>
      </>
  );
}
