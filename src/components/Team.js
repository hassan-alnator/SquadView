import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useDrop, useDrag } from "react-dnd";
import { addEmployeeToTeam } from "../actions/teams";
import { deleteTeam } from "../actions/teams";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import Avatar from "@mui/material/Avatar";
import { connect } from "react-redux";

function Team(props) {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "employee",
    drop: (item) => {
      dispatch(addEmployeeToTeam(item.employee, props.team));
    },
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
      <div ref={drag} className="team">
        <div>
          <Card
            style={{
              marginBottom: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: "10px",
              marginRight: "10px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <CardHeader title={props.team.Name} />
              <Button
                style={{
                  display: "flex",
                  opacity: 0.3,
                  color: "red",
                }}
                onClick={() => {
                  dispatch(deleteTeam(props.team, props.teams));
                }}
              >
                <DeleteTwoToneIcon
                  style={{
                    color: "red",
                  }}
                />
              </Button>
              {props.team.employees.length === 0
                ? ""
                : props.team.employees.map((e) => {
                    return (
                      <div key={e.id}>
                        <CardHeader
                          avatar={<Avatar src={e["Avatar"]["url"]} />}
                          title={e.Name}
                          subheader={e.JobTitle}
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
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    props: ownProps,
  };
};

export default connect(mapStateToProps)(Team);
