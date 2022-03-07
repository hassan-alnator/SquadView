import React, { useState } from "react";
import Employee from "./Employee";
import Team from "./Team";
import Alliance from "./Alliance";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { useDrop } from "react-dnd";

import { Button } from "@mui/material";
import { AddTeam, updateTeam } from "../actions/teams";
import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import Slider from "react-slick";
import { Container, Col } from "react-bootstrap";
import "../styles/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DragDrop() {
  const dispatch = useDispatch();

  const settings = {
    afterChange: () => {},

    dots: true,
    infinite: false,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [searchField, setsearchField] = useState("");
  const [NewTeamName, setNewTeamName] = useState("");
  const teams = useSelector((state) => {
    return state.teams.filter(
      (t) => t.alliance === null || t.alliance === undefined
    );
  });

  const employees = useSelector((state) => state.employees);
  const alliances = useSelector((state) => state.alliances);
  const filteredEmployees = employees.filter((emp) =>
    emp["Name"].toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="stretch"
    >
      <Grid item xs>
        <TextField
          fullWidth
          id="standard-basic"
          label="Search Employee"
          variant="standard"
          onChange={(e) => setsearchField(e.target.value)}
        />
        <Container className="container">
          <Slider className="slider" {...settings}>
            {filteredEmployees.map(function (employee) {
              return (
                <React.Fragment key={employee.id}>
                  <Col style={{ display: "flex", flexDirection: "row" }}>
                    <Employee employee={employee} />
                  </Col>
                </React.Fragment>
              );
            })}
          </Slider>
        </Container>
      </Grid>
      <div>
        <Grid item xs>
          <TextField
            fullWidth
            id="standard-basic"
            label="Team Name"
            variant="standard"
            value={NewTeamName}
            onChange={(e) => {
              setNewTeamName(e.target.value);
            }}
          />
          <Button
            variant={"contained"}
            fullWidth
            style={{
              height: "30px",
              opacity: "0.4",
              margin: "1vh",
            }}
            disabled={NewTeamName.length === 0}
            onClick={() => {
              dispatch(AddTeam(teams, NewTeamName));
              setNewTeamName("");
            }}
          >
            <Typography
              variant={"button"}
              style={{ fontSize: 19, paddingRight: 5 }}
            >
              Add Team
            </Typography>
          </Button>
        </Grid>
        <Container style={{ border: "9px" }} className="container">
          <div>
            <Slider className="slider" {...settings}>
              {teams.map((team) => {
                return (
                  <React.Fragment key={team.id}>
                    <Col
                      key={team.id}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Team team={team} employees={employees} teams={teams} />
                    </Col>
                  </React.Fragment>
                );
              })}
            </Slider>
          </div>
        </Container>
      </div>

      <Container className="container">
        <Slider className="slider" {...settings}>
          {alliances.map((alliance) => {
            return (
              <Col
                key={alliance.id}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <Alliance
                  alliance={alliance}
                  teams={teams}
                  alliances={alliances}
                  employees={employees}
                />
              </Col>
            );
          })}
        </Slider>
      </Container>
    </Grid>
  );
}

export default DragDrop;
