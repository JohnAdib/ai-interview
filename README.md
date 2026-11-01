# AI Interview

A small interview exercise about a shared reading list. The workspace contains a Node.js API, a React web client and an Expo mobile app. The data is held in memory and resets when the API restarts.

Read the article: [The AI Coding Interview Should Test How Engineers Think](https://mradib.com/ai-coding-interview).

## Before the session

Use Node.js 22 or newer and pnpm 10. Install dependencies with `pnpm install`, then run `pnpm dev` from the root. Check that the API, web client and mobile development server start and that the web client displays the list. If something does not work, investigate the configuration and make the smallest sensible correction. You may use documentation, search and any AI tools you normally use.

- API: http://localhost:4100/entries
- Web: http://localhost:5173
- Mobile: Expo prints a QR code and development-server URL. Use an Android/iOS simulator or Expo Go. On a physical device, set `EXPO_PUBLIC_API_URL` to an address reachable from that device, such as your computer's LAN address with port 4100. Localhost on a phone points to the phone itself.

You can explore the code and open issues in advance. Fork this repository to your own GitHub account so you can push changes and open a pull request back to this repository. During the session, choose the work you think is most valuable, explain your reasoning, and create a pull request. Be prepared to review and discuss your changes. You do not need to complete every issue.

## Commands

- `pnpm dev`: start all three development servers
- `pnpm test`: run the API tests
- `pnpm build`: build the web client

The exercise is deliberately small, and the issue list contains a mix of sizes. The setup and implementation are starting points for discussion rather than production guidance.
