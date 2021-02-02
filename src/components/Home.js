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

export default class Home extends Component {
  state = {
    visible: false
  }

  onModalOpen = (e, item) => {                  
    this.setState({ visible: true }); 
  }

  onModalClose = (e, item) => {
    e.stopPropagation();
    this.setState({ visible: false });
  }

  data = [
    {
      title: 'What does CTE look like at Merit?',
      cover: <img alt="Merit Tech" src={SERVER_URL + "/static/img/tsa2019_20.jpg"}
        style={{padding: "16px 16px 0"}}
      />,
      content: <>
        <p>
          CTE stands for Career Technology Education. CTE courses help students develop skills like photography, programming, cooking, and more!
          At Merit Academy, we offer CTE courses in the following fields:
        </p>
        <ul>
          <li>Audio/Visual Production</li>
          <li>Computer Science and Information Technology</li>
          <li>Culinary Arts and Costume Design</li>
          <li>Engineering, Robotics, and Woodshop</li>
          <li>Photography and Graphic Design</li>
        </ul>
        <p>
          Explore Merit CTE Courses by visiting a page made by Jacoby Day and Allie Erdmann in Web Development class!<br />
          <a rel="noopener noreferrer" target="_blank" href="https://cte.meritacademy.tech"><b>https://cte.meritacademy.tech</b></a>
        </p>
      </>,
      actions: [
        <Button target="_blank" href="https://merit.usoe-dcs.org/students/register/start" style={actionStyle}>Enroll at Merit</Button>,
        <Button target="_blank" href="https://meritprepacademy.org/course-descriptions/" style={actionStyle}>All Merit Courses</Button>
      ]
    },
    {
      title: 'Why is CTE so cool?',
      cover: <img alt="Merit Tech" src={SERVER_URL + "/static/img/culinary.jpg"}
      style={{padding: "16px 16px 0"}}
    />,
      content: <>
        <p>
          CTE classes are designed to help students pursue their passions and produce real-world products. 
          They also help students plan and prepare for their future beyond high school.
          Here are some cool statistics related to CTE in the state of Utah:
        </p>
        <ul>
          <li>171,489 students enrolled in CTE courses in the state.</li>
          <li>96.3% graduation rate for students who are CTE concentrators.</li>
          <li>63.8% of students who concetrated in a CTE pathway placed in postsecondary education, advanced training, military service, or employment.</li>
          <li>57,537 CTE Skill Certifications earned in the state.</li>
        </ul>
      </>,
      actions: [
        <Button onClick={this.onModalOpen} style={actionStyle}>Merit CTE Stats</Button>,
        <Button target="_blank" href="https://www.schools.utah.gov/cte/publications/month?mid=2853&tid=0" style={actionStyle}>Utah CTE Month</Button>
      ]
    }  
  ];

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
              <h1>Happy CTE Month!</h1>
              <p>For the month of February, we are celebrating Career Technical Education at Merit Academy.</p>
              <DashboardModal 
                item={{
                  driveUrl: "https://drive.google.com/file/d/1Bap6EyTLrnzRn2-c2g-5YNRaQNxXebCX/preview",
                  date: "Merit CTE Stats",
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
                dataSource={this.data}
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
