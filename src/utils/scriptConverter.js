import React, { useState } from 'react';
import alfabe from '../components/img/alfabe.jpg';
import kazak from '../components/img/kazak.jpg';

const latinToCyrillicMap = {
    "A": "А", "a": "а",
    "B": "Б", "b": "б",
    "C": "Ҹ", "c": "ҹ",
    "Ç": "Ч", "ç": "ч",
    "D": "Д", "d": "д",
    "E": "Е", "e": "е",
    "Ä": "Ә", "ä": "ә",
    "F": "Ф", "f": "ф",
    "G": "Г", "g": "г",
    "Ğ": "Ғ", "ğ": "ғ",
    "H": "Һ", "h": "һ",
    "I": "Ы", "ı": "ы",
    "İ": "И", "i": "и",
    "J": "Ж", "j": "ж",
    "K": "К", "k": "к",
    "L": "Л", "l": "л",
    "M": "М", "m": "м",
    "N": "Н", "n": "н",
    "Ñ": "Ң", "ñ": "ң",
    "O": "О", "o": "о",
    "Ö": "Ө", "ö": "ө",
    "P": "П", "p": "п",
    "Q": "Қ", "q": "қ",
    "R": "Р", "r": "р",
    "S": "С", "s": "с",
    "Ş": "Ш", "ş": "ш",
    "T": "Т", "t": "т",
    "U": "У", "u": "у",
    "Ū": "Ұ", "ū": "ұ",
    "Ü": "Ү", "ü": "ү",
    "V": "В", "v": "в",
    "Y": "Й", "y": "й",
    "Z": "З", "z": "з"
  };
  
  const cyrillicToLatinMap = {
    "А": "A", "а": "a",
    "Б": "B", "б": "b",
    "Ҹ": "C", "ҹ": "c",
    "Ч": "Ç", "ч": "ç",
    "Д": "D", "д": "d",
    "Е": "E", "е": "e",
    "Ә": "Ä", "ә": "ä",
    "Ф": "F", "ф": "f",
    "Г": "G", "г": "g",
    "Ғ": "Ğ", "ғ": "ğ",
    "Һ": "H", "һ": "h",
    "Ы": "I", "ы": "ı",
    "И": "İ", "и": "i",
    "Ж": "J", "ж": "j",
    "К": "K", "к": "k",
    "Л": "L", "л": "l",
    "М": "M", "м": "m",
    "Н": "N", "н": "n",
    "Ң": "Ñ", "ң": "ñ",
    "О": "O", "о": "o",
    "Ө": "Ö", "ө": "ö",
    "П": "P", "п": "p",
    "Қ": "Q", "қ": "q",
    "Р": "R", "р": "r",
    "С": "S", "с": "s",
    "Ш": "Ş", "ш": "ş",
    "Т": "T", "т": "t",
    "У": "U", "у": "u",
    "Ұ": "Ū", "ұ": "ū",
    "Ү": "Ü", "ү": "ü",
    "В": "V", "в": "v",
    "Й": "Y", "й": "y",
    "З": "Z", "з": "z"
  };

function convertText(text, direction) {
  const map = direction === 'latinToCyrillic' ? latinToCyrillicMap : cyrillicToLatinMap;
  return text.split("").map(char => map[char] || char).join("");
}

const ScriptConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [direction, setDirection] = useState("latinToCyrillic");

  const handleConvert = () => {
    setOutputText(convertText(inputText, direction));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Script Converter</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>
          <input
            type="radio"
            value="latinToCyrillic"
            checked={direction === "latinToCyrillic"}
            onChange={() => setDirection("latinToCyrillic")}
          />
          Latin to Cyrillic
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="cyrillicToLatin"
            checked={direction === "cyrillicToLatin"}
            onChange={() => setDirection("cyrillicToLatin")}
          />
          Cyrillic to Latin
        </label>
      </div>

      <textarea
        rows="4"
        cols="50"
        placeholder={direction === "latinToCyrillic" ? "Enter Latin text..." : "Enter Cyrillic text..."}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
      />
      
      <button onClick={handleConvert} style={{ padding: "10px 20px" }}>
        Convert
      </button>

      <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f0f0f0" }}>
        <h2>Converted Text:</h2>
        <p>{outputText}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img 
          src={alfabe} 
          style={{ width: "500px", marginRight: "10px" }}
        />
        <img 
          src={kazak} 
          style={{ width: "500px" }}
        />
      </div>
    </div>
  );
};

export default ScriptConverter;
