import { useLayoutEffect, useRef } from "react";

const Message = ({ text }) => <span className="message">{text}</span>;

const MessageBlock = ({ messages, isRecived }) => (
  <div className={`msg-block${isRecived ? " right" : ""}`}>
    <div className="user-picture" />
    <div className="message-container">
      {messages.map((msg, i) => (
        <Message key={i} text={msg} />
      ))}
    </div>
  </div>
);

const MessagesContent = ({ messagesBlocks }) => {
  const MessagesRef = useRef();
  useLayoutEffect(() => {
    MessagesRef.current.scroll(0, MessagesRef.current.scrollHeight);
  }, [messagesBlocks]);
  return (
    <div id="MessagesContent" ref={MessagesRef}>
      <MessageBlock
        messages={["Hola, buen dia", "Necesito información"]}
        isRecived
      />
      <MessageBlock
        messages={[
          "Muchas gracias, soy Alejandro",
          "Claro, dime por favor, cual es tu nombre",
        ]}
      />
      <MessageBlock
        messages={[
          "Soy Lucia, tengo 38 años",
          "¿Qué necesito para contratar su servicio? Me urge cambiarme de proveedor, ya tengo todos mis papeles listos..",
        ]}
        isRecived
      />
      <MessageBlock
        messages={[
          "¡Muchas gracias! ¿Cuál es tu correo electrónico para poder enviarte toda la información",
        ]}
      />
      <MessageBlock
        messages={["De acuerdo, mi correo es test@dominio.com"]}
        isRecived
      />
      <MessageBlock
        messages={["Hola, buen dia", "Necesito información"]}
        isRecived
      />
      <MessageBlock
        messages={[
          "Muchas gracias, soy Alejandro",
          "Claro, dime por favor, cual es tu nombre",
        ]}
      />
      <MessageBlock
        messages={[
          "Soy Lucia, tengo 38 años",
          "¿Qué necesito para contratar su servicio? Me urge cambiarme de proveedor, ya tengo todos mis papeles listos..",
        ]}
        isRecived
      />
      <MessageBlock
        messages={[
          "¡Muchas gracias! ¿Cuál es tu correo electrónico para poder enviarte toda la información",
        ]}
      />
      <MessageBlock
        messages={["De acuerdo, mi correo es test@dominio.com"]}
        isRecived
      />
    </div>
  );
};

export default MessagesContent;
