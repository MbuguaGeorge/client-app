import React, {useState, useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './review.css';
import '../Profile/profile.css';
import {Form} from 'react-bootstrap';
import {Button} from '@mui/material';
import {Lock} from '@mui/icons-material';

function Review() {
    //  price hooks
    const [pagePrice, setPagePrice] = useState(0);

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
        academic_year: '',
        title: '',
        deadline: '',
        paper_level: '',
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

    const [level2, setLevel2] = useState('')

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

    const [four, setFour] = useState(false);
    const [eight, setEight] = useState(false);
    const [twentyfour, setTwentyfour] = useState(false);
    const [two, setTwo] = useState(false);
    const [three, setThree] = useState(false);
    const [five, setFive] = useState(false);
    const [seven, setSeven] = useState(false);
    const [fourteen, setFourteen] = useState(false);

    const handleChange15 = () => {
        setFour(!four)
        setEight(false)
        setTwentyfour(false)
        setTwo(false)
        setThree(false)
        setFive(false)
        setSeven(false)
        setFourteen(false)
        setDetails(details => ({
            ...details, deadline: '4h'
        }))
    };

    const handleChange16 = () => {
        setFour(false)
        setEight(!eight)
        setTwentyfour(false)
        setTwo(false)
        setThree(false)
        setFive(false)
        setSeven(false)
        setFourteen(false)
        setDetails(details => ({
            ...details, deadline: '8h'
        }))
    };

    const handleChange17 = () => {
        setFour(false)
        setEight(false)
        setTwentyfour(!twentyfour)
        setTwo(false)
        setThree(false)
        setFive(false)
        setSeven(false)
        setFourteen(false)
        setDetails(details => ({
            ...details, deadline: '24h'
        }))
    };

    const handleChange18 = () => {
        setFour(false)
        setEight(false)
        setTwentyfour(false)
        setTwo(!two)
        setThree(false)
        setFive(false)
        setSeven(false)
        setFourteen(false)
        setDetails(details => ({
            ...details, deadline: '2d'
        }))
    };

    const handleChange19 = () => {
        setFour(false)
        setEight(false)
        setTwentyfour(false)
        setTwo(false)
        setThree(!three)
        setFive(false)
        setSeven(false)
        setFourteen(false)
        setDetails(details => ({
            ...details, deadline: '3d'
        }))
    };

    const handleChange20 = () => {
        setFour(false)
        setEight(false)
        setTwentyfour(false)
        setTwo(false)
        setThree(false)
        setFive(!five)
        setSeven(false)
        setFourteen(false)
        setDetails(details => ({
            ...details, deadline: '5d'
        }))
    };

    const handleChange21 = () => {
        setFour(false)
        setEight(false)
        setTwentyfour(false)
        setTwo(false)
        setThree(false)
        setFive(false)
        setSeven(!seven)
        setFourteen(false)
        setDetails(details => ({
            ...details, deadline: '7d'
        }))
    };

    const handleChange22 = () => {
        setFour(false)
        setEight(false)
        setTwentyfour(false)
        setTwo(false)
        setThree(false)
        setFive(false)
        setSeven(false)
        setFourteen(!fourteen)
        setDetails(details => ({
            ...details, deadline: '14d'
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
    if (details.paper_level === '') {
        paperLevelStyle = {
            display: 'None'
        }
    }
    if (count < 1 && count2 < 1 && count3 < 1 && details.paper_level === ''){
        totalStyle = {
            display: 'None'
        }
    }

    // Perform pricing

    let price;

    function highSchoolSwitch(){
        switch(details.deadline === '4h'){
            case details.academic_year === 'High School':
                return count * 39
            default:
                return 0
        }
    }

    return (
        <>
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
                    <h5 style={pageStyle}>{count} page x $39.00 <span>${highSchoolSwitch()}</span></h5>
                    <h5 style={slideStyle}>{count3} slide x $19.50 <span>$19.50</span></h5>
                    <h5 style={chartStyle}>{count2} chart x $19.50 <span>$19.50</span></h5>
                    <h5 style={paperLevelStyle}>{details.paper_level} <span>$29.25</span></h5>
                </div>
                <div className='total-price'>
                    <h3 style={totalStyle}>Total price</h3>
                    <h4 style={totalStyle}>$146.25</h4>
                </div>
                <div className='checkout'>
                <Button startIcon={<Lock />} variant='contained' size='small'>Safe checkout</Button>
                </div>
            </div>

            <div className='order'>
                <h4>Place an order</h4>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div className='level1'>
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

                    <div className='level2'>
                        <div>
                            <h5>Type of paper</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3">
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
                        <div>
                            <h5>Discipline</h5>
                        </div>
                        <div className="col-sm-12 col-md-6 mt-3">
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
                        <div>
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
                        <div>
                            <h5>Title</h5>
                        </div>
                        <input 
                            type='text'
                            placeholder='Enter the title of your paper'
                            value={details.title}
                                onChange={e => setDetails(details => ({
                                    ...details, title: e.target.value
                                }))}
                        />
                    </div>

                    <div className='level6'>
                        <div>
                            <h5>Paper details</h5>
                        </div>
                        <textarea
                            placeholder='Write anything that you feel is important for the writer to consider.'
                            value={details.instructions}
                                onChange={e => setDetails(details => ({
                                    ...details, instructions: e.target.value
                                }))}
                        ></textarea>
                    </div>

                    <div className='level7'>
                        <div>
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
                        <div>
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
                        <div>
                            <h5>Deadline</h5>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='4h'
                                id='4h'
                                onChange={handleChange15}
                            />
                            <label for='4h'>4h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='8h'
                                id='8h'
                                onChange={handleChange16}
                            />
                            <label for='8h'>8h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='24h'
                                id='24h'
                                onChange={handleChange17}
                            />
                            <label for='24h'>24h</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='2d'
                                id='2d'
                                onChange={handleChange18}
                            />
                            <label for='2d'>2d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='3d'
                                id='3d'
                                onChange={handleChange19}
                            />
                            <label for='3d'>3d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='5d'
                                id='5d'
                                onChange={handleChange20}
                            />
                            <label for='5d'>5d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='7d'
                                id='7d'
                                onChange={handleChange21}
                            />
                            <label for='7d'>7d</label>
                        </div>
                        <div className='input1'>
                            <input 
                                type='radio'
                                value='14d'
                                id='14d'
                                onChange={handleChange22}
                            />
                            <label for='14d'>14d</label>
                        </div>
                    </div>

                    <div className='level10'>
                        <div>
                            <h5>Pages</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount} >-</button>
                            <input type="text" value={count}/>
                            <button onClick={incrementCount}>+</button>
                        </div>
                    </div>

                    <div className='level10'>
                        <div>
                            <h5>Sources to be cited</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount1} >-</button>
                            <input type="text" value={count1}/>
                            <button onClick={incrementCount1}>+</button>
                        </div>
                    </div>

                    <div className='level10'>
                        <div>
                            <h5>Charts</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount2} >-</button>
                            <input type="text" value={count2}/>
                            <button onClick={incrementCount2}>+</button>
                        </div>
                    </div>

                    <div className='level10'>
                        <div>
                            <h5>PowerPoint Slides</h5>
                        </div>
                        <div className="ref">
                            <button onClick={decrementCount3} >-</button>
                            <input type="text" value={count3}/>
                            <button onClick={incrementCount3}>+</button>
                        </div>
                    </div>

                    <div className='level12'>
                        <div>
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
                        <div>
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