import React from 'react';
import { Avatar, List, Radio, Calendar, Badge, Modal, Button, Switch, Menu, Dropdown, Icon } from 'antd';
import { EventStyles } from './EventStyles';
import Iframe from 'react-iframe';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const DashboardModal = props => (
    <Modal
        visible={props.item.visible}
        title={props.item.date}
        maskClosable={true}
        onOk={(e) => {props.onModalClose(e, props.item)}}
        onCancel={(e) => {props.onModalClose(e, props.item)}}
        width={800}
        style={{top: 20}}
        footer={[
            <div style={{float:"left"}}>{props.item.driveUrl ? props.item.text : null}</div>,
            <Button key="close" type="primary" onClick={(e) => {props.onModalClose(e, props.item)}}>
                Close
            </Button>
        ]}
    >
        {!props.item.driveUrl ? props.item.text :
        <Iframe url={props.item.driveUrl}
        width="100%" 
        height="480" 
        display="initial"
        position="relative" />
        }
    </Modal>
);

const DashboardList = props => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.events}
            renderItem={item => {
                if (item.eventType === "hidden") {
                    return <div></div>
                } else {
                    return (
                        <button className="button-no-style"
                        style={{ width: "100%" }}
                        onClick={() => {props.onModalOpen(item)}}
                        >
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar icon={EventStyles[item.eventType].icon} shape="square" style={{backgroundColor: EventStyles[item.eventType].color}} />}
                                    title={item.date}
                                    description={item.text}
                                />
                            </List.Item>
                            <DashboardModal 
                                item={item}
                                onModalOpen={props.onModalOpen}
                                onModalClose={props.onModalClose}
                            />
                        </button>
                    );
                }
            }}
        />
    )
}

const DashboardCalendar = props => {
    const dateCellRender = (value) => {
        let events = props.events.filter(event => event.date === value.format("YYYY-MM-DD"));
        return (
            <ul style={{
                listStyle: "none",
                margin: 0,
                padding: 0
            }}>
                {
                    events.map(item => {
                        if (item.eventType === "hidden") {
                            return <li key={item.id}></li>
                        }
                        return (
                            <li key={item.id} style={{ overflow: "hidden" }}>
                                <button 
                                className="button-no-style"                                
                                onClick={() => {props.onModalOpen(item)}}
                                >
                                    <Badge status={EventStyles[item.eventType].status} text={item.text} style={{
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        width: "100%",
                                        textOverflow: "ellipsis",
                                        fontSize: "12px"
                                    }}/>
                                    <DashboardModal 
                                        item={item}
                                        onModalOpen={props.onModalOpen}
                                        onModalClose={props.onModalClose}
                                    />
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    return (
        <Calendar 
            dateCellRender={dateCellRender}
        />
    );
}

const FilterMenu = props => (
    <Menu>
      <Menu.Item key="1"><Switch size="small" defaultChecked={false} onChange={props.handleFuture} style={{marginRight: "8px"}} />Show future</Menu.Item>
      <Menu.Item key="2"><Switch size="small" defaultChecked={false} onChange={props.handleDue} style={{marginRight: "8px"}} />Show due dates</Menu.Item>
    </Menu>
);

class Dashboard extends React.Component {
    state = {
        viewType: "dashboard",
        due: false,
        future: false
    }

    handleDue = (checked) => {
        this.setState({due: checked});
    }    

    handleFuture = (checked) => {
        this.setState({future: checked});
    }

    onChange = (e) => {
        this.setState({viewType: e.target.value});
    }

    onModalOpen = (calEvent) => {
        this.props.onModalOpen(calEvent);
    }

    onModalClose = (e, calEvent) => {
        this.props.onModalClose(e, calEvent);    
    }

    render() {
        if (this.props.visible) {
            if (this.props.course !== {}) {
                return (
                    <div>
                        <RadioGroup onChange={this.onChange} defaultValue="dashboard">
                            <RadioButton value="dashboard">List</RadioButton>
                            <RadioButton value="calendar">Calendar</RadioButton>
                            
                        </RadioGroup>
                        
                        <Dropdown disabled={this.state.viewType === "calendar"} overlay={<FilterMenu handleFuture={this.handleFuture} handleDue={this.handleDue} />} trigger={['click']}>
                            <Button style={{ marginLeft: 8 }}>
                                Filter <Icon type="filter" />
                            </Button>
                        </Dropdown>
                        {this.state.viewType==="dashboard" ? 
                        <DashboardList 
                            events={this.props.course.events
                            .filter(event => this.state.future ? true : event.date && (new Date(event.date)).getTime() <= Date.now())
                            .filter(event => this.state.due ? true : event.eventType !== "due")} 
                            onModalOpen={this.onModalOpen} 
                            onModalClose={this.onModalClose}/> : 
                        <DashboardCalendar events={this.props.course.events} onModalOpen={this.onModalOpen} onModalClose={this.onModalClose}/>}
                    </div>
                );
            }
        }
        return null;
    }
}

export default Dashboard;