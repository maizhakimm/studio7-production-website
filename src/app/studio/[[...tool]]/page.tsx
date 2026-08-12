import Studio from "./studio";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return <Studio />;
}
