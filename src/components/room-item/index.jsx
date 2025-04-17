import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rating } from "@mui/material";

import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const itemData = props.itemData;
  return (
    <RoomItemWrapper>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join("·")}</div>
        <div className="name">{itemData.name}</div>
        <div className="bottom-wrapper">
          <div className="price">¥{itemData.price}/晚</div>
          <div className="bottom">
            <Rating name="half-rating-read" defaultValue={itemData.star_rating ?? 5} precision={0.1} readOnly />
            <span className="count">{itemData.reviews_count}</span>
            {itemData?.bottom_info?.content && <span className="">·{itemData.bottom_info?.content}</span>}
          </div>
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
