import PropTypes from "prop-types";
import React, { memo } from "react";

import RoomItem from "../room-item";
import { SectionRoomsWrapper } from "./style";
const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <SectionRoomsWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id}></RoomItem>;
      })}
    </SectionRoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
