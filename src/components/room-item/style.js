import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: 25%;
  padding: 0 8px;
  box-sizing: border-box;
  margin: 8px 0;
  .inner {
    width: 100%;
  }

  .cover {
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: #39576a;
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .bottom-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    color: ${(props) => props.theme.color.textColor};
    .MuiRating-decimal {
      color: #00848a;
      font-size: 12px;
      margin-left: -2px;
    }
    .count {
      margin: 0 2px 0 4px;
    }
  }
`;
