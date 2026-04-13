const METRICS_EVENTS_URL = 'https://api.eclipselabs.com.uy/metrics/event'
const METRICS_VIEWS_URL = 'https://api.eclipselabs.com.uy/metrics/views'
const METRICS_API_KEY = import.meta.env.VITE_METRICS_API_KEY || ''

export function useMetrics() {
  const trackMetrics = async (eventType, metadata = {}) => {
    if (!METRICS_API_KEY) {
      return
    }

    try {
      await fetch(METRICS_EVENTS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': METRICS_API_KEY
        },
        body: JSON.stringify({
          event_type: eventType,
          metadata
        })
      })
    } catch (error) {
      console.error('Metrics tracking error:', error)
    }
  }

  const trackView = (path) => {
    if (!METRICS_API_KEY) {
      return
    }

    fetch(METRICS_VIEWS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': METRICS_API_KEY
      },
      body: JSON.stringify({
        path: path || window.location.pathname,
        referrer: document.referrer,
        user_agent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        document_title: document.title
      })
    }).catch(() => {})
  }

  const trackClick = (element, data = {}) => {
    trackMetrics(`${element}_click`, data)
  }

  return {
    trackMetrics,
    trackView,
    trackClick
  }
}
