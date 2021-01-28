import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

import initState from "./initState";
import Map from "./Map";
import Ajv from "ajv";

import ace from "brace";
import "brace/mode/json";
import "brace/theme/github";

const ajv = new Ajv({ allErrors: true, verbose: true });

const useStyles = createUseStyles({
  "@global": {
    "#root": {
      position: "absolute",
      width: "100vw",
      height: "100vh",
      display: "flex",
    },
    ".jsoneditor": {
      height: "100vh !important",
    },
    body: {
      margin: 0,
      height: "100vh",
      width: "100vw",
      position: "fixed",
      overflow: "hidden",
      top: "0",
      left: "0",
    },
    h1: {
      fontFamily: "Red Hat Text",
      fontWeight: "normal",
      fontSize: "20px",
      margin: "0",
    },
    h2: {
      fontFamily: "Red Hat Text",
      fontWeight: "normal",
      fontSize: "20px",
      margin: "0",
    },
    h3: {
      fontFamily: "Roboto",
      fontWeight: "normal",
      fontSize: "14px",
      color: "#393939",
      margin: "0",
    },
    p: {
      fontSize: "12px",
      fontFamily: "Roboto",
    },
    button: {
      fontSize: "14px",
      fontFamily: "Roboto",
    },
  },
});

function App(props) {
  const classes = useStyles();

  const [value, setValue] = useState(JSON.parse(initState));

  return (
    <>
      <div style={{ width: "50vw" }}>
        <Map data={value} />
      </div>
      <div style={{ width: "50vw", zIndex: 100 }}>
        <Editor
          value={value}
          onChange={setValue}
          mode="code"
          allowedModes={["code", "tree"]}
          ajv={ajv}
          ace={ace}
          theme="ace/theme/github"
        />
      </div>
    </>
  );
}

export default App;
