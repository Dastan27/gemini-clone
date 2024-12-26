import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Main() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt={assets.user_icon} />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dastan</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beatutiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt={assets.compass_icon} />
              </div>
              <div className="card">
                <p>Briefly summerize this concept: Sutainable Development</p>
                <img src={assets.bulb_icon} alt={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Brainstrom team buildiong activities for our work retreat</p>
                <img src={assets.message_icon} alt={assets.message_icon} />
              </div>
              <div className="card">
                <p>Suggest beatutiful places to see on an upcoming road trip</p>
                <img src={assets.code_icon} alt={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt={assets.user_icon} />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt={assets.gemini_icon} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <h3>Loading</h3>
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt={assets.gallery_icon} />
              <img src={assets.mic_icon} alt={assets.mic_icon} />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt={assets.send_icon}
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inacurate information, including av=bout people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
