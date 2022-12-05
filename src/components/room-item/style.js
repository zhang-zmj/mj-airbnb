import styled from "styled-components";


export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${props => props.itemWidth};
  box-sizing: border-box;
  padding: 8px;

  .inner{
    width: 100%;
  }

  .cover{
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0; //图片空间占据 宽高比的66.66%
    border-radius: 3px;
    overflow: hidden;

    img{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }

  .swiper {
    position: relative;
    cursor: pointer;

    &:hover{
      .control {
        display: flex;
      }
    }

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      display: none;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        background: linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,.6) 100%);

        &.right{
          background:  linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,.6) 100%);
        }
      } 

    }

  }

  .desc{
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }

  .name{
    font-size: 16px;
    font-weight: 700;

    /* 设置文字两行 */
    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price{
    margin: 8px 0;
  }

  .bottom{
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count{
      margin: 0 2px 0 4px;
    }

    .MuiRating-decimal{
       margin-right: -2px;
    }

  }

`