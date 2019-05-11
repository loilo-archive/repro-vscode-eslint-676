# Reproduction for [microsoft/vscode-eslint#676](https://github.com/microsoft/vscode-eslint/issues/676)

Steps to reproduce:

1. Clone this repository:

   ```bash
   git clone https://github.com/loilo/repro-vscode-eslint-676
   ```

2. Open the cloned folder with Visual Studio Code (and the `vscode-eslint` extension enabled):

   ```bash
   code repro-vscode-eslint-676
   ```

3. Take a look at the `main.js` file and observe the incorrectly reported undefined variable.

4. Note that everything works as expected when the exact same options are defined in an `.eslintrc` file. This can be verified by removing the `--` suffix from the the included `.eslintrc--` file.