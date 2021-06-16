import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar,  Toolbar, Collapse, Button } from '@material-ui/core';
import { Modal } from './Modal';

//import {Link} from 'react-router-dom';

//import { toast } from 'react-toastify';

//toast.configure()


const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
    
    background: 'linear-gradient(0deg, transparent, #111)',
    
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    fontSize: '2rem',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  contain: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4rem',
  },
  button: {
    borderRadius: '12px',
  },
  span:{
    marginLeft: '10px'
  },

  
}));
export default function Header() {


  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Batch 26.
          </h1>
          
          <Button className={classes.button} variant="contained" color="primary" 
                  onClick={openModal}>Login
              </Button> 
              <Modal showModal={showModal} setShowModal={setShowModal} />
        
          
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.contain}>
          <h1 className={classes.title}>
            Naveen N Bhat<br/>
            P Anurag<br/>
            Anuradha <br/>
            Divyanshu Charak <br />
            <Button className={classes.button} variant="contained" color="primary" 
                  onClick={openModal}>Create Account
              </Button> 
              <Modal showModal={showModal} setShowModal={setShowModal} />
          </h1>
        </div>
        <div>
        </div>
      </Collapse>
    </div>
   
  );
}

