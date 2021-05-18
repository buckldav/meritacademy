import React from 'react';
import Iframe from 'react-iframe';
import { Menu, Dropdown, Icon, Typography } from 'antd';
import { Redirect } from 'react-router-dom';
const { Title } = Typography;

const TextGamesInfo = {
    // {
    //     title: "A Guard's Life",
    //     author: "Orly M",
    //     engine: "repl.it",
    //     instructions: "A medieval text adventure. Press Enter to begin.",
    //     url: "https://medieval-text-game.skylawolfy.repl.run/"
    // },
    // {
    //     title: "Back in Time",
    //     author: "Dylan P",
    //     engine: "repl.it",
    //     instructions: "Choose your own adventure game. Type in your choices exactly.",
    //     url: "https://repl.it/@dylanperaza961/Back-In-Time?lite=true&outputonly=1"
    // },
    // {
    //     title: "Defy the Odds",
    //     author: "Tennyson H",
    //     engine: "repl.it",
    //     instructions: "Good luck",
    //     url: "https://chooz-ur-own-advenchure-gaym.tennysonhirst.repl.run/"
    // },
    // {
    //     title: "Dragon's Quest",
    //     author: "Talon M",
    //     engine: "repl.it",
    //     instructions: "Choose your own adventure game. Type in your choices exactly.",
    //     url: "https://repl.it/@TMaurin/School-Project?lite=true&outputonly=1"
    // },
    // {
    //     title: "Kingdom",
    //     author: "Ammon A",
    //     engine: "repl.it",
    //     instructions: "The fate of the kingdom is in your hands!",
    //     url: "https://kingdom.ammonasay.repl.run/"
    // },
    "acers": {
      title: "Acers",
      author: "Dustin M",
      engine: "repl.it",
      instructions: "Get to the Garden with a key and a potion.",
      url: "https://repl.it/@DustinMarion/RPG-Game?lite=true&outputonly=1"
    },
    "among-us": {
      title: "Among Us",
      author: "Jendayi R",
      engine: "repl.it",
      instructions: "Come back to the Cafeteria after finishing 4 tasks! Avoid the imposters!",
      url: "https://repl.it/@JendayiRetana/Bideo-gaem-guau?lite=true&outputonly=1"
    },
    "avoid-the-grue": {
      title: "Avoid the Grue",
      author: "Charles K",
      engine: "repl.it",
      instructions: "UNDER CONSTRUCTION. Some parts of the game may not work yet.",
      url: "https://repl.it/@CharlesKidder/Text-Adventure-Game?lite=true&outputonly=1"
    },
    "basement": {
      title: "Basement",
      author: "Ryan M",
      engine: "repl.it",
      instructions: "Find the crowbar and the key, then head to the basement.",
      url: "https://repl.it/@PrinceSosuke/RPG?lite=true&outputonly=1"
    },
    "castle-cliffcrag": {
      title: "Castle Cliffcrag",
      author: "Michael D",
      engine: "repl.it",
      instructions: "Find the crown of Lord Cliff II and bring it to him.",
      url: "https://repl.it/@DungeonMaster42/RPG-2?lite=true&outputonly=1"
    },
    "defeat-the-bat-monkeys": {
      title: "Defeat the Bat Monkeys",
      author: "Mason M",
      engine: "repl.it",
      instructions: <>After you kill all of them, you must return home with their pelts to win. Click <strong><a href="https://drive.google.com/file/d/1wcGnkWpTVQT-qC5flK98VSK-EPVsdBiQ/view" target="_blank" rel="noopener noreferrer">here</a></strong> for the map.</>,
      url: "https://repl.it/@IisCoder/Defeat-The-Bat-Monkeys?lite=1&outputonly=1"
    },
    "eight-keys": {
      title: "Eight Keys",
      author: "Jacoby D",
      engine: "repl.it",
      instructions: <>Visit <strong><a href="https://rpg-website.jacobyday.repl.co/" target="_blank" rel="noopener noreferrer">here</a></strong> for a better playing experience including a "show map" option.</>,
      url: "https://repl.it/@JacobyDay/RPG?lite=1&outputonly=1"
    },
    "kill-the-rat": {
      title: "Kill the Rat",
      author: "Thai N",
      engine: "repl.it",
      instructions: "Do it.",
      url: "https://repl.it/@ThaiNgo2/CyanWelcomeProjections?lite=true&outputonly=1"
    },
    "lunch-time": {
      title: "Lunch Time",
      author: "Emma C",
      engine: "repl.it",
      instructions: "Get some lunch to Mr. Buckley.",
      url: "https://repl.it/@Thespianlord/RPGgames1?lite=true&outputonly=1"
    },
    "maze-game": {
      title: "Maze Game",
      author: "Alex B",
      engine: "repl.it",
      instructions: "Get all the power pellets.",
      url: "https://repl.it/@mcbuzzer/RPG-Game?lite=true&outputonly=1"
    },
    "save-the-child": {
      title: "Save the Child",
      author: "Yoonbin C",
      engine: "repl.it",
      instructions: "Save the child!",
      url: "https://repl.it/@buckldav/RPG-Game-Yoonbin?lite=true&outputonly=1"
    },
    "slay-the-monster": {
      title: "Slay the Monster",
      author: "Michael S",
      engine: "repl.it",
      instructions: "Slay the monster. It's the name of the game.",
      url: "https://repl.it/@buckldav/RPG-Game-Seely?lite=true&outputonly=1"
    },
    "steal-the-staff-2": {
      title: "Steal the Staff 2",
      author: "Katlyn M",
      engine: "repl.it",
      instructions: "The long-awaited sequel to Steal the Staff 1.",
      url: "https://repl.it/@Vitanix/Steal-The-Staff-2?lite=true&outputonly=1"
    },
    "te-drk-kng": {
      title: "te drk kng",
      author: "Ronon L",
      engine: "repl.it",
      instructions: "Slay the beast!",
      url: "https://repl.it/@PureWaveForm/te-Drk-kng?lite=true&outputonly=1"
    },
    "thanskgiving": {
      title: "Thanksgiving Emergency",
      author: "Mr. Buckley",
      engine: "repl.it",
      instructions: "Save the dinner! Save the dinner!",
      url: "https://repl.it/@buckldav/RPG-Game-1?lite=true&outputonly=1"
    },
    "the-burning-school": {
      title: "The Burning School",
      author: "Junsung L",
      engine: "repl.it",
      instructions: "Escape the burning school!",
      url: "https://repl.it/@JunsungLee1/RPG-GAME?lite=true&outputonly=1"
    },
    "the-christmas-project": {
      title: "The Christmas Project",
      author: "Talan J",
      engine: "repl.it",
      instructions: "Get the Christmas tree to the living room!",
      url: "https://repl.it/@buckldav/RPG-Game-Talan?lite=true&outputonly=1"
    },
}

