import React from 'react';
import { Trash2, ChevronDown, Upload } from 'lucide-react';

const TranslationApp = () => {
    const historyItems = ["File name 1", "File name 2", "File name 3", "File name 4"];

    return (
        <div className="flex flex-col h-screen bg-white font-sans">
            {/* --- NAVBAR --- */}
            <header className="flex items-center justify-between px-6 py-2 bg-[#E5E7EB] border-b">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="font-bold text-gray-700 text-lg">AITranslateTool</span>
                </div>

                <div className="flex bg-gray-400 p-1 rounded-md">
                    <button className="px-6 py-1 text-white rounded hover:bg-gray-500 transition">Text</button>
                    <button className="px-6 py-1 bg-[#374151] text-white rounded shadow-sm">File</button>
                </div>
                <div className="w-24"></div> {/* Placeholder cân bằng */}
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* --- SIDEBAR --- */}
                <aside className="w-80 bg-[#F3F4F6] border-r flex flex-col">
                    <div className="p-4 flex justify-between items-center">
                        <h2 className="text-xl font-semibold">History</h2>
                        <button className="flex items-center gap-1 bg-white border px-3 py-1 rounded text-sm">
                            All <ChevronDown size={14} />
                        </button>
                    </div>

                    <nav className="flex-1">
                        {historyItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 border-b border-gray-300 hover:bg-gray-200 cursor-pointer group"
                            >
                                <span>{item}</span>
                                <Trash2 size={18} className="text-gray-500 hover:text-red-500" />
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <main className="flex-1 p-10 flex flex-col gap-8">
                    {/* Language Selector */}
                    <div>
                        <select className="border rounded-md px-4 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Japanese</option>
                            <option>English</option>
                            <option>Vietnamese</option>
                        </select>
                    </div>

                    {/* File Upload Area */}
                    <div className="flex items-center gap-4">
                        <label className="cursor-pointer bg-[#D1D5DB] hover:bg-gray-400 px-6 py-2 rounded border border-black transition">
                            Choose file
                            <input type="file" className="hidden" />
                        </label>
                        <span className="text-gray-600">No file chosen</span>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-end mt-4">
                        <button className="bg-[#007BFF] hover:bg-blue-600 text-white px-8 py-2 rounded-md shadow-[2px_2px_5px_rgba(0,0,0,0.3)] transition-all active:translate-y-0.5">
                            Translate
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TranslationApp;