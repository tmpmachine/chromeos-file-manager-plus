# chromeos-file-manager-plus
Chrome extension to improve ChromeOS File Manager first letter navigation.

Added keyboard shortcut:
- Alt+. : Open current directory in Terminal.

> WARNING!
> This extension require access to `chrome://file-manager` URL.

## Setup
Enable the following flag:
```
Extensions on chrome:// URLs
chrome://flags/#extensions-on-chrome-urls
```
WARNING: This is considered a "bad" flag.

## Installation
1. Download and extract this repository.
2. Go to `chrome://extensions/` and enable **Developer mode**.
3. Load unpacked, pick the extension folder.

## Important Notes
Now that the "bad" flag is enabled, you need to exercise caution when installing any additional unofficial extensions. Specifically, ensure the extension does not request permission to access any `chrome://` URLs for unintended purposes. You can verify this by checking the `manifest.json` file of the extension.

I certainly hope the ChromeOS team prioritizes this issue in an upcoming update, as the file browsing experience has been crippled for years, and we shouldn't have to rely on extensions like these to resolve it.
