import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [list, setList] = useState([
    { id: "1", bookName: "Kendine Hoş Geldin", author: "Miraç Çağrı Aktaş" },
    { id: "2", bookName: "Gör Beni - Akilah", author: "Azra Kohen" },
    { id: "3", bookName: "Abartma Tozu", author: "Şermin Yaşar" }
  ]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!bookName || !author) return;
    setList([...list, { id: Date.now(), bookName, author }]);
    setBookName("");
    setAuthor("");
  }
  function removeTodo(index) {
    setList(list.filter(x => x.id !== index));
  }

  return (
    <div className="container">
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookname">Kitap Adı</label>
          <input
            id="bookname"
            className="form-control"
            value={bookName}
            onChange={e => setBookName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Yazarı</label>
          <input
            id="author"
            className="form-control"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <input
          className="btn btn-primary btn-block"
          type="submit"
          value="Ekle"
        />
      </form>
      <hr />
      <ul className="list-group">
        {list.map((x, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
          >
            <div>
              <h5>{x.bookName}</h5>
              <p className="mb-0">{x.author}</p>
            </div>
            <button
              className="btn btn-sm btn-dark"
              onClick={() => removeTodo(x.id)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
