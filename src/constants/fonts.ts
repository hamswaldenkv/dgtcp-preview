import localFont from "next/font/local";

export const patronWEB = localFont({
  src: [
    {
      path: "../app/fonts/patron-web/PatronWEB-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/patron-web/PatronWEB-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/patron-web/PatronWEB-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/patron-web/PatronWEB-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const PolySansWeb = localFont({
  src: [
    {
      path: "../app/fonts/polysans-web/PolySans-Slim.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/fonts/polysans-web/PolySans-Neutral.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/polysans-web/PolySans-Median.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/fonts/polysans-web/PolySans-Bulky.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
