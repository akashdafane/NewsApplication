// import { Link, Redirect } from 'react-router-dom';
// import { connect, useSelector } from 'react-redux'
// import { useState } from 'react';

// const Dashboard = (props) => {
//     // const { items } = props.items
//     // const data = props
//     // const [loggedIn] = useState(loggedIn)
//     // const login = useSelector(state => state.loginReducer.loginData)
//     // console.log("login", login)
//     const token = localStorage.getItem("token")

//     var loggedIn = true
//     if (token == null) {
//         loggedIn = false
//     }
//     // localStorage.removeItem("token")


//     // console.log("dashboard", data)
//     return (
//         <>
//             {
//                 !loggedIn && <Redirect to="/ login" />
//             }
//             <div>
//                 <h1>Dashboard</h1>
//                 <Link to='/AddTodos'>
//                     <button type="button" className="btn btn-primary">
//                         Todo
//             </button>
//                 </Link>

//                 <Link to='/Forms'>
//                     <button type="button" className="btn btn-primary">
//                         Forms
//             </button>
//                 </Link>

//                 <Link to='/FetchUser'>
//                     <button type="button" className="btn btn-primary">
//                         Fetchuser
//             </button>
//                 </Link>

//                 <Link to='/Formikform'>
//                     <button type="button" className="btn btn-primary">
//                         FormikForm
//             </button>
//                 </Link>

//                 <Link to='/FetchData'>
//                     <button type="button" className="btn btn-primary">
//                         FetchData
//             </button>
//                 </Link>

//                 <Link to='/Lodash'>
//                     <button type="button" className="btn btn-primary">
//                         Lodash
//             </button>
//                 </Link>

//                 <Link to="/Increment">
//                     <button type="button" className="btn btn-primary">
//                         Increment
//             </button>
//                 </Link>

//                 <Link to="/UserFilter">
//                     <button type="button" className="btn btn-primary">
//                         UserFilter
//             </button>
//                 </Link>

//                 <Link to="/Posts">
//                     <button type="button" className="btn btn-primary">
//                         Posts
//             </button>
//                 </Link>

//                 <Link to="/SectionwiseAverage">
//                     <button type="button" className="btn btn-primary">
//                         SectionwiseAverage
//             </button>
//                 </Link>

//                 <Link to="/SectionB">
//                     <button type="button" className="btn btn-primary">
//                         SectionB
//             </button>
//                 </Link>

//                 <Link to="/LocalStorage">
//                     <button type="button" className="btn btn-primary">
//                         LocalStorage
//             </button>
//                 </Link>
//                 <Link to="/Dbounce">
//                     <button type="button" className="btn btn-primary">
//                         Dbounce
//             </button>
//                 </Link>

//                 <Link to="/ParentComponent">
//                     <button type="button" className="btn btn-primary">
//                         ParentComponent
//             </button>
//                 </Link>

//                 <Link to="/Logout">
//                     <button type="button" className="btn btn-danger">
//                         Logout
//             </button>
//                 </Link>

//             </div>
//         </>
//     )
// }

// // const mapStateToProps = state => {
// //     const { FetchApiReducer } = state;
// //     return {
// //         loading: FetchApiReducer.loading,
// //         items: FetchApiReducer.data,
// //         error: FetchApiReducer.error
// //     };
// // };

// export default connect(null)(Dashboard);


import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        News Application
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />

                <Divider />
                <List>
                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/AddTodos' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         Add Todos

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/Forms' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         Forms

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/FetchUser' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         FetchUser

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/Formikform' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         FormikForm

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/FetchData' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         FetchData

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/Lodash' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         Lodash

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/Increment' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         Increment

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/UserFilter' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         UserFilter

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/Posts' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         Posts

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/SectionwiseAverage' >
                            {/* <button type="button" className="btn btn-primary"> */}
                     SectionwiseAverage

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/SectionB' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         SectionB

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/LocalStorage' >
                            {/* <button type="button" className="btn btn-primary"> */}
                     LocalStorage

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/Dbounce' >
                            {/* <button type="button" className="btn btn-primary"> */}
                     Dbounce

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/ParentComponent' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         Memos

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/FieldArr' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         FieldArr

              </Link>
                    </ListItem>

                    <ListItem >
                        <ListItemIcon><InboxIcon /> </ListItemIcon>
                        <Link to='/Logout' >
                            {/* <button type="button" className="btn btn-primary"> */}
                         Logout

              </Link>
                    </ListItem>

                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Typography variant="h3"  >
                    News Portal
        </Typography>

            </main>
        </div>
    );
}
