'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, Download, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { getPortfolioData } from '../data/portfolio';
import { useLanguage } from '../contexts/LanguageContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface CVData {
  profile: string;
  role: string;
  skills: string[];
  experience: string[];
  education: string;
}

export default function Chatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string, type?: 'cv', data?: CVData }[]>([
    {
      role: 'assistant',
      content: t.chatbot.welcome
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messagePage, setMessagePage] = useState(0);
  const messagesPerPage = 5;

  // Obtener datos del portfolio según el idioma actual
  const portfolioData = useMemo(() => getPortfolioData(language), [language]);

  const totalMessagePages = Math.ceil(messages.length / messagesPerPage);
  const displayedMessages = messages.slice(
    messagePage * messagesPerPage,
    (messagePage * messagesPerPage) + messagesPerPage
  );

  const generateCV = (type: string): CVData => {
    const skills = portfolioData.skills
      .filter(s => type === 'full' || s.category.toLowerCase().includes(type.toLowerCase()))
      .map(s => s.name);

    const descriptions: Record<string, Record<string, string>> = {
      es: {
        frontend: "Ingeniera de Sistemas especializada en crear interfaces mágicas y fluidas. Experta en React y ecosistemas modernos de CSS.",
        backend: "Arquitecta de sistemas con enfoque en escalabilidad y robustez. Domina Node.js, Python y diseño de bases de datos.",
        mobile: "Desarrolladora mobile con pasión por la experiencia de usuario 'on the go'. Especialista en React Native y Flutter.",
        qa: "Aseguradora de calidad digital. Especialista en automatización, testing de integración y garantía de calidad total.",
        fullstack: "Ingeniera de Sistemas versátil con visión 360 del desarrollo de software. Capaz de navegar desde el pixel hasta el servidor."
      },
      en: {
        frontend: "Systems Engineer specialized in creating magical and fluid interfaces. Expert in React and modern CSS ecosystems.",
        backend: "Systems architect focused on scalability and robustness. Master of Node.js, Python and database design.",
        mobile: "Mobile developer passionate about 'on the go' user experience. Specialist in React Native and Flutter.",
        qa: "Digital quality assurance specialist. Expert in automation, integration testing and total quality assurance.",
        fullstack: "Versatile Systems Engineer with a 360-degree vision of software development. Capable of navigating from pixel to server."
      }
    };

    const experienceText = language === 'es' ? 'en' : 'at';

    return {
      profile: descriptions[language][type.toLowerCase()] || descriptions[language].fullstack,
      role: language === 'es' 
        ? `Desarrolladora ${type.charAt(0).toUpperCase() + type.slice(1)}`
        : `${type.charAt(0).toUpperCase() + type.slice(1)} Developer`,
      skills: skills.length > 0 ? skills : portfolioData.skills.slice(0, 6).map(s => s.name),
      experience: portfolioData.experience.map(e => `${e.role} ${experienceText} ${e.company}: ${e.description}`),
      education: language === 'es' 
        ? "Ingeniería de Sistemas - Universidad Nacional de Ingeniería"
        : "Systems Engineering - National University of Engineering"
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    const newMessages = [...messages, { role: 'user' as const, content: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);
    
    // Ir a la última página
    const newPage = Math.ceil((newMessages.length) / messagesPerPage) - 1;
    setMessagePage(newPage);

    await new Promise(resolve => setTimeout(resolve, 1500));

    let response: { role: 'assistant', content: string, type?: 'cv', data?: CVData } = {
      role: 'assistant',
      content: language === 'es' 
        ? 'No estoy seguro de qué perfil buscas. Prueba con "Frontend", "Backend", "Mobile" o "QA".'
        : 'I\'m not sure what profile you\'re looking for. Try "Frontend", "Backend", "Mobile" or "QA".'
    };

    if (userMessage.includes('front')) {
      response = {
        role: 'assistant',
        content: language === 'es' ? '¡Excelente elección! He preparado un CV de Frontend para ti.' : 'Great choice! I have prepared a Frontend CV for you.',
        type: 'cv',
        data: generateCV('frontend')
      };
    } else if (userMessage.includes('back')) {
      response = {
        role: 'assistant',
        content: language === 'es' ? 'El poder del servidor está contigo. Aquí tienes el CV de Backend.' : 'Server power is with you. Here is the Backend CV.',
        type: 'cv',
        data: generateCV('backend')
      };
    } else if (userMessage.includes('mobile')) {
      response = {
        role: 'assistant',
        content: language === 'es' ? 'Para llevar la magia en el bolsillo. CV Mobile listo.' : 'To carry magic in your pocket. Mobile CV ready.',
        type: 'cv',
        data: generateCV('mobile')
      };
    } else if (userMessage.includes('qa')) {
      response = {
        role: 'assistant',
        content: language === 'es' ? 'Buscando la perfección... CV de QA generado con éxito.' : 'Seeking perfection... QA CV generated successfully.',
        type: 'cv',
        data: generateCV('qa')
      };
    }

    const finalMessages = [...newMessages, response];
    setMessages(finalMessages);
    setIsTyping(false);
    
    // Ir a la última página después de la respuesta
    const finalPage = Math.ceil((finalMessages.length) / messagesPerPage) - 1;
    setMessagePage(finalPage);
  };

  const downloadPDF = async (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`CV_Eliana_Barturen_${language}.pdf`);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-soft-pink hover:bg-pink-400 text-white rounded-full shadow-cute flex items-center justify-center transition-all transform hover:scale-110"
      >
        {isOpen ? <X size={22} /> : <Bot size={22} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[380px] max-h-[550px] bg-white rounded-2xl shadow-cute z-50 flex flex-col overflow-hidden border-2 border-gray-300"
          >
            {/* Header */}
            <div className="bg-pastel-pink p-5 flex items-center justify-between border-b-2 border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="text-soft-pink" size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-text-dark">Asistente Virtual</h3>
                  <p className="text-xs text-text-light">En línea</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <X size={14} className="text-text-dark" />
              </button>
            </div>

            {/* Messages con paginación */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white">
              {displayedMessages.map((m, i) => {
                const actualIndex = messagePage * messagesPerPage + i;
                return (
                  <div key={actualIndex} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {m.type === 'cv' && m.data ? (
                      <div className="w-full space-y-4">
                        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-soft">
                          <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="text-soft-pink" size={18} />
                            <span className="font-semibold text-sm text-text-dark">{m.content}</span>
                          </div>
                          <div
                            id={`cv-preview-${actualIndex}`}
                            className="bg-white rounded-lg p-5 space-y-4 border border-pastel-pink"
                          >
                            <div className="text-center border-b border-pastel-pink pb-3">
                              <h2 className="font-display text-xl font-bold text-text-dark">{portfolioData.name}</h2>
                              <p className="text-soft-pink font-semibold text-sm mt-1">{m.data.role}</p>
                            </div>
                            <div>
                              <h3 className="font-bold text-sm text-text-dark mb-2">Perfil</h3>
                              <p className="text-xs text-text-light leading-relaxed">{m.data.profile}</p>
                            </div>
                            <div>
                              <h3 className="font-bold text-sm text-text-dark mb-2">Habilidades</h3>
                              <div className="flex flex-wrap gap-2">
                                {m.data.skills.map(s => (
                                  <span key={s} className="bg-pastel-pink px-2 py-1 rounded-full text-xs font-medium">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <button
                              onClick={() => downloadPDF(`cv-preview-${actualIndex}`)}
                              className="w-full bg-soft-pink hover:bg-pink-400 text-white font-semibold py-2.5 rounded-full transition-colors flex items-center justify-center gap-2 text-sm"
                            >
                              <Download size={16} />
                              {t.chatbot.download}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className={`max-w-[85%] rounded-xl p-3 ${m.role === 'user' ? 'bg-soft-pink text-white ml-auto' : 'bg-gray-100 text-text-dark mr-auto'}`}>
                        <p className="text-sm leading-relaxed">{m.content}</p>
                      </div>
                    )}
                  </div>
                );
              })}
              {isTyping && (
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-soft-pink rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-soft-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-soft-pink rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
              
              {/* Paginación de mensajes */}
              {totalMessagePages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-200">
                  <button
                    onClick={() => setMessagePage(Math.max(0, messagePage - 1))}
                    disabled={messagePage === 0}
                    className="p-1.5 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft size={16} className="text-text-dark" />
                  </button>
                  <span className="text-xs text-text-light px-3">
                    {messagePage + 1} / {totalMessagePages}
                  </span>
                  <button
                    onClick={() => setMessagePage(Math.min(totalMessagePages - 1, messagePage + 1))}
                    disabled={messagePage === totalMessagePages - 1}
                    className="p-1.5 rounded-full bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight size={16} className="text-text-dark" />
                  </button>
                </div>
              )}
            </div>

            {/* Input con paginación de sugerencias */}
            <div className="p-5 bg-white border-t-2 border-gray-200">
              <div className="flex gap-3 mb-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t.chatbot.placeholder}
                  className="flex-1 px-5 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-soft-pink text-sm"
                />
                <button
                  onClick={handleSend}
                  className="w-12 h-12 bg-soft-pink hover:bg-pink-400 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <Send size={20} />
                </button>
              </div>
              {/* Botones de sugerencias rápidas */}
              <div className="flex flex-wrap gap-2.5">
                {['Frontend', 'Backend', 'Mobile', 'QA'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      setInput(suggestion);
                      setTimeout(() => handleSend(), 100);
                    }}
                    className="px-4 py-2 text-xs rounded-full bg-pastel-pink text-text-dark font-medium hover:bg-soft-pink transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}