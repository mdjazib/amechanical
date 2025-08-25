import { NextResponse } from 'next/server'

export function middleware(request) {
    if (request.nextUrl.origin.includes("amechanical.com.au")) {
        return NextResponse.json("This site is in under constraction.");
    }
}