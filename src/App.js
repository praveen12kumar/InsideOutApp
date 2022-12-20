import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😉": "Grinning Face with Smiling Eyes",
  "😘": "Beaming Face with Smiling Eyes",
  "😂": "Grinning Squinting Face",
  "😊": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😅": "Face with Tears of Joy",
  "😁": "Slightly Smiling Face",
  "🙃": "Upside-Down Face"
};

var emojiWeKnowArray = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setEmojiMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in out Database";
    }
    setEmojiMeaning(meaning);
  }

  function emojiClickHander(emoji) {
    var meaning = emojiDictionary[emoji];

    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out!!</h1>
      <input className="input" onChange={inputEmojiHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emojies we Know</h3>

      <ul>
        {emojiWeKnowArray.map(function (emoji) {
          return (
            <li
              key={emoji}
              onClick={() => emojiClickHander(emoji)}
              style={{
                display: "inline",
                padding: "0.3rem",
                fontSize: "1.2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
