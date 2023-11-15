import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["勉強", "買い物"]);
  return (
    <React.Fragment>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <ul>
          <p className="title">完了のTODO</p>
          <div className="list-row">
            <li>いいいい</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </React.Fragment>
  );
};
