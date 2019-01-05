import React from 'react';
import Iframe from 'react-iframe';
import { Menu, Dropdown, Icon } from 'antd';
import "./Projects.css";

const GameInfo = [
    {
        title: "Cat Platform",
        author: "Luke E",
        instructions: "Click on the game to activate it. Go to the check mark! Press arrow keys to move, space to jump.",
        url: "https://scratch.mit.edu/projects/embed/260481630"
    },
    {
        title: "Maze",
        author: "Connor L",
        instructions: "Click on the game to activate it. Find the star! Press arrow keys to move.",
        url: "/static/projects/games/maze/index.html"
    }
]



class Games extends React.Component {
    state = {
        selected: GameInfo[0]
    }

    handleClick = (e) => {
        this.setState({selected: GameInfo[parseInt(e.key)]});
    }
    
    onGameSelected = (item) => {
        this.setState({selected: GameInfo[parseInt(item.key)]});
    }

    menu = (
        <Menu 
            onClick={this.handleClick}
            selectedKeys={[]}
        >
            {
                GameInfo.map((val, i) => (
                    <Menu.Item key={"" + i}>{val.title}</Menu.Item>
                ))
            }
        </Menu>
    );

    componentDidMount() {
        let frames = Array.from(document.getElementsByTagName("iframe"));
        frames.forEach((val) => {
            val.setAttribute("scrolling", "no");
        });
    }

    render() {
        return (
            <div>
                <h1>Games</h1>
                <Dropdown overlay={this.menu} style={{marginBottom: 24}}>
                    <button className="ant-dropdown-link button-no-style">
                        Select Game <Icon type="down" />
                    </button>
                </Dropdown>

                <h2>{this.state.selected.title}</h2>
                <h4>{this.state.selected.author}</h4>
                <p>{this.state.selected.instructions}</p>

                <Iframe 
                height="600"
                width="100%" 
                display="initial"
                position="relative"
                url={this.state.selected.url} />
            </div>  
        );
    }
    
}

export default Games;