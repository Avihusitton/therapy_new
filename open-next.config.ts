const config = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
  // Ensure middleware runs in the edge runtime and is bundled within the main worker
  // to avoid 500 errors caused by external middleware dispatching issues in Cloudflare.
  middleware: {
    external: false,
  },
};

export default config;
