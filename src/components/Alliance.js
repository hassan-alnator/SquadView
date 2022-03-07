import React from "react";
import { useDrop } from "react-dnd";
import { addTeamToAlliance } from "../actions/alliances";
import { connect } from "react-redux";

import { useDispatch } from "react-redux";
import TeamInAlliance from "./TeamInAlliance";
import { Container, Card } from "react-bootstrap";

function Alliance(props) {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "team",
    item: { alliance: props.alliance },
    drop: (item) => {
      dispatch(
        addTeamToAlliance(
          item.team,
          props.alliance,
          props.teams,
          props.alliances
        )
      );
    },
  }));

  return (
    <div>
      <Card
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
        }}
        ref={drop}
      >
        {props.alliance.Name}
        <Container className="teamsInAlliance">
          {props.alliance.teams.map((team) => {
            return (
              <TeamInAlliance
                key={team.id}
                alliance={props.alliance}
                team={team}
                teams={props.teams}
                alliance={props.alliance}
                employees={props.employees}
              />
            );
          })}
        </Container>
      </Card>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    props: ownProps,
  };
};

export default connect(mapStateToProps)(Alliance);
