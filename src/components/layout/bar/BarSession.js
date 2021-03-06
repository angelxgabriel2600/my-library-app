import { withStyles } from "@material-ui/core/styles";
import { Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { Component } from "react";

const styles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  space: {
    flexGrow: 1,
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

class BarSession extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div>
        <Toolbar>        
              <IconButton color="inherit">
              <i className="material-icons">menu</i>
            </IconButton>
          <Typography variant="h6">HOME PAGE</Typography>

          <div className={classes.space} />
          <div className={classes.sectionDesktop}>
            <Button color="inherit">login</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit">
              <i className="material-icons">more_vert</i>
            </IconButton>
          </div>
        </Toolbar>
      </div>
    );
  }
}

export default withStyles(styles)(BarSession);
