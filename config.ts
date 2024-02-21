import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.adobe.com/products/premiere.html",
  match: "https://www.adobe.com/**",
  maxPagesToCrawl: 10000,
  outputFileName: "output.json",
  maxTokens: 1000,
};
