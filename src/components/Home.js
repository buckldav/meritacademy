import PropTypes from "prop-types";
import React, { Component } from "react";
import { Layout } from "antd";
import './Home.css';

const { Content } = Layout;

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

export default class Home extends Component {
  init = (str, el) => {
    var count = str.length;
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

      el.setAttribute('data-before', ranString(count));
      el.setAttribute('data-after', ranString(count));
      if(delay > 0) {
        delay--;
      }
      else {
        if(count < str.length) {
          el.innerHTML += str[str.length - count-1];
        }
        count--;
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
          <p style={{textAlign: "center"}}>Coming Soon January 2019</p>
      </Content>
    );
  }
}

Home.propTypes = {
  mobile: PropTypes.bool
};
