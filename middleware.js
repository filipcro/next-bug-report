export function middleware(request) {
  console.log("Middleware called");
}

export const config = {
    matcher: '/:path*',
}

