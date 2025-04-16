import React, { memo } from "react";
import HeaderWrapper from "./style";
import HeaderLeft from "./header-left/index";
import HeaderCenter from "./header-center/index";
import HeaderRight from "./header-right";

const Header = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  );
});

export default Header;
