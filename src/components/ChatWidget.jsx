import { useState } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const predefinedQAs = {
  "how do i sell my license?":
    "Go to your dashboard → click 'Sell' → follow the guided steps.",
  "how do i buy a license?":
    "Browse listings → click 'Buy' → complete payment.",
};

export default function ChatWidget() {
  const [expanded, setExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    const key = userMsg.toLowerCase();
    const response =
      predefinedQAs[key] || "Sorry, I don't know that. Please contact support.";
    setMessages((msgs) => [
      ...msgs,
      { type: "user", text: userMsg },
      { type: "bot", text: response },
    ]);
    setInput("");
  };

  if (!expanded) {
    // Collapsed button
    return (
      <button
        onClick={() => setExpanded(true)}
        aria-label="Open chat"
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <FaComments />
      </button>
    );
  }

  // Expanded chat widget
  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white dark:bg-gray-800 border dark:border-gray-600 rounded shadow-lg p-2 text-sm z-50 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold text-gray-900 dark:text-gray-100">
          💬 SoftBot
        </div>
        <button
          onClick={() => setExpanded(false)}
          aria-label="Close chat"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <FaTimes />
        </button>
      </div>
      <div className="flex-grow h-40 overflow-y-auto mb-2 space-y-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.type === "user"
                ? "bg-blue-100 dark:bg-blue-900 text-right"
                : "bg-gray-100 dark:bg-gray-700 text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a question..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-grow border dark:border-gray-600 p-2 rounded-l bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
}
