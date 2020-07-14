const BREACKPOINTS = {
  mobile: '540px',
  tablet: '720px',
  laptop: '960px',
  desktop: '1140px',
};

export const mq = {
  mobile: `@media screen and (min-width: ${BREACKPOINTS.mobile})`,
  tablet: `@media screen and (min-width: ${BREACKPOINTS.tablet})`,
  laptop: `@media screen and (min-width: ${BREACKPOINTS.laptop})`,
  desktop: `@media screen and (min-width: ${BREACKPOINTS.desktop})`,
};
