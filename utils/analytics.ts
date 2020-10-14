import { GA_TRACKING_ID } from '../constants/analytics';

/* eslint-disable @typescript-eslint/camelcase */
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
/* eslint-enable @typescript-eslint/camelcase */
