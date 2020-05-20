import React from "react";
import { Input, Button, Form } from "semantic-ui-react";
import Message from "../Message";

const ChatPresenter = ({ handleChange, handleSubmit, messages, value }) => (
  <div className={"chat-page"}>
    <h2>Global chat</h2>
    {Meteor.userId() ? (
      <div className={"chat-container"}>
        <div className={"chat-screen"}>
          {messages.map((message) => (
            <Message
              key={message._id}
              userId={message.userId}
              messageText={message.text}
            />
          ))}
        </div>
        <Form className="chat-form" onSubmit={handleSubmit}>
          <Input
            type="text"
            value={value}
            name="messageText"
            placeholder="Send massage..."
            onChange={handleChange}
          />
          <Button type="submit" name="submit">
            SEND
          </Button>
        </Form>
      </div>
    ) : (
      <p className="alert">Please sign in!</p>
    )}
  </div>
);

export default ChatPresenter;
