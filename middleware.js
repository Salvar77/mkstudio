// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  const url = request.nextUrl.pathname;

  // TYLKO favicon.ico - blokuj indeksowanie
  if (url === "/favicon.ico") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    response.headers.set("Cache-Control", "public, max-age=86400");
  }

  // TYLKO pliki czcionek z _next/static/media/ - blokuj indeksowanie
  if (
    url.includes("/_next/static/media/") &&
    url.match(/\.(woff|woff2|ttf|eot|otf)$/)
  ) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: [
    // Tylko te konkretne ścieżki
    "/favicon.ico",
    "/_next/static/media/:path*",
  ],
};
