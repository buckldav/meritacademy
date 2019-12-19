import React from "react";
import { List, Avatar } from "antd";

const Links = props => (
        <List
        itemLayout="horizontal"
        bordered
        size="default"
        dataSource={props.data}
        renderItem={item => (
        <List.Item>
            <a href={item.linkUrl}>
            <List.Item.Meta
                avatar={<Avatar icon={props.icon ? props.icon : "link"} size="small" style={{background: "transparent", color: "#aa1d23"}} />}
                title={item.linkText}
                description={item.description}
            />
            </a>
        </List.Item>
        )}
    />
);


export default Links;