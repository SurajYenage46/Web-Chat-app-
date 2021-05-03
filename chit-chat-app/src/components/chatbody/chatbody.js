import React,{Component} from 'react';
import "./chatbody.css";

import ChatList from "../chatlist/chatlist";
import ChatContent from "../chatcontent/chatcontent";
import UserProfile from "../userprofile/userprofile";

export default class Chatbody extends Component{
    render(){
        return(
            <div className="main__chatbody">
                     <ChatList />
                     <ChatContent />
                     <UserProfile />
            </div>
        );
    }
}