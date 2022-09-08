import React, {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './review.css';
import '../Profile/profile.css';
import {Form} from 'react-bootstrap';
import {Button} from '@mui/material';
import {Lock} from '@mui/icons-material';
import Head from '../Header/Header';
import Manage from '../../Manage orders/Manage';

function Review() {
    let token = localStorage.getItem('token');

    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [spacing, setSpacing] = useState('double');

    const [native, setNative] = useState(false);
    const [samples, setSamples] = useState(false);
    const [smartpaper, setSmartpaper] = useState(false);
    const [sources, setSources] = useState(false);

    const [details, setDetails] = useState({
        pages: 0,
        charts: 0,
        slides: 0,
        subject: '',
        paper_type: '',
        instructions: '',
        paper_format: '',
        references: 0,
        order_type: 'Academics',
        academic_year: '',
        title: '',
        deadline: '24h',
        paper_level: '',
        upgrade: '',
        task_size: '',
        programming_category: '',
        prog_language: '',
        software: '',
        discipline: '',
        amount: 0
    });

    useEffect(() => {
        setDetails(details => ({
            ...details, pages: count, charts: count2, slides: count3, references: count1
        }))

    }, [count, count1, count2, count3]);

    useEffect(() => {
        if(details.order_type === 'Academics'){
            setDetails(prevState => ({
                ...prevState, paper_level: 'Basic', paper_format: 'MLA', programming_category: '', prog_language: '', task_size: ''
            }))
        }else if(details.order_type === 'Programming'){
            setDetails(prevState => ({
                ...prevState, programming_category: 'Web programming', task_size: 'Small', paper_level: '', subject: '', paper_format: '', academic_year: '', title: '', upgrade: '', discipline: '', software: '', pages: 0, references: 0, charts: 0, slides: 0
            }))
        }else if(details.order_type === 'Calculations'){
            setDetails(prevState => ({
                ...prevState, discipline: 'Enginnering', task_size: 'Small', paper_level: '', subject: '', paper_format: '', academic_year: '', title: '', upgrade: '', programming_category: '', prog_language: '', pages: 0, references: 0, charts: 0, slides: 0
            }))
        }
    },[details.order_type])

    const handleChange1 = (e) => {
        setDetails(details => ({
            ...details, order_type: e.target.value
        }))
    }

    const [level2, setLevel2] = useState('High School')

    const handleChange4 = (e) => {
        setDetails(details => ({
            ...details, academic_year: e.target.value
        }))
        setLevel2(e.target.value)
    };

    const handleChange9 = (e) => {
        setDetails(details => ({
            ...details, paper_format: e.target.value
        }))
    };

    const handleSpacing = (e) => {
        setSpacing(e.target.value)
    }

    const instructionRef = useRef();
    
    const incrementCount = (event) =>{
        event.preventDefault()
        setCount(count => count + 1,)
    };

    const incrementCount1 = (event) =>{
        event.preventDefault()
        setCount1(count1 => count1 + 1,)
    };

    const incrementCount2 = (event) =>{
        event.preventDefault()
        setCount2(count2 => count2 + 1,)
    };

    const incrementCount3 = (event) =>{
        event.preventDefault()
        setCount3(count3 => count3 + 1,)
    };

    const decrementCount = (event) =>{
        event.preventDefault()
        setCount(count => Math.max(count - 1, 0))
    };

    const decrementCount1 = (event) =>{
        event.preventDefault()
        setCount1(count1 => Math.max(count1 - 1, 0))
    };

    const decrementCount2 = (event) =>{
        event.preventDefault()
        setCount2(count2 => Math.max(count2 - 1, 0))
    };

    const decrementCount3 = (event) =>{
        event.preventDefault()
        setCount3(count3 => Math.max(count3 - 1, 0))
    };

    const handleChange15 = (e) => {
        setDetails(details => ({
            ...details, deadline: e.target.value
        }))
    };

    const handleTaskChange = (e) => {
        e.preventDefault()
        setDetails(details => ({
            ...details, task_size: e.target.value
        }))
    }

    const handleChange23 = (e) => {
        setDetails(details => ({
            ...details, paper_level: e.target.value
        }))
    };

    const [redirect, setRedirect] = useState(false);

    let pageStyle, chartStyle, slideStyle, levelStyle, titleStyle, paperStyle, subjectStyle, paperLevelStyle, totalStyle, progStyle;

    if (count < 1 || details.order_type === 'Programming' || details.order_type === 'Calculations') {
        pageStyle = {
            display: 'None'
        }
    }
    if (count2 < 1 || details.order_type === 'Programming' || details.order_type === 'Calculations') {
        chartStyle = {
            display: 'None'
        }
    } 
    if (count3 < 1 || details.order_type === 'Programming' || details.order_type === 'Calculations') {
        slideStyle = {
            display: 'None'
        }
    }

    if (details.title === '' || details.order_type === 'Programming' || details.order_type === 'Calculations') {
        titleStyle = {
            display: 'None'
        }
    }
    if (details.paper_type === '' || details.order_type === 'Programming' || details.order_type === 'Calculations') {
        paperStyle = {
            display: 'None'
        }
    }
    if (details.subject === '' || details.order_type === 'Programming' || details.order_type === 'Calculations') {
        subjectStyle = {
            display: 'None'
        }
    }
    if (details.paper_level === 'Basic' || details.order_type === 'Programming' || details.paper_level === '' || details.order_type === 'Calculations'){
        paperLevelStyle = {
            display: 'None'
        }
    }
    if(native){
        paperLevelStyle = {
            display: 'block'
        }
    }
    if (count < 1 && count2 < 1 && count3 < 1){
        paperLevelStyle = {
            display: 'None'
        }
    }

    if (count < 1 && count2 < 1 && count3 < 1 && details.paper_level === 'Basic'){
        totalStyle = {
            display: 'None'
        }
    }
    if (details.order_type === 'Academics'){
        progStyle = {
            display: 'none'
        }
    }

    let smartpaperstyle, samplestyle, sourcestyle;

    if(!smartpaper){
        smartpaperstyle = {
            display: 'none'
        }
    }
    if(!sources){
        sourcestyle = {
            display: 'none'
        }
    }
    if(!samples){
        samplestyle = {
            display: 'none'
        }
    }

    // Perform pricing
    let spacing_value;

    function nativespeakerSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '8h':
                    return (10.20).toFixed(2)
                case details.deadline === '24h':
                    return (8.10).toFixed(2)
                case details.deadline === '2d':
                    return (7.20).toFixed(2)
                case details.deadline === '3d':
                    return (6.00).toFixed(2)
                case details.deadline === '5d':
                    return (5.40).toFixed(2)
                case details.deadline === '7d':
                    return (4.80).toFixed(2)
                case details.deadline === '14d':
                    return (3.00).toFixed(2)
                default:
                    return 0
            }
        }else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '8h':
                    return (11.70).toFixed(2)
                case details.deadline === '24h':
                    return (9.00).toFixed(2)
                case details.deadline === '2d':
                    return (7.80).toFixed(2)
                case details.deadline === '3d':
                    return (7.20).toFixed(2)
                case details.deadline === '5d':
                    return (5.70).toFixed(2)
                case details.deadline === '7d':
                    return (5.10).toFixed(2)
                case details.deadline === '14d':
                    return (4.50).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '8h':
                    return (12.30).toFixed(2)
                case details.deadline === '24h':
                    return (9.60).toFixed(2)
                case details.deadline === '2d':
                    return (9.00).toFixed(2)
                case details.deadline === '3d':
                    return (8.40).toFixed(2)
                case details.deadline === '5d':
                    return (6.90).toFixed(2)
                case details.deadline === '7d':
                    return (6.30).toFixed(2)
                case details.deadline === '14d':
                    return (6.00).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '8h':
                    return (7.50).toFixed(2)
                case details.deadline === '24h':
                    return (8.10).toFixed(2)
                case details.deadline === '2d':
                    return (8.70).toFixed(2)
                case details.deadline === '3d':
                    return (9.90).toFixed(2)
                case details.deadline === '5d':
                    return (10.80).toFixed(2)
                case details.deadline === '7d':
                    return (11.70).toFixed(2)
                case details.deadline === '14d':
                    return (14.40).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '8h':
                    return (8.70).toFixed(2)
                case details.deadline === '24h':
                    return (9.30).toFixed(2)
                case details.deadline === '2d':
                    return (10.50).toFixed(2)
                case details.deadline === '3d':
                    return (11.10).toFixed(2)
                case details.deadline === '5d':
                    return (13.50).toFixed(2)
                case details.deadline === '7d':
                    return (15.00).toFixed(2)
                case details.deadline === '14d':
                    return (17.40).toFixed(2)
                default:
                    return 0
            }
        }
    }


    function smartpaperSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4h':
                    return (15.60).toFixed(2)
                case details.deadline === '8h':
                    return (13.60).toFixed(2)
                case details.deadline === '24h':
                    return (10.80).toFixed(2)
                case details.deadline === '2d':
                    return (9.60).toFixed(2)
                case details.deadline === '3d':
                    return (8.00).toFixed(2)
                case details.deadline === '5d':
                    return (7.20).toFixed(2)
                case details.deadline === '7d':
                    return (6.40).toFixed(2)
                case details.deadline === '14d':
                    return (4.00).toFixed(2)
                default:
                    return 0
            }
        }else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4h':
                    return (17.20).toFixed(2)
                case details.deadline === '8h':
                    return (15.60).toFixed(2)
                case details.deadline === '24h':
                    return (12.00).toFixed(2)
                case details.deadline === '2d':
                    return (10.40).toFixed(2)
                case details.deadline === '3d':
                    return (9.60).toFixed(2)
                case details.deadline === '5d':
                    return (7.60).toFixed(2)
                case details.deadline === '7d':
                    return (6.80).toFixed(2)
                case details.deadline === '14d':
                    return (6.00).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4h':
                    return (20.40).toFixed(2)
                case details.deadline === '8h':
                    return (16.40).toFixed(2)
                case details.deadline === '24h':
                    return (12.80).toFixed(2)
                case details.deadline === '2d':
                    return (12.00).toFixed(2)
                case details.deadline === '3d':
                    return (11.20).toFixed(2)
                case details.deadline === '5d':
                    return (9.20).toFixed(2)
                case details.deadline === '7d':
                    return (8.40).toFixed(2)
                case details.deadline === '14d':
                    return (8.00).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4h':
                    return (24.40).toFixed(2)
                case details.deadline === '8h':
                    return (19.20).toFixed(2)
                case details.deadline === '24h':
                    return (15.60).toFixed(2)
                case details.deadline === '2d':
                    return (14.40).toFixed(2)
                case details.deadline === '3d':
                    return (13.20).toFixed(2)
                case details.deadline === '5d':
                    return (11.60).toFixed(2)
                case details.deadline === '7d':
                    return (10.80).toFixed(2)
                case details.deadline === '14d':
                    return (10.00).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4h':
                    return (29.20).toFixed(2)
                case details.deadline === '8h':
                    return (23.20).toFixed(2)
                case details.deadline === '24h':
                    return (20.00).toFixed(2)
                case details.deadline === '2d':
                    return (18.00).toFixed(2)
                case details.deadline === '3d':
                    return (14.80).toFixed(2)
                case details.deadline === '5d':
                    return (14.00).toFixed(2)
                case details.deadline === '7d':
                    return (12.40).toFixed(2)
                case details.deadline === '14d':
                    return (11.60).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function pageSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4h':
                    if(spacing === 'single'){
                        spacing_value = (39 * 2).toFixed(2)
                        return (count * 39 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (39).toFixed(2)
                        return (count * 39).toFixed(2)
                    }
                    break;
                case details.deadline === '8h':
                    if(spacing === 'single'){
                        spacing_value = (34 * 2).toFixed(2)
                        return (count * 34 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (34).toFixed(2)
                        return (count * 34).toFixed(2)
                    }
                    break;
                case details.deadline === '24h':
                    if(spacing === 'single'){
                        spacing_value = (27 * 2).toFixed(2)
                        return (count * 27 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (27).toFixed(2)
                        return (count * 27).toFixed(2)
                    }
                    break;
                case details.deadline === '2d':
                    if(spacing === 'single'){
                        spacing_value = (24 * 2).toFixed(2)
                        return (count * 24 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (24).toFixed(2)
                        return (count * 24).toFixed(2)
                    }
                    break;
                case details.deadline === '3d':
                    if(spacing === 'single'){
                        spacing_value = (20 * 2).toFixed(2)
                        return (count * 20 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (20).toFixed(2)
                        return (count * 20).toFixed(2)
                    }
                    break;
                case details.deadline === '5d':
                    if(spacing === 'single'){
                        spacing_value = (18 * 2).toFixed(2)
                        return (count * 18 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (18).toFixed(2)
                        return (count * 18).toFixed(2)
                    }
                    break;
                case details.deadline === '7d':
                    if(spacing === 'single'){
                        spacing_value = (16 * 2).toFixed(2)
                        return (count * 16 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (16).toFixed(2)
                        return (count * 16).toFixed(2)
                    }
                    break;
                case details.deadline === '14d':
                    if(spacing === 'single'){
                        spacing_value = (10 * 2).toFixed(2)
                        return (count * 10 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (10).toFixed(2)
                        return (count * 10).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4h':
                    if(spacing === 'single'){
                        spacing_value = (43 * 2).toFixed(2)
                        return (count * 43 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (43).toFixed(2)
                        return (count * 43).toFixed(2)
                    }
                    break;
                case details.deadline === '8h':
                    if(spacing === 'single'){
                        spacing_value = (39 * 2).toFixed(2)
                        return (count * 39 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (39).toFixed(2)
                        return (count * 39).toFixed(2)
                    }
                    break;
                case details.deadline === '24h':
                    if(spacing === 'single'){
                        spacing_value = (30 * 2).toFixed(2)
                        return (count * 30 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (30).toFixed(2)
                        return (count * 30).toFixed(2)
                    }
                    break;
                case details.deadline === '2d':
                    if(spacing === 'single'){
                        spacing_value = (26 * 2).toFixed(2)
                        return (count * 26 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (26).toFixed(2)
                        return (count * 26).toFixed(2)
                    }
                    break;
                case details.deadline === '3d':
                    if(spacing === 'single'){
                        spacing_value = (24 * 2).toFixed(2)
                        return (count * 24 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (24).toFixed(2)
                        return (count * 24).toFixed(2)
                    }
                    break;
                case details.deadline === '5d':
                    if(spacing === 'single'){
                        spacing_value = (19 * 2).toFixed(2)
                        return (count * 19 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (19).toFixed(2)
                        return (count * 19).toFixed(2)
                    }
                    break;
                case details.deadline === '7d':
                    if(spacing === 'single'){
                        spacing_value = (17 * 2).toFixed(2)
                        return (count * 17 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (17).toFixed(2)
                        return (count * 17).toFixed(2)
                    }
                    break;
                case details.deadline === '14d':
                    if(spacing === 'single'){
                        spacing_value = (15 * 2).toFixed(2)
                        return (count * 15 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (15).toFixed(2)
                        return (count * 15).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4h':
                    if(spacing === 'single'){
                        spacing_value = (51 * 2).toFixed(2)
                        return (count * 51 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (51).toFixed(2)
                        return (count * 51).toFixed(2)
                    }
                    break;
                case details.deadline === '8h':
                    if(spacing === 'single'){
                        spacing_value = (41 * 2).toFixed(2)
                        return (count * 41 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (41).toFixed(2)
                        return (count * 41).toFixed(2)
                    }
                    break;
                case details.deadline === '24h':
                    if(spacing === 'single'){
                        spacing_value = (32 * 2).toFixed(2)
                        return (count * 32 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (32).toFixed(2)
                        return (count * 32).toFixed(2)
                    }
                    break;
                case details.deadline === '2d':
                    if(spacing === 'single'){
                        spacing_value = (30 * 2).toFixed(2)
                        return (count * 30 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (30).toFixed(2)
                        return (count * 30).toFixed(2)
                    }
                    break;
                case details.deadline === '3d':
                    if(spacing === 'single'){
                        spacing_value = (28 * 2).toFixed(2)
                        return (count * 28 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (28).toFixed(2)
                        return (count * 28).toFixed(2)
                    }
                    break;
                case details.deadline === '5d':
                    if(spacing === 'single'){
                        spacing_value = (23 * 2).toFixed(2)
                        return (count * 23 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (23).toFixed(2)
                        return (count * 23).toFixed(2)
                    }
                    break;
                case details.deadline === '7d':
                    if(spacing === 'single'){
                        spacing_value = (21 * 2).toFixed(2)
                        return (count * 21 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (21).toFixed(2)
                        return (count * 21).toFixed(2)
                    }
                    break;
                case details.deadline === '14d':
                    if(spacing === 'single'){
                        spacing_value = (20 * 2).toFixed(2)
                        return (count * 20 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (20).toFixed(2)
                        return (count * 20).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4h':
                    if(spacing === 'single'){
                        spacing_value = (61 * 2).toFixed(2)
                        return (count * 61 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (61).toFixed(2)
                        return (count * 61).toFixed(2)
                    }
                    break;
                case details.deadline === '8h':
                    if(spacing === 'single'){
                        spacing_value = (48 * 2).toFixed(2)
                        return (count * 48 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (48).toFixed(2)
                        return (count * 48).toFixed(2)
                    }
                    break;
                case details.deadline === '24h':
                    if(spacing === 'single'){
                        spacing_value = (39 * 2).toFixed(2)
                        return (count * 39 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (39).toFixed(2)
                        return (count * 39).toFixed(2)
                    }
                    break;
                case details.deadline === '2d':
                    if(spacing === 'single'){
                        spacing_value = (36 * 2).toFixed(2)
                        return (count * 36 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (36).toFixed(2)
                        return (count * 36).toFixed(2)
                    }
                    break;
                case details.deadline === '3d':
                    if(spacing === 'single'){
                        spacing_value = (33 * 2).toFixed(2)
                        return (count * 33 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (33).toFixed(2)
                        return (count * 33).toFixed(2)
                    }
                    break;
                case details.deadline === '5d':
                    if(spacing === 'single'){
                        return (count * 29 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        return (count * 29).toFixed(2)
                    }
                    break;
                case details.deadline === '7d':
                    if(spacing === 'single'){
                        spacing_value = (27 * 2).toFixed(2)
                        return (count * 27 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (27).toFixed(2)
                        return (count * 27).toFixed(2)
                    }
                    break;
                case details.deadline === '14d':
                    if(spacing === 'single'){
                        spacing_value = (25 * 2).toFixed(2)
                        return (count * 25 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (25).toFixed(2)
                        return (count * 25).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4h':
                    if(spacing === 'single'){
                        spacing_value = (73 * 2).toFixed(2)
                        return (count * 73 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (73).toFixed(2)
                        return (count * 73).toFixed(2)
                    }
                    break;
                case details.deadline === '8h':
                    if(spacing === 'single'){
                        spacing_value = (58 * 2).toFixed(2)
                        return (count * 58 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (58).toFixed(2)
                        return (count * 58).toFixed(2)
                    }
                    break;
                case details.deadline === '24h':
                    if(spacing === 'single'){
                        spacing_value = (50 * 2).toFixed(2)
                        return (count * 50 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (50).toFixed(2)
                        return (count * 50).toFixed(2)
                    }
                    break;
                case details.deadline === '2d':
                    if(spacing === 'single'){
                        spacing_value = (45 * 2).toFixed(2)
                        return (count * 45 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (45).toFixed(2)
                        return (count * 45).toFixed(2)
                    }
                    break;
                case details.deadline === '3d':
                    if(spacing === 'single'){
                        spacing_value = (37 * 2).toFixed(2)
                        return (count * 37 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (37).toFixed(2)
                        return (count * 37).toFixed(2)
                    }
                    break;
                case details.deadline === '5d':
                    if(spacing === 'single'){
                        spacing_value = (35 * 2).toFixed(2)
                        return (count * 35 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (35).toFixed(2)
                        return (count * 35).toFixed(2)
                    }
                    break;
                case details.deadline === '7d':
                    if(spacing === 'single'){
                        spacing_value = (31 * 2).toFixed(2)
                        return (count * 31 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (31).toFixed(2)
                        return (count * 31).toFixed(2)
                    }
                    break;
                case details.deadline === '14d':
                    if(spacing === 'single'){
                        spacing_value = (29 * 2).toFixed(2)
                        return (count * 29 * 2).toFixed(2)
                    }else if(spacing === 'double'){
                        spacing_value = (29).toFixed(2)
                        return (count * 29).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        }
    }

    function chartSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4h':
                    return (count2 * 39/2).toFixed(2)
                case details.deadline === '8h':
                    return (count2 * 34/2).toFixed(2)
                case details.deadline === '24h':
                    return (count2 * 27/2).toFixed(2)
                case details.deadline === '2d':
                    return (count2 * 24/2).toFixed(2)
                case details.deadline === '3d':
                    return (count2 * 20/2).toFixed(2)
                case details.deadline === '5d':
                    return (count2 * 18/2).toFixed(2)
                case details.deadline === '7d':
                    return (count2 * 16/2).toFixed(2)
                case details.deadline === '14d':
                    return (count2 * 10/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4h':
                    return (count2 * 43/2).toFixed(2)
                case details.deadline === '8h':
                    return (count2 * 39/2).toFixed(2)
                case details.deadline === '24h':
                    return (count2 * 30/2).toFixed(2)
                case details.deadline === '2d':
                    return (count2 * 26/2).toFixed(2)
                case details.deadline === '3d':
                    return (count2 * 24/2).toFixed(2)
                case details.deadline === '5d':
                    return (count2 * 19/2).toFixed(2)
                case details.deadline === '7d':
                    return (count2 * 17/2).toFixed(2)
                case details.deadline === '14d':
                    return (count2 * 15/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4h':
                    return (count2 * 51/2).toFixed(2)
                case details.deadline === '8h':
                    return (count2 * 41/2).toFixed(2)
                case details.deadline === '24h':
                    return (count2 * 32/2).toFixed(2)
                case details.deadline === '2d':
                    return (count2 * 30/2).toFixed(2)
                case details.deadline === '3d':
                    return (count2 * 28/2).toFixed(2)
                case details.deadline === '5d':
                    return (count2 * 23/2).toFixed(2)
                case details.deadline === '7d':
                    return (count2 * 21/2).toFixed(2)
                case details.deadline === '14d':
                    return (count2 * 20/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4h':
                    return (count2 * 61/2).toFixed(2)
                case details.deadline === '8h':
                    return (count2 * 48/2).toFixed(2)
                case details.deadline === '24h':
                    return (count2 * 39/2).toFixed(2)
                case details.deadline === '2d':
                    return (count2 * 36/2).toFixed(2)
                case details.deadline === '3d':
                    return (count2 * 33/2).toFixed(2)
                case details.deadline === '5d':
                    return (count2 * 29/2).toFixed(2)
                case details.deadline === '7d':
                    return (count2 * 27/2).toFixed(2)
                case details.deadline === '14d':
                    return (count2 * 25/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4h':
                    return (count2 * 73/2).toFixed(2)
                case details.deadline === '8h':
                    return (count2 * 58/2).toFixed(2)
                case details.deadline === '24h':
                    return (count2 * 50/2).toFixed(2)
                case details.deadline === '2d':
                    return (count2 * 45/2).toFixed(2)
                case details.deadline === '3d':
                    return (count2 * 37/2).toFixed(2)
                case details.deadline === '5d':
                    return (count2 * 35/2).toFixed(2)
                case details.deadline === '7d':
                    return (count2 * 31/2).toFixed(2)
                case details.deadline === '14d':
                    return (count2 * 29/2).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function slideSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4h':
                    return (count3 * 39/2).toFixed(2)
                case details.deadline === '8h':
                    return (count3 * 34/2).toFixed(2)
                case details.deadline === '24h':
                    return (count3 * 27/2).toFixed(2)
                case details.deadline === '2d':
                    return (count3 * 24/2).toFixed(2)
                case details.deadline === '3d':
                    return (count3 * 20/2).toFixed(2)
                case details.deadline === '5d':
                    return (count3 * 18/2).toFixed(2)
                case details.deadline === '7d':
                    return (count3 * 16/2).toFixed(2)
                case details.deadline === '14d':
                    return (count3 * 10/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4h':
                    return (count3 * 43/2).toFixed(2)
                case details.deadline === '8h':
                    return (count3 * 39/2).toFixed(2)
                case details.deadline === '24h':
                    return (count3 * 30/2).toFixed(2)
                case details.deadline === '2d':
                    return (count3 * 26/2).toFixed(2)
                case details.deadline === '3d':
                    return (count3 * 24/2).toFixed(2)
                case details.deadline === '5d':
                    return (count3 * 19/2).toFixed(2)
                case details.deadline === '7d':
                    return (count3 * 17/2).toFixed(2)
                case details.deadline === '14d':
                    return (count3 * 15/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4h':
                    return (count3 * 51/2).toFixed(2)
                case details.deadline === '8h':
                    return (count3 * 41/2).toFixed(2)
                case details.deadline === '24h':
                    return (count3 * 32/2).toFixed(2)
                case details.deadline === '2d':
                    return (count3 * 30/2).toFixed(2)
                case details.deadline === '3d':
                    return (count3 * 28/2).toFixed(2)
                case details.deadline === '5d':
                    return (count3 * 23/2).toFixed(2)
                case details.deadline === '7d':
                    return (count3 * 21/2).toFixed(2)
                case details.deadline === '14d':
                    return (count3 * 20/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4h':
                    return (count3 * 61/2).toFixed(2)
                case details.deadline === '8h':
                    return (count3 * 48/2).toFixed(2)
                case details.deadline === '24h':
                    return (count3 * 39/2).toFixed(2)
                case details.deadline === '2d':
                    return (count3 * 36/2).toFixed(2)
                case details.deadline === '3d':
                    return (count3 * 33/2).toFixed(2)
                case details.deadline === '5d':
                    return (count3 * 29/2).toFixed(2)
                case details.deadline === '7d':
                    return (count3 * 27/2).toFixed(2)
                case details.deadline === '14d':
                    return (count3 * 25/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4h':
                    return (count3 * 73/2).toFixed(2)
                case details.deadline === '8h':
                    return (count3 * 58/2).toFixed(2)
                case details.deadline === '24h':
                    return (count3 * 50/2).toFixed(2)
                case details.deadline === '2d':
                    return (count3 * 45/2).toFixed(2)
                case details.deadline === '3d':
                    return (count3 * 37/2).toFixed(2)
                case details.deadline === '5d':
                    return (count3 * 35/2).toFixed(2)
                case details.deadline === '7d':
                    return (count3 * 31/2).toFixed(2)
                case details.deadline === '14d':
                    return (count3 * 29/2).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function pagepreferencePrice(){
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (count * 9.75).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 8.50).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 6.75).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 6.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 5.00).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 4.50).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 4.00).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 2.50).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 13.60).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 10.80).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 9.60).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 8.00).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 7.20).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 6.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 4.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (count * 10.75).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 9.75).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 7.50).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 6.50).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 6.00).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 4.75).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 4.25).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 3.75).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (count * 17.20).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 12.00).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 10.40).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 9.60).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 7.60).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 6.80).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 6.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (count * 12.75).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 10.25).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 8.00).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 7.50).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 7.00).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 5.75).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 5.25).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 5.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (count * 20.40).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 16.40).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 12.80).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 12.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 11.20).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 9.20).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 8.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 8.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (count * 15.25).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 12.00).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 9.75).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 9.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 8.25).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 7.25).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 6.75).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 6.25).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (count * 24.40).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 19.20).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 14.40).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 13.20).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 11.60).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 10.80).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 10.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (count * 18.25).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 14.50).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 12.50).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 11.25).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 9.25).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 8.75).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 7.75).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 7.25).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (count * 29.20).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 23.20).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 20.00).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 18.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 14.80).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 14.00).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 12.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 11.60).toFixed(2)
                    default:
                        return 0
                }
            }
    }

    function chartpreferencePrice(){
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (count2 * 9.75/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count2 * 8.50/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count2 * 6.75/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count2 * 6.00/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count2 * 5.00/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count2 * 4.50/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count2 * 4.00/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count2 * 2.50/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 13.60).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 10.80).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 9.60).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 8.00).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 7.20).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 6.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 4.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (count2 * 10.75/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count2 * 9.75/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count2 * 7.50/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count2 * 6.50/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count2 * 6.00/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count2 * 4.75/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count2 * 4.25/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count2 * 3.75/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (count * 17.20).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 12.00).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 10.40).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 9.60).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 7.60).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 6.80).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 6.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (count2 * 12.75/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count2 * 10.25/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count2 * 8.00/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count2 * 7.50/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count2 * 7.00/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count2 * 5.75/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count2 * 5.25/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count2 * 5.00/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (count * 20.40).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 16.40).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 12.80).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 12.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 11.20).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 9.20).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 8.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 8.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (count2 * 15.25/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count2 * 12.00/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count2 * 9.75/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count2 * 9.00/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count2 * 8.25/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count2 * 7.25/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count2 * 6.75/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count2 * 6.25/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (count * 24.40).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 19.20).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 14.40).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 13.20).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 11.60).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 10.80).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 10.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (count2 * 18.25/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count2 * 14.50/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count2 * 12.50/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count2 * 11.25/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count2 * 9.25/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count2 * 8.75/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count2 * 7.75/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count2 * 7.25/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (count * 29.20).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 23.20).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 20.00).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 18.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 14.80).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 14.00).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 12.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 11.60).toFixed(2)
                    default:
                        return 0
                }
            }
    }

    function slidepreferencePrice(){
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (count3 * 9.75/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count3 * 8.50/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count3 * 6.75/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count3 * 6.00/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count3 * 5.00/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count3 * 4.50/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count3 * 4.00/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count3 * 2.50/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'High School'){
                    case details.deadline === '4h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 13.60).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 10.80).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 9.60).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 8.00).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 7.20).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 6.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 4.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (count3 * 10.75/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count3 * 9.75/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count3 * 7.50/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count3 * 6.50/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count3 * 6.00/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count3 * 4.75/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count3 * 4.25/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count3 * 3.75/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Undergraduate (years 1-2)'){
                    case details.deadline === '4h':
                        return (count * 17.20).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 12.00).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 10.40).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 9.60).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 7.60).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 6.80).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 6.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (count3 * 12.75/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count3 * 10.25/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count3 * 8.00/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count3 * 7.50/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count3 * 7.00/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count3 * 5.75/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count3 * 5.25/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count3 * 5.00/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Undergarduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Undergraduate (years 3-4)'){
                    case details.deadline === '4h':
                        return (count * 20.40).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 16.40).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 12.80).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 12.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 11.20).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 9.20).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 8.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 8.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (count3 * 15.25/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count3 * 12.00/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count3 * 9.75/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count3 * 9.00/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count3 * 8.25/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count3 * 7.25/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count3 * 6.75/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count3 * 6.25/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            }else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'Graduate'){
                    case details.deadline === '4h':
                        return (count * 24.40).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 19.20).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 15.60).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 14.40).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 13.20).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 11.60).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 10.80).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 10.00).toFixed(2)
                    default:
                        return 0
                }
            }
            if (details.paper_level === 'Standard'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (count3 * 18.25/2).toFixed(2)
                    case details.deadline === '8h':
                        return (count3 * 14.50/2).toFixed(2)
                    case details.deadline === '24h':
                        return (count3 * 12.50/2).toFixed(2)
                    case details.deadline === '2d':
                        return (count3 * 11.25/2).toFixed(2)
                    case details.deadline === '3d':
                        return (count3   * 9.25/2).toFixed(2)
                    case details.deadline === '5d':
                        return (count3 * 8.75/2).toFixed(2)
                    case details.deadline === '7d':
                        return (count3 * 7.75/2).toFixed(2)
                    case details.deadline === '14d':
                        return (count3 * 7.25/2).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Basic'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (0.00).toFixed(2)
                    case details.deadline === '8h':
                        return (0.00).toFixed(2)
                    case details.deadline === '24h':
                        return (0.00).toFixed(2)
                    case details.deadline === '2d':
                        return (0.00).toFixed(2)
                    case details.deadline === '3d':
                        return (0.00).toFixed(2)
                    case details.deadline === '5d':
                        return (0.00).toFixed(2)
                    case details.deadline === '7d':
                        return (0.00).toFixed(2)
                    case details.deadline === '14d':
                        return (0.00).toFixed(2)
                    default:
                        return 0
                }
            } else if (details.paper_level === 'Advanced'){
                switch(details.academic_year === 'PhD'){
                    case details.deadline === '4h':
                        return (count * 29.20).toFixed(2)
                    case details.deadline === '8h':
                        return (count * 23.20).toFixed(2)
                    case details.deadline === '24h':
                        return (count * 20.00).toFixed(2)
                    case details.deadline === '2d':
                        return (count * 18.00).toFixed(2)
                    case details.deadline === '3d':
                        return (count * 14.80).toFixed(2)
                    case details.deadline === '5d':
                        return (count * 14.00).toFixed(2)
                    case details.deadline === '7d':
                        return (count * 12.40).toFixed(2)
                    case details.deadline === '14d':
                        return (count * 11.60).toFixed(2)
                    default:
                        return 0
                }
            }
    }

    // Programming pricing

    function programmingPricing(){
        if (details.task_size === 'Extra small'){
            switch(details.task_size === 'Extra small'){
                case details.deadline === '24h':
                    return (45).toFixed(2)
                case details.deadline === '2d':
                    return (39).toFixed(2)
                case details.deadline === '3d':
                    return (34.50).toFixed(2)
                case details.deadline === '5d':
                    return (31.50).toFixed(2)
                case details.deadline === '7d':
                    return (30).toFixed(2)
                case details.deadline === '14d':
                    return (28.50).toFixed(2)
                default:
                    return 0
            }
        }else if(details.task_size === 'Small'){
            switch(details.task_size === 'Small'){
                case details.deadline === '24h':
                    return (97.5).toFixed(2)
                case details.deadline === '2d':
                    return (84.5).toFixed(2)
                case details.deadline === '3d':
                    return (74.75).toFixed(2)
                case details.deadline === '5d':
                    return (68.25).toFixed(2)
                case details.deadline === '7d':
                    return (65.00).toFixed(2)
                case details.deadline === '14d':
                    return (61.75).toFixed(2)
                default:
                    return 0
            }
        }else if (details.task_size === 'Medium'){
            switch(details.task_size === 'Medium'){
                case details.deadline === '24h':
                    return (187.5).toFixed(2)
                case details.deadline === '2d':
                    return (162.5).toFixed(2)
                case details.deadline === '3d':
                    return (143.75).toFixed(2)
                case details.deadline === '5d':
                    return (131.25).toFixed(2)
                case details.deadline === '7d':
                    return (125.00).toFixed(2)
                case details.deadline === '14d':
                    return (118.75).toFixed(2)
                default:
                    return 0
            }
        }else if (details.task_size === 'Large'){
            switch(details.task_size === 'Large'){
                case details.deadline === '24h':
                    return (360).toFixed(2)
                case details.deadline === '2d':
                    return (312).toFixed(2)
                case details.deadline === '3d':
                    return (276).toFixed(2)
                case details.deadline === '5d':
                    return (252).toFixed(2)
                case details.deadline === '7d':
                    return (240).toFixed(2)
                case details.deadline === '14d':
                    return (228).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function calculationsPricing(){
        if (details.task_size === 'Extra small'){
            switch(details.task_size === 'Extra small'){
                case details.deadline === '24h':
                    return (37.50).toFixed(2)
                case details.deadline === '2d':
                    return (32.50).toFixed(2)
                case details.deadline === '3d':
                    return (28.75).toFixed(2)
                case details.deadline === '5d':
                    return (26.25).toFixed(2)
                case details.deadline === '7d':
                    return (25.00).toFixed(2)
                case details.deadline === '14d':
                    return (23.75).toFixed(2)
                default:
                    return 0
            }
        }else if(details.task_size === 'Small'){
            switch(details.task_size === 'Small'){
                case details.deadline === '24h':
                    return (82.5).toFixed(2)
                case details.deadline === '2d':
                    return (71.5).toFixed(2)
                case details.deadline === '3d':
                    return (63.25).toFixed(2)
                case details.deadline === '5d':
                    return (57.75).toFixed(2)
                case details.deadline === '7d':
                    return (55.00).toFixed(2)
                case details.deadline === '14d':
                    return (52.25).toFixed(2)
                default:
                    return 0
            }
        }else if (details.task_size === 'Medium'){
            switch(details.task_size === 'Medium'){
                case details.deadline === '24h':
                    return (165).toFixed(2)
                case details.deadline === '2d':
                    return (143).toFixed(2)
                case details.deadline === '3d':
                    return (126.5).toFixed(2)
                case details.deadline === '5d':
                    return (115.5).toFixed(2)
                case details.deadline === '7d':
                    return (110).toFixed(2)
                case details.deadline === '14d':
                    return (104.5).toFixed(2)
                default:
                    return 0
            }
        }else if (details.task_size === 'Large'){
            switch(details.task_size === 'Large'){
                case details.deadline === '24h':
                    return (300).toFixed(2)
                case details.deadline === '2d':
                    return (260).toFixed(2)
                case details.deadline === '3d':
                    return (230).toFixed(2)
                case details.deadline === '5d':
                    return (210).toFixed(2)
                case details.deadline === '7d':
                    return (200).toFixed(2)
                case details.deadline === '14d':
                    return (190).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function nativeSwitch(){
        if(native){
            return nativespeakerSwitch()
        }else{
            return 0
        }
    }

    function totalpreferencePrice(){

        let pagepreference = pagepreferencePrice()
        let chartpreference = chartpreferencePrice()
        let slidepreference = slidepreferencePrice()
        let nativespeakerprice = nativeSwitch()

        if(count && count2 && count3){
            return (parseFloat(pagepreference) + parseFloat(chartpreference) + parseFloat(slidepreference) + parseFloat(nativespeakerprice)).toFixed(2)
        }else if (count && count2){
            return (parseFloat(pagepreference) + parseFloat(chartpreference) + parseFloat(nativespeakerprice)).toFixed(2)
        } else if(count && count3){
            return (parseFloat(pagepreference) + parseFloat(slidepreference) + parseFloat(nativespeakerprice)).toFixed(2)
        } else if(count2 && count3){
            return (parseFloat(chartpreference) + parseFloat(slidepreference) + parseFloat(nativespeakerprice)).toFixed(2)
        } else if(count){
            return (parseFloat(pagepreference) + parseFloat(nativespeakerprice)).toFixed(2)
        } else if(count2){
            return chartpreference + parseFloat(nativespeakerprice)
        } else if (count3){
            return slidepreference + parseFloat(nativespeakerprice)
        }else{
            return nativespeakerprice
        }
    }

    function sourceSwitch(){
        if(sources){
            return (14.95).toFixed(2)
        }else{
            return 0
        }
    }

    function sampleSwitch(){
        if(samples){
            return (5.00).toFixed(2)
        }else{
            return 0
        }
    }

    function smartSwitch(){
        if(smartpaper){
            return smartpaperSwitch()
        }else{
            return 0
        }
    }

    function totalPrice(){
        let pagePrice = pageSwitch()
        let chartPrice = chartSwitch()
        let slidePrice = slideSwitch()
        let totalpreference = totalpreferencePrice()
        let totalprog = programmingPricing()
        let totalcalc = calculationsPricing()
        let smartpaperprice = smartSwitch()
        let sourceprice = sourceSwitch()
        let samplesprice = sampleSwitch()
        let totalPrice;

        if (details.order_type === 'Academics'){
            totalPrice = parseFloat(pagePrice) + parseFloat(chartPrice) + parseFloat(slidePrice) + parseFloat(totalpreference) + parseFloat(smartpaperprice) + parseFloat(sourceprice) + parseFloat(samplesprice)
            return totalPrice.toFixed(2)
        }else if(details.order_type === 'Programming'){
            totalPrice = parseFloat(totalprog)
            return totalPrice.toFixed(2)
        }else if(details.order_type === 'Calculations'){
            totalPrice = parseFloat(totalcalc)
            return totalPrice.toFixed(2)
        }
    }
    let price = totalPrice()

    useEffect(() => {
        if (price > 0){
            setDetails(prevState => ({
                ...prevState, amount: price
            }))
        }
    }, [price])

    const [ref, setref] = useState('');
    const token_exist = localStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        // const uploadData = new FormData();
        // uploadData.append('requirement.instruction_file', details.requirement.instruction_file, details.requirement.instruction_file.name)

        if(!token_exist){
            alert('create an account or sign in to proceed')
        }else if (token){
            fetch('https://georgeclientapp.herokuapp.com/orders/summary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(details)
        }).then(
            data => data.json()
        ).then(
            res => setref(res.id)
        ).then(
            () => setRedirect(!redirect)
        ).catch(err => console.log(err))
    }
    };

    const navigate = useNavigate();

    if (redirect) {
        return navigate(`/order/pay/${ref}`, {replace: true})
    }

    let display;

    if (details.order_type === 'Academics'){
        display = (
            <div>
                <div className='level2'>
                        <div className='level4-name'>
                            <h5>Type of paper</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '660px'}}>
                            <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="E.g. Essay" className='select' onChange={e => setDetails(details => ({
                                        ...details, paper_type: e.target.value
                                        }))}>
                                <option className='unselect'>E.g. Essay</option>
                                <option value="Creative Writing">Creative Writing</option>
                                <option value="Essay">Essay</option>
                                <option value="Research Paper">Research Paper</option>
                                <option value="Speech">Speech</option>
                                <option value="Business Plan">Business Plan</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                </div>

                    <div className='level3'>
                        <div className='level4-name'>
                            <h5>Discipline</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '660px'}}>
                            <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="E.g. Economics" className='select' onChange={e => setDetails(details => ({
                                        ...details, subject: e.target.value
                                        }))}>
                                <option className='unselect'>E.g. Economics</option>
                                <option value="Classic ENglish Literature">Classic ENglish Literature</option>
                                <option value="Film & Theatre Studies">Film & Theatre Studies</option>
                                <option value="History">History</option>
                                <option value="Music">Music</option>
                                <option value="Philosophy">Philosophy</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>

                    <div className='level4'>
                        <div className='level4-name'>
                            <h5>Academic level</h5>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='High School'
                                id='highschool'
                                checked={details.academic_year === 'High School'}
                                onChange={handleChange4}
                            />
                            <label for='highschool' style={{padding: '21px'}}>High School</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Undergraduate (years 1-2)'
                                id='undergraduate1'
                                checked={details.academic_year === 'Undergraduate (years 1-2)'}
                                onChange={handleChange4}
                            />
                            <label for='undergraduate1'>Undergraduate (years 1-2)</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Undergraduate (years 3-4)'
                                id='undergraduate2'
                                checked={details.academic_year === 'Undergraduate (years 3-4)'}
                                onChange={handleChange4}
                            />
                            <label for='undergraduate2'>Undergraduate (years 3-4)</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Graduate'
                                id='graduate'
                                checked={details.academic_year === 'Graduate'}
                                onChange={handleChange4}
                            />
                            <label for='graduate' style={{padding: '21px'}}>Graduate</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='PhD'
                                id='phd'
                                checked={details.academic_year === 'PhD'}
                                onChange={handleChange4}
                            />
                            <label for='phd' style={{padding: '21px'}}>PhD</label>
                        </div>
                    </div>

                    <div className='level5'>
                        <div className='level4-name'>
                            <h5>Title</h5>
                        </div>
                        <input style={{width:'660px'}}
                            type='text'
                            placeholder='Enter the title of your paper'
                            value={details.title}
                                onChange={e => setDetails(details => ({
                                    ...details, title: e.target.value
                                }))}
                        />
                    </div>

                    <div className='level6'>
                        <div className='level4-name'>
                            <h5>Paper details</h5>
                        </div>
                        <textarea style={{width:'660px'}}
                            placeholder='Write anything that you feel is important for the writer to consider.'
                            value={details.instructions}
                                onChange={e => setDetails(details => ({
                                    ...details, instructions: e.target.value
                                }))}
                        ></textarea>
                    </div>

                    <div className='level7'>
                        <div className='level4-name'>
                            <h5>Additional materials</h5>
                        </div>
                        <div className='upload'>
                                <input 
                                    ref={instructionRef}
                                    type='file'
                                    onChange={e => setDetails(details => ({
                                        ...details, instruction_file: e.target.files[0]
                                    }))}
                                />
                        </div>
                    </div>

                    <div className='level8'>
                        <div className='level4-name1'>
                            <h5>Paper format</h5>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='MLA'
                                id='MLA'
                                checked={details.paper_format === 'MLA'}
                                onChange={handleChange9}
                            />
                            <label for='MLA' style={{padding: '15px'}}>MLA</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='APA6'
                                id='APA6'
                                checked={details.paper_format === 'APA6'}
                                onChange={handleChange9}
                            />
                            <label for='APA6' style={{padding: '15px'}}>APA 6</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='APA7'
                                id='APA7'
                                checked={details.paper_format === 'APA7'}
                                onChange={handleChange9}
                            />
                            <label for='APA7' style={{padding: '15px'}}>APA 7</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='chicago'
                                id='chicago'
                                checked={details.paper_format === 'chicago'}
                                onChange={handleChange9}
                            />
                            <label for='chicago'>Chicago \ Turabian</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='not applicable'
                                id='not'
                                checked={details.paper_format === 'not applicable'}
                                onChange={handleChange9}
                            />
                            <label for='not'>Not Applicable</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='other'
                                id='other'
                                checked={details.paper_format === 'other'}
                                onChange={handleChange9}
                            />
                            <label for='other' style={{padding: '15px'}}>Other</label>
                        </div>
                    </div>

                    <div className='level9'>
                        <div style={{marginRight: '90px'}}>
                            <h5>Deadline</h5>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='4h'
                                id='4h'
                                checked={details.deadline === '4h'}
                                onChange={handleChange15}
                            />
                            <label for='4h'>4h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='8h'
                                id='8h'
                                checked={details.deadline === '8h'}
                                onChange={handleChange15}
                            />
                            <label for='8h'>8h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='24h'
                                id='24h'
                                checked={details.deadline === '24h'}
                                onChange={handleChange15}
                            />
                            <label for='24h'>24h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='2d'
                                id='2d'
                                checked={details.deadline === '2d'}
                                onChange={handleChange15}
                            />
                            <label for='2d'>2d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='3d'
                                id='3d'
                                checked={details.deadline === '3d'}
                                onChange={handleChange15}
                            />
                            <label for='3d'>3d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='5d'
                                id='5d'
                                checked={details.deadline === '5d'}
                                onChange={handleChange15}
                            />
                            <label for='5d'>5d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='7d'
                                id='7d'
                                checked={details.deadline === '7d'}
                                onChange={handleChange15}
                            />
                            <label for='7d'>7d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='14d'
                                id='14d'
                                checked={details.deadline === '14d'}
                                onChange={handleChange15}
                            />
                            <label for='14d'>14d</label>
                        </div>
                    </div>

                    <div className='level10'>
                        <div style={{marginRight: '110px'}}>
                            <h5>Pages</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount} >-</button>
                            <input type="text" value={count}/>
                            <button onClick={incrementCount}>+</button>
                        </div>
                        <div style={{marginLeft: '50px'}}>
                            <h5>Spacing</h5>
                        </div>
                        <div className='spacing'>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='single'
                                id='single'
                                checked={spacing === 'single'}
                                onChange={handleSpacing}
                            />
                            <label for='single'>Single</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='double'
                                id='double'
                                checked={spacing === 'double'}
                                onChange={handleSpacing}
                            />
                            <label for='double'>Double</label>
                        </div>
                        </div>
                    </div>

                    <div className='level10'>
                        <div style={{marginRight: '75px'}}>
                            <h5>References</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount1} >-</button>
                            <input type="text" value={count1}/>
                            <button onClick={incrementCount1}>+</button>
                        </div>
                    </div>

                    <div className='level10'>
                        <div style={{marginRight: '105px'}}>
                            <h5>Charts</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount2} >-</button>
                            <input type="text" value={count2}/>
                            <button onClick={incrementCount2}>+</button>
                        </div>
                    </div>

                    <div className='level10'>
                        <div style={{marginRight: '30px'}}>
                            <h5>PowerPoint Slides</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount3} >-</button>
                            <input type="text" value={count3}/>
                            <button onClick={incrementCount3}>+</button>
                        </div>
                    </div>

                    <div className='level12'>
                        <div style={{marginRight: '20px'}}>
                            <h5>Writers preferences</h5>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Basic'
                                id='basic'
                                checked={details.academic_year === 'Basic'}
                                onChange={handleChange23}
                            />
                            <label for='basic'>Best Available</label>
                            <label for='basic'>Standard writer</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Standard'
                                id='standard'
                                checked={details.academic_year === 'Standard'}
                                onChange={handleChange23}
                            />
                            <label for='standard'>Advanced<span>+25%</span></label>
                            <label>Expert writer</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Advanced'
                                id='advanced'
                                checked={details.academic_year === 'Advanced'}
                                onChange={handleChange23}
                            />
                            <label for='advanced'>Top 10<span>+40%</span></label>
                            <label>Highest ranked</label>
                        </div>
                    </div>

                    <div className='level11'>
                        <div style={{marginRight: '20px'}}>
                            <h5>Additional Services</h5>
                        </div>
                        <div className='inputs'>
                            <div className='input1'>
                                <input 
                                    type='checkbox'
                                    value='Native speaker'
                                    id='native'
                                    onChange={() => setNative(!native)}
                                />
                                <label for='native'>Native speaker <span style={{marginLeft: '330px'}}>+30%</span></label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='checkbox'
                                    value='Smart paper'
                                    id='smart'
                                    onChange={() => setSmartpaper(!smartpaper)}
                                />
                                <label for='smart'>Smart paper<span style={{marginLeft: '350px'}}>+20%</span></label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='checkbox'
                                    value='Writers sample'
                                    id='sample'
                                    onChange={() => setSamples(!samples)}
                                />
                                <label for='sample'>Writer's samples<span style={{marginLeft: '325px'}}>$5.00</span></label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='checkbox'
                                    value='Copy of sources'
                                    id='sources'
                                    onChange={() => setSources(!sources)}
                                />
                                <label for='sources'>Copy of sources<span style={{marginLeft: '325px'}}>$14.95</span></label>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    } else if (details.order_type === 'Programming'){
        display = (
            <div>
            <form>
                <div className='level2'>
                        <div className='level4-name'>
                            <h5>Programming language</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '660px'}}>
                            <Form.Group controlId="formGridState">
                                <Form.Select className='select' onChange={e => setDetails(details => ({
                                        ...details, prog_language: e.target.value
                                        }))}>
                                <option className='unselect' style={{color: 'grey'}}>Select one</option>
                                <option value="Creative Writing">Python</option>
                                <option value="Essay">C++</option>
                                <option value="Research Paper">C</option>
                                <option value="Speech">Java</option>
                                <option value="Business Plan">JavaScript</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                </div>


                <div className='level3'>
                        <div className='level4-name'>
                            <h5>Category</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '660px'}}>
                            <Form.Group controlId="formGridState">
                                <Form.Select className='select' onChange={e => setDetails(details => ({
                                        ...details, programming_category: e.target.value
                                        }))}>
                                <option value="Web programming">Web Programming</option>
                                <option value="Mobile application development">Mobile application development</option>
                                <option value="Database design and optimization">Database design and optimization</option>
                                <option value="Desktop application development">Desktop application development</option>
                                <option value="Computer science">Computer science</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                </div>

                <div className='level6'>
                        <div className='level4-name'>
                            <h5>Instructions</h5>
                        </div>
                        <textarea style={{width:'660px'}}
                            placeholder='Write anything that you feel is important for the writer to consider.'
                            value={details.instructions}
                                onChange={e => setDetails(details => ({
                                    ...details, instructions: e.target.value
                                }))}
                        ></textarea>
                </div>

                <div className='level7'>
                        <div className='level4-name'>
                            <h5>Additional materials</h5>
                        </div>
                        <div className='upload'>
                                <input 
                                    ref={instructionRef}
                                    type='file'
                                    onChange={e => setDetails(details => ({
                                        ...details, instruction_file: e.target.files[0]
                                    }))}
                                />
                        </div>
                </div>

                <div className='level9'>
                        <div style={{marginRight: '90px'}}>
                            <h5>Deadline</h5>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='24h'
                                id='24h'
                                checked={details.deadline === '24h'}
                                onChange={handleChange15}
                            />
                            <label for='24h'>24h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='2d'
                                id='2d'
                                checked={details.deadline === '2d'}
                                onChange={handleChange15}
                            />
                            <label for='2d'>2d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='3d'
                                id='3d'
                                checked={details.deadline === '3d'}
                                onChange={handleChange15}
                            />
                            <label for='3d'>3d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='5d'
                                id='5d'
                                checked={details.deadline === '5d'}
                                onChange={handleChange15}
                            />
                            <label for='5d'>5d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='7d'
                                id='7d'
                                checked={details.deadline === '7d'}
                                onChange={handleChange15}
                            />
                            <label for='7d'>7d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='14d'
                                id='14d'
                                checked={details.deadline === '14d'}
                                onChange={handleChange15}
                            />
                            <label for='14d'>14d</label>
                        </div>
                </div>

                <div className='tasklevel'>
                    <div className='level5-name'>
                        <h5>Task size</h5>
                    </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Extra small'
                                id='extra'
                                name='task'
                                checked={details.task_size === 'Extra small'}
                                onChange={handleTaskChange}
                            />
                            <label for='extra'>Extra small</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Small'
                                id='small'
                                name='task'
                                checked={details.task_size === 'Small'}
                                onChange={handleTaskChange}
                            />
                            <label for='small'>Small</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Medium'
                                id='medium'
                                name='task'
                                checked={details.task_size === 'Medium'}
                                onChange={handleTaskChange}
                            />
                            <label for='medium'>Medium</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Large'
                                id='large'
                                checked={details.task_size === 'Large'}
                                onChange={handleTaskChange}
                            />
                            <label for='large'>Large</label>
                        </div>
                </div>
                </form>
            </div>
        )
    } else if (details.order_type === 'Calculations'){
        display = (
            <div>
            <form>
                <div className='level2'>
                        <div className='level4-name'>
                            <h5>Discipline</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '660px'}}>
                            <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="Select one" className='select' onChange={e => setDetails(details => ({
                                        ...details, discipline: e.target.value
                                        }))}>
                                <option className='unselect' style={{color: 'grey'}}>Select one</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Aviation">Aviation</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Statistics">Statistics</option>
                                <option value="Chemistry">Chemistry</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                </div>


                <div className='level3'>
                        <div className='level4-name'>
                            <h5>Software</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '660px'}}>
                            <Form.Group controlId="formGridState">
                                <Form.Select defaultValue="Web programming" className='select' onChange={e => setDetails(details => ({
                                        ...details, software: e.target.value
                                        }))}>
                                <option value="Microsoft Excel">Microsoft Excel</option>
                                <option value="Microsoft Word">Microsoft Word</option>
                                <option value="SPSS">SPSS</option>
                                <option value="STATA">STATA</option>
                                <option value="Other">Other</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                </div>

                <div className='level6'>
                        <div className='level4-name'>
                            <h5>Instructions</h5>
                        </div>
                        <textarea style={{width:'660px'}}
                            placeholder='Write anything that you feel is important for the writer to consider.'
                            value={details.instructions}
                                onChange={e => setDetails(details => ({
                                    ...details, instructions: e.target.value
                                }))}
                        ></textarea>
                </div>

                <div className='level7'>
                        <div className='level4-name'>
                            <h5>Additional materials</h5>
                        </div>
                        <div className='upload'>
                                <input 
                                    ref={instructionRef}
                                    type='file'
                                    onChange={e => setDetails(details => ({
                                        ...details, instruction_file: e.target.files[0]
                                    }))}
                                />
                        </div>
                </div>

                <div className='level9'>
                        <div style={{marginRight: '90px'}}>
                            <h5>Deadline</h5>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='24h'
                                id='24h'
                                checked={details.deadline === '24h'}
                                onChange={handleChange15}
                            />
                            <label for='24h'>24h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='2d'
                                id='2d'
                                checked={details.deadline === '2d'}
                                onChange={handleChange15}
                            />
                            <label for='2d'>2d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='3d'
                                id='3d'
                                checked={details.deadline === '3d'}
                                onChange={handleChange15}
                            />
                            <label for='3d'>3d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='5d'
                                id='5d'
                                checked={details.deadline === '5d'}
                                onChange={handleChange15}
                            />
                            <label for='5d'>5d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='7d'
                                id='7d'
                                checked={details.deadline === '7d'}
                                onChange={handleChange15}
                            />
                            <label for='7d'>7d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='14d'
                                id='14d'
                                checked={details.deadline === '14d'}
                                onChange={handleChange15}
                            />
                            <label for='14d'>14d</label>
                        </div>
                </div>

                <div className='tasklevel'>
                    <div className='level5-name'>
                        <h5>Task size</h5>
                    </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Extra small'
                                id='extra'
                                checked={details.task_size === 'Extra small'}
                                onChange={handleTaskChange}
                            />
                            <label for='extra'>Extra small</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Small'
                                id='small'
                                checked={details.task_size === 'Small'}
                                onChange={handleTaskChange}
                            />
                            <label for='small'>Small</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Medium'
                                id='medium'
                                checked={details.task_size === 'Medium'}
                                onChange={handleTaskChange}
                            />
                            <label for='medium'>Medium</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Large'
                                id='large'
                                checked={details.task_size === 'Large'}
                                onChange={handleTaskChange}
                            />
                            <label for='large'>Large</label>
                        </div>
                </div>
                </form>
            </div>
        )
    }

    let account;

    if (!token){
        account = (
            <div className='account'>
            <h4>Account</h4>
            <Manage />
            </div>
        )    
    }

    let title;
    let job_type;

    if(details.order_type === 'Academics'){
        title = level2
        job_type = details.paper_type
    }else if(details.order_type === 'Programming'){
        title = 'Programming'
        job_type = details.programming_category
    }else if(details.order_type === 'Calculations'){
        title = 'Calculation'
        job_type = details.discipline
    }

    let dashboard_nav;

    if (token){
        dashboard_nav = (
            <div className='profile' style={{paddingTop: '5px'}}>
            <div className='nav'>
                <ul>
                    <li>My orders</li>
                    <li>New order</li>
                </ul>
            </div>
            </div>
        )
    }

    return (
        <>
            <Head />
            {dashboard_nav}
            <div className='container1'>
                <div className='desc'>
                    <h1 style={titleStyle}>{details.title}</h1>
                    <h5 style={levelStyle}>{title}</h5>
                    <h5 style={paperStyle}>{details.paper_type}</h5>
                    <h5 style={subjectStyle}>{details.subject}</h5>
                </div>
                <div className='pricing'>
                    <h5 style={pageStyle}>{count} page x ${spacing_value} <span>${pageSwitch()}</span></h5>
                    <h5 style={slideStyle}>{count3} slide x $19.50 <span>${slideSwitch()}</span></h5>
                    <h5 style={chartStyle}>{count2} chart x $19.50 <span>${chartSwitch()}</span></h5>
                    <h5 style={progStyle}>{job_type} <span>${programmingPricing()}</span></h5>
                    <h5 style={paperLevelStyle}>Writer's preferences <span>${totalpreferencePrice()}</span></h5>
                    <h5 style={smartpaperstyle}>Smart paper <span>${smartSwitch()}</span></h5>
                    <h5 style={samplestyle}>Order writer's samples <span>${sampleSwitch()}</span></h5>
                    <h5 style={sourcestyle}>Copy of sources used <span>${sourceSwitch()}</span></h5>
                </div>
                <div className='total-price'>
                    <h3 style={totalStyle}>Total price</h3>
                    <h4 style={totalStyle}>${price}</h4>
                </div>
                <div className='checkout'>
                <Button startIcon={<Lock />} variant='contained' size='small' onClick={handleSubmit}>Safe checkout</Button>
                </div>
            </div>

            <div className='order'>
                <h4>PLACE AN ORDER</h4>
                <form encType="multipart/form-data">
                    <div className='level1'>
                        <div className='level20'>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='Academics'
                                    id='academics'
                                    checked={details.order_type === 'Academics'}
                                    onChange={handleChange1}
                                />
                                <label for='academics'>Academic Writing<span> Custom papers</span></label>
                                
                            </div>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='Programming'
                                    id='programming'
                                    checked={details.order_type === 'Programming'}
                                    onChange={handleChange1}
                                />
                                <label for='programming'>Programming<span> Tech assignments</span></label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='Calculations'
                                    id='calculation'
                                    checked={details.order_type === 'Calculations'}
                                    onChange={handleChange1}
                                />
                                <label for='calculation'>Calculations<span> Problems solving</span></label>
                                </div>
                        </div>
                    </div>
                </form>
                {display}
            </div>
            {account}
        </>
    )
}

export default Review;