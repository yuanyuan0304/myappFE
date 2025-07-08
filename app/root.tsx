import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import SuperContext from "@Contexts/SuperContext";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    // <I18nextProvider i18n={i18n}>
    <SuperContext>
      <Outlet />
    </SuperContext>
    // </I18nextProvider>
  );
}

export function ErrorBoundary() {
  return (
    <div style={{ padding: "1rem", color: "red" }}>
      <h2>Error</h2>
      <p>Something went wrong while processing your request.</p>
      <Link to="/">Return to users list</Link>
    </div>
  );
}