const GameInfo = [  
    {
        title: "Aneurysm",
        author: "Tennyson H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/aneurysm/Tennyson.html"
    },
    {
        title: "Billiam Galileo",
        author: "Matthew H, Aiden P, Eric D, and Jaden E",
        engine: "Unity",
        instructions: "Go on an incredible Martian adventure with botanist/space ranger Billiam Galileo. WASD or Arrow Keys to move, Space to jump.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/billiam/index.html"
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
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/dont-die/index.html"
    },
    {
        title: "Flying Soldier",
        author: "Zion A, Luke E",
        engine: "Unity",
        instructions: "Space to fly, arrow keys to move. Look for the end.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/flying-soldier/index.html"
    },
    {
        title: "Fun Game",
        author: "Talan J",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/fun-game/Talan.html"
    },
    {
        title: "IDK 2.0",
        author: "Sebastian P",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/idk-2/2D+Movement+Demo.html"
    },
    {
        title: "Marvelio",
        author: "Austin M",
        engine: "Scratch",
        instructions: "Arrow keys to move, get Nick Fury to the end and beat Thanos!",
        url: "https://scratch.mit.edu/projects/embed/355397939"
    },
    {
        title: "Marioish",
        author: "Wyatt H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/marioish/Wyatt.html"
    },
    {
        title: "Maze",
        author: "Connor L",
        engine: "Godot",
        instructions: "Click on the game to activate it. Find the star! Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/maze/index.html"
    },
    {
        title: "Pygame Demo",
        author: "Katniss W",
        engine: "Pygame",
        instructions: "Learning to animate sprites in Pygame. Arrow keys to move, space to jump.",
        url: "https://repl.it/@KatnissWu/my-game?lite=true&outputonly=1"
    },
    {
        title: "Snake",
        author: "Alex B",
        engine: "Scratch",
        instructions: "Click on the game to activate it. WASD to move. Collect the stars to increase your size.",
        url: "https://scratch.mit.edu/projects/embed/23464954"
    },
    {
        title: "Sonic Dash",
        author: "Manases R",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/sonic-dash/2D+Movement+Demo.html"
    },
    {
        title: "Sypher",
        author: "Owen H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/sypher/Owen.html"
    },
    {
        title: "Weird Platfarmer",
        author: "Isaac S",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/weird-platfarmer/Isaac.html"
    }
]

