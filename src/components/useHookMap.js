import React, { useState, useEffect } from 'react';



const UseHookMap = () => {

    const [title, setTitle] = useState('Title');
    const valTitle = 'Set Value Title';
    const [list, setList] = useState([{ id: 1, author: 'Author 001' }, { id: 2, author: 'Author 002' }])
    const [author,setAuthor]= useState();
    //const value = handleContent(val);
    useEffect(() => {

        return () => {

        };
    }, [])

    const handleContent = (val) => {
        const filter = list.filter((item) => item.id === val);
        //console.log('filter', filter)
        //console.log('hookContent', val)
        const data = filter[0].author;
        //console.log('single data',data)
        //setList([...filter]);
        setAuthor(data)

    }

    return (

        <div>
            <div>Default: <span style={{ color: 'red' }}>{title}</span></div>
            <div>Change State: <span onClick={() => setTitle(valTitle)}>Click</span></div>
            **********************************************************************
            <div className="">
                Default State:
            <ol>
                    {
                        list.map(
                            (item, i) => 
                            <li key={i} onClick={() => handleContent(item.id)}>
                                {item.author}
                            </li>
                        )
                    }
                </ol>
            </div>
                <div style={{color: 'red'}}>
                    After Click to display: 
                    {!author ? 'Empty Value' : author }
                </div>
        </div>
    )
}

export default UseHookMap;