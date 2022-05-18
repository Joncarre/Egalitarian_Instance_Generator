import * as React from "react";
import { styled } from "@mui/system";
import { buildJSON, downloadJSON } from "./helperFunctions";
import { ButtonJson } from "./tableElements";

const cellHeight = 30;

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-size: 0.8rem;
    border-collapse: collapse;
    width: 500px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  td,
  th {
    border: 1px solid #CDD2D7;
    text-align: center;
    padding: 6px;
  }

  th {
    background-color: rgb(98, 129, 123, 0.8);
    color: white;
    height: ${`${cellHeight}px`};
    width: 130px;
    @media (max-width: 600px) {
      width: 100px;
    }
  }

  td {
    background-color: #1b2631;
    color: white;
    height: ${`${cellHeight}px`};
  }
  `
);

// props: data & headerItems
export default function UnstyledTable({ data, headerItems }) {

  const handleClickJson = (chain, id) => {
    const temp = buildJSON(chain);
    downloadJSON(temp, id);
  }

  const handleResolve = (data, item) => {
    if (item.name === 'chain') {
      return <td><ButtonJson onClick={() => handleClickJson(data['chain'], data['id'])}>JSON</ButtonJson></td>;
    }
    else if (item.name === 'solved') {
      return data[item.name] ? <td>True</td> : <td>False</td>;
    }
    return <td>{data[item.name]}</td>
  }
  return (
    <Root sx={{}}>
      <table aria-label="custom table">
        <tbody>
          {Object.keys(data).length > 0 ?
            headerItems.map((item, key) => {
              return (
                <tr key={key}>
                  <th>{item.label}</th>
                  {handleResolve(data, item)}
                </tr>
              );
            }) : <tr><th>No data</th></tr>
          }
        </tbody>
      </table>
    </Root>
  );
}
