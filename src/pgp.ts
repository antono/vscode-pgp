'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    const encrypt = vscode.commands.registerCommand('pgp.encrypt', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Your file was encrypted...');
    });

    const decrypt = vscode.commands.registerCommand('pgp.decrypt', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Your file was decrypted...');
    });

    context.subscriptions.push(encrypt, decrypt);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
