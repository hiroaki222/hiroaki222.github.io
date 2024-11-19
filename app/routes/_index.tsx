import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Takahara Hiroaki" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <a>hello world</a>
    </div>
  );
}
