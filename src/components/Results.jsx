import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Results = ({ results, handleDelete, handleEdit }) => {
  return (
    <Result>
      <h3 style={{ width: "100%", marginLeft: "35px" }}>Chosen Results:</h3>
      {results.map((result, idx) => (
        <Span color={result} key={idx} onClick={(e) => handleEdit(idx)}>
          Test {idx + 1} - {result}
          <Close onClick={(e) => handleDelete(idx)}>&#10006;</Close>
        </Span>
      ))}
    </Result>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};


const Result = styled.div`
  display: flex;
  justify-content: center;
  /* display: none; */
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;
  margin-top: 30px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
  box-shadow: 3px 3px 3px lightgray;
  width: 600px;
  min-width: 300px;
  height: auto;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  `;
const Span = styled.span`
  box-sizing: border-box;

  margin: 5px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 2px 4px 3px;
  border-radius: 3px;
  background-color: var(--shadow);
  :hover {
    cursor: pointer;
  }
  ${(props) =>
    props.color === "Passed" &&
    css`
      background: darkgreen;
      /* color: white; */
    `}
  ${(props) =>
    props.color === "Failed" &&
    css`
      background: red;
      /* color: white; */
    `}
`;
const Close = styled.span`
  background-color: #949494;
  padding: 0 4.5px;
  padding-bottom: 1px;
  font-size: 12px;
  margin: 3px 3px;
  margin-left: 6px;
  border-radius: 50%;
  border: 1.5px solid black;
  font-weight: bold;
  :hover {
    /* color: darkred; */
    background-color: gray;
  }
`;

export default Results;
