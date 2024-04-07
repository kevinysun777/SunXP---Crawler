import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://phaseshawaii.com/",
  match: "https://phaseshawaii.com/**",
  maxPagesToCrawl: 500,
  outputFileName: "phaseshawaii_crawl.json",
  maxTokens: 200000,
};
