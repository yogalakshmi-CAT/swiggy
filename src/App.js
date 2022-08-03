import React from 'react';
// import Home from './components/Home';
import Order from './components/Order';
// import { makeStyles } from "@material-ui/core/styles"

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


// import {
//   Drawer, List, ListItem,
//   ListItemIcon, ListItemText,
//   Container, Typography,
// } from "@material-ui/core";


// import Home from './components/Home'
// import Order from './components/Order';
// import Product from './components/Product';

// const useStyles = makeStyles((theme) => ({
//   drawerPaper: { width: 'inherit' },
//   link: {
//     textDecoration: 'none',
//     color: theme.palette.text.primary
//   }
// }))

function App() {
  // const classes = useStyles();
  return (
    // <Router>
    //   <div style={{ display: 'flex' }}>
    //     <Drawer
    //       style={{ width: '220px' }}
    //       variant="temporary"
    //       anchor="left"
    //       open={true}
    //       classes={{ paper: classes.drawerPaper }}
    //     >
    //       <List>
    //         <Link to="/" className={classes.link}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <Home />
    //             </ListItemIcon>
    //             <ListItemText primary={"Home"} />
    //           </ListItem>
    //         </Link>
    //         <Link to="/order" className={classes.link}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <Order />
    //             </ListItemIcon>
    //             <ListItemText primary={"Order"} />
    //           </ListItem>
    //         </Link>
    //         <Link to="/product" className={classes.link}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <Product />
    //             </ListItemIcon>
    //             <ListItemText primary={"Product"} />
    //           </ListItem>
    //         </Link>
    //       </List>
    //     </Drawer>
    //     <Routes>
    //       <Route exact path="/">
    //         <Container>
    //           <Typography variant="h3" gutterBottom>
    //             Home
    //           </Typography>
    //           <Typography variant="body1" gutterBottom>
    //             hello
    //           </Typography>
    //         </Container>
    //       </Route>
    //       <Route exact path="/order">
    //         <Container>
    //           <Typography variant="h3" gutterBottom>
    //             Order
    //           </Typography>
    //           <Typography variant="body1" gutterBottom>
    //             hello
    //           </Typography>
    //         </Container>
    //       </Route>
    //       <Route exact path="/product">
    //         <Container>
    //           <Typography variant="h3" gutterBottom>
    //             Product
    //           </Typography>
    //           <Typography variant="body1" gutterBottom>
    //             hello
    //           </Typography>
    //         </Container>
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
    <div>
      {/* <Product/> */}
      <Order/>
      {/* <Home/> */}
    </div>
    
  );
}

export default App;