const PongInfo = [  
    {
        title: "Bad Pong",
        author: "Alex B",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-alex/BadPong.html"
    },
    {
        title: "Mega Ultra Ball",
        author: "Ethan W",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-ethan/MegaUltraBall.html"
    },
    {
        title: "Ping dela Pong",
        author: "Tennyson H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-tennyson/Pong.html"
    },
    {
        title: "Pong (Grant)",
        author: "Grant L",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-grant/pong.html"
    },
    {
        title: "Pong (Isaac)",
        author: "Isaac S",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-isaac/Isaac.html"
    },
    {
        title: "Pong (Luke)",
        author: "Luke E",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-luke/Pong.html"
    },
    {
        title: "Pong (Manases)",
        author: "Manases R",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-manases/Pong.html"
    },
    {
        title: "Pong (Talan)",
        author: "Talan J",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-talan/Pong.html"
    }
]

const GameInfo2021 = [
    {
        title: "Grandpa's Jars",
        author: "Thai N",
        engine: "Unity",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://grandpasjars.buckldav.repl.co/"
    }
]

const EngineUrls = {
    "Scratch": "https://scratch.mit.edu/",
    "Godot": "https://godotengine.org/",
    "Unity": "https://unity3d.com/",
    "repl.it": "https://repl.it/",
    "Pygame": "https://repl.it/talk/learn/A-Starter-Guide-to-Pygame/11741"
}



class Games extends React.Component {
    state = {
        selected: "",
        newSelected: ""
    }

    handleClick = (e, gameArray) => {
        this.setState({ newSelected: e.key })
        // this.setState({selected: gameArray[parseInt(e.key)});
    }

    textmenu = (
        <Menu 
            onClick={(e) => (this.handleClick(e, GameInfo2021))}
            selectedKeys={[]}
        >
            {
                Object.keys(GameInfo2021).map((key, i) => (
                    <Menu.Item key={key}>{GameInfo2021[key].title} by {GameInfo2021[key].author}</Menu.Item>
                ))
            }
        </Menu>
    );

    pongmenu = (
        <Menu 
            onClick={(e) => (this.handleClick(e, PongInfo))}
            selectedKeys={[]}
        >
            {
                PongInfo.map((val, i) => (
                    <Menu.Item key={"" + i}>{val.title}</Menu.Item>
                ))
            }
        </Menu>
    );

    menu = (
        <Menu 
            onClick={(e) => (this.handleClick(e, GameInfo))}
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
        const id = this.props.match.params.id;
        this.setState({ selected: id }, () => {
            let frames = Array.from(document.getElementsByTagName("iframe"));
            frames.forEach((val) => {
                val.setAttribute("scrolling", "no");
            });
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.selected !== this.props.match.params.id) {
            const id = this.props.match.params.id;
            this.setState({ selected: id, newSelected: "" })
        }
    }

    render() {
        const item = GameInfo2021[this.state.selected]
        if (this.state.newSelected) {
            return <Redirect to={"/projects/games/" + this.state.newSelected} />
        } else {
            return (
                <div>
                    <Title>Games</Title>
                    <Dropdown overlay={this.textmenu}>
                        <button className="ant-dropdown-link button-no-style" style={{marginBottom: 24}}>
                            Select Unity Game <Icon type="down" />
                        </button>
                    </Dropdown>
                    {/* <Dropdown overlay={this.menu}>
                        <button className="ant-dropdown-link button-no-style" style={{marginBottom: 24, marginRight: 16}}>
                            Select 2D Game <Icon type="down" />
                        </button>
                    </Dropdown>
                    <Dropdown overlay={this.pongmenu}>
                        <button className="ant-dropdown-link button-no-style" style={{marginBottom: 24, marginRight: 16}}>
                            Select Pong Game <Icon type="down" />
                        </button>
                    </Dropdown> */}
                    {this.state.selected ? <>
                        <h2 style={{textAlign: "center"}}>{item.title}</h2>
                        <h4 style={{textAlign: "center"}}>Author(s): {item.author}&emsp;&emsp;Engine: <a href={EngineUrls[item.engine]}>{item.engine}</a></h4>
                        <p style={{textAlign: "center"}}>{item.instructions}</p>

                        <Iframe 
                        height="600"
                        width="100%" 
                        display="initial"
                        position="relative"
                        url={item.url} />
                    </> : <Title level={3} style={{textAlign: "center"}}>Select a game from the dropdown above!</Title>
                    }
                </div>  
            );
        }
    }
    
}

export default Games;