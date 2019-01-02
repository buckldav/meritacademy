import PropTypes from "prop-types";
import React, { Component } from "react";
import { Layout } from "antd";
import './Home.css';

import { BOOTSTRAP_MAX } from '../Constants';

const { Content } = Layout;

export default class Home extends Component {
  init = (str, el) => {
    var count = str.length;
    var ranStringSize = count;
    if (window.innerWidth < BOOTSTRAP_MAX.md) {
      ranStringSize = count / 2;
    }
    var delay = 50;

    el.innerHTML = '';
    
    const gen = setInterval(function() {
      const dictionary = "0123456789qwertyuiopasdfghjklzxcvbnm!?></`~+*=@#$%".split('');
      const ranString = amt => {
        var string = '';
        for(var i = 0; i < amt; i++) {
          string += dictionary[Math.floor(Math.random() * dictionary.length)];
        }
        return string;
      }

      el.setAttribute('data-before', ranString(ranStringSize));
      el.setAttribute('data-after', ranString(ranStringSize));
      if(delay > 0) {
        delay--;
      }
      else {
        if(count < str.length) {
          el.innerHTML += str[str.length - count-1];
        }
        count--;
        ranStringSize--;
        if(count === -1) {
          clearInterval(gen);
        }
      }
    }, 32);
  }

  title = 'meritacademy.tech';

  componentDidMount() {
    this.init(this.title, document.getElementById("homeTitle"));
  }

  render() {
    return(
      <Content style={{ background: '#fff', padding: "300px 0", minHeight: 280 }}>
          <h1 id="homeTitle">{this.title}</h1>
          <p style={{textAlign: "center"}}>Career and Technology Education</p>
      </Content>
    );
  }
}

Home.propTypes = {
  mobile: PropTypes.bool
};
