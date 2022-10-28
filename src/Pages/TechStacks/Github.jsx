
import React from "react";

import GitHubCalendar from "react-github-calendar"
import { ThemeContext } from "../../ThemeContext/ThemeContext";
export const Github = () => {
    const { newTheme } = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + newTheme}>
      
        <h3 >
          Days I <span > Code</span>
        </h3>
        <GitHubCalendar
          username="MDZUBAIR599"
          blockSize={15}
          blockMargin={5}
          theme={newTheme}
          fontSize={16}
        />
      </div>
    </>
  );
};