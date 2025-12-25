import React, { useState } from 'react';
import { Trash2, ChevronDown, Copy } from 'lucide-react';

const TranslationApp = () => {
    const [activeTab, setActiveTab] = useState('text');
    const [sourceLang, setSourceLang] = useState('Japanese'); // Mặc định là Japanese
    
    const languages = ["Japanese", "English", "Vietnamese"];
    const historyItems = ["Text content 1", "Text content 2", "Text content 3", "Text content 4"];

    // Lọc ra 2 ngôn ngữ còn lại để hiển thị kết quả
    const targetLanguages = languages.filter(lang => lang !== sourceLang);

    return (
        <div className="flex flex-col h-screen w-full bg-white font-sans overflow-hidden">
            {/* --- HEADER --- */}
            <header className="flex items-center justify-between px-6 py-2 bg-[#E5E7EB] border-b w-full">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="font-bold text-[#4B5563] text-lg">AITranslateTool</span>
                </div>

                <div className="flex bg-[#6B7280] p-1 rounded-md">
                    <button 
                        onClick={() => setActiveTab('text')}
                        className={`px-8 py-1 rounded transition ${activeTab === 'text' ? 'bg-[#374151] text-white shadow-sm' : 'text-white hover:bg-gray-500'}`}
                    >
                        Text
                    </button>
                    <button 
                        onClick={() => setActiveTab('file')}
                        className={`px-8 py-1 rounded transition ${activeTab === 'file' ? 'bg-[#374151] text-white shadow-sm' : 'text-white hover:bg-gray-500'}`}
                    >
                        File
                    </button>
                </div>
                <div className="w-32 hidden md:block"></div>
            </header>

            <div className="flex flex-1 w-full overflow-hidden">
                {/* --- SIDEBAR --- */}
                <aside className="w-64 md:w-80 bg-[#F3F4F6] border-r flex flex-col shrink-0">
                    <div className="p-4 flex justify-between items-center">
                        <h2 className="text-xl font-medium">History</h2>
                        <button className="flex items-center gap-1 bg-white border border-gray-300 px-2 py-0.5 rounded text-sm shadow-sm">
                            All <ChevronDown size={14} />
                        </button>
                    </div>
                    <nav className="flex-1 overflow-y-auto">
                        {historyItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border-b border-gray-300 hover:bg-gray-200 cursor-pointer bg-[#E5E7EB]">
                                <span className="text-gray-700">{item}</span>
                                <Trash2 size={18} className="text-gray-600 hover:text-red-500" />
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <main className="flex-1 p-6 md:p-8 bg-white overflow-y-auto">
                    {activeTab === 'text' ? (
                        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
                            
                            {/* Dropdown chọn ngôn ngữ nguồn */}
                            <div className="flex flex-col gap-2">
                                <select 
                                    value={sourceLang}
                                    onChange={(e) => setSourceLang(e.target.value)}
                                    className="w-48 border border-gray-300 rounded-md px-3 py-1.5 bg-white outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 font-medium cursor-pointer shadow-sm"
                                >
                                    {languages.map(lang => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Input Area */}
                            <div className="relative">
                                <textarea 
                                    placeholder={`input something in ${sourceLang}...`}
                                    className="w-full h-40 p-4 bg-[#F3F4F6] border-none rounded-md focus:ring-2 focus:ring-blue-400 outline-none resize-none text-gray-700 shadow-inner"
                                />
                                <div className="flex justify-end mt-2">
                                    <button className="bg-[#007BFF] hover:bg-blue-600 text-white px-8 py-2 rounded shadow-[2px_2px_5px_rgba(0,0,0,0.2)] transition-all active:scale-95 font-medium">
                                        Translate
                                    </button>
                                </div>
                            </div>

                            {/* Tự động hiển thị 2 ô kết quả dựa trên ngôn ngữ còn lại */}
                            {targetLanguages.map((lang) => (
                                <div key={lang} className="flex flex-col gap-2">
                                    <label className="font-semibold text-gray-800">{lang}</label>
                                    <div className="relative w-full h-32 bg-[#D1D5DB] rounded-md p-4 shadow-sm">
                                        <button className="absolute bottom-3 right-3 text-gray-600 hover:text-black transition-colors">
                                            <Copy size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* GIAO DIỆN TAB FILE (Cũ) */
                        <div className="max-w-5xl mx-auto flex flex-col gap-6">
                            <select className="w-48 border rounded px-3 py-1 bg-white outline-none">
                                <option>Japanese</option>
                            </select>
                            <div className="flex items-center gap-4">
                                <label className="cursor-pointer bg-[#D1D5DB] border border-black px-4 py-1 rounded hover:bg-gray-300">
                                    Choose file
                                    <input type="file" className="hidden" />
                                </label>
                                <span className="text-gray-500">No file chosen</span>
                            </div>
                            <div className="flex justify-end">
                                <button className="bg-[#007BFF] text-white px-8 py-2 rounded shadow-md">Translate</button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default TranslationApp;