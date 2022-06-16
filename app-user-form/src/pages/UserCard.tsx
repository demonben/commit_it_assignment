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
            <div className="card-name">
              <Typography>User name:</Typography>
            </div>
            <Typography> {user.name} </Typography>
          </div>
          <div className="user-card">
            <div className="card-name">
              <Typography>Phone Number:</Typography>
            </div>
            <Typography> {user.phoneNumber}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default UserCard;
