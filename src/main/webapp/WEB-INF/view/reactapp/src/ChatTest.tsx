import React, { useState, useEffect } from "react";

const ChatTest: React.FC = () => {
    const [response, setResponse] = useState<string>("");

    useEffect(() => {
        const fetchOpenAI = async () => {
            const response = await fetch("https://api.openai.com/v1/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer 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",
                },
                body: JSON.stringify({
                    prompt: "Čo robíš?",
                    model: "ada:ft-personal-2023-05-05-11-57-33",
                }),
            });
            const data = await response.json();
            setResponse(data.choices[0].text);
        };
        fetchOpenAI();
    }, []);

    return <div>{response}</div>;
};

export default ChatTest;
