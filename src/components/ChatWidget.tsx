import React, { useState, useRef, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! How can we help you?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMessage: Message = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    // Simulate bot response
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: 'Thanks for your message! We’ll get back to you shortly.', sender: 'bot' }
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Text above button */}
      {!isOpen && (
        <div className="mb-2 text-center text-lg font-bold text-teal-600 animate-bounce">
          <span className="bg-white px-2 py-1 rounded shadow-md">
            We Are Here!
          </span>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-700 hover:bg-purple-800 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="mt-4 w-80 bg-white shadow-xl rounded-lg border p-4 flex flex-col animate-fade-in">
          <h3 className="text-lg font-semibold mb-3">Chat with us</h3>
          <div className="flex-1 h-64 overflow-y-auto border rounded p-2 mb-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${
                    msg.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-400 text-xs">Bot is typing...</div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded p-2 text-sm focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-700 hover:bg-purple-800 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
