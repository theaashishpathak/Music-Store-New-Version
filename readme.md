# 🎵 Music Store

A production-grade React music discovery app powered by the **iTunes Search API**. Browse songs by genre, search any artist or track, play 30-second previews, and save your favourites — all with a clean dark UI.

**Live Demo →** `[your-deployment-url-here]`

---

## 📸 Screenshots

> _Add screenshots after deployment — search page, player page, favourites tab_

---

## ✨ Features

- 🔍 **Search** — Search songs or artists via the iTunes API
- 🎛️ **Genre Tabs** — Filter by Latest, Pop, Rock, Hip-Hop, Jazz, Electronic, Bollywood, Classical, R&B
- 🎵 **30-Second Previews** — Play audio directly in the app with a custom progress bar + seek
- ♥ **Favourites** — Heart songs and view them in a dedicated tab (persisted to localStorage)
- 📄 **Pagination** — Load 20 songs at a time, click "Load More" for the next batch
- 💀 **Skeleton Loading** — Shimmer placeholder cards while fetching
- ⚠️ **Error Handling** — Graceful error message if the API call fails
- 📱 **Responsive** — Works on mobile, tablet, and desktop
- 🔗 **React Router** — `/search` and `/player` routes with browser back support

---

## 🛠️ Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| UI Framework | React 18                                    |
| Routing      | React Router v6                             |
| HTTP Client  | Axios                                       |
| Data Source  | iTunes Search API (Apple)                   |
| Styling      | Custom CSS with CSS Variables               |
| Fonts        | Google Fonts — Syne + DM Sans               |
| State        | React hooks (useState, useRef, useCallback) |
| Persistence  | localStorage via custom hook                |
| Build Tool   | Create React App (react-scripts 5)          |

---

## 📁 Project Structure

```
src/
├── index.js                 # Entry point — ReactDOM, BrowserRouter
├── App.js                   # Route definitions
├── index.css                # Design system — CSS variables, grid, animations
│
├── pages/
│   ├── SearchPage.jsx       # Main page — navbar, genre tabs, search, song grid
│   └── PlayerPage.jsx       # Player route — reads router state, renders Player
│
├── components/
│   ├── Search.jsx           # Search input with Enter key support
│   ├── GenreTabs.jsx        # Genre filter tabs (data-driven config array)
│   ├── Songs.jsx            # Responsive song card grid with empty state
│   ├── Song.jsx             # Individual card — artwork, info, play + fav buttons
│   ├── SkeletonCard.jsx     # Shimmer loading placeholder
│   └── Player.jsx           # Audio player — progress bar, seek, play/pause
│
├── hooks/
│   ├── useSongs.js          # Fetch + loading + error + pagination logic
│   └── useFavorites.js      # localStorage favourites persistence
│
└── services/
    └── api-client.js        # iTunes API call (isolated service layer)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v16+`
- npm `v8+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/Music-Store-New-Version.git

# 2. Navigate into the project
cd Music-Store-New-Version

# 3. Install dependencies
npm install

# 4. Install React Router (if not already in package.json)
npm install react-router-dom

# 5. Start the development server
npm start
```

App runs at **http://localhost:3000**

---

## 🔑 Environment Variables

This project uses the **public iTunes Search API** — no API key is required. No `.env` file is needed.

If you switch to the Spotify API in the future, you will need:

```env
REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
REACT_APP_SPOTIFY_CLIENT_SECRET=your_client_secret
```

> In Create React App, all environment variables must be prefixed with `REACT_APP_` to be accessible in the browser.

---

## 🗺️ Roadmap — Future Enhancements

### 🔥 High Impact (Do These Next)

| Feature                   | Why                                                     | How                                                                                    |
| ------------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Debounced live search** | Fire API call 500ms after user stops typing — better UX | Create `useDebounce.js` hook, switch Search to controlled input                        |
| **React Query / SWR**     | Automatic caching, background refetch, deduplication    | Replace `useSongs` fetch logic with `useQuery` from `@tanstack/react-query`            |
| **Auto-play next song**   | Keep users engaged after 30s preview ends               | In Player's `onEnded`, call a `onNext` prop that advances to the next song in the list |
| **Keyboard shortcuts**    | Space = play/pause, arrows = seek                       | `useEffect` with `window.addEventListener('keydown', ...)` in Player                   |

### 🎨 UI / UX Improvements

