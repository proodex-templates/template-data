// babel-plugin-markers.cjs (INERT / NO-OP VERSION)

module.exports = function markerPlugin() {
  return {
    name: "babel-plugin-markers-inert",
    visitor: {
      // ✅ No AST transforms at all — just here to satisfy Babel
      Program() {},
      JSXOpeningElement() {},
    },
    post() {
      // ✅ No file writes, logs, or metadata updates
    },
  };
};
