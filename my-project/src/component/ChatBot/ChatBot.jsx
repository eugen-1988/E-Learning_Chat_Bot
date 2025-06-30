import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { BsRobot } from "react-icons/bs";
import siteContent from "../../utils/siteContent";
import { detectLanguage } from "../../utils/detectLanguage";
import axios from "axios";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hallo! Ich bin hier, um dir zu helfen. ",
    },
  ]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setTyping(true);

    const detectedLang = detectLanguage(input);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "mistralai/mixtral-8x7b-instruct",
          messages: [
            {
              role: "system",
              content: `
You are a friendly and professional AI chatbot for the e-learning platform STARTCODING COMMUNITY.

🎯 Behavior:
- You MUST respond only in the same language the user used.
- Never translate your response.
- Never repeat the answer in another language.
- Always keep the entire conversation in that one language.
- Supported languages: German (de), English (en), Romanian (ro), French (fr), Spanish (es), Russian (ru).
- Never mix or switch languages mid-reply.
- Greet the user naturally and briefly if they say "hi", "hallo", "salut", etc. Use friendly tone.

🧠 Data Usage:
- Use only the JSON knowledge base provided below to answer platform-related questions (courses, instructors, certifications, languages, etc).
- Do NOT invent information or say “based on what I was trained on”. Only use this data.

💬 General IT Questions:
- If the user asks something general about IT (e.g. “what is React?”), answer briefly and clearly, like a helpful teacher.
- Do not go into excessive detail. Use short and easy explanations.

⚠️ If no info found:
- If a user asks something unrelated and no answer can be found, say in their language:
  - "Sorry, I don’t have information about that." / „Îmi pare rău, nu am informații despre acest subiect.” etc.

📚 JSON KNOWLEDGE BASE:
${JSON.stringify(siteContent)}
`,
            },
            ...newMessages,
          ],
        },
        {
          headers: {
            Authorization: "Bearer " + import.meta.env.VITE_OPENROUTER_API_KEY,
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "IT Lernhilfe",
          },
        }
      );

      const botReply = response.data.choices[0].message;
      setMessages([...newMessages, botReply]);
    } catch (err) {
      console.error("AI Antwort fehlgeschlagen:", err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Es tut mir leid, ich konnte momentan nicht antworten.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Bulină inițială */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 duration-200"
        >
          <BsRobot className="text-2xl" />
        </button>
      )}

      {/* Chatbot UI */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="w-[90vw] max-w-sm h-[500px] bg-light text-dark shadow-2xl rounded-xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-secondary text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-white text-secondary rounded-full p-1 w-7 h-7 flex items-center justify-center shadow-md">
                  <BsRobot className="text-lg" />
                </div>
                <span className="font-semibold text-lg">
                  Ich bin KI-Chatbot!
                </span>
              </div>
              <button onClick={() => setOpen(false)}>
                <IoMdClose className="text-xl hover:text-primary hover:scale-110 transition duration-200 cursor-pointer" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="bg-secondary text-white rounded-full p-2 w-8 h-8 flex items-center justify-center shadow">
                      <BsRobot className="text-base" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-xl max-w-[80%] text-sm ${
                      msg.role === "user"
                        ? "bg-secondary text-white ml-auto"
                        : "bg-white text-dark"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="text-dark text-xs italic animate-pulse">
                  Der Bot schreibt...
                </div>
              )}
              <div ref={bottomRef}></div>
            </div>

            {/* Input */}
            <div className="p-3 bg-light border-t border-gray-200">
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden shadow-sm focus-within:ring-1 focus-within:ring-secondary transition">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 text-sm outline-none bg-white font-poppins"
                  placeholder="Deine Frage..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-secondary text-white text-sm py-2 px-5 rounded-none rounded-r-xl hover:bg-primary transition-colors duration-200"
                >
                  Senden
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
