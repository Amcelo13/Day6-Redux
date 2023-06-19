import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

function Out({ TODO }) {
  const users = useSelector((state) => state.todo.users);

  return (
    <div>
      <center>
        <h3 style={{ paddingTop: "2rem" }}>Current Stats</h3>
        <div
          style={{
            backgroundColor: "beige",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {users.map((user) => (
            <div key={user.id} className="cont" style={{ width: "120px", margin: "4px" }}>
              <Badge count={user.task.length}>
                <Avatar src={user.imgurl} alt={`Avatar of ${user.name}`} />
                <p>{user.name}</p>
              </Badge>
            </div>
          ))}
        </div>
        <h2
          style={{
            backgroundColor: "powderBlue",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            borderRadius: "50%",
          }}
        >
          Tasks Assigned
        </h2>
      </center>

      {TODO.map((e, i) => {
        const assignedUser = users.find((user) => user.name === e.name);
        const avatarSrc = assignedUser ? assignedUser.imgurl : "";
        return (
          <div
            className="task"
            key={e.name}
            style={{
              backgroundColor: "beige",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              padding: "5px",
              lineHeight: "5px",
              paddingLeft: "1rem",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Avatar src={avatarSrc} alt={`Avatar of ${e.name}`} />
            <p>{e.name}</p>
            <p>{e.desc}</p>
            <p>
              {e.deadDay} / {e.deadMonth + 1}/ {e.deadYear}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Out;
