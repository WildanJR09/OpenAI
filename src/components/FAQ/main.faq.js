import React from "react";

const FAQ = () => {
  const lists = [
    {
      question: "Apa Itu ChatGPT?",
      li: false,
      answer:
        "ChatGPT adalah model bahasa yang dikembangkan oleh OpenAI yang digunakan untuk menyusun teks yang dihasilkan dari interaksi obrolan. Model ini merupakan variasi dari model GPT-3 yang dapat menghasilkan teks yang cocok untuk digunakan dalam percakapan. ChatGPT dapat memahami konteks percakapan dan menggunakannya untuk menghasilkan tanggapan yang tepat. Model ini sangat berguna untuk membuat chatbot yang dapat memahami dan menanggapi pertanyaan atau permintaan pengguna secara alami.",
      color: "#D0E2DB",
    },
    {
      question: "Apa Saja Yang Bisa Dilakukan Oleh ChatGPT?",
      li: false,
      answer: "ChatGPT dapat digunakan untuk membuat chatbot yang dapat memahami dan menanggapi pertanyaan atau permintaan pengguna secara alami. Model ini juga dapat digunakan untuk menyusun teks yang dihasilkan dari interaksi obrolan, seperti membuat tanggapan yang tepat pada percakapan yang sedang berlangsung. Selain itu, ChatGPT juga dapat digunakan untuk melakukan tes wawancara, membuat asisten virtual yang dapat membantu pengguna dalam mengelola tugas sehari-hari, atau bahkan membuat game teks yang dapat dimainkan melalui obrolan. Potensi penggunaan ChatGPT sangat luas, tergantung pada kebutuhan dan kreativitas pengembang yang menggunakannya.",
      color: "#FAAE2B",
    },
    {
      question: "ChatGPT: Mengoptimalkan Model Bahasa untuk Dialog",
      answer:
        "Kami telah melatih model yang disebut ChatGPT yang berinteraksi dengan cara percakapan. Format dialog memungkinkan ChatGPT untuk menjawab pertanyaan tindak lanjut, mengakui kesalahannya, menantang premis yang salah, dan menolak permintaan yang tidak pantas. ChatGPT adalah model saudara dari InstructGPT, yang dilatih untuk mengikuti instruksi secara cepat dan memberikan respons mendetail.",
      color: "#FE98A3",
    },
  ];

  return (
    <>
      <div className="p-2 mt-2">
        {lists.map((list, index) => (
          <div key={index} className="mb-5 mt-5">
            <div
              className="border-2 border-black px-3 py-2 rounded-lg"
              style={{
                boxShadow: "0.4rem 0.4rem 0 #222",
                backgroundColor: list.color,
              }}
            >
              <h1 className="text-black text-base md:text-2xl">
                {list.question}
              </h1>
            </div>
            <div className="mt-3 text-gray-600 text-xs md:text-base">
              {!list.li ? (
                <>
                  <span>{list.answer}</span>
                </>
              ) : (
                <>
                  <ul style={{ listStyleType: "circle" }}>
                    {list.answer.map((ans, index) => (
                      <li key={index}>{ans.list_answer}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQ;
