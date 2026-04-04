# Oosterom Studio — Website

> **Digitaal sterk. Van buiten én van binnen.**  
> De officiële website van Oosterom Studio — een webdesign en cybersecurity studio voor MKB en startups in Nederland.

🌐 **Live:** [oosteromstudio.nl](https://www.oosteromstudio.nl)

---

## Over dit project

Oosterom Studio is een solo webstudio opgericht door Vincent Oosterom. Deze website is volledig zelfgebouwd en dient als portfolio, marketing tool en klantportaal. De site combineert scherp webdesign met een duidelijke cybersecurity positionering — een unieke combinatie in de Nederlandse markt.

---

## Tech Stack

| Categorie | Technologie |
|-----------|-------------|
| Framework | React 18 |
| Routing | React Router v6 |
| Animaties | Framer Motion |
| Styling | CSS Modules / Custom CSS |
| SEO | React Helmet Async |
| Forms | Formspree |
| AI Chatbot | Anthropic API (Claude) via Supabase Edge Functions |
| Database | Supabase |
| Deployment | Vercel |
| Package manager | npm |

---

## Features

- ⚡ **Performant** — geoptimaliseerd voor Core Web Vitals
- 🔐 **Security headers** — correct geconfigureerd via Vercel
- 🤖 **AI Chatbot** — Claude-powered assistent via Supabase Edge Function
- 📱 **Volledig responsive** — mobile-first design
- 🎨 **Animaties** — Framer Motion scroll- en page-animaties
- 🔍 **SEO** — volledige meta tags, Open Graph, Twitter Cards en Schema.org structured data
- 📄 **Meerdere dienstpagina's** — elk met eigen Helmet, FAQ en CTA

---

## Pagina's

| Route | Pagina |
|-------|--------|
| `/` | Homepage |
| `/diensten` | Dienstenoverzicht |
| `/diensten/webdesign` | Webdesign & UX |
| `/diensten/webdevelopment` | Webdevelopment & Applicaties |
| `/diensten/saas` | SaaS & Digitale Systemen |
| `/diensten/branding` | Branding & Strategie |
| `/diensten/cybersecurity` | Cybersecurity |
| `/portfolio` | Portfolio & Cases |
| `/over-ons` | Over Oosterom Studio |
| `/contact` | Contact |
| `/offerte-aanvragen` | Offerte aanvragen (noindex) |

---

## Project structuur

```
src/
├── assets/               # Afbeeldingen, fonts, PDF's
├── components/
│   ├── navigate/         # Navbar met glassmorphism + scroll effect
│   ├── footer/           # Footer met kolommen + social links
│   ├── chatbot/          # AI chatbot component
│   └── shared/           # Gedeelde componenten
├── pages/
│   ├── home/             # Homepage
│   ├── diensten/         # Dienstpagina's (template-based)
│   ├── portfolio/        # Portfolio
│   ├── over-ons/         # Over ons
│   ├── contact/          # Contactformulier
│   └── offerte/          # Offerte aanvragen
├── lib/
│   └── supabase.js       # Supabase client
└── App.jsx               # Routing
```

---

## Lokaal draaien

```bash
# 1. Clone de repo
git clone https://github.com/jouw-username/oosterom-studio.git
cd oosterom-studio

# 2. Installeer dependencies
npm install

# 3. Maak een .env.local aan
cp .env.local.example .env.local
# Vul je Supabase keys in

# 4. Start de dev server
npm run dev
```

---

## Omgevingsvariabelen

Maak een `.env.local` aan in de root van het project:

```env
VITE_SUPABASE_URL=https://jouw-project.supabase.co
VITE_SUPABASE_ANON_KEY=jouw-anon-key
```

> ⚠️ Commit nooit je `.env.local` naar GitHub. Dit bestand staat in `.gitignore`.

---

## AI Chatbot

De chatbot gebruikt de Anthropic API via een Supabase Edge Function. De API key staat veilig op de server en is nooit zichtbaar in de frontend.

```
Bezoeker → React Chatbot → Supabase Edge Function → Anthropic API (Claude)
```

**Deployen van de Edge Function:**
```bash
supabase functions deploy chat
supabase secrets set ANTHROPIC_API_KEY=jouw-anthropic-key
```

---

## Deployment

De site wordt automatisch gedeployed via Vercel bij elke push naar de `main` branch.

```bash
# Productie build testen
npm run build
npm run preview
```

Zet de omgevingsvariabelen in Vercel via:
**Settings → Environment Variables**

---

## SEO

Elke pagina heeft een unieke `<Helmet>` met:
- Title tag
- Meta description
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Card tags
- Schema.org structured data (Organization + Person op over-ons)
- `noindex` op conversiepagina's (`/offerte-aanvragen`)

---

## Licentie

Dit project is privé en eigendom van Oosterom Studio / Oosterom Creative.  
Niet bedoeld voor hergebruik zonder toestemming.

---

## Contact

**Vincent Oosterom**  
📧 vincent@oosteromstudio.nl  
🌐 oosteromstudio.nl  
💼 [LinkedIn](https://www.linkedin.com/in/vincent-oosterom-05017176/)  
📸 [Instagram](https://www.instagram.com/oosteromstudio)

---

*Gebouwd met ❤️ door Vincent Oosterom — Oosterom Studio © 2025*
