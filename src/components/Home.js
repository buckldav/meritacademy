import PropTypes from "prop-types";
import React, { Component } from "react";
import { Layout, List, Card, Button } from "antd";
import './Home.css';

import { BOOTSTRAP_MAX, SERVER_URL } from '../Constants';
// const SERVER_URL = "http://localhost:3000"
const { Content } = Layout;

const HomeCards = [
  {
    title: "Belonging",
    imgSrc: "home1.jpg",
    description: "Students include everyone regardless of race, gender, age, and skill level. They constantly collaborate to share ideas and solve problems both during class and in after school clubs."
  },
  {
    title: "Vision",
    imgSrc: "home2.jpg",
    description: "Students create and design their own projects. They connect the technical skills they learn to their interests and are encouraged to develop their talents and abilities."
  },
  {
    title: "Intelligence",
    imgSrc: "home3.jpg",
    description: "Students are encouraged to search for answers themselves using online resources and their peers. In this way, they become independent learners in preparation for life after school."
  },
  {
    title: "Service",
    imgSrc: "home4.jpg",
    description: "Students mentor one another during class and in after school clubs. They seek for opportunities to impact the community and mobilize after school service projects."
  },
  {
    title: "Determination",
    imgSrc: "home5.jpg",
    description: "Students understand that sometimes it takes several attempts to solve a problem. They don't give up easily when something doesn't work and help each other overcome challenges."
  },
  {
    title: "Leadership",
    imgSrc: "home6.jpg",
    description: "Students become well-rounded by doing activities that help them develop soft skills including communication, critical thinking, a positive attitude, and a strong work ethic."
  }
]

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

  onResize = () => {
    var elements = document.getElementsByClassName('card-home');
    var elementHeights = Array.prototype.map.call(elements, function(el)  {
      el.style.height = "";
      return el.clientHeight;
    });

    var maxHeight = Math.max(...elementHeights);

    Array.prototype.forEach.call(elements, function(el) {
      el.style.height = maxHeight + "px";
    });
  }

  title = 'meritacademy.tech';

  componentDidMount() {
    this.init(this.title, document.getElementById("homeTitle"));
    window.onresize = this.onResize;
    setTimeout(this.onResize, 250);
    // Additional timeouts are in case the text didn't render within the first 250ms above.
    setTimeout(this.onResize, 250);
    setTimeout(this.onResize, 250);
    setTimeout(this.onResize, 250);
    setTimeout(this.onResize, 1000);
  }

  render() {
    return(
      <>
        <Content style={{ background: '#fff', padding: "160px 0", minHeight: 280 }}>
          <img src={SERVER_URL + "/static/img/home/m_navy.png"} alt="Logo" title="Logo by Adam Jenkins" style={{ width: "200px", display: "block", margin: "16px auto" }} />
          <h1 id="homeTitle">{this.title}</h1>
          <p style={{ textAlign: "center", margin: 0 }}>
            <Button href="https://meritacademy.instructure.com" target="_blank" style={{ marginRight: "12px" }}>Go To Canvas</Button>
            <Button href="/youtube">YouTube Downloader</Button>
          </p>
          
        </Content>
        <div style={{maxWidth: "600px", margin: "0 auto", padding: "24px 24px 0", textAlign: "center"}}>
          <h1 style={{marginTop: "1em"}}>Who We Are</h1>
          <p>At Merit Academy, we strive to emulate the six core values listed below. Through our technology classes here, we develop these values in a place where everyone is given an opportunity to succeed.</p>
        </div>

        <List
          className="card-list"
          grid={{
            gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3
          }}
          dataSource={HomeCards}
          renderItem={item => (
            <List.Item> 
              <Card 
                className="card-home"
                cover={<img alt="Merit Tech" src={SERVER_URL + "/static/img/home/" + item.imgSrc} />}
              >
                <Card.Meta
                  title={item.title} 
                  description={item.description}
                />
              </Card>
            </List.Item>
          )}
        />
      </>
    );
  }
}

Home.propTypes = {
  mobile: PropTypes.bool
};
