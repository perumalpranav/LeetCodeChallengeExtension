# LeetCode Challenge Extension

## Overview
LeetCode Challenge Extension is a lightweight Chrome extension designed to promote unbiased problem selection on LeetCode. It achieves this by automatically hiding the difficulty label (Easy, Medium, Hard) on problem pages, while logging the original difficulty in the browser console for reference.

## Features
- **Difficulty Hiding**: Removes the difficulty label from all LeetCode problem pages.
- **Console Logging**: Outputs the problem's original difficulty level to the browser console.
- **Error Handling**: Alerts the user if the difficulty element cannot be found.

## Installation
1. Clone or download the repository:
   ```bash
   git clone https://github.com/yourusername/LeetCodeChallengeExtension.git
   cd LeetCodeChallengeExtension
   ```
2. Open Chrome (or any Chromium-based browser) and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the project directory.

## Usage
1. Navigate to any LeetCode problem page, for example:
   ```text
   https://leetcode.com/problems/two-sum/
   ```
2. The difficulty label will be hidden from the page view.
3. Open the browser console (F12 or Ctrl+Shift+I) to see the logged difficulty message, such as:
   ```text
   This LeetCode problem is: Medium
   ```
4. If the difficulty element is not detected, an alert will notify you:
   ```text
   "Couldn't find the difficulty display!"
   ```

## File Structure
```
LeetCodeChallengeExtension/
├── manifest.json      # Chrome extension manifest (v3)
├── Modifier.js        # Content script responsible for hiding and logging difficulty
└── README.md          # Project documentation
```

## Compatibility
- Google Chrome 88 or later
- Any Chromium-based browser supporting Manifest V3

## Contributing
Contributions, issues, and feature requests are welcome! Feel free to check [issues](https://github.com/perumalpranav/LeetCodeChallengeExtension/issues) and submit pull requests.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author
- **Pranav Perumal**

## Version History
- **1.0.0** (2025-04-19): Initial release.

