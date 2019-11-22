import React, { useState, useEffect } from 'react';

import firebase from '../firebase';
import Content from './content';


const SORT_OPTIONS = {
    'TIME_ASC': {column: 'time_seconds', direction: 'asc'},
    'TIME_DESC': {column: 'time_seconds', direction: 'desc'},

    'TITLE_ASC': {column: 'title', direction: 'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'},
}

function useTimes(sortBy = 'TIME_ASC') {
    const [times, setTimes] = useState([])

    useEffect(() => {

        const unsubscribe = 
            firebase
            .firestore()
            .collection('times')
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot( (snapshot) => {
                const newTimes = snapshot.docs.map( (doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setTimes(newTimes)
            })

            return () => unsubscribe()
    }, [sortBy])
    return times;
}

function handleContent (d) {
    console.log('content', d)
    if(d === 'test2'){
        console.log('test2123')
    }
}
const TimeList = () => {

    
    const [sortBy, setSortBy] = useState('TIME_ASC');
    const times = useTimes(sortBy);

    return (
        <div>
            <label>Sort By:</label>
            <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                <option value="TIME_ASC">Time fastest first</option>
                <option value="TIME_DESC">Time slowest first</option>
                <option disabled>---</option>
                <option value="TITLE_ASC">Title a-z</option>
                <option value="TITLE_DESC">Title z-a</option>
            </select>
            <ol>
                {
                   times.map( (time) => (

                    <li key={time.id} onClick={handleContent(time.content)}>
                    <div className="list-entry" >
                   {time.title} <code className="list-author">{time.time_seconds}</code>
                    </div>
                   <div className="list-content">{time.content}</div>
                </li>
                   ))
                }
            </ol>
       
        </div>
    )
}

export default TimeList;