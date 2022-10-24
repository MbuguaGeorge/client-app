import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './placeOrder.css';
import {Form} from 'react-bootstrap';
import {Modal} from '@mui/material';

const initialState = {
    order_typeError: '',
    paper_typeError: '',
    academic_yearError: '',
    deadlineError: '',
    spacingError: '',
    disciplineError: '',
    pagesError: ''
}

export default function PlaceOrder(){

    const [pages, setPages] = useState(1);
    const [charts, setCharts] = useState(0);
    const [slides, setSlides] = useState(0);
    const [spacing, setSpacing] = useState('Double');
    const [redirect, setRedirect] = useState(false);
    const [ref, setref] = useState('');
    const [error, setError] = useState(false);
    const [validators, setValidators] = useState(initialState);
    const [open, setOpen] = useState(false);

    const [curStep, setCurStep] = useState('FirstStep');

    const [details, setDetails] = useState({
        pages: 0,
        charts: 0,
        slides: 0,
        paper_type: '',
        subject: '',
        instructions: '',
        paper_format: '',
        references: 0,
        order_type: '',
        academic_year: '',
        title: '',
        deadline: '',
        paper_level: 'Basic',
        upgrade: '',
        task_size: '',
        programming_category: '',
        prog_language: '',
        software: '',
        discipline: '',
        spacing: '',
        amount: 0
    });

    useEffect(() => {
        setDetails(details => ({
            ...details, pages: pages, charts: charts, slides: slides
        }))

    }, [slides, charts, pages]);

    const incrementPages = (event) =>{
        event.preventDefault()
        setPages(pages => pages + 1,)
    };

    const incrementCharts = (event) =>{
        event.preventDefault()
        setCharts(charts => charts + 1,)
    };

    const incrementSlides = (event) =>{
        event.preventDefault()
        setSlides(slides => slides + 1,)
    };

    const decrementPages = (event) =>{
        event.preventDefault()
        setPages(pages => Math.max(pages - 1, 0))
    };

    const decrementCharts = (event) =>{
        event.preventDefault()
        setCharts(charts => Math.max(charts - 1, 0))
    };

    const decrementSlides = (event) =>{
        event.preventDefault()
        setSlides(slides => Math.max(slides - 1, 0))
    };

    // Summary display

    let pageStyle, chartStyle, slideStyle, paperLevelStyle;

    if (pages < 1) {
        pageStyle = {
            display: 'None'
        }
    }

    if (slides < 1) {
        slideStyle = {
            display: 'None'
        }
    }

    if (charts < 1) {
        chartStyle = {
            display: 'None'
        }
    }

    if (details.paper_level === 'Basic' || details.order_type === 'Programming' || details.paper_level === '' || details.order_type === 'Calculations'){
        paperLevelStyle = {
            display: 'None'
        }
    }

    // Price Calculations

    const [level2, setLevel2] = useState('High School');

    const handleChange = (e) => {
        setDetails(details => ({
            ...details, academic_year: e.target.value
        }))
        setLevel2(e.target.value)
    };

    const handleSpacing = (e) => {
        setDetails(prevState => ({
            ...prevState, spacing: e.target.value
        }))
        setSpacing(e.target.value)
    };

    let no_words;

    if(spacing === 'Single'){
        no_words = 550
    }else if(spacing === 'Double'){
        no_words = 275
    };

    let spacing_value;

    function pageSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (39 * 2).toFixed(2)
                        return (pages * 39 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (39).toFixed(2)
                        return (pages * 39).toFixed(2)
                    }
                    break;
                case details.deadline === '8 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (34 * 2).toFixed(2)
                        return (pages * 34 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (34).toFixed(2)
                        return (pages * 34).toFixed(2)
                    }
                    break;
                case details.deadline === '24 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (27 * 2).toFixed(2)
                        return (pages * 27 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (27).toFixed(2)
                        return (pages * 27).toFixed(2)
                    }
                    break;
                case details.deadline === '2 Days':
                    if(spacing === 'Single'){
                        spacing_value = (24 * 2).toFixed(2)
                        return (pages * 24 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (24).toFixed(2)
                        return (pages * 24).toFixed(2)
                    }
                    break;
                case details.deadline === '3 Days':
                    if(spacing === 'Single'){
                        spacing_value = (20 * 2).toFixed(2)
                        return (pages * 20 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (20).toFixed(2)
                        return (pages * 20).toFixed(2)
                    }
                    break;
                case details.deadline === '5 Days':
                    if(spacing === 'Single'){
                        spacing_value = (18 * 2).toFixed(2)
                        return (pages * 18 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (18).toFixed(2)
                        return (pages * 18).toFixed(2)
                    }
                    break;
                case details.deadline === '7 Days':
                    if(spacing === 'Single'){
                        spacing_value = (16 * 2).toFixed(2)
                        return (pages * 16 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (16).toFixed(2)
                        return (pages * 16).toFixed(2)
                    }
                    break;
                case details.deadline === '14 Days':
                    if(spacing === 'Single'){
                        spacing_value = (10 * 2).toFixed(2)
                        return (pages * 10 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (10).toFixed(2)
                        return (pages * 10).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (43 * 2).toFixed(2)
                        return (pages * 43 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (43).toFixed(2)
                        return (pages * 43).toFixed(2)
                    }
                    break;
                case details.deadline === '8 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (39 * 2).toFixed(2)
                        return (pages * 39 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (39).toFixed(2)
                        return (pages * 39).toFixed(2)
                    }
                    break;
                case details.deadline === '24 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (30 * 2).toFixed(2)
                        return (pages * 30 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (30).toFixed(2)
                        return (pages * 30).toFixed(2)
                    }
                    break;
                case details.deadline === '2 Days':
                    if(spacing === 'Single'){
                        spacing_value = (26 * 2).toFixed(2)
                        return (pages * 26 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (26).toFixed(2)
                        return (pages * 26).toFixed(2)
                    }
                    break;
                case details.deadline === '3 Days':
                    if(spacing === 'Single'){
                        spacing_value = (24 * 2).toFixed(2)
                        return (pages * 24 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (24).toFixed(2)
                        return (pages * 24).toFixed(2)
                    }
                    break;
                case details.deadline === '5 Days':
                    if(spacing === 'Single'){
                        spacing_value = (19 * 2).toFixed(2)
                        return (pages * 19 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (19).toFixed(2)
                        return (pages * 19).toFixed(2)
                    }
                    break;
                case details.deadline === '7 Days':
                    if(spacing === 'Single'){
                        spacing_value = (17 * 2).toFixed(2)
                        return (pages * 17 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (17).toFixed(2)
                        return (pages * 17).toFixed(2)
                    }
                    break;
                case details.deadline === '14 Days':
                    if(spacing === 'Single'){
                        spacing_value = (15 * 2).toFixed(2)
                        return (pages * 15 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (15).toFixed(2)
                        return (pages * 15).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (51 * 2).toFixed(2)
                        return (pages * 51 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (51).toFixed(2)
                        return (pages * 51).toFixed(2)
                    }
                    break;
                case details.deadline === '8 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (41 * 2).toFixed(2)
                        return (pages * 41 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (41).toFixed(2)
                        return (pages * 41).toFixed(2)
                    }
                    break;
                case details.deadline === '24 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (32 * 2).toFixed(2)
                        return (pages * 32 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (32).toFixed(2)
                        return (pages * 32).toFixed(2)
                    }
                    break;
                case details.deadline === '2 Days':
                    if(spacing === 'Single'){
                        spacing_value = (30 * 2).toFixed(2)
                        return (pages * 30 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (30).toFixed(2)
                        return (pages * 30).toFixed(2)
                    }
                    break;
                case details.deadline === '3 Days':
                    if(spacing === 'Single'){
                        spacing_value = (28 * 2).toFixed(2)
                        return (pages * 28 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (28).toFixed(2)
                        return (pages * 28).toFixed(2)
                    }
                    break;
                case details.deadline === '5 Days':
                    if(spacing === 'Single'){
                        spacing_value = (23 * 2).toFixed(2)
                        return (pages * 23 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (23).toFixed(2)
                        return (pages * 23).toFixed(2)
                    }
                    break;
                case details.deadline === '7 Days':
                    if(spacing === 'Single'){
                        spacing_value = (21 * 2).toFixed(2)
                        return (pages * 21 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (21).toFixed(2)
                        return (pages * 21).toFixed(2)
                    }
                    break;
                case details.deadline === '14 Days':
                    if(spacing === 'Single'){
                        spacing_value = (20 * 2).toFixed(2)
                        return (pages * 20 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (20).toFixed(2)
                        return (pages * 20).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (61 * 2).toFixed(2)
                        return (pages * 61 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (61).toFixed(2)
                        return (pages * 61).toFixed(2)
                    }
                    break;
                case details.deadline === '8 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (48 * 2).toFixed(2)
                        return (pages * 48 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (48).toFixed(2)
                        return (pages * 48).toFixed(2)
                    }
                    break;
                case details.deadline === '24 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (39 * 2).toFixed(2)
                        return (pages * 39 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (39).toFixed(2)
                        return (pages * 39).toFixed(2)
                    }
                    break;
                case details.deadline === '2 Days':
                    if(spacing === 'Single'){
                        spacing_value = (36 * 2).toFixed(2)
                        return (pages * 36 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (36).toFixed(2)
                        return (pages * 36).toFixed(2)
                    }
                    break;
                case details.deadline === '3 Days':
                    if(spacing === 'Single'){
                        spacing_value = (33 * 2).toFixed(2)
                        return (pages * 33 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (33).toFixed(2)
                        return (pages * 33).toFixed(2)
                    }
                    break;
                case details.deadline === '5 Days':
                    if(spacing === 'Single'){
                        return (pages * 29 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        return (pages * 29).toFixed(2)
                    }
                    break;
                case details.deadline === '7 Days':
                    if(spacing === 'Single'){
                        spacing_value = (27 * 2).toFixed(2)
                        return (pages * 27 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (27).toFixed(2)
                        return (pages * 27).toFixed(2)
                    }
                    break;
                case details.deadline === '14 Days':
                    if(spacing === 'Single'){
                        spacing_value = (25 * 2).toFixed(2)
                        return (pages * 25 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (25).toFixed(2)
                        return (pages * 25).toFixed(2)
                    }
                    break;
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (73 * 2).toFixed(2)
                        return (pages * 73 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (73).toFixed(2)
                        return (pages * 73).toFixed(2)
                    }
                    break;
                case details.deadline === '8 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (58 * 2).toFixed(2)
                        return (pages * 58 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (58).toFixed(2)
                        return (pages * 58).toFixed(2)
                    }
                    break;
                case details.deadline === '24 Hours':
                    if(spacing === 'Single'){
                        spacing_value = (50 * 2).toFixed(2)
                        return (pages * 50 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (50).toFixed(2)
                        return (pages * 50).toFixed(2)
                    }
                    break;
                case details.deadline === '2 Days':
                    if(spacing === 'Single'){
                        spacing_value = (45 * 2).toFixed(2)
                        return (pages * 45 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (45).toFixed(2)
                        return (pages * 45).toFixed(2)
                    }
                    break;
                case details.deadline === '3 Days':
                    if(spacing === 'Single'){
                        spacing_value = (37 * 2).toFixed(2)
                        return (pages * 37 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (37).toFixed(2)
                        return (pages * 37).toFixed(2)
                    }
                    break;
                case details.deadline === '5 Days':
                    if(spacing === 'Single'){
                        spacing_value = (35 * 2).toFixed(2)
                        return (pages * 35 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (35).toFixed(2)
                        return (pages * 35).toFixed(2)
                    }
                    break;
                case details.deadline === '7 Days':
                    if(spacing === 'Single'){
                        spacing_value = (31 * 2).toFixed(2)
                        return (pages * 31 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (31).toFixed(2)
                        return (pages * 31).toFixed(2)
                    }
                    break;
                case details.deadline === '14 Days':
                    if(spacing === 'Single'){
                        spacing_value = (29 * 2).toFixed(2)
                        return (pages * 29 * 2).toFixed(2)
                    }else if(spacing === 'Double'){
                        spacing_value = (29).toFixed(2)
                        return (pages * 29).toFixed(2)
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
                case details.deadline === '4 Hours':
                    return (charts * 39/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (charts * 34/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (charts * 27/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (charts * 24/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (charts * 20/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (charts * 18/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (charts * 16/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (charts * 10/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4 Hours':
                    return (charts * 43/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (charts * 39/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (charts * 30/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (charts * 26/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (charts * 24/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (charts * 19/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (charts * 17/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (charts * 15/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4 Hours':
                    return (charts * 51/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (charts * 41/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (charts * 32/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (charts * 30/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (charts * 28/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (charts * 23/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (charts * 21/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (charts * 20/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4 Hours':
                    return (charts * 61/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (charts * 48/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (charts * 39/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (charts * 36/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (charts * 33/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (charts * 29/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (charts * 27/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (charts * 25/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4 Hours':
                    return (charts * 73/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (charts * 58/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (charts * 50/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (charts * 45/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (charts * 37/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (charts * 35/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (charts * 31/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (charts * 29/2).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function slideSwitch(){
        if (level2 === 'High School'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4 Hours':
                    return (slides * 39/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (slides * 34/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (slides * 27/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (slides * 24/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (slides * 20/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (slides * 18/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (slides * 16/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (slides * 10/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 1-2)'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4 Hours':
                    return (slides * 43/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (slides * 39/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (slides * 30/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (slides * 26/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (slides * 24/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (slides * 19/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (slides * 17/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (slides * 15/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Undergraduate (years 3-4)'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4 Hours':
                    return (slides * 51/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (slides * 41/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (slides * 32/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (slides * 30/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (slides * 28/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (slides * 23/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (slides * 21/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (slides * 20/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'Graduate'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4 Hours':
                    return (slides * 61/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (slides * 48/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (slides * 39/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (slides * 36/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (slides * 33/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (slides * 29/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (slides * 27/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (slides * 25/2).toFixed(2)
                default:
                    return 0
            }
        } else if (level2 === 'PhD'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4 Hours':
                    return (slides * 73/2).toFixed(2)
                case details.deadline === '8 Hours':
                    return (slides * 58/2).toFixed(2)
                case details.deadline === '24 Hours':
                    return (slides * 50/2).toFixed(2)
                case details.deadline === '2 Days':
                    return (slides * 45/2).toFixed(2)
                case details.deadline === '3 Days':
                    return (slides * 37/2).toFixed(2)
                case details.deadline === '5 Days':
                    return (slides * 35/2).toFixed(2)
                case details.deadline === '7 Days':
                    return (slides * 31/2).toFixed(2)
                case details.deadline === '14 Days':
                    return (slides * 29/2).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function pagepreferencePrice(){
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4 Hours':
                    return (pages * 9.75).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 8.50).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 6.75).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 6.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 5.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 4.50).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 4.00).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 2.50).toFixed(2)
                default:
                    return 0
            }
        } else if (details.paper_level === 'Basic'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '8 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '24 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '7 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '14 Days':
                    return (0.00).toFixed(2)
                default:
                    return 0
            }
        } else if (details.paper_level === 'Advanced'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4 Hours':
                    return (pages * 15.60).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 13.60).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 10.80).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 9.60).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 8.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 7.20).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 6.40).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 4.00).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4 Hours':
                    return (pages * 10.75).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 9.75).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 7.50).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 6.50).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 6.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 4.75).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 4.25).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 3.75).toFixed(2)
                default:
                    return 0
            }
        } else if (details.paper_level === 'Basic'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '8 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '24 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '7 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '14 Days':
                    return (0.00).toFixed(2)
                default:
                    return 0
            }
        } else if (details.paper_level === 'Advanced'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4 Hours':
                    return (pages * 17.20).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 15.60).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 12.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 10.40).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 9.60).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 7.60).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 6.80).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 6.00).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4 Hours':
                    return (pages * 12.75).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 10.25).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 8.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 7.50).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 7.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 5.75).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 5.25).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 5.00).toFixed(2)
                default:
                    return 0
            }
        } else if (details.paper_level === 'Basic'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '8 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '24 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '7 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '14 Days':
                    return (0.00).toFixed(2)
                default:
                    return 0
            }
        }else if (details.paper_level === 'Advanced'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4 Hours':
                    return (pages * 20.40).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 16.40).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 12.80).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 12.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 11.20).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 9.20).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 8.40).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 8.00).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4 Hours':
                    return (pages * 15.25).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 12.00).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 9.75).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 9.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 8.25).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 7.25).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 6.75).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 6.25).toFixed(2)
                default:
                    return 0
            }
        } else if (details.paper_level === 'Basic'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '8 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '24 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '7 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '14 Days':
                    return (0.00).toFixed(2)
                default:
                    return 0
            }
        }else if (details.paper_level === 'Advanced'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4 Hours':
                    return (pages * 24.40).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 19.20).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 15.60).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 14.40).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 13.20).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 11.60).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 10.80).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 10.00).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4 Hours':
                    return (pages * 18.25).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 14.50).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 12.50).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 11.25).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 9.25).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 8.75).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 7.75).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 7.25).toFixed(2)
                default:
                    return 0
            }
        } else if (details.paper_level === 'Basic'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '8 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '24 Hours':
                    return (0.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '5 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '7 Days':
                    return (0.00).toFixed(2)
                case details.deadline === '14 Days':
                    return (0.00).toFixed(2)
                default:
                    return 0
            }
        }else if (details.paper_level === 'Advanced'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4 Hours':
                    return (pages * 29.20).toFixed(2)
                case details.deadline === '8 Hours':
                    return (pages * 23.20).toFixed(2)
                case details.deadline === '24 Hours':
                    return (pages * 20.00).toFixed(2)
                case details.deadline === '2 Days':
                    return (pages * 18.00).toFixed(2)
                case details.deadline === '3 Days':
                    return (pages * 14.80).toFixed(2)
                case details.deadline === '5 Days':
                    return (pages * 14.00).toFixed(2)
                case details.deadline === '7 Days':
                    return (pages * 12.40).toFixed(2)
                case details.deadline === '14 Days':
                    return (pages * 11.60).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function chartpreferencePrice(){
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4h':
                    return (charts * 9.75/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 8.50/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 6.75/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 6.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 5.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 4.50/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 4.00/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 2.50/2).toFixed(2)
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
                    return (charts * 15.60/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 13.60/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 10.80/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 9.60/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 8.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 7.20/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 6.40/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 4.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4h':
                    return (charts * 10.75/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 9.75/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 7.50/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 6.50/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 6.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 4.75/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 4.25/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 3.75/2).toFixed(2)
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
                    return (charts * 17.20/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 15.60/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 12.00/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 10.40/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 9.60/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 7.60/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 6.80/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 6.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4h':
                    return (charts * 12.75/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 10.25/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 8.00/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 7.50/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 7.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 5.75/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 5.25/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 5.00/2).toFixed(2)
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
                    return (charts * 20.40/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 16.40/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 12.80/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 12.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 11.20/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 9.20/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 8.40/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 8.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4h':
                    return (charts * 15.25/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 12.00/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 9.75/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 9.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 8.25/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 7.25/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 6.75/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 6.25/2).toFixed(2)
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
                    return (charts * 24.40/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 19.20/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 15.60/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 14.40/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 13.20/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 11.60/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 10.80/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 10.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4h':
                    return (charts * 18.25/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 14.50/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 12.50/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 11.25/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 9.25/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 8.75/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 7.75/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 7.25/2).toFixed(2)
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
                    return (charts * 29.20/2).toFixed(2)
                case details.deadline === '8h':
                    return (charts * 23.20/2).toFixed(2)
                case details.deadline === '24h':
                    return (charts * 20.00/2).toFixed(2)
                case details.deadline === '2d':
                    return (charts * 18.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (charts * 14.80/2).toFixed(2)
                case details.deadline === '5d':
                    return (charts * 14.00/2).toFixed(2)
                case details.deadline === '7d':
                    return (charts * 12.40/2).toFixed(2)
                case details.deadline === '14d':
                    return (charts * 11.60/2).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function slidepreferencePrice(){
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'High School'){
                case details.deadline === '4h':
                    return (slides * 9.75/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 8.50/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 6.75/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 6.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 5.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 4.50/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 4.00/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 2.50/2).toFixed(2)
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
                    return (slides * 15.60/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 13.60/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 10.80/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 9.60/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 8.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 7.20/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 6.40/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 4.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Undergraduate (years 1-2)'){
                case details.deadline === '4h':
                    return (slides * 10.75/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 9.75/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 7.50/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 6.50/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 6.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 4.75/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 4.25/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 3.75/2).toFixed(2)
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
                    return (slides * 17.20/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 15.60/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 12.00/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 10.40/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 9.60/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 7.60/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 6.80/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 6.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Undergraduate (years 3-4)'){
                case details.deadline === '4h':
                    return (slides * 12.75/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 10.25/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 8.00/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 7.50/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 7.00/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 5.75/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 5.25/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 5.00/2).toFixed(2)
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
                    return (slides * 20.40/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 16.40/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 12.80/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 12.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 11.20/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 9.20/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 8.40/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 8.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'Graduate'){
                case details.deadline === '4h':
                    return (slides * 15.25/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 12.00/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 9.75/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 9.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 8.25/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 7.25/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 6.75/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 6.25/2).toFixed(2)
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
                    return (slides * 24.40/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 19.20/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 15.60/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 14.40/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 13.20/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 11.60/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 10.80/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 10.00/2).toFixed(2)
                default:
                    return 0
            }
        }
        if (details.paper_level === 'Standard'){
            switch(details.academic_year === 'PhD'){
                case details.deadline === '4h':
                    return (slides * 18.25/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 14.50/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 12.50/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 11.25/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides   * 9.25/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 8.75/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 7.75/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 7.25/2).toFixed(2)
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
                    return (slides * 29.20/2).toFixed(2)
                case details.deadline === '8h':
                    return (slides * 23.20/2).toFixed(2)
                case details.deadline === '24h':
                    return (slides * 20.00/2).toFixed(2)
                case details.deadline === '2d':
                    return (slides * 18.00/2).toFixed(2)
                case details.deadline === '3d':
                    return (slides * 14.80/2).toFixed(2)
                case details.deadline === '5d':
                    return (slides * 14.00/2).toFixed(2)
                case details.deadline === '7d':
                    return (slides * 12.40/2).toFixed(2)
                case details.deadline === '14d':
                    return (slides * 11.60/2).toFixed(2)
                default:
                    return 0
            }
        }
    }

    function totalpreferencePrice(){

        let pagepreference = pagepreferencePrice()
        let chartpreference = chartpreferencePrice()
        let slidepreference = slidepreferencePrice()

        if(pages && charts && slides){
            return (parseFloat(pagepreference) + parseFloat(chartpreference) + parseFloat(slidepreference)).toFixed(2)
        }else if (pages && charts){
            return (parseFloat(pagepreference) + parseFloat(chartpreference)).toFixed(2)
        } else if(pages && slides){
            return (parseFloat(pagepreference) + parseFloat(slidepreference)).toFixed(2)
        } else if(charts && slides){
            return (parseFloat(chartpreference) + parseFloat(slidepreference)).toFixed(2)
        } else if(pages){
            return pagepreference
        } else if(charts){
            return chartpreference
        } else if (slides){
            return slidepreference
        }
    }

    function totalPrice(){
        let pagePrice = pageSwitch()
        let chartPrice = chartSwitch()
        let slidePrice = slideSwitch()
        let totalpreference = totalpreferencePrice()
        
        let totalPrice;

        if (details.order_type === 'Academic Writing'){
            totalPrice = parseFloat(pagePrice) + parseFloat(chartPrice) + parseFloat(slidePrice) + parseFloat(totalpreference)
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
    }, [price]);

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://127.0.0.1:8000/orders/summary', {
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
    };

    const navigate = useNavigate();

    if (redirect) {
        return navigate(`/order/pay/${ref}`, {replace: true})
    }

    let errorStyle = {
        fontSize: '.9rem',
        color: '#D2122E',
    }

    const handleErrors = () => {

        let order_typeError = ''
        let paper_typeError = ''
        let academic_yearError = ''
        let deadlineError = ''
        let spacingError = ''
        let disciplineError = ''
        let pagesError = ''

        if (details.order_type.length < 1){
            order_typeError = 'Select order type'
        }else{
            order_typeError = ''
        }
        if (details.paper_type.length < 1){
            paper_typeError = 'Select paper type'
        }else{
            paper_typeError = ''
        }
        if (details.discipline.length < 1){
            disciplineError = 'Select discipline'
        }else{
            disciplineError = ''
        }
        if (details.academic_year.length < 1){
            academic_yearError = 'Select academic level'
        }else{
            academic_yearError = ''
        }
        if (details.deadline.length < 1){
            deadlineError = 'Select deadline for delivery'
        }else{
            deadlineError = ''
        }
        if (pages < 1){
            pagesError = 'number of pages is required'
        }else{
            pagesError = ''
        }
        if (details.spacing.length < 1){
            spacingError = 'Select spacing'
        }else{
            spacingError = ''
        }
        if (order_typeError || paper_typeError || deadlineError || spacingError || pagesError || academic_yearError || disciplineError){

            setValidators({order_typeError, paper_typeError, deadlineError, spacingError, pagesError, academic_yearError, disciplineError})
            setError(true)
            return false
        }
        setError(false)
        return true
    };

    
    const validate = () => {
        const isValid = handleErrors()
        if(isValid){
            setCurStep('SecondStep')
        }else{
            setCurStep('FirstStep')
        }
    };

    let displayStep, orderbtn, prevbtn;

    if (curStep === 'FirstStep'){
        displayStep = (
            <div className="place-order-requirements-container">
                <h1>Create a New Order</h1>
                <div className="place-order-requirements">
                <form>
                    <div className="top">
                        <div className="assignment-type">
                            <h4>Assignment type:</h4>
                            <div className="col-sm-12 col-md-6 mt-3" style={{width: '390px'}}>
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue={details.order_type.length > 1 ? details.order_type : "Select assignment"} className='select' onChange={(e) => setDetails(prevState => ({
                                        ...prevState, order_type: e.target.value
                                    }))}>
                                    <option className='unselect'>Select assignment*</option>
                                    <option value="Academic Writing">Academic Writing</option>
                                    <option value="Programming Assignmnet">Programming Assignment</option>
                                    <option value="Calculations Assignment">Calculations Assignment</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <h5 style={errorStyle}>{validators.order_typeError}</h5>
                        </div>
                        <div className="assignment-type">
                            <h4>Type of Paper:</h4>
                            <div className="col-sm-12 col-md-6 mt-3" style={{width: '390px'}}>
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue={details.paper_type.length > 1 ? details.paper_type : "E.g. Essay"} className='select' onChange={(e) => setDetails(prevState => ({
                                        ...prevState, paper_type: e.target.value
                                    }))}>
                                    <option className='unselect'>E.g. Essay*</option>
                                    <option value="Creative Writing">Creative Writing</option>
                                    <option value="Essay">Essay</option>
                                    <option value="Research Paper">Research Paper</option>
                                    <option value="Speech">Speech</option>
                                    <option value="Business Plan">Business Plan</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <h5 style={errorStyle}>{validators.paper_typeError}</h5>
                        </div>
                    </div>

                    <div className="mid">
                        <div className="assignment-details">
                            <h4>Assignment details:</h4>
                            <div className="col-sm-12 col-md-6 mt-3" style={{width: '390px'}}>
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue={details.discipline.length > 1 ? details.discipline : "Discipline"} className='select' onChange={(e) => setDetails(prevState => ({
                                        ...prevState, discipline: e.target.value
                                    }))}>
                                    <option className='unselect'>Discipline*</option>
                                    <option value="Economics">Economics</option>
                                    <option value="History">History</option>
                                    <option value="Classic English Literature">Classic English Literature</option>
                                    <option value="Philosophy">Philosophy</option>
                                    <option value="Music">Music</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <h5 style={errorStyle}>{validators.disciplineError}</h5>
                            <div className="col-sm-12 col-md-6 mt-3" style={{width: '390px'}}>
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue={details.academic_year.length > 1 ? details.academic_year : "Academic level"} className='select' onChange={handleChange}>
                                    <option className='unselect'>Academic level*</option>
                                    <option value="High School">High School</option>
                                    <option value="Undergraduate years(1-2)">Undergarduate (years 1-2)</option>
                                    <option value="Undergraduate years(3-4)">Undergarduate (years 3-4)</option>
                                    <option value="Graduate">Graduate</option>
                                    <option value="PhD">PhD</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <h5 style={errorStyle}>{validators.academic_yearError}</h5>
                        </div>
                        <div className="deadline">
                            <h4>Deadline:</h4>
                            <div className="col-sm-12 col-md-6 mt-3" style={{width: '390px'}}>
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue={details.deadline.length > 1 ? details.deadline : "Your deadline"} className='select' onChange={(e) => setDetails(prevState => ({
                                        ...prevState, deadline: e.target.value
                                    }))}>
                                    <option className='unselect'>Your deadline*</option>
                                    <option value="4 Hours">4 Hours</option>
                                    <option value="8 Hours">8 Hours</option>
                                    <option value="24 Hours">24 Hours</option>
                                    <option value="2 Days">2 Days</option>
                                    <option value="3 Days">3 Days</option>
                                    <option value="5 Days">5 Days</option>
                                    <option value="7 Days">7 Days</option>
                                    <option value="14 Days">14 Days</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                            <h5 style={errorStyle}>{validators.deadlineError}</h5>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="size">
                            <h4>Assignment size:</h4>
                            <div className="pages">
                                <div className="page-ref">
                                    <h4>Pages:</h4>
                                    <div className="ref">
                                        <button onClick={decrementPages} >-</button>
                                        <input type="text" value={pages}/>
                                        <button onClick={incrementPages}>+</button>
                                    </div>
                                    <h5 style={errorStyle}>{validators.pagesError}</h5>
                                </div>
                                <div className="words">
                                    <h4>Words:</h4>
                                    <button>{no_words}</button>
                                </div>
                                <div className="line-spacing">
                                    <h4>Line spacing:</h4>
                                    <div className="col-sm-12 col-md-6 mt-3" style={{width: '160px'}}>
                                        <Form.Group controlId="formGridState">
                                            <Form.Select defaultValue={details.spacing.length > 1 ? details.spacing : "Choose"} className='select' onChange={handleSpacing}>
                                            <option className="unselect">Choose*</option>
                                            <option value="Double">Double</option>
                                            <option value="Single">Single</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <h5 style={errorStyle}>{validators.spacingError}</h5>
                                </div>
                            </div>
                        </div>

                        <div className="charts-slides">
                            <h4>Charts, Slides & References</h4>
                            <div className="chart-ref">
                                <div className="page-ref">
                                    <h4>Slides:</h4>
                                    <div className="ref">
                                        <button onClick={decrementSlides} >-</button>
                                        <input type="text" value={slides}/>
                                        <button onClick={incrementSlides}>+</button>
                                    </div>
                                </div>
                                <div className="page-ref" style={{marginLeft: '20px'}}>
                                    <h4>Charts:</h4>
                                    <div className="ref">
                                        <button onClick={decrementCharts} >-</button>
                                        <input type="text" value={charts}/>
                                        <button onClick={incrementCharts}>+</button>
                                    </div>
                                </div>
                                <div className="page-ref" style={{marginLeft: '20px'}}>
                                    <h4>References:</h4>
                                    <div className="ref">
                                        <button onClick={decrementCharts} >-</button>
                                        <input type="text" value={charts}/>
                                        <button onClick={incrementCharts}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        )

        orderbtn = (
            <div className="next-step">
                <button onClick={validate}>Next Step</button>
            </div>
        )
    }else if (curStep === 'SecondStep'){
        displayStep = (
            <div className="place-order-requirements-container">
                <h1>Create a New Order</h1>
                <Modal 
                    open={open}
                    onClose={() => setOpen(false)}
                >
                
                    <div className="summary-container">
                        <div className="top">
                            <h2>Summary details</h2>
                            <ul>
                                <li>{details.paper_type}</li>
                                <li style={{marginLeft: '30px'}}>{details.discipline}</li>
                            </ul>
                            <ol>
                                <li>{details.order_type}</li>
                                <li>$39.00</li>
                            </ol>
                            <h4 style={pageStyle}>{pages} pages x ${spacing_value} <span>${pageSwitch()}</span></h4>
                            <h4 style={slideStyle}>{slides} slides x $19.50 <span>${slideSwitch()}</span></h4>
                            <h4 style={chartStyle}>{charts} charts x $19.50 <span>${chartSwitch()}</span></h4>
                            <h4 style={paperLevelStyle}>Writer's preference <span>${totalpreferencePrice()}</span></h4>
                            <ol>
                                <li>Total Price</li>
                                <li>${price}</li>
                            </ol>
                            <button onClick={handleSubmit}>Proceed to Checkout</button>
                        </div>
                    </div>

                </Modal>
                <div className="order-details-container">
                    <div className="top">
                        <div className="title">
                            <h4>Title:</h4>
                            <form>
                                <input type='text' 
                                    placeholder="Enter title of your paper"
                                    value={details.title}
                                    onChange={(e) => setDetails(prevState => ({
                                        ...prevState, title: e.target.value
                                    }))}
                                />
                            </form>
                        </div>
                        <div className="format">
                            <h4>Paper format:</h4>
                            <div className="col-sm-12 col-md-6 mt-3" style={{width: '250px'}}>
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue="Paper format" className='select' onChange={(e) => setDetails(prevState => ({
                                        ...prevState, paper_format: e.target.value
                                    }))}>
                                    <option className='unselect'>Paper format*</option>
                                    <option value="MLA">MLA</option>
                                    <option value="APA 6">APA 6</option>
                                    <option value="APA 7">APA 7</option>
                                    <option value="Chicago / Turabian">Chicago / Turabian</option>
                                    <option value="Not applicable">Not applicable</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                    </div>

                    <div className="mid">
                        <h4>Paper details:</h4>
                        <form>
                            <textarea
                                placeholder="Write anything that you feel is important for the writer to consider"
                                value={details.instructions}
                                onChange={(e) => setDetails(prevState => ({
                                    ...prevState, instructions: e.target.value
                                }))}
                            ></textarea>
                        </form>
                    </div>

                    <div className="bottom">
                        <div className="files">
                            <h4>Additional materials:</h4>
                            <div className='upload'>
                                <form>
                                    <input type='file' />
                                </form>
                            </div>
                        </div>
                        <form>
                            <h4>Writers preferences</h4>
                            <div className='level12'>
                                <div className={details.paper_level === 'Basic' ? "input1 selected" : "input1"}>
                                    <input 
                                        type='radio'
                                        value='Basic'
                                        id='basic'
                                        checked={details.academic_year === 'Basic'}
                                        onChange={(e) => setDetails(details => ({
                                            ...details, paper_level: e.target.value
                                        }))}
                                    />
                                    <label for='basic' >Basic</label>
                                    
                                </div>
                                <div className={details.paper_level === 'Standard' ? "input1 selected" : "input1"}>
                                    <input 
                                        type='radio'
                                        value='Standard'
                                        id='standard'
                                        checked={details.academic_year === 'Standard'}
                                        onChange={(e) => setDetails(details => ({
                                            ...details, paper_level: e.target.value
                                        }))}
                                    />
                                    <label for='standard'>Standard</label>
                                    
                                </div>
                                <div className={details.paper_level === 'Advanced' ? "input1 selected" : "input1"}>
                                    <input 
                                        type='radio'
                                        value='Advanced'
                                        id='advanced'
                                        checked={details.academic_year === 'Advanced'}
                                        onChange={(e) => setDetails(details => ({
                                            ...details, paper_level: e.target.value
                                        }))}
                                    />
                                    <label for='advanced'>Expert</label>
                                   
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )

        orderbtn = (
            <div className="next-step">
                <button onClick={() => setOpen(!open)}>Summary</button>
            </div>
        )

        prevbtn = (
            <div className="prev-step">
                    <button onClick={() => setCurStep('FirstStep')}>Prev Step</button>
            </div>
        )
    }

    return (
        <div className="placeorder-container">

            <div className="placeorder-sidebar">
                <div className="order-requirements">
                    <h2>1</h2>
                    <ul>
                        <li>
                            <h3 style={{color: error ? '#D2122E' : '#fff'}}>Order requirements</h3>
                            <p style={{color: error ? '#D2122E' : '#fff'}}>Add your order requirements.</p>
                        </li>
                    </ul>
                </div>
                <div className="order-requirements">
                    <h2>2</h2>
                    <ul>
                        <li>
                            <h3>Order details</h3>
                            <p>Add your order details.</p>
                        </li>
                    </ul>
                </div>
                {/* <div className="order-requirements">
                    <h2>3</h2>
                    <ul>
                        <li>
                            <h3>Summary</h3>
                            <p>Your order summary.</p>
                        </li>
                    </ul>
                </div> */}
            </div>

            {displayStep}

            <div className="summarybtn">
                <div className="prev-step">
                    {prevbtn}
                </div>

                <div className="next-step">
                    {orderbtn}
                </div>
            </div>

        </div>
    )
}