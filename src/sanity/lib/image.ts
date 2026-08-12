import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./client";

const builder =
  projectId && dataset
    ? imageUrlBuilder({
        projectId,
        dataset
      })
    : null;

export function urlFor(source: Parameters<NonNullable<typeof builder>["image"]>[0]) {
  return builder?.image(source);
}
