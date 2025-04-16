import styled from "styled-components";

const HeaderRightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 24px;
  color: ${(props) => props.theme.color.textColor};
  font-weight: 600;

  .btns {
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      top: 50px;
      right: 2px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      border-radius: 8px;
    }
    .top {
      margin-top: 10px;
      border-bottom: 1px solid black;
      margin-bottom: 10px;
    }
    .bottom {
      margin-bottom: 10px;
    }
    .item {
      height: 40px;
      line-height: 40px;
      padding: 0 5px;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;

export default HeaderRightWrapper;
