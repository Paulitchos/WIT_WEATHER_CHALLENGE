import React from "react";

//ICONS
import { FaGithub } from "react-icons/fa";

//STYLES
import {
  BannerContainer,
  BannerTitle,
  BannerSubtitle,
  RepoLink,
} from "./WitBanner.styles";

const WitBanner = () => {
  return (
    <BannerContainer>
      <BannerTitle>WIT Forecasts</BannerTitle>
      <BannerSubtitle>
        Accurate weather insights, real-time updates, and historical
        data—delivered swiftly and stylishly.
      </BannerSubtitle>
      <RepoLink
        href="https://github.com/Paulitchos/WIT_WEATHER_CHALLENGE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub /> {/* GitHub icon */}
        <span>View on GitHub</span> {/* Text */}
      </RepoLink>
    </BannerContainer>
  );
};

export default WitBanner;
