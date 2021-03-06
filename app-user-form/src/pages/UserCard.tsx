import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
const UserCard = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Card>
        <CardContent>
          <div className="user-card">
            <span className="card-name">User name:</span>
            <span className="card-value"> {user.name} </span>
          </div>
          <div className="user-card">
            <span className="card-name">Phone Number:</span>
            <span className="card-value"> {user.phoneNumber}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default UserCard;
