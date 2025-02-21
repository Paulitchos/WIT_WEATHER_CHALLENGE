import React from 'react';
import { BannerContainer, BannerTitle, BannerSubtitle } from './WitBanner.styles';

const WitBanner = () => {
  return (
    <BannerContainer>
      <BannerTitle>WIT Forecasts</BannerTitle>
      <BannerSubtitle>
        Accurate weather insights, real-time updates, and historical data—delivered swiftly and stylishly.
      </BannerSubtitle>
    </BannerContainer>
  );
};

export default WitBanner;