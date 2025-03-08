
/**
 * Custom hook for tracking analytics events
 */
const useAnalytics = () => {
  /**
   * Track a page view
   * @param path - The path to track
   * @param title - The page title
   */
  const trackPageView = (path: string, title?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-MEASUREMENT_ID', {
        page_path: path,
        page_title: title
      });
    }
  };

  /**
   * Track an event
   * @param action - The event action
   * @param category - The event category
   * @param label - The event label
   * @param value - The event value
   */
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  };

  return {
    trackPageView,
    trackEvent
  };
};

export default useAnalytics;
