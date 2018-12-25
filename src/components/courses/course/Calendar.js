import React from 'react';
import { Calendar as AntCalendar } from 'antd';

const Calendar = props => {
    if (props.visible) {
        if (props.course !== {}) {
            return (
                <AntCalendar />
            );
        } else {
            return (
                <p>Loading</p>
            );
        }
    } else {
        return null;
    }
}

export default Calendar;