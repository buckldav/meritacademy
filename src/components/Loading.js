import React from 'react';
import {
    Icon
} from 'antd';

const Loading = () => {
    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Icon type="loading" style={{fontSize: "2em"}} />
        </div>
    );
}

export default Loading;