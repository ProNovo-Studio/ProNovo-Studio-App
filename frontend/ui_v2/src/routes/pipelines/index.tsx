import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pipelines/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/pipelines/"!</div>;
}
