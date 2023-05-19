import Button from "@mui/material/Button";

import { styled } from "@mui/system";
import Badge, { badgeClasses } from "@mui/base/Badge";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <StyledBadge badgeContent={count} showZero>
        <Button variant="contained" onClick={addCount}>
          Hello World
        </Button>
      </StyledBadge>
    </div>
  );
}
const blue = {
  500: "#FF0000",
};

const grey = {
  300: "#afb8c1",
  900: "#24292f",
};

const StyledBadge = styled(Badge)(
  ({ theme }) => `
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    max-width: 22px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${blue[500]};
    box-shadow: 0px 4px 6x ${
      theme.palette.mode === "dark" ? grey[900] : grey[300]
    };
    transform: translate(50%, -50%);
    transform-origin: 100% 0; 
  }
  `
);

export default App;
