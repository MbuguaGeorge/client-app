import React, {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './review.css';
import '../Profile/profile.css';
import {Form} from 'react-bootstrap';
import {Button} from '@mui/material';
import {Lock} from '@mui/icons-material';
import Head from '../Header/Header';

function Review() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const [details, setDetails] = useState({
        pages: '',
        charts: '',
        slides: '',
        subject: '',
        paper_type: '',
        instructions: '',
        paper_format: '',
        references: '',
        order_type: '',
        academic_year: 'High School',
        title: '',
        deadline: '4h',
        paper_level: 'Basic',
        upgrade: ''
    });

    useEffect(() => {
        setDetails(details => ({
            ...details, pages: count, charts: count2, slides: count3, references: count1
        }))

    }, [count, count1, count2, count3]);

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

    const [mla, setMla] = useState(false);
    const [apa6, setApa6] = useState(false);
    const [apa7, setApa7] = useState(false);
    const [chicago, setChicago] = useState(false);
    const [none, setNone] = useState(false);
    const [other, setOther] = useState(false);

    const handleChange9 = () => {
        setMla(!mla)
        setApa6(false)
        setApa7(false)
        setChicago(false)
        setNone(false)
        setOther(false)
        setDetails(details => ({
            ...details, paper_format: 'MLA'
        }))
    };

    const handleChange10 = () => {
        setMla(false)
        setApa6(!apa6)
        setApa7(false)
        setChicago(false)
        setNone(false)
        setOther(false)
        setDetails(details => ({
            ...details, paper_format: 'APA 6'
        }))
    };

    const handleChange11 = () => {
        setMla(false)
        setApa6(false)
        setApa7(!apa7)
        setChicago(false)
        setNone(false)
        setOther(false)
        setDetails(details => ({
            ...details, paper_format: 'APA 7'
        }))
    };

    const handleChange12 = () => {
        setMla(false)
        setApa6(false)
        setApa7(false)
        setChicago(!chicago)
        setNone(false)
        setOther(false)
        setDetails(details => ({
            ...details, paper_format: 'Chicago Turabian'
        }))
    };

    const handleChange13 = () => {
        setMla(false)
        setApa6(false)
        setApa7(false)
        setChicago(false)
        setNone(!none)
        setOther(false)
        setDetails(details => ({
            ...details, paper_format: 'Not Applicable'
        }))
    };

    const handleChange14 = () => {
        setMla(false)
        setApa6(false)
        setApa7(false)
        setChicago(false)
        setNone(false)
        setOther(!other)
        setDetails(details => ({
            ...details, paper_format: 'Other'
        }))
    };

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

    const handleChange23 = (e) => {
        setDetails(details => ({
            ...details, paper_level: e.target.value
        }))
    };

    const [native, setNative] = useState(false);
    const [smart, setSmart] = useState(false);
    const [sample, setSample] = useState(false);
    const [source, setSource] = useState(false);

    const handleChange26 = () => {
        setNative(!native)
        setSmart(false)
        setSample(false)
        setSource(false)
        setDetails(details => ({
            ...details, upgrade: 'Native Speaker'
        }))
    };

    const handleChange27 = () => {
        setNative(false)
        setSmart(!smart)
        setSample(false)
        setSource(false)
        setDetails(details => ({
            ...details, upgrade: 'Smart Paper'
        }))
    };

    const handleChange28 = () => {
        setNative(false)
        setSmart(false)
        setSample(!sample)
        setSource(false)
        setDetails(details => ({
            ...details, upgrade: 'Writers Samples'
        }))
    };

    const handleChange29 = () => {
        setNative(false)
        setSmart(false)
        setSample(false)
        setSource(!source)
        setDetails(details => ({
            ...details, upgrade: 'Copy of Sources'
        }))
    };

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(details)
        // const uploadData = new FormData();
        // uploadData.append('requirement.instruction_file', details.requirement.instruction_file, details.requirement.instruction_file.name)

        fetch('http://127.0.0.1:8000/orders/summary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(details)
        }).then(
            data => {
                console.log(data)
            }
        ).then(
            () => setRedirect(!redirect)
        ).catch(err => console.log(err))
    };

    const navigate = useNavigate();

    if (redirect) {
        return navigate('/profile', {replace: true})
    }

    let pageStyle, chartStyle, slideStyle, levelStyle, titleStyle, paperStyle, subjectStyle, paperLevelStyle, totalStyle;

    if (count < 1) {
        pageStyle = {
            display: 'None'
        }
    }
    if (count2 < 1) {
        chartStyle = {
            display: 'None'
        }
    } 
    if (count3 < 1) {
        slideStyle = {
            display: 'None'
        }
    }

    if (level2 === ''){
        levelStyle = {
            display: 'None'
        }
    }
    if (details.title === '') {
        titleStyle = {
            display: 'None'
        }
    }
    if (details.paper_type === '') {
        paperStyle = {
            display: 'None'
        }
    }
    if (details.subject === '') {
        subjectStyle = {
            display: 'None'
        }
    }
    if (details.paper_level === 'Basic') {
        paperLevelStyle = {
            display: 'None'
        }
    }
    if (count < 1 && count2 < 1 && count3 < 1 && details.paper_level === 'Basic'){
        totalStyle = {
            display: 'None'
        }
    }

    // Perform pricing

    function pageSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4h':
                    return (count * 39).toFixed(2)
                case details.deadline === '8h':
                    return (count * 34).toFixed(2)
                case details.deadline === '24h':
                    return (count * 27).toFixed(2)
                case details.deadline === '2d':
                    return (count * 24).toFixed(2)
                case details.deadline === '3d':
                    return (count * 20).toFixed(2)
                case details.deadline === '5d':
                    return (count * 18).toFixed(2)
                case details.deadline === '7d':
                    return (count * 16).toFixed(2)
                case details.deadline === '14d':
                    return (count * 10).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4h':
                    return (count * 43).toFixed(2)
                case details.deadline === '8h':
                    return (count * 39).toFixed(2)
                case details.deadline === '24h':
                    return (count * 30).toFixed(2)
                case details.deadline === '2d':
                    return (count * 26).toFixed(2)
                case details.deadline === '3d':
                    return (count * 24).toFixed(2)
                case details.deadline === '5d':
                    return (count * 19).toFixed(2)
                case details.deadline === '7d':
                    return (count * 17).toFixed(2)
                case details.deadline === '14d':
                    return (count * 15).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4h':
                    return (count * 51).toFixed(2)
                case details.deadline === '8h':
                    return (count * 41).toFixed(2)
                case details.deadline === '24h':
                    return (count * 32).toFixed(2)
                case details.deadline === '2d':
                    return (count * 30).toFixed(2)
                case details.deadline === '3d':
                    return (count * 28).toFixed(2)
                case details.deadline === '5d':
                    return (count * 23).toFixed(2)
                case details.deadline === '7d':
                    return (count * 21).toFixed(2)
                case details.deadline === '14d':
                    return (count * 20).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4h':
                    return (count * 61).toFixed(2)
                case details.deadline === '8h':
                    return (count * 48).toFixed(2)
                case details.deadline === '24h':
                    return (count * 39).toFixed(2)
                case details.deadline === '2d':
                    return (count * 36).toFixed(2)
                case details.deadline === '3d':
                    return (count * 33).toFixed(2)
                case details.deadline === '5d':
                    return (count * 29).toFixed(2)
                case details.deadline === '7d':
                    return (count * 27).toFixed(2)
                case details.deadline === '14d':
                    return (count * 25).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4h':
                    return (count * 73).toFixed(2)
                case details.deadline === '8h':
                    return (count * 58).toFixed(2)
                case details.deadline === '24h':
                    return (count * 50).toFixed(2)
                case details.deadline === '2d':
                    return (count * 45).toFixed(2)
                case details.deadline === '3d':
                    return (count * 37).toFixed(2)
                case details.deadline === '5d':
                    return (count * 35).toFixed(2)
                case details.deadline === '7d':
                    return (count * 31).toFixed(2)
                case details.deadline === '14d':
                    return (count * 29).toFixed(2)
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

    function totalpreferencePrice(){

        let pagepreference = pagepreferencePrice()
        let chartpreference = chartpreferencePrice()
        let slidepreference = slidepreferencePrice()

        if(count && count2 && count3){
            return (parseFloat(pagepreference) + parseFloat(chartpreference) + parseFloat(slidepreference)).toFixed(2)
        }else if (count && count2){
            return (parseFloat(pagepreference) + parseFloat(chartpreference)).toFixed(2)
        } else if(count && count3){
            return (parseFloat(pagepreference) + parseFloat(slidepreference)).toFixed(2)
        } else if(count2 && count3){
            return (parseFloat(chartpreference) + parseFloat(slidepreference)).toFixed(2)
        } else if(count){
            return pagepreference
        } else if(count2){
            return chartpreference
        } else if (count3){
            return slidepreference
        }
    }

    function totalPrice(){
        let pagePrice = pageSwitch()
        let chartPrice = chartSwitch()
        let slidePrice = slideSwitch()
        let totalpreference = totalpreferencePrice()

        let totalPrice = parseFloat(pagePrice) + parseFloat(chartPrice) + parseFloat(slidePrice) + parseFloat(totalpreference)
        return totalPrice.toFixed(2)
    }

    return (
        <>
            <Head />
            <div className='profile'>
                <div className='nav'>
                    <ul>
                        <li>My orders</li>
                        <li>New order</li>
                    </ul>
                </div>
            </div>

            <div className='container1'>
                <div className='desc'>
                    <h1 style={titleStyle}>{details.title}</h1>
                    <h5 style={levelStyle}>{level2}</h5>
                    <h5 style={paperStyle}>{details.paper_type}</h5>
                    <h5 style={subjectStyle}>{details.subject}</h5>
                </div>
                <div className='pricing'>
                    <h5 style={pageStyle}>{count} page x $39.00 <span>${pageSwitch()}</span></h5>
                    <h5 style={slideStyle}>{count3} slide x $19.50 <span>${slideSwitch()}</span></h5>
                    <h5 style={chartStyle}>{count2} chart x $19.50 <span>${chartSwitch()}</span></h5>
                    <h5 style={paperLevelStyle}>Writer's preferences <span>${totalpreferencePrice()}</span></h5>
                </div>
                <div className='total-price'>
                    <h3 style={totalStyle}>Total price</h3>
                    <h4 style={totalStyle}>${totalPrice()}</h4>
                </div>
                <div className='checkout'>
                <Button startIcon={<Lock />} variant='contained' size='small'>Safe checkout</Button>
                </div>
            </div>

            <div className='order'>
                <h4>Place an order</h4>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
                                <label for='academics'>Academic Writing</label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='Programming'
                                    id='programming'
                                    checked={details.order_type === 'Programming'}
                                    onChange={handleChange1}
                                />
                                <label for='programming'>Programming</label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='Calculations'
                                    id='calculation'
                                    checked={details.order_type === 'Calculations'}
                                    onChange={handleChange1}
                                />
                                <label for='calculation'>Calculations</label>
                        </div>
                        </div>
                    </div>

                    <div className='level2'>
                        <div className='level4-name'>
                            <h5>Type of paper</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '760px'}}>
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
                        <div className="col-sm-12 col-md-6 mt-3" style={{width: '760px'}}>
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
                            <label for='highschool'>High School</label>
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
                            <label for='graduate'>Graduate</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='PhD'
                                id='phd'
                                checked={details.academic_year === 'PhD'}
                                onChange={handleChange4}
                            />
                            <label for='phd'>PhD</label>
                        </div>
                    </div>

                    <div className='level5'>
                        <div className='level4-name'>
                            <h5>Title</h5>
                        </div>
                        <input style={{width:'760px'}}
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
                        <textarea style={{width:'760px'}}
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
                                onChange={handleChange9}
                            />
                            <label for='MLA'>MLA</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='APA6'
                                id='APA6'
                                onChange={handleChange10}
                            />
                            <label for='APA6'>APA 6</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='APA7'
                                id='APA7'
                                onChange={handleChange11}
                            />
                            <label for='APA7'>APA 7</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='chicago'
                                id='chicago'
                                onChange={handleChange12}
                            />
                            <label for='chicago'>Chicago \ Turabian</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='not'
                                id='not'
                                onChange={handleChange13}
                            />
                            <label for='not'>Not Applicable</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='other'
                                id='other'
                                onChange={handleChange14}
                            />
                            <label for='other'>Other</label>
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
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Standard'
                                id='standard'
                                checked={details.academic_year === 'Standard'}
                                onChange={handleChange23}
                            />
                            <label for='standard'>Advanced</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='Advanced'
                                id='advanced'
                                checked={details.academic_year === 'Advanced'}
                                onChange={handleChange23}
                            />
                            <label for='advanced'>Top 10</label>
                        </div>
                    </div>

                    <div className='level11'>
                        <div style={{marginRight: '20px'}}>
                            <h5>Additional Services</h5>
                        </div>
                        <div className='inputs'>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='native'
                                    id='native'
                                    onChange={handleChange26}
                                />
                                <label for='native'>Native speaker</label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='smart'
                                    id='smart'
                                    onChange={handleChange27}
                                />
                                <label for='smart'>Smart paper</label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='sample'
                                    id='sample'
                                    onChange={handleChange28}
                                />
                                <label for='sample'>Writer's samples</label>
                            </div>
                            <div className='input1'>
                                <input 
                                    type='radio'
                                    value='sources'
                                    id='sources'
                                    onChange={handleChange29}
                                />
                                <label for='sources'>Copy of sources</label>
                            </div>
                        </div>
                    </div>
                    <div className='submit'>
                        <input 
                            type='submit'
                            value='Submit order and Check out'
                        />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Review;