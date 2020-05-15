import React from "react";
import { Input, Button, Form } from "semantic-ui-react";
import Message from "../../components/Message";

const ChatPresenter = ({ handleChange, handleSubmit, messages }) => (
  <div className={"chat-page"}>
    <div className="chat-screen">
      {messages.map((message) => (
        <Message
          key={message._id}
          userId={message.userId}
          text={message.text}
        />
      ))}
    </div>
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="text"
        placeholder="Send massage..."
        onChange={handleChange}
      />
      <Button type="submit" name="submit">
        SEND
      </Button>
    </Form>
  </div>
);

export default ChatPresenter;
