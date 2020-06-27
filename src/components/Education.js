import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        backgroundColor: "#e4e4e4",
        fontSize: "20px",
    },
    heading: {
        fontSize: theme.typography.pxToRem(30),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(30),
        color: theme.palette.text.secondary,
    },
}));

export default function Education() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={`section {classes.root}`}>
            <h3 className="section-title" id="education">EDUCATION</h3>
            <div className="centered line"></div>
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{
                position: "static"
            }}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{
                        position: "static"
                    }}
                >
                    <Typography className={classes.heading} >University of Mumbai</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="h5">
                        Bachelor of Engineering in Information Technology
                        <br />
                        <b>GPA:</b> 3.7
                        <br />
                        <b>Related Courses:</b>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
