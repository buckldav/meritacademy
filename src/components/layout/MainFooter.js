import React from 'react';
import { Layout, List, Card } from 'antd';

const { Footer } = Layout;
const { Meta } = Card;

const data = [
    {
        title: "Links",
        links: [
            {
                ref: "https://www.meridianschool.org",
                val: "meridianschool.org"
            },
            {
                ref: "https://www.meritprepacademy.org/",
                val: "meritprepacademy.org"
            }
        ]
    },
    {
        title: "Contact",
        links: [
            {
                ref: "tel:801-491-7600,227",
                val: "801-491-7600 ext 227"
            },
            {
                ref: "mailto:david.buckley@meritacademy.org",
                val: "david.buckley@meritacademy.org"
            }
        ]
    },
    {
        title: "Developer",
        links: [
            {
                ref: "/admin/",
                val: "Admin"
            },
            {
                ref: "https://github.com/buckldav/meritacademy",
                val: "GitHub"
            }
        ]
    }
]

const MainFooter = (props) => {
    return (
        <Footer>
            <List
                grid={{
                    gutter: 0, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3,
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card bordered={false} style={{ background: 'none' }}>
                            <Meta
                                title={item.title}
                                style={{ marginBottom: "12px" }}
                            />
                            <List
                                grid={{
                                    xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1,
                                }}
                                style={{
                                    margin: 0
                                }}
                                dataSource={item.links}
                                renderItem={link => (
                                    <List.Item style={{margin: 0}}>
                                        <a href={link.ref} style={{display: "block", textAlign: "center"}}>{link.val}</a>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </List.Item>
                )}
            />
            <div style={{ width: "100%", textAlign: "center" }}>
                ©2019 Merit Academy
            </div>
        </Footer>
    );
}

export default MainFooter;