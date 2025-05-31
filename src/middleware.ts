import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If trying to access admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!session) {
      // Redirect to login if no session
      const redirectUrl = req.nextUrl.clone()
      redirectUrl.pathname = '/login'
      redirectUrl.searchParams.set('redirectTo', req.nextUrl.pathname)
      return NextResponse.redirect(redirectUrl)
    }

    // Get user data and check admin role
    const { data: { user } } = await supabase.auth.getUser()
    const isAdmin = user?.app_metadata?.role === 'admin'

    if (!isAdmin) {
      console.log('User not admin:', user)
      // Redirect non-admin users to home page
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*']
} 