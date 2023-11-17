import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
//... 

export const client = createClient({
  projectId: "2yq8ksxc",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}