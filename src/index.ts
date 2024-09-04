import { ExtensionContext, services, workspace, LanguageClient, window } from 'coc.nvim';

export async function activate(context: ExtensionContext): Promise<void> {
  const config = workspace.getConfiguration('csharp');
  if (!config.get<boolean>('enable', true)) {
    return;
  }

  const serverOptions = {
    command: config.get<string>('ls.path', 'csharp-ls'),
  };
  const clientOptions = {
    documentSelector: [{ scheme: 'file', language: 'cs' }],
  };

  let client = new LanguageClient(
    'csharp',
    'C# Language Server',
    serverOptions,
    clientOptions
  );
  client.onReady().then(() => {
    client.onNotification('window/showMessage', () => {});
  });
  await client.start();

  context.subscriptions.push(services.registLanguageClient(client));
  window.showInformationMessage('coc-csharp started.');
}
