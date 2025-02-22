import styled from "styled-components";

//BANNER THEME COLORS
const bannerTheme = {
  gradientStart: "#0072ff",
  gradientEnd: "#00c6ff",
  textColor: "white",
  shadowColor: "rgba(0, 0, 0, 0.1)",
};

//BANNER CONTAINER
export const BannerContainer = styled.div`
  background: linear-gradient(
    135deg,
    ${bannerTheme.gradientStart},
    ${bannerTheme.gradientEnd}
  ); // Gradient background
  color: ${bannerTheme.textColor}; // White text color
  padding: 2rem; // Padding around the content
  text-align: center; // Center-align text
  box-shadow: 0 4px 6px ${bannerTheme.shadowColor}; // Subtle shadow for depth
  margin: auto auto; // Center the banner horizontally
`;

//BANNER TITLE
export const BannerTitle = styled.h1`
  font-size: 2.5rem; // Large font size for the title
  margin-bottom: 1rem; // Space below the title
  font-weight: bold; // Bold font weight for emphasis
`;

//BANNER SUBTITLE
export const BannerSubtitle = styled.p`
  font-size: 1.25rem; // Medium font size for the subtitle
  margin: 0; // Remove default margin
  line-height: 1.5; // Adjust line height for readability
`;
