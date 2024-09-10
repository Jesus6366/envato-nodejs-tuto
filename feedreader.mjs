import { getLinks, saveLinks } from "./feed-manager.mjs";

const feeds = await getLinks();

feeds.push("http://www.tutsplus.com");

await saveLinks(feeds);
