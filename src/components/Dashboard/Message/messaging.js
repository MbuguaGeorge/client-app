import React, {useState, useEffect, useRef} from 'react';
import './messaging.css';
import SendIcon from '@mui/icons-material/Send';

import {io} from "socket.io-client";

export default function Messaging(){

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

    const scrollRef = useRef();

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

    return (
        <div className="phone-chat-container">
            <div className="phone-chat-box">
                <div className="phone-msg-header">
                    <h1>Messages</h1>
                </div>

                <div className="chat-panel">
                    {oldMessages.map((content, i) => {
                        return (
                            <div className="row no-gutters" key={i} ref={scrollRef}>
                                <div className={userSenderID.id === parseInt(content.senderID) || userSenderID.id === content.senderID.id ? "col-md-3 offset-md-9" : "col-md-3"}>
                                    <div className={userSenderID.id === parseInt(content.senderID) || userSenderID.id === content.senderID.id ? "chat-bubble chat-bubble--blue chat-bubble--right" : "chat-bubble chat-bubble--left"}>
                                        <div className="msg-cont">
                                            <h5>{content.content}</h5>
                                        </div>
                                        <div className="time">
                                            <p>20:02</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='phone-msg-input'>
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
    )
}