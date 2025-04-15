import React, { memo, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AbAxios from "./service";

const App = memo(() => {
  const [highscore, setHighscore] = useState({});
  useEffect(() => {
    AbAxios.get({ url: "/home/highscore" }).then((res) => {
      setHighscore(res);
      console.log(res);
    });
  }, []);
  return (
    <div>
      <div className="header">Header</div>
      <h1>{highscore.title}</h1>
      <ul>
        {highscore.list?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {useRoutes(routes)}
      <div className="Footer">Footer</div>
    </div>
  );
});

export default App;
