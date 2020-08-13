import React, { useState, useEffect } from "react";
import { IProduct } from "../types/Product";
import { StarFilled } from "@ant-design/icons";
import styled from "styled-components";
import { Rate } from "antd";
import { ReduxState } from "../store/reducers";
import { useSelector } from "react-redux";
interface Props {
  item: IProduct;
}

const Drawer = styled.div`
  .block {
    margin: 10px 0;
  }
  .rate {
    text-align: center;
    padding: 20px;
  }
`;

const ProductDrawer: React.FC<Props> = ({ item }: Props) => {
  const [previousRating, setPreviousRating] = useState<number>(0);

  let userProfile: any = useSelector((state: ReduxState) => state.user); // get entire user object saved in Redux state
  const [token, setToken] = useState<string>(userProfile.token);

  useEffect(() => {
    setToken(userProfile.token);
  }, [userProfile]);

  useEffect(() => {
    // get rating if user has rated this product before (using user_id & product_id)
    // retrieveRating().then((rating) => {
    //   setPreviousRating(rating);
    // });
  }, []);

  const updateUserRating = (rating: any) => {
    console.log("entered rating: ", rating);
    setPreviousRating(rating);
  };

  return (
    <Drawer>
      <div style={{ width: "100%" }}>
        <img
          alt="sales-item"
          src={item.image}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>
      <div className={"block"}>
        <div style={{ fontSize: "1.3em" }}>$ {item.price}</div>
      </div>
      <div className={"block"}>
        <div style={{ fontWeight: 350 }}>
          Ratings: {item.rating}/5{" "}
          <StarFilled style={{ fontSize: "1em", color: "#f4eb14" }} />
        </div>
      </div>

      {/* display if logged in */}
      {token == null ? (
        <div className={"rate"}>
          {/* area for user to input rating */}
          <div>~ Rate ~</div>
          <Rate onChange={updateUserRating} value={previousRating} />
        </div>
      ) : null}
    </Drawer>
  );
};

export default ProductDrawer;
