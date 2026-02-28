import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Send Message Handler
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const userInput = input;
    setInput("");
    setLoading(true);

    try {
      // 🔥 API CALL to your backend
      const res = await fetch("https://db-10t2.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();

      const botReply = data?.reply || "Sorry, I cannot understand right now.";

      const botMessage: Message = {
        sender: "bot",
        text: botReply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Server error. Please try again later.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={32} />
        </button>
      )}

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[450px] shadow-lg rounded-xl border bg-white flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 font-bold flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span>ChatBot</span>
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-100">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white self-end ml-auto"
                    : "bg-gray-300 text-black self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-gray-300 p-2 rounded-lg text-sm w-fit">
                Typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              type="text"
              value={input}
              placeholder="Type a message..."
              className="flex-1 p-2 outline-none"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
