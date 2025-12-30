"use client"

import { useEffect } from "react"
import { analytics } from "@/lib/firebase"
import { logEvent } from "firebase/analytics"

export function FirebaseAnalytics() {
  useEffect(() => {
    // Track page view
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_path: window.location.pathname,
        page_title: document.title,
      })
    }
  }, [])

  return null
}
