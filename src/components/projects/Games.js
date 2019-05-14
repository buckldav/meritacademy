import React from 'react';
import Iframe from 'react-iframe';
import { Menu, Dropdown, Icon } from 'antd';

const GameInfo = [
    {
        title: "Back in Time",
        author: "Dylan P",
        engine: "repl.it",
        instructions: "Choose your own adventure game. Type in your choices exactly.",
        url: "https://repl.it/@dylanperaza961/Back-In-Time?lite=true&outputonly=1"
    },
    {
        title: "Biology Game",
        author: "Ben T",
        engine: "Unity",
        instructions: "Walk around and explore. WASD to move.",
        url: "/static/projects/games/biology-game/index.html"
    },
    {
        title: "Cat Platform",
        author: "Luke E",
        engine: "Scratch",
        instructions: "Click on the game to activate it. Go to the check mark! Press arrow keys to move, space to jump.",
        url: "https://scratch.mit.edu/projects/embed/260481630"
    },
    {
        title: "Don't Die!",
        author: "Dallin C",
        engine: "Unity",
        instructions: "WASD or Arrow Keys to move.",
        url: "/static/projects/games/dont-die/index.html"
    },
    {
        title: "Maze",
        author: "Connor L",
        engine: "Godot",
        instructions: "Click on the game to activate it. Find the star! Press arrow keys to move.",
        url: "/static/projects/games/maze/index.html"
    },
    {
        title: "Snake",
        author: "Alex B",
        engine: "Scratch",
        instructions: "Click on the game to activate it. WASD to move. Collect the stars to increase your size.",
        url: "https://scratch.mit.edu/projects/embed/23464954"
    }
]

const EngineUrls = {
    "Scratch": "https://scratch.mit.edu/",
    "Godot": "https://godotengine.org/",
    "Unity": "https://unity3d.com/",
    "C#": "https://repl.it/"
}



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

                <h2 style={{textAlign: "center"}}>{this.state.selected.title}</h2>
                <h4 style={{textAlign: "center"}}>Author(s): {this.state.selected.author}&emsp;&emsp;Engine: <a href={EngineUrls[this.state.selected.engine]}>{this.state.selected.engine}</a></h4>
                <p style={{textAlign: "center"}}>{this.state.selected.instructions}</p>

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