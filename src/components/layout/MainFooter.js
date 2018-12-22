import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterLinks = (props) => {
    const styles = {
        list: {
            listStyle: "none",
            marginLeft: 0,
            paddingLeft: 0
        },
        link: {
            textDecoration: "none",
            color: "rgba(0, 0, 0, 0.65)"
        }
    }
    return (
        <div style={{ width: "220px"}}>
            <h4>{props.title}</h4>
            <ul style={styles.list}>
                <li><a style={styles.link} href={props.refs[0]}>{props.links[0]}</a></li>
                <li><a style={styles.link} href={props.refs[1]}>{props.links[1]}</a></li>
            </ul>                   
        </div>
    )
}

const MainFooter = (props) => {
    return (
        <Footer>
            <div style={{ display: "flex", flexDirection: "row"}}>
                <FooterLinks 
                    title="Links" 
                    refs={["http://meritacademy.org/", "http://meridianschool.org"]} 
                    links={["meritacademy.org", "meridianschool.org"]} />
                <FooterLinks 
                    title="Help" 
                    refs={["mailto:david.buckley@meritacademy.org", "https://github.com/buckldav/meritacademy"]} 
                    links={["Contact", "GitHub"]} />
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
                ©2019 Merit Academy
            </div>
        </Footer>
    );
}

export default MainFooter;