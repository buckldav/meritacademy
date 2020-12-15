import PropTypes from "prop-types";
import React, { Component } from "react";
import { Layout, List, Card, Button, Row, Col } from "antd";
import { DashboardModal } from "./courses/course/Dashboard";
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

const actionStyle = {lineHeight: "30px", color:"rgba(0, 0, 0, 0.65)"}

const data = [
  {
    title: 'Join Technology Skills Association!',
    cover: <img 
      src="data:image/png;base64,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"
      style={{margin: "-10px 0", padding: "16px 16px 0"}}
    />,
    content: <>
      <p>
        "The Technology Student Association (TSA) enhances personal development, leadership, and career opportunities in STEM."
      </p>
      <p>
        Every March, we compete with other schools in the state of Utah in competitions like Board Game Design, Webmaster, Video Game Design, Digital
        Video Production and more. Learn the skills for these competitions and prepare at our weekly club meetings!
      </p>
    </>,
    actions: [
      <Button target="_blank" href="https://tsaweb.org/competitions-programs/tsa/high-school-competitions" style={actionStyle}>Learn More</Button>,
      <Button target="_blank" href="https://tsamembership.registermychapter.com/members#" style={actionStyle}>Sign Up</Button>
    ]
  },
  {
    title: 'Join CyberStart America!',
    cover: <img 
      src="https://d33wubrfki0l68.cloudfront.net/9e00a1a3e29b1a6a811bf8d1daf21746ce0e016c/04ea9/media/images/ui-logo-cs-america.png" 
      style={{padding: "16px 16px 0"}}
    />,
    content: <>
      <p>
        "The program gives students <strong>free</strong> access to CyberStart Game until April 2021, through which they can progress at their 
        own pace; solving puzzles, completing challenges, and gaining skills in cybersecurity.
      </p>
      <p>  
        "Students can play just for fun, to improve problem-solving
        and digital skills, or can use the CyberStart America program to qualify and train for the National Cyber Scholarship Competition."
      </p>
    </>,
    actions: [
      <Button target="_blank" href="https://www.cyberstartamerica.org/" style={actionStyle}>Learn More</Button>,
      <Button target="_blank" href="https://www.cyberstartamerica.org/register/" style={actionStyle}>Sign Up</Button>
    ]
  }  
];

export default class Home extends Component {
  state = {
    visible: false
  }

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

  onModalOpen = (e, item) => {                  
    this.setState({ visible: true }); 
  }

  onModalClose = (e, item) => {
    e.stopPropagation();
    this.setState({ visible: false });
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
        <Row style={{background: '#fff'}}>
          <Col xs={{span:24, order: -1}} md={10}>
            <Content style={{ padding: "160px 0", minHeight: 280 }}>
              <img src={SERVER_URL + "/static/img/home/m_navy.png"} alt="Logo" title="Logo by Adam Jenkins" style={{ width: "200px", display: "block", margin: "16px auto" }} />
              <h1 id="homeTitle">{this.title}</h1>
              <p style={{ textAlign: "center", margin: 0 }}>
                <Button size="large" href="https://meritacademy.instructure.com" target="_blank">Go To Canvas</Button><br/><br/>
                <Button size="large" href="/projects/games">Play 2020 Games</Button>
                {/* <Button href="/youtube">YouTube Downloader</Button> */}
              </p>
            </Content>
          </Col>
          <Col xs={24} md={14}>
            <Content style={{ padding: "24px" }}>
              <h1>Join Technology Club!</h1>
              <p>Every Wednesday after school in Mr. Buckley's room. Play games, learn things, and make stuff!</p>
              <h3 style={{ margin: "-8px 0 16px" }}>Everyone who comes needs to fill out <Button style={{fontSize: "inherit", padding: 0, fontWeight: "inherit"}} onClick={this.onModalOpen} type="link">this form</Button>.</h3>
              <DashboardModal 
                item={{
                  driveUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdFVS5rR_H8gnuwaXLCa79BYae1DgyNwYGASR_nTgXBCaDcGg/viewform?embedded=true",
                  date: "Technology Club Registration",
                  visible: this.state.visible
                }}
                onModalOpen={this.onModalOpen}
                onModalClose={this.onModalClose}
              />
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 1,
                  lg: 2,
                  xl: 2,
                  xxl: 2,
                }}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Card 
                      cover={item.cover}
                      title={item.title}
                      actions={item.actions}
                    >
                      {item.content}
                    </Card>
                  </List.Item>
                )}
              />
            </Content>
          </Col>        
        </Row>
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
