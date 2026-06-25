const express = require('express');
const requestLogger = require('./middleware'); 

const app = express();

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Bosh sahifa');
});

app.listen(3000, () => console.log('Server ishladi '));


import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  
  // Agar token bo'lmasa va /dashboard sahifasiga kirmoqchi bo'lsa -> /login ga otadi
  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: '/dashboard/:path*' };