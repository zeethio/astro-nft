import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      fontSize: 10,
      color: "blue",
      height: 40,
      width: 40,
      background: "yellow",
      borderWidth: 2,
      borderColor: "black",
    },    
    root: {
      flexGrow: 0,
    },
    centerColumn: {
        borderBottom: "1px solid grey"
    },
    outerColumn: {
        borderRight: "1px solid grey",
    },      
  }),
);

function getPlents(planetsPos, sign) {
    let planets = "";
    for (var key in planetsPos){
        if (planetsPos[key] == sign) {
            planets = planets + " " + key;
        }
    } 
    return planets;
}

export default function VedicChart(props) {
    const classes = useStyles();
    
    return (
        <Grid container spacing={0} style={{ border: "1px solid grey" }}>
          <Grid item sm={3} style={{ border: "1px solid grey" }}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,11)}</Paper>
          </Grid>
          <Grid item  sm={3}  style={{ border: "1px solid grey" }}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,0)}</Paper>
          </Grid>
          <Grid item  sm={3}  style={{ border: "1px solid grey"}}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,1)}</Paper>
          </Grid>
          <Grid item  sm={3}  style={{ border: "1px solid grey" }}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,2)}</Paper>
          </Grid>
          <Grid item sm={3} style={{ borderRight: "1px solid grey"}}>
            <Paper className={classes.paper} >{getPlents(props.planetsPos,10)}</Paper>
          </Grid>
          <Grid item  sm={6}  style={{ background: "yellow", color: "blue", fontSize: 14, padding: 2, borderLeft: "1px solid grey"}}>
            {props.chartName}
          </Grid>
          <Grid item  sm={3} style={{ borderLeft: "1px solid grey"}}>
            <Paper className={classes.paper} >{getPlents(props.planetsPos,3)}</Paper>
          </Grid>
          <Grid item  sm={3} style={{ borderRight: "1px solid grey", borderTop: "1px solid grey"}}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,9)}</Paper>
          </Grid>
          <Grid item  sm={6} style={{ background: "yellow", color: "blue", fontSize: 14, borderLeft: "1px solid grey"}}>
            Chart
          </Grid>
          <Grid item  sm={3} style={{ borderLeft: "1px solid grey", borderTop: "1px solid grey"}}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,4)}</Paper>
          </Grid>
          <Grid item sm={3} style={{ border: "1px solid grey"}}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,8)}</Paper>
          </Grid>
          <Grid item  sm={3}  style={{ border: "1px solid grey"}}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,7)}</Paper>
          </Grid>
          <Grid item  sm={3}  style={{ border: "1px solid grey"}}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,6)}</Paper>
          </Grid>
          <Grid item  sm={3}  style={{ border: "1px solid grey"}}>
            <Paper className={classes.paper}>{getPlents(props.planetsPos,5)}</Paper>
          </Grid>

        </Grid>
    );
  }