| Feature                       | Why                                            | How                                                                  |
| ----------------------------- | ---------------------------------------------- | -------------------------------------------------------------------- |
| **Mini player bar**           | Continue playing while browsing — like Spotify | Fixed bottom bar component, lift `currentSong` state to App level    |
| **Sort songs**                | Sort by artist name, relevance, or track name  | `.sort()` on the songs array before passing to Songs component       |
| **Dark / Light mode toggle**  | Accessibility + preference                     | CSS variable swap via a class on `<body>`, persisted to localStorage |
| **Animated page transitions** | Polished feel                                  | `framer-motion` `<AnimatePresence>` wrapping Routes                  |
| **Share button on Player**    | Virality                                       | Web Share API: `navigator.share({ title, url })`                     |

### ⚡ Performance

| Feature                       | Why                                | How                                                               |
| ----------------------------- | ---------------------------------- | ----------------------------------------------------------------- |
| **List virtualisation**       | Handle 500 cards smoothly          | `react-window` `FixedSizeGrid` — only renders visible cards       |
| **Image lazy loading**        | Faster initial paint               | `<img loading="lazy" />` — native browser attribute, zero JS      |
| **AbortController in search** | Prevent stale data race conditions | Cancel previous fetch before starting a new one                   |
| **React.memo on Song card**   | Skip re-rendering unchanged cards  | `export const Song = React.memo(({ song, isFav, onFav }) => ...)` |

### 🔐 Backend & Auth (Advanced)

| Feature                     | Why                                              | How                                                               |
| --------------------------- | ------------------------------------------------ | ----------------------------------------------------------------- |
| **Node.js proxy server**    | Hide API keys, add rate limiting, enable caching | Express server with `/api/search` endpoint, deploy on Railway     |
| **User authentication**     | Personal playlists that sync across devices      | Firebase Auth or Clerk — Google/GitHub sign-in                    |
| **Cloud-synced favourites** | Favourites survive across devices and browsers   | Replace localStorage with Firestore or Supabase — store by userId |
| **Playlist creation**       | Core music app feature                           | New `usePlaylists` hook, playlist management page                 |
| **Spotify API integration** | Full-length songs instead of 30s previews        | OAuth 2.0 flow, swap iTunes previewUrl for Spotify track URI      |

### 🧪 Testing

| Test Type       | Tool                      | What to Test                                         |
| --------------- | ------------------------- | ---------------------------------------------------- |
| Unit tests      | Jest                      | `useSongs`, `useFavorites` hook logic                |
| Component tests | React Testing Library     | Song card renders, fav button toggles                |
| API mocking     | MSW (Mock Service Worker) | Mock iTunes API responses without real network calls |
| E2E tests       | Playwright or Cypress     | Search flow, navigate to player, play audio          |

---

## 🐛 Known Issues

| Issue                          | Cause                                                    | Fix                                                        |
| ------------------------------ | -------------------------------------------------------- | ---------------------------------------------------------- |
| Audio play error on first load | Browser autoplay policy + React StrictMode double-invoke | Fixed via `await play()` + `onCanPlay` ready guard         |
| Songs repeat between searches  | iTunes API returns overlapping results                   | Deduplicate by `trackId` after fetch                       |
| Empty card (no artwork)        | Some iTunes results have no artwork URL                  | Add fallback: `song.artworkUrl100 \|\| '/placeholder.png'` |

---

## 💡 What I Learned Building This

- **Custom hooks** separate data concerns from UI — `useSongs` and `useFavorites` are independently reusable and testable
- **React Router state** is the right way to pass complex objects between routes without URL encoding
- **Browser media APIs** (HTMLAudioElement) are imperative — `useRef` is the correct React pattern for integrating with them
- **`"type": "module"`** in package.json enforces strict ESM — all imports must include the file extension
- **CSS custom properties** are the foundation of any scalable design system — changing one variable propagates everywhere
- **Skeleton screens** are measurably better UX than spinners — they preserve layout and reduce perceived load time

---

## 📜 License

MIT — free to use, modify, and distribute.

---

## 🙏 Acknowledgements

- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/) — Apple's free public music search endpoint
- [React](https://react.dev/) — UI framework
- [React Router](https://reactrouter.com/) — Client-side routing
- [Axios](https://axios-http.com/) — HTTP client
- [Google Fonts](https://fonts.google.com/) — Syne & DM Sans typefaces

---

<div align="center">
  Made with ♥ by <strong>Aashish Pathak</strong>
</div>
