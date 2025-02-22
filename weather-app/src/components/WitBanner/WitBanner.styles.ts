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
  color: ${bannerTheme.textColor};
  padding: 2rem; // Padding around the content
  text-align: center;
  box-shadow: 0 4px 6px ${bannerTheme.shadowColor};
  margin: auto auto;
`;

//BANNER TITLE
export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

//BANNER SUBTITLE
export const BannerSubtitle = styled.p`
  font-size: 1.25rem;
  margin: 0;
  line-height: 1.5;
`;

export const RepoLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;