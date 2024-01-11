import React, { useState } from "react";

const Calculator = () => {
  const [exp, setexp] = useState("");
  const [val, setval] = useState("");
  const evaluate = () => {
    if (exp.includes("+")) {
      let v = exp.split("+");
      setval(Number(v[0]) + Number(v[1]));
    }
    if (exp.includes("-")) {
      let v = exp.split("-");
      setval(Number(v[0]) - Number(v[1]));
    }
    if (exp.includes("*")) {
      let v = exp.split("*");
      setval(Number(v[0]) * Number(v[1]));
    }
    if (exp.includes("/")) {
      let v = exp.split("/");
      setval(Number(v[0]) / Number(v[1]));
    }
    setexp("");
  };
  const onchange = (val) => {
    let t = exp + val;
    console.log(t);
    setexp(t);
  };
  return (
    <>
      <div>
        <p>{exp}</p>
        <p>{val}</p>
      </div>
      <div>
        <div className="row ">
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(9);
              }}
            >
              9
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(8);
              }}
            >
              8
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(7);
              }}
            >
              7
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                setexp("");
                setval("");
              }}
            >
              CLR
            </button>
          </div>
        </div>
        <div className="row ">
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(6);
              }}
            >
              6
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(5);
              }}
            >
              5
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(4);
              }}
            >
              4
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange("/");
              }}
            >
              /
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(3);
              }}
            >
              3
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(2);
              }}
            >
              2
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(1);
              }}
            >
              1
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange("*");
              }}
            >
              *
            </button>
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ textAlign: "right", marginRight: "7.5%" }}
          >
            <button
              onClick={() => {
                onchange(".");
              }}
            >
              .
            </button>
          </div>
        </div>
        <div className="row ">
          <div className="col md-1">
            <button
              onClick={() => {
                onchange(0);
              }}
            >
              0
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                evaluate();
              }}
            >
              =
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange("-");
              }}
            >
              -
            </button>
          </div>
          <div className="col md-1">
            <button
              onClick={() => {
                onchange("+");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
