import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWrapper } from "./style";
import HomeBanner from "./home-banner";
import { fetchGoodPriceData } from "@/store/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  // 派发异步事件：发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceData());
  }, [dispatch]);
  // 从 redux 中获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
