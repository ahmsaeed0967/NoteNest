# CS4032 Web Programming Assignment 3: Next.js Frontend

## NoteNest — a Notes App

| Item | Details |
| --- | --- |
| Group number | 27 |
| Topic number | 43 |
| Topic title | Notes App (Productivity) |

### Group members

| Name | Roll number |
| --- | --- |
| Ahmed Saeed (Group Leader) | 24i-2005 |
| Roshni Fawad | 23i-2107 |
| Jan Muhammad | 24I-2051 |

## Description

NoteNest is a simple, frontend-only notes app where users can create, edit, delete, search, sort and tag notes, open each note on its own detail page and mark notes as favourites. There is no backend or database: 20 sample notes (250–300 words each, some with a picture) are stored as mock data in `data/notes.ts`, and every action (creating, editing, deleting, favouriting) updates React state and shows a confirmation message.

## How to run

```bash
npm install
npm run dev
```

Then open <http://localhost:3000> in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Routes

| Route | What it shows | Component type |
| --- | --- | --- |
| `/` | Home page: introduction, image, quick stats and the 3 most recent notes | Server |
| `/notes` | All notes, with live search (title or content), colour-coded tag filter, sort (newest, oldest, title A–Z), favourites (★) and a "favourites only" filter | Server page + `NotesExplorer` Client Component |
| `/notes/[id]` | Dynamic route: shows one note by its ID (with its picture, if it has one) and lets the user edit it. Unknown IDs (e.g. `/notes/999`) call `notFound()` | Server page + `NoteDetails` Client Component |
| `/create` | Form to create a new note, with validation errors and a success message; new notes are listed beside the form and can be deleted | Server page + `CreateNotePanel` Client Component |
| `/about` | About the app, its features, the technologies used and the team | Server |
| any unknown URL | Custom 404 page (`app/not-found.tsx`) | Server |

`app/notes/loading.tsx` is shown while pages inside `/notes` load. Every page exports `metadata` (or `generateMetadata` for the dynamic route) with a title and description.

## Folder structure

```
app/
  layout.tsx          root layout with Navbar and Footer
  page.tsx            home page
  not-found.tsx       404 page
  globals.css
  notes/
    page.tsx          all notes
    loading.tsx       loading UI
    [id]/page.tsx     note detail (dynamic route)
  create/page.tsx     create note form
  about/page.tsx      about page
components/           12 reusable components, each with a props interface
data/
  notes.ts            20 mock notes, the list of tags and a colour for each tag
  team.ts             group members
types/
  note.ts             Note and TeamMember interfaces
public/images/        pictures shown with next/image (home illustration + 4 note pictures)
```

## Components

| Component | Type | Purpose |
| --- | --- | --- |
| `Navbar` | Server | Shared top navigation using `next/link` |
| `Footer` | Server | Shared footer listing the team |
| `Button` | Server | Reusable button; renders a `next/link` when `href` is given |
| `NoteCard` | Server | Shows one note with its tag colour; reused on Home (link only), All Notes (link + star) and Create (delete button) with different props |
| `SearchBar` | used inside a Client Component | Controlled search input |
| `TagFilter` | used inside a Client Component | Tag buttons (All, Work, Study, ...) |
| `EmptyState` | Server | Message shown when a list is empty; also used on the 404 page |
| `ConfirmationMessage` | Server | Green success message after an action |
| `NoteForm` | Client | Controlled form with validation, used for both creating and editing |
| `NotesExplorer` | Client | Holds search, tag, sort and favourites state, then filters and sorts the notes |
| `CreateNotePanel` | Client | Holds the notes created in this session, adds and deletes them, shows the success message |
| `NoteDetails` | Client | Shows a note (and its picture with `next/image`) and switches to edit mode |

**Why these are Client Components:** they use `useState` and event handlers (`onChange`, `onClick`, `onSubmit`), which only run in the browser. All pages stay Server Components because they only read mock data and pass it down as props.

## Contribution table

| Member | Pages | Components / features |
| --- | --- | --- |
| Ahmed Saeed (24i-2005) | `app/layout.tsx`, `/` (Home), `/about`, `not-found.tsx` | `Navbar`, `Footer`, `Button`, `EmptyState`, NoteNest branding, teal colour theme and responsive layout |
| Roshni Fawad (23i-2107) | `/notes`, `/notes/[id]`, `notes/loading.tsx` | `NoteCard` with tag colours, `SearchBar`, `TagFilter`, sort dropdown in `NotesExplorer`, `NoteDetails`, the 20 mock notes |
| Jan Muhammad (24I-2051) | `/create` | `NoteForm` (validation), `CreateNotePanel` with delete, `ConfirmationMessage`, favourites feature, editing, note pictures |

## Links

- Repository: https://github.com/ahmsaeed0967/NoteNest
- Video demo: _add Google Drive link here_
- Vercel deployment (bonus): http://notenest0.vercel.app/

## Technologies used

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## AI tools used

- Claude : used to help plan the project structure, write and explain the code, and draft this README. Every member reviewed and understands the code they present.
