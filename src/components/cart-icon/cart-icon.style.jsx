import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg"

export const ShoppingIcon = styled(ShoppingSvg)`
width: 24px;
height: 24px;
`;

export const CartIconContainer = styled.div`
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

export const ItemCount = styled.span`
position: absolute;
font-size: 10px;
font-weight: bold;
bottom: 12px;
`;

// //cart-icon.styles.scss 
// .cart - icon - container {
    // width: 45px;
    // height: 45px;
    // position: relative;
    // display: flex;
    // align - items: center;
    // justify - content: center;
    // cursor: pointer;

    // .shopping - icon {
        // width: 24px;
        // height: 24px;
    // }

    // .item - count {
        // position: absolute;
        // font - size: 10px;
        // font - weight: bold;
        // bottom: 12px;
    // }
// }

// cart - dropdown.styles.scss.cart - dropdown - container {
    // position: absolute;
    // width: 240px;
    // height: 340px;
    // display: flex;
    // flex - direction: column;
    // padding: 20px;
    // border: 1px solid black;
    // background - color: white;
    // top: 90px;
    // right: 40px;
    // z - index: 5;

    // .empty - message {
        // font - size: 18px;
        // margin: 50px auto;
    // }

    // .cart - items {
        // height: 240px;
        // display: flex;
        // flex - direction: column;
        // overflow: scroll;
    // }

    // button {
        // margin - top: auto;
    // }
// }