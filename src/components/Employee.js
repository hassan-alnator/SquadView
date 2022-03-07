import React from "react";
import { useDrag } from "react-dnd";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { connect } from "react-redux";

function Employee({ employee: employee }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "employee",
    item: { employee: employee },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    isDragging: (monitor) => {},
  }));
  const style = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "20px",
  };
  return (
    <Card className="employee" ref={drag} style={style}>
      <CardHeader
        avatar={<Avatar src={employee["Avatar"]["url"]} />}
        title={employee.Name}
        subheader={employee.JobTitle}
      />
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    props: ownProps,
  };
};

export default connect(mapStateToProps)(Employee);
