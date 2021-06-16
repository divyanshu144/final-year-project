
import React from 'react';
import "./Main.css";
import {useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {  Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  
    button: {
      borderRadius: '12px',
      marginLeft: '100px'
    },
    
    
  }));

export default function Main() {

    const classes = useStyles();

    const history = useHistory();

    const nextPage = () => {
        history.push("/new");

    }
const prevPage = () =>{
    history.push("/")
}

    return (
       
        <div className="app">
            <section class="gradient-custom">
            <div class="container py-5">
            <div class="row">

            <div class="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0 top">
            <ul class="list-unstyled text-white">
            <li class="d-flex justify-content-between mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
              alt="avatar"
              class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
              width="60"
            />
            <div class="card mask-custom">
              <div
                class="card-header_d-flex_justify-content-between_p-3"
                
              >
                <p class="fw-bold mb-0 name">Lorem</p>
                <p class="text-light small mb-0 time">
                  <i class="far fa-clock"></i> 12 mins ago
                </p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  Hey, I am new to this page can you please tell me in brief what does this project actually do
                </p>
              </div>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-4">
            <div class="card mask-custom w-100">
              <div
                class="card-header_d-flex_justify-content-between_p-3"
                
              >
                <p class="fw-bold mb-0 name">Ipesum</p>
                <p class="text-light small mb-0 time">
                  <i class="far fa-clock"></i> 13 mins ago
                </p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  yeah sure, so this project is all about generating image from text using GAN (Generative Adversial Network). In this we are trying to
                  generate images from textual description which describes images. 
                </p>
              </div>
            </div>
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
              alt="avatar"
              class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
              width="60"
            />
          </li>
          <li class="d-flex justify-content-between mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
              alt="avatar"
              class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
              width="60"
            />
            <div class="card mask-custom">
              <div
                class="card-header_d-flex_justify-content-between_p-3"
                
              >
                <p class="fw-bold mb-0 name">Lorem</p>
                <p class="text-light small mb-0 time">
                  <i class="far fa-clock"></i> 10 mins ago
                </p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  oh well that sounds nice !, but how does this work. I mean how are we generating images from text in this page
                </p>
              </div>
            </div>
          </li>
          <li class="d-flex justify-content-between mb-4">
            <div class="card mask-custom w-100">
              <div
                class="card-header_d-flex_justify-content-between_p-3"
                
              >
                <p class="fw-bold mb-0 name">Ipesum</p>
                <p class="text-light small mb-0 time">
                  <i class="far fa-clock"></i> 13 mins ago
                </p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  It is very easy for you to generate the image from text. You just have to type the text for which you need image in the box on your right.
                </p>
              </div>
            </div>
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
              alt="avatar"
              class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
              width="60"
            />
          </li>
          <li class="d-flex justify-content-between mb-4">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg"
              alt="avatar"
              class="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
              width="60"
            />
            <div class="card mask-custom">
              <div
                class="card-header_d-flex_justify-content-between_p-3"
                
              >
                <p class="fw-bold mb-0 name">Lorem</p>
                <p class="text-light small mb-0 time">
                  <i class="far fa-clock"></i> 10 mins ago
                </p>
              </div>
              <div class="card-body">
                <p class="mb-0">
                  Thank you so much for your assistance, I was having some doubt initially but you cleared it now
                </p>
              </div>
            </div>
          </li>
        </ul>
        
      </div>
      <div class="app_body">
      <Button className={classes.button} variant="contained" color="primary" 
                  onClick={prevPage}>Home
              </Button> 

          <div class="area">
          <div class="form-outline form-white ">
          <label class="form-label" for="textAreaExample">Type here to generate images</label>
                    <textarea class="form-control" id="textAreaExample"cols="20" rows="10"></textarea>
                </div>
                <br/>
                <button type="button" class="btn btn-light btn-lg btn-rounded float-end " onClick={nextPage}>
                    Send
                </button>
          </div>
        </div>
    </div>
  </div>
  
</section>
            
        </div>
    )
}
