import { createContext, useContext, useState } from "react";

const PostsContext = createContext();
const initalValues = [
  {
    id: 1,
    date: "03.11.2021",
    title: "Özlük İşleri Uzman Yardımcısı",
    city: "İstanbul(Avr.)",
  },
  {
    id: 2,
    date: "03.11.2021",
    title: "Özlük İşleri Uzmanı",
    city: "İstanbul(Avr.)",
  },
  {
    id: 3,
    date: "03.11.2021",
    title: "İşe Alım Uzmanı",
    city: "İstanbul(Avr.)",
  },
  {
    id: 4,
    date: "02.11.2021",
    title: "Bireysel Tahsilat Temsilcisi",
    city: "Tüm Türkiye",
  },
  {
    id: 5,
    date: "02.11.2021",
    title: "Tahsilat Temsilcisi",
    city: "İstanbul(Avr.)",
  },
  {
    id: 6,
    date: "02.11.2021",
    title: "Ticari Varlık Yöneticisi",
    city: "İstanbul(Avr.)",
  },
  {
    id: 7,
    date: "01.11.2021",
    title: "Kobi Tahsilat Temsilcisi",
    city: "İstanbul(Avr.)",
  },
  {
    id: 8,
    date: "01.11.2021",
    title: "Operasyon Uzman Yardımcısı",
    city: "İstanbul(Avr.)",
  },
  {
    id: 9,
    date: "02.11.2021",
    title: "Adli Takip Memuru",
    city: "İstanbul(Avr.)",
  },
  {
    id: 10,
    date: "01.11.2021",
    title: "Bilgi Teknolojileri Denetim Uzmanı",
    city: "İstanbul(Avr.)",
  },
  {
    id: 11,
    date: "01.11.2021",
    title: "Fullstack Software Developer",
    city: "İstanbul(Avr.)",
  },
];
const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(initalValues);
  console.log(posts);
  const values = { posts, setPosts };

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};

const usePost = () => useContext(PostsContext);

export { PostProvider, usePost };
