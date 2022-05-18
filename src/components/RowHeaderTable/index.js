import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import { useHistory } from "react-router-dom";
import { TrHover } from "./tableElements";

import { async_getHash } from "components/helper.js";

const cellHeight = 47;

const blue = {
  200: "#A5D8FF",
  400: "#3399FF"
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027"
};

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
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    text-align: center;
    padding: 6px;
  }

  thead {
    background-color: rgb(98, 129, 123, 0.8);
    color: white;
    height: ${`${cellHeight}px`};
  }

  tbody, tfoot {
    background-color: #1b2631;
    color: white;
    height: ${`${cellHeight}px`};
  }
  `
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: flex-start;
    gap: 10px;
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === "dark" ? blue[400] : blue[200]
    };
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;
    margin-left: auto;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    color: white;
    &:hover {
      background-color: rgb(250, 235, 215, 0.5);
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === "dark" ? blue[400] : blue[200]
    };
    }
  }
  & button:disabled {
    color: grey;
    &:hover {
      background-color: #1b2631;
    }
  }
  `
);

// props: data & headerItems & footer
export default function UnstyledTable({ data, headerItems, footer }) {
  let rows = data
  let history = useHistory();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickRow = (rowData) => {
    async_getHash(rowData.id);
    history.push({
      pathname: '/instance',
      state: { rowData }
    });
  }

  return (
    <Root sx={{}}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            {headerItems.map((item, key) => {
              return <th key={key}>{item.label}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map(row => {
            return (
            <TrHover rowSolved={row.solved} key={row.id} className="currentRow" onClick={() => handleClickRow(row)}>
                {headerItems.map(item => {
                  if (item.name === "solved") {
                    return row[item.name] ? <td key={item.name}>True</td> : <td key={item.name}>False</td>;
                  }
                  return <td key={item.name}>{row[item.name]}</td>;
                }
                )}
              </TrHover>
            );
          })}
          {rows.length === 0 && (
            <tr style={{ height: cellHeight * 1 }}>
              <td colSpan={headerItems.length} >No data</td>
            </tr>)}

          {emptyRows > 0 && (
            <tr style={{ height: cellHeight * emptyRows }}>
              <td colSpan={headerItems.length} />
            </tr>
          )}
        </tbody>
        {footer && (
          <tfoot>
            <tr>
              <CustomTablePagination
                rowsPerPageOptions={[5]}
                colSpan={headerItems.length}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                componentsProps={{
                  actions: {
                    showFirstButton: true,
                    showLastButton: true
                  }
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot>
        )
        }
      </table>
    </Root>
  );
}
