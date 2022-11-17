import React, {useState, useEffect, useRef} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import './header.css';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SendIcon from '@mui/icons-material/Send';
import Prof from '../Profile/prof';
import Settings from '../Settings/settings';
import Messaging from '../Message/messaging';
import Info from '../Instructions/info';

import {io} from "socket.io-client";

export default function SideBar() {

    // messaging states
    const [email, setEmail] = useState(null);
    const [userSenderID, setUserSenderID] = useState(null);
    const [userReceiverID, setUserReceiverID] = useState(null);
    const [customers, setCustomers] = useState([]);
    const [socket, setSocket] = useState(null);

    const [curMessage, setCurMessage] = useState(''); 
    const [messages, setMessages] = useState(null);
    const [conversation, setConversation] = useState([]);
    const [oldMessages, setOldMessages] = useState([]);
    const [curChat, setCurChat] = useState(null);

    // Sidebar states
    const [activeOrders, setActiveOrders] = useState([]);

    const [order, setOrder] = useState(true);
    const [setting, setSetting] = useState(false);
    const [profile, setProfile] = useState(false);
    const [info, setInfo] = useState(false);
    const [messaging, setMessaging] = useState(false);
    const [infoId, setInfoId] = useState(null);

    const [flapChat, setFlapChat] = useState(false);

    const [redirect, setRedirect] = useState(false);

    // handle slide nav
    const [isExpanded, setIsExpanded] = useState(false);

    // profile modal
    const [open, setOpen] = useState(false);

    const scrollRef = useRef();

    console.log(profile)

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('https://georgeclientapp.herokuapp.com/dashboard/list', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                }
            })
            const res = await data.json()
            setActiveOrders(res)
        }

        fetchData()
    }, []);

    // get conversations of user
    useEffect(() => {
        async function getConversation(){
            try{
                const data = await fetch(`http://localhost:5000/conversations/${userReceiverID}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
                });

                const res = await data.json()
                setConversation(res)
            }catch(err){
                console.log(err)
            }
        };

        if(userReceiverID !== null){
            getConversation()
        }
    },[userReceiverID]);

    // get conversation messages
    useEffect(() => {
        const conversationId = conversation.map(conv => conv._id)
        async function getMessages(){
            try {
                const data = await fetch(`http://localhost:5000/messages/${conversationId[0]}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
                });

                const res = await data.json()
                return setOldMessages(res)

            }catch(err){
                console.log(err)
            }
        };
        if(conversationId !== null && conversationId !== undefined){
            getMessages()
        }
    }, [conversation]);

    useEffect(() => {
        conversation.map((c) => setCurChat(c))
    },[conversation])

    useEffect(() => {
        messages &&
            curChat?.member.includes(messages.senderId) &&
                setOldMessages((prev) => [...prev, messages])
    }, [messages, curChat]);

    // smooth scroll
    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    },[oldMessages]);

    // socket consigurations
    useEffect(() => {
        async function fetchUsers(){
            const users = await fetch('https://georgeclientapp.herokuapp.com/profile/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${localStorage.getItem('token')}`
                }
            })

            const res = await users.json()
            const supportEmail = res.find(user => user.email === 'mbuguag026@gmail.com')
            setCustomers(res)
            setUserReceiverID(supportEmail.id)
        };

        async function fetchData(){
            const data = await fetch('https://georgeclientapp.herokuapp.com/profile/cur', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `token ${localStorage.getItem('token')}`
                }
            })

            const res = await data.json()
            const useremail = res.map(em => em.email)
            setEmail(useremail[0])
        };

        fetchUsers();
        fetchData();
    }, []);

    useEffect(() => {
        if(email){
            const pk = customers.find(id => {
                return id.email === email
            })
            setUserSenderID(pk)
        }

    },[email, customers]);

    useEffect(() => {
        const URL = "http://localhost:5000/";
        if (socket === null){
            setSocket(io(URL, {transports: ['websocket']}))
        };

        if(socket){
            if (userSenderID !== null && userSenderID !== undefined){
                socket.emit("addUser", userSenderID.id);
            }

            socket.on("getUsers", users => {
                console.log(users)
            });
        };

    
    }, [socket, userSenderID]);

    useEffect(() => {
        if(socket){
            socket.on('received_message', (content) => {
                setMessages({
                    senderID: content.senderID.id,
                    content: content.content,
                    createdAt: Date.now(),
                });
            });
        }

    }, [socket]);

    const sendMessage = async (event) => {
        event.preventDefault()

        if (curMessage !== ''){
            const messageData = {
                content: curMessage,
                receiverID: userReceiverID,
                senderID: userSenderID,
            };
            await socket.emit('sendMessage', messageData);
            setOldMessages([...oldMessages, messageData]);
            setCurMessage("")
        }
    };

    const handleOpen = () => {
        setOpen(!open)
    };

    const handleInfo = (id) => {
        setInfo(true)
        setProfile(false)
        setOrder(false)
        setSetting(false)
        setInfoId(id)
    };

    const handleProfile = () => {
        setProfile(true)
        setOrder(false)
        setSetting(false)
        setMessaging(false)
    };

    const handleOrder = () => {
        setOrder(true)
        setSetting(false)
        setMessaging(false)
    };

    const handleSetting = () => {
        setOrder(false)
        setMessaging(false)
        setSetting(true)
    };

    const handleMessaging = () => {
        setMessaging(true)
        setOrder(false)
        setSetting(false)
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setRedirect(true)
    };

    let display, orderActiveOptionStyle, settingActiveOptionStyle, messagingActiveStyle;
    let profileModal;
    let navigate = useNavigate();
    let no_of_orders;

    if (activeOrders.length < 1){
        no_of_orders = (
            <h5>My orders </h5>
        )
    }else{
        no_of_orders = (
            <h5>My orders <span>{activeOrders.length}</span></h5>
        )
    }

    if (redirect){
        return navigate('/', {replace: true})
    };

    if (open === true){
        profileModal = (
            <div className="my-profile">
                    <ul>
                        <li onClick={handleProfile}>
                            <PersonOutlineOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>My Profile</h5>
                        </li>
                        <li onClick={handleLogout}>
                            <LogoutOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Logout</h5>
                        </li>
                    </ul>
            </div>
        )
    };

    if (order === true){
        display = (
            <Prof handleInfo={handleInfo} />
        );

        orderActiveOptionStyle = {
            backgroundColor: '#292B3A',
            borderRight: '3px solid #3367d6',
            color: '#fff'
        }
    }else if(messaging === true){
        display = (
            <Messaging />
        )

        messagingActiveStyle  = {
            backgroundColor: '#292B3A',
            borderRight: '3px solid #3367d6',
            color: '#fff'
        }
    } else if (setting === true){
        display = (
            <Settings />
        )

        settingActiveOptionStyle = {
            backgroundColor: '#292B3A',
            borderRight: '3px solid #3367d6',
            color: '#fff'
        }
    }else if (info === true){
        display = (
            <Info pk={infoId} />
        )
    }

    return (
        <div className="user-dashboard">
            <div className="my-profile-container">
                {profileModal}
            </div>
            <div className={isExpanded ? "sidebar expanded" : "sidebar"}>

                <div className="hamburger" onClick={() =>  setIsExpanded(!isExpanded)}>
                    <span className="h-top"></span>
                    <span className="h-mid"></span>
                    <span className="h-bottom"></span>
                </div>

                <div className={isExpanded ? "sidebar-top-slide expanded" : "sidebar-top-slide"}>
                    <Link to='/dashboard/placeorder' style={{textDecoration: 'none'}}><button><AddCircleOutlineIcon style={{fontSize: '20px', paddingBottom: '5px'}} /><h5>Place Order</h5></button></Link>
                </div>

                <div className="sidebar-top">
                    <h1>Elency.</h1>
                    <Link to="/dashboard/placeorder" style={{textDecoration: 'none'}}><Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '180px'}} >Place order</Button></Link>
                </div>

                <div className={isExpanded ? "sidebar-mid expanded" : "sidebar-mid"}>
                    <ul>
                        <li onClick={handleOpen}>
                            <AccountBoxOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>123422 <span style={{paddingLeft: '40px'}}>&gt;</span></h5>
                        </li>
                        <li>
                            <AccountBalanceWalletOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Balance <span style={{paddingLeft: '10px'}}>$0.00</span></h5>
                        </li>
                        <li>
                            <NotificationsOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Notifications</h5>
                        </li>
                    </ul>
                </div>

                <div className={isExpanded ? "sidebar-bottom expanded" : "sidebar-bottom"}>
                    <ul>
                        <li onClick={handleOrder} style={orderActiveOptionStyle}>
                            <CardGiftcardOutlinedIcon style={{fontSize: '20px'}} />
                            {no_of_orders}
                        </li>
                        <li onClick={handleMessaging} className="messaging-small-screen" style={messagingActiveStyle}>
                            <ChatOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Messages</h5>
                        </li>
                        <li onClick={handleSetting} style={settingActiveOptionStyle}>
                            <SettingsOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Settings</h5>
                        </li>
                        <li>
                            <CreditCardIcon style={{fontSize: '20px'}} />
                            <h5>Finance</h5>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={flapChat === true ? "chat-container" : "msg-container"}>
                <div className="msg-box">
                    <div className="msg-header" onClick={() => setFlapChat(!flapChat)}>
                        <h1>Messages</h1>
                    </div>

                    <div className={flapChat === true ? "hide-chat-panel" : "chat-panel"}>
                    {oldMessages.map((content, i) => {
                        return (
                            <div className="row no-gutters" key={i} ref={scrollRef}>
                                <div className={userSenderID.id === parseInt(content.senderID) || userSenderID.id === content.senderID.id ? "col-md-3 offset-md-9" : "col-md-3"}>
                                    <div className={userSenderID.id === parseInt(content.senderID) || userSenderID.id === content.senderID.id ? "chat-bubble chat-bubble--blue chat-bubble--right" : "chat-bubble chat-bubble--left"}>
                                        <div className="msg-cont">
                                            {content.content}
                                        </div>
                                        <div className="time">
                                            <p>20:02</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )})}
                    </div>

                    <div className={flapChat === true ? "hide-msg-input" : "msg-input"}>
                        <div className="chat-box-input">
                            <input type="text" required 
                                placeholder="New message"
                                value = {curMessage}
                                onChange = {(event) => setCurMessage(event.target.value)}
                                onKeyPress = {event => event.key === 'Enter' ? sendMessage(event) : null}
                            />
                            <div className="i"><SendIcon /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-option-dashboard">
                {display}
            </div>

        </div>
    )
}