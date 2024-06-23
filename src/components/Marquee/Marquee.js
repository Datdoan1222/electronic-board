import React from "react";
import styled from "styled-components";
import { Image } from "antd";
function Marquee({ children, img }) {
  return (
    <MarqueeContainer>
      <div className="marquee-content">
        <Image width={40} src={img} preview={false} />
        <span className="marquee-text">{children}</span>
      </div>
    </MarqueeContainer>
  );
}
export default Marquee;
const MarqueeContainer = styled.div`
  background-color: #19191b;
  height: 49px;
  .marquee-content {
    height: 49px;
    display: inline-block;
    white-space: nowrap;
    position: absolute;
    animation: marquee 15s linear infinite;
    line-height: 35px;
    text-align: justify;
  }
  .marquee-text {
    font-size: 16px;
    padding: 0 10px;
    color: #f1f1f1;
  }

  @keyframes marquee {
    from {
      left: 100%;
    }
    to {
      left: -25%;
    }
  }
`;
