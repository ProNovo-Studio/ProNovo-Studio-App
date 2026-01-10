import { createFileRoute } from "@tanstack/react-router";
import { PipelineCanvas } from '@mesantosrai/pipeline-canvas'


export const Route = createFileRoute("/pipelines/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div style={{ width: '100%', height: '80vh' }}><PipelineCanvas /></div>;
}
