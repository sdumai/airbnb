import React, { memo } from "react";
import HeaderLeftWrapper from "./style";
import IconLogo from "./../../../assets/svg/icon_logo";
const HeaderLeft = memo(() => {
  return (
    <HeaderLeftWrapper>
      <span className="logo">
        <IconLogo></IconLogo>
      </span>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
