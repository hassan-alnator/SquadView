import React from "react";
import { useDrop, useDrag } from "react-dnd";
import { addEmployeeToTeam } from "../actions/teams";
import { deleteTeamfromalliance } from "../actions/alliances";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";

import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { useState } from "react";

const TeamInAlliance = (props) => {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "employee",
    drop: (item) => {
      dispatch(
        addEmployeeToTeam(
          item.employee,
          props.team,
          props.employees,
          props.teams
        )
      );
    },
  }));
  const [{ isDragging2 }, drag2] = useDrag(() => ({
    type: "team",
    item: { team: props.team },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "team",
    item: { team: props.team },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div ref={drop}>
      <div
        style={{
          height: "20%",
          marginBottom: "10px",
          width: "100%",
        }}
      >
        <div>
          <Card
            key={props.team.id}
            ref={drag}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "20px",
            }}
          >
            <CardHeader title={props.team.Name} />
            <DeleteTwoToneIcon
              style={{
                color: "blue",
              }}
              onClick={() => {
                dispatch(
                  deleteTeamfromalliance(
                    props.team,
                    props.teams,
                    props.alliance
                  )
                );
              }}
            />
            <div>
              <div>
                <div
                  style={{
                    opacity: "0.4",
                    margin: "1vh",
                  }}
                ></div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {props.team.employees.length === 0
                ? "No Employees Here"
                : props.team.employees.map((e) => {
                    return (
                      <div key={e}>
                        <CardHeader
                          style={{ display: "flex" }}
                          avatar={
                            <Avatar
                              src={
                                props.employees.find((x) => x.id === e)[
                                  "Avatar"
                                ]["url"]
                              }
                            />
                          }
                          title={props.employees.find((x) => x.id === e).Name}
                          subheader={
                            props.employees.find((x) => x.id === e).JobTitle
                          }
                        />
                      </div>
                    );
                  })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamInAlliance;
