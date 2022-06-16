import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const UserCard = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div>
      <Card>
        <CardContent>
          <div className="user-card">
            <div >
              <span className="card-name">User name:</span>
            </div>
            <span className="card-value"> {user.name} </span>
          </div>
          <div className="user-card">
            <div >
              <span className="card-name">Phone Number:</span>
            </div>
            <span className="card-value"> {user.phoneNumber}</span >
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default UserCard;
