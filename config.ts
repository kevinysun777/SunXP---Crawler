// Assuming the Config interface is defined in "./src/config.ts"
import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.relume.io/",
  match: "https://www.relume.io/**",
  maxPagesToCrawl: 10000,
  outputFileName: "relume_crawl_output.json",
  maxTokens: 2000000, // Updated as per requirement, adjust if necessary
};
