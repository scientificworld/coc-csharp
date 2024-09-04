"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(src_exports);
var import_coc = require("coc.nvim");
async function activate(context) {
  const config = import_coc.workspace.getConfiguration("csharp");
  if (!config.get("enable", true)) {
    return;
  }
  const serverOptions = {
    command: config.get("ls.path", "csharp-ls")
  };
  const clientOptions = {
    documentSelector: [{ scheme: "file", language: "cs" }]
  };
  let client = new import_coc.LanguageClient(
    "csharp",
    "C# Language Server",
    serverOptions,
    clientOptions
  );
  client.onReady().then(() => {
    client.onNotification("window/showMessage", () => {
    });
  });
  await client.start();
  context.subscriptions.push(import_coc.services.registLanguageClient(client));
  import_coc.window.showInformationMessage("coc-csharp started.");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate
});
