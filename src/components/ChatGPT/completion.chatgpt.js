import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Configuration, OpenAIApi } from "openai";

const Completion = () => {
    const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [chatLog, setChatLog] = useState([
        {
            user: "gpt",
            message: "Apa yang bisa saya bantu hari ini?",
            avatar: "openai-dark.png",
        },
    ]);
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const generateCompletion = async () => {
        let chatLogNew = [...chatLog, { user: "me", message: prompt }];
        setChatLog(chatLogNew);
        setPrompt("");
        setLoading(true);
        window.document.body.scrollIntoView({ behavior: "smooth", block: "end" });
        const res = await openai.createCompletion({
            prompt: prompt,
            model: "text-davinci-003",
            temperature: 0.9,
            max_tokens: 2048,
        });
        setLoading(false);
        setChatLog([
            ...chatLogNew,
            { user: "gpt", message: `${res.data.choices[0].text}` },
        ]);
    };

    return (
        <>
            <div className="min-h-screen flex flex-col justify-start">
                <div>

                    {chatLog.map((log, i) => (
                        <>
                            {log.user === "me" && (
                                <div
                                    className="flex p-5 rounded-lg mb-5 bg-[#B5D5C5] border-2 border-black"
                                    style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                                    key={i}
                                >
                                    <img
                                        src="user-solid.svg"
                                        className="w-8 h-6 mr-2 -ml-1"
                                        alt="user"
                                    />
                                    <div>
                                        <span className="text-black mt-5">{log.message}</span>
                                    </div>
                                </div>
                            )}
                            {log.user === "gpt" && (
                                <div
                                    className="flex p-5 bg-[#B08BBB] rounded-lg mt-5 mb-5 border-2 border-black"
                                    style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                                    key={i}
                                >
                                    <img
                                        src="openai-dark.png"
                                        className="w-6 h-6 mr-3"
                                        alt="gpt"
                                    />
                                    <div>
                                        <span className="text-black">{log.message}</span>
                                    </div>
                                </div>
                            )}
                        </>
                    ))}
                    {loading && (
                        <div className="relative">
                            <div
                                className="flex p-5 bg-[#B08BBB] rounded-lg mt-5 mb-5 border-2 border-black"
                                style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                            >
                                <img src="openai-dark.png" className="w-6 h-6 mr-3" alt="gpt" />
                                <div class="col-3">
                                    <div class="snippet" data-title="dot-pulse">
                                        <div class="stage">
                                            <div class="dot-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-auto flex sticky bottom-5">
                    <div
                        className={`flex absolute bottom-0 right-0 md:pb-2.5 px-4 py-2.5 rounded-tr-md rounded-br-md text-[#B08BBB] ${prompt && "bg-[#B08BBB] text-white px-4 py-2.5"
                            }`}
                    >
                        <button
                            className={`${!prompt && "cursor-not-allowed"}`}
                            type="submit"
                            onClick={generateCompletion}
                        >
                            Send
                        </button>
                    </div>
                    <TextareaAutosize
                        className="w-full border-2 border-[#B08BBB] caret-pink-500  rounded-md placeholder-gray-500 resize-none py-2 pl-3 pr-10 md:pl-5 outline-none"
                        placeholder="Enter your message here"
                        style={{ boxShadow: "0.4rem 0.4rem 0 #907299" }}
                        maxRows={5}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
};

export default Completion;
