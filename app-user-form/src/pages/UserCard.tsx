import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserCard = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="user-card">
            <Typography>User name:</Typography>
            <Typography> Dima </Typography>
          </div>
          <div className="user-card">
            <Typography>Phone Number:</Typography>
            <Typography> 1234567890</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default UserCard;
