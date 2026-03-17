# Hisn Al-Muslim

A clean, responsive Islamic web application built with React.

## Overview

Hisn Al-Muslim helps users access daily Islamic content in one place:

- Daily Azkar with category-based browsing
- Quran Surah browser with verse popup
- Prayer times with next-prayer countdown
- Islamic podcast playlists
- Light/Dark theme toggle

## Live Demo

- https://nourhansamy7654.github.io/websit-eslamic

## Key Features

- Responsive UI (desktop + mobile)
- Arabic-friendly interface (RTL sections)
- Smooth section navigation from navbar
- Theme persistence with `localStorage`
- Real-time prayer countdown

## End User Guide

How a regular user can use the website:

1. Open the homepage.
2. Use the navbar to jump to any section.
3. In **Azkar**, choose a category and track recitations with the counter.
4. In **Quran**, click any Surah card to read its verses in a popup.
5. In **Prayer Times**, check current time and the countdown to the next prayer.
6. In **Podcast**, open any playlist and start watching.
7. Use the theme button in the navbar to switch between Light and Dark mode.

## Tech Stack

- React 18
- Bootstrap 5
- Font Awesome
- React Router DOM
- Custom CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/NourhanSamy7654/websit-eslamic.git
cd websit-eslamic
npm install
```

### Run in Development

```bash
npm start
```

Open: `http://localhost:3000`

### PowerShell (Windows) Note

If `npm start` is blocked by execution policy:

```powershell
npm.cmd start
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## Production Build

```bash
npm run build
```

Output is generated in `build/`.

## Data Sources

- Quran Surah/verse data: `penggguna/QuranJSON`
- Prayer times API: `api.aladhan.com`

## Project Structure

```text
src/
  App.js
  Componant/
    Navbar.js
    AzkarList.js
    SurahList.js
    SurahPopup.js
    PrayTime.js
    BodCast.js
    Footer.js
    Com.css
    PrayTimeS.css
    bodStyle.css
```

## Notes

- Current prayer location is set to Cairo, Egypt.
- If styles/content look outdated, hard refresh (`Ctrl + F5`).

## Author

- **Nourhan Samy**
- GitHub: https://github.com/NourhanSamy7654
- LinkedIn: https://www.linkedin.com/in/nourhan-samy-4a6794237/
