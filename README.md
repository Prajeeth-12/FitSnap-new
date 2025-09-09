# FitSnap AI – MVP Build Instructions for Copilot

You are building a modern fashion-tech MVP for FitSnap.

Follow these exact rules when generating code:

## Tech Stack
- Frontend: Next.js + Tailwind CSS + React Three Fiber (for 3D elements)
- Backend: FastAPI (Python) for AI body measurement + fit recommendation APIs
- Database: Firebase (Firestore) for user & clothing data
- Hosting: Vercel (frontend), Render (backend)

## Core Features
1. **Landing Page**
   - Hero section with slogan: "Smart Fashion, Perfect Fit, Zero Guesswork."
   - Navbar: Home, Try Demo, Retailer Login, About
   - 3D animated element (rotating mannequin or clothing) using Three.js
   - CTA button: "Try Your Fit"

2. **User Flow (Frontend)**
   - Page where user uploads front + side photo OR inputs measurements
   - Call backend API: `/predict-fit`
   - Show recommended size (S, M, L, XL) for demo clothing dataset
   - Display 3D avatar with outfit preview
   - Button to "Save & Share" (export result as image/PDF)

3. **Retailer Dashboard**
   - Login with Firebase Auth
   - Upload clothing measurements (waist, chest, inseam, etc.)
   - Store in Firestore
   - View list of users & recommended fits

4. **Backend APIs (FastAPI)**
   - `/predict-fit`: Input = photo or measurements → Output = best size
   - `/clothing`: CRUD for clothing dataset
   - AI placeholder: use dummy logic (if chest < 95cm → size M, else L)
   - Prepare endpoints for future ML model integration

5. **3D Integration**
   - Use React Three Fiber + Drei to render a 3D mannequin
   - Allow basic rotation/zoom
   - Load `.glb` clothing model and fit it on avatar
   - Background = gradient (teal → dark blue)

## Styling Guidelines
- Use TailwindCSS for all UI
- Colors: Dark Blue (#1E3A8A), Teal (#14B8A6), White (#FFFFFF)
- Fonts: Poppins or Inter
- Style = clean, futuristic, minimal

## Deliverables
- Next.js frontend (pages: landing, try-demo, retailer-dashboard)
- FastAPI backend with working endpoints
- Firebase integration for auth + storage
- Demo-ready with fake clothing data + basic size recommendations
- Deploy frontend on Vercel, backend on Render

## Extra Instructions
- Write modular, clean code with comments
- Use modern UI components (cards, modals, buttons with hover effects)
- Add sample data so the demo works without real ML
- Focus on SPEED: Make it pitch-demo ready, not production perfect

---

## Phase Plan Summary

- Phase 1 – Setup & Theme: Next.js + Tailwind, FastAPI, Firebase; theme colors (#1E3A8A, #14B8A6, #FFFFFF), fonts (Inter/Poppins), futuristic minimal.
- Phase 2 – Core MVP Features: Landing page, user flow (upload/input → recommend), 3D avatar preview, retailer dashboard.
- Phase 3 – 3D & Visual Experience: React Three Fiber mannequin, outfit overlay, orbit controls; optional WebAR later.
- Phase 4 – Deployment: Vercel (frontend), Render (backend), Firestore DB; record demo video.
