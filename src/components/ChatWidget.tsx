import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react"; // icon library (lucide-react)

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // 🔹 Bot conversation rules
  const botResponses = [
    {
      keywords: ["hi", "hello", "hey"],
      response:
        "Hello 👋! Welcome to Luveth tech Solutions PVT Ltd. How can I assist you today?",
    },
    {
      keywords: ["company", "about", "who are you"],
      response:
        "We are a leading IT solutions company 🚀 offering website designing, mobile apps, and digital marketing,data services to businesses worldwide.",
    },
    {
      keywords: ["services", "offer", "solutions"],
      response:
        "Our services include: 🌐 Web Development, 📱 Mobile App Development, 📊 Digital Marketing, ☁️ Cloud Solutions, and 🎨 UI/UX Design.",
    },
    {
      keywords: ["reach", "contact", "connect"],
      response:
        "You can reach us via email 📧 lakshmareddy@luvetha.com or call us at 📞 +9000204921.",
    },
    {
      keywords: ["expect", "benefit", "get"],
      response:
        "You can expect ✅ quality solutions, ⏳ on-time delivery, and 🤝 dedicated support from our team.",
    },
    {
      keywords: ["pricing", "cost", "budget"],
      response:
        "Our pricing depends on project scope 💰. Small websites start from $500, while enterprise solutions are customized.",
    },
    {
      keywords: ["timeline", "time", "duration"],
      response:
        "Most projects take between 2–8 weeks depending on complexity 📆.",
    },
    {
      keywords: ["portfolio", "work", "projects"],
      response:
        "You can check our latest projects here: 🌍 www.ourcompany.com/portfolio",
    },
    {
      keywords: ["info", "details", "share", "name", "email"],
      response:
        "Sure 😊! Please provide your Name, Contact Number, and Email ID, so our team can reach out.",
    },
    {
      keywords: ["bye", "goodbye", "thanks", "thank you"],
      response: "Goodbye 👋! Thanks for visiting us. Have a wonderful day!",
    },
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botReply = "Sorry, I don’t understand that. Can you rephrase?";

    // 🔹 Check keywords using for loop + if/else
    for (let i = 0; i < botResponses.length; i++) {
      const { keywords, response } = botResponses[i];
      for (let j = 0; j < keywords.length; j++) {
        if (input.toLowerCase().includes(keywords[j])) {
          botReply = response;
          break;
        }
      }
      if (botReply !== "Sorry, I don’t understand that. Can you rephrase?") {
        break;
      }
    }

    const botMessage: Message = { sender: "bot", text: botReply };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle size={32} /> {/* Increased size */}
        </button>
      )}

      {/* Chatbot Container */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-[450px] shadow-lg rounded-xl border bg-white flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 font-bold flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="text-2xl">💬</span> {/* Bigger icon */}
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
