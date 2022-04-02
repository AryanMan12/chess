import styled from "styled-components";
import React from "react";

import bb from "./Assets/bb.png";
import bk from "./Assets/bk.png";
import bn from "./Assets/bn.png";
import bp from "./Assets/bp.png";
import bq from "./Assets/bq.png";
import br from "./Assets/br.png";
import wb from "./Assets/wb.png";
import wk from "./Assets/wk.png";
import wn from "./Assets/wn.png";
import wp from "./Assets/wp.png";
import wq from "./Assets/wq.png";
import wr from "./Assets/wr.png";

const Chessboard = () => {
  const chessboard = [];
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h"];
  for (let i = 8; i > 0; i--) {
    for (let j = 0; j < 8; j++) {
      chessboard.push((alpha[j] + i).toString());
    }
  }
  let n = 1;

  // Squares Drag and Drop
  let start_p;
  const drop = (e) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData("pieceId");
    const piece = document.getElementById(pieceId);
    piece.style.display = "block";
    console.log(e);

    if (e.target.children.length !== 0) {
      if (start_p.id === e.target.id) {
        return;
      }
      let p = document.getElementById(e.target.id).parentElement;
      p.removeChild(p.children[0]);
      p.appendChild(piece);
    } else {
      e.target.appendChild(piece);
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  // Pieces Drag and Drop
  const dragStart = (e) => {
    const target = e.target;

    console.log(e);
    e.dataTransfer.setData("pieceId", target.id);
    start_p = document.getElementById(e.target.id).parentElement;

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  return (
    <div>
      <Board>
        {chessboard.map((x) => {
          if (n % 9 === 0) {
            n++;
          }
          if (n % 2 === 0) {
            n++;
            switch (x) {
              case "b8":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bn}
                      id="nb8"
                      draggable="true"
                      onDrop={drop}
                      onDragOver={dragOver}
                      onDragStart={dragStart}
                    ></Pieces>
                  </DarkSquare>
                );
              case "d8":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bq}
                      id="qd8"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "f8":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bb}
                      id="bf8"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "h8":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={br}
                      id="rh8"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "a7":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="pa7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "c7":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="pc7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "e7":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="pe7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "g7":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="pg7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );

              case "a1":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wr}
                      id="ra1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "c1":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wb}
                      id="bc1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "e1":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wk}
                      id="ke1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "g1":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wn}
                      id="ng1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "b2":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="pb2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "d2":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="pd2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "f2":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="pf2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              case "h2":
                return (
                  <DarkSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="ph2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </DarkSquare>
                );
              default:
                return (
                  <DarkSquare
                    onDrop={drop}
                    onDragOver={dragOver}
                    id={x}
                  ></DarkSquare>
                );
            }
          } else {
            n++;
            switch (x) {
              case "a8":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={br}
                      id="ra8"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "c8":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bb}
                      id="bc8"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "e8":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bk}
                      id="ke8"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "g8":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bn}
                      id="ng8"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "b7":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="pb7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "d7":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="pd7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "f7":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="pf7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "h7":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={bp}
                      id="ph7"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );

              case "b1":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wn}
                      id="nb1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "d1":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wq}
                      id="qd1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "f1":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wb}
                      id="bf1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "h1":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wr}
                      id="rh1"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "a2":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="pa2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "c2":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="pc2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "e2":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="pe2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              case "g2":
                return (
                  <LightSquare onDrop={drop} onDragOver={dragOver} id={x}>
                    <Pieces
                      src={wp}
                      id="pg2"
                      draggable="true"
                      onDragStart={dragStart}
                      onDrop={drop}
                      onDragOver={dragOver}
                    ></Pieces>
                  </LightSquare>
                );
              default:
                return (
                  <LightSquare
                    onDrop={drop}
                    onDragOver={dragOver}
                    id={x}
                  ></LightSquare>
                );
            }
          }
        })}
      </Board>
    </div>
  );
};

export default Chessboard;

const Board = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(8, 90px);
  justify-content: center;
  align-items: center;
`;

const LightSquare = styled.button`
  height: 90px;
  width: 90px;
  background-color: #eeeed2;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  :focus {
    background-color: #f6f669;
  }
`;

const DarkSquare = styled.button`
  height: 90px;
  width: 90px;
  background-color: #85aa53;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  :focus {
    background-color: #baca2b;
  }
`;

const Pieces = styled.img`
  height: 100%;
  width: 100%;
`;
