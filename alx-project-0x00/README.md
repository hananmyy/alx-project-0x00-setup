# alx-project-0x00 - Airbnb Clone Scaffold
A foundational project built with Next.js 15+, TypeScript, Tailwind CSS, and modular component design principles.


## Project Structure
alx-project-0x00/
│
├── components/          # Reusable UI components (Card, Pill, Button)
├── interfaces/          # Centralized type definitions
├── pages/               # Page routes (index, landing, about)
├── public/assets/       # Static assets (house.png, star.png)
└── README.md            # Project overview


## Scaffolding
```bash
npx create-next-app@latest alx-project-0x00 --typescript
```

Run the development server:

```bash
npm run dev -- -p 3000
```

## Components
**Card.tsx**
Displays property info, rating, price, and features using Pill components.

**Pill.tsx**
Accepts title prop for dynamic labeling.

**Button.tsx**
Reusable button with customizable title, size, and shape. Supported sizes:
- small, medium, large
Supported shapes:
- rounded-sm, rounded-md, rounded-full

## Type definitions
Located in interfaces/index.ts
**Features**
- Next.js 15+ with Turbopack
- TypeScript for safety and clarity
- Tailwind CSS for rapid UI design
- Modular and reusable component architectur

#Github Repository
https://github.com/hananmyy/alx-project-0x00-setup.git