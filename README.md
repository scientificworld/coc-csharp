# coc-csharp

C# integration of coc.nvim

## Install

Install [csharp-ls](https://github.com/razzmatazz/csharp-language-server) first, then `:CocInstall coc-csharp`.

## Configuration

- `csharp.enable`: When set to false, the extension will be disabled. Default: `true`
- `csharp.ls.path`: Specify the path of the language server. Default: `csharp-ls`

## Note

This extension is still in alpha phase, some functions may be missing.

Known issues:

- Some messages will be displayed at the bottom when starting. I tried to intercept `window/showMessage`, but it doesn't work perfectly.

PRs Welcome!

## License

MIT

---

> This extension is built with [create-coc-extension](https://github.com/fannheyward/create-coc-extension)
