// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageView = (url: string) => {
    // @ts-ignore
    window.gtag('config', trackingId, {
        page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
    // @ts-ignore
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
