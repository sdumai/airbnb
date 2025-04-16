import React, { memo, useEffect, useState } from "react";
import HeaderRightWrapper from "../header-right/style";
import IconGlobal from "@/assets/svg/icon-global";
import IconProfileAvatar from "@/assets/svg/icon-profile-avatar";
import IconProfileMenu from "@/assets/svg/icon-profile-menu";
const HeaderRight = memo(() => {
  // 组件内部的状态
  const [showPanel, setShowPanel] = useState(false);
  // 副作用代码
  useEffect(() => {
    const windowClickHandel = () => {
      setShowPanel(false);
    };
    window.addEventListener("click", windowClickHandel, true); // 捕获阶段
    return () => {
      window.removeEventListener("click", windowClickHandel, true); // 清理函数
    };
  }, []);
  // 事件处理函数
  const profileClickHandel = () => {
    setShowPanel(true);
  };
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandel}>
        <IconProfileMenu />
        <IconProfileAvatar />
        {/* 绝对定位 */}
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">出租房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
