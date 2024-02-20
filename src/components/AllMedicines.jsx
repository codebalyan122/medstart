import * as React from "react";
import { useState } from "react"; // Import useState
import { useQuery } from "@tanstack/react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination"; // Import TablePagination
import Paper from "@mui/material/Paper";
import NavbarComp from "./Navbar";

export default function AllMedicines() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://med-lyhk.onrender.com/medicine").then((res) => res.json()),

    staleTime: 60000,
    cacheTime: 3600000,
  });

  const [page, setPage] = useState(0); // State for current page
  const [rowsPerPage, setRowsPerPage] = useState(10); // State for rows per page

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page when rows per page changes
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  // Pagination Logic
  const indexOfLastRow = (page + 1) * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      <NavbarComp />
      <h3
        style={{
          textAlign: "center",
          backgroundColor: "#71b0bb",
          height: "6vh",
          margin: 0,
        }}
      >
        ALL Medicines
      </h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>MEDICINE NAME</TableCell>
              <TableCell align="right">COMPOSITION</TableCell>
              <TableCell align="right">MRP&nbsp;</TableCell>
              <TableCell align="right">SELLING PRICE&nbsp;</TableCell>
              <TableCell align="right">UNIT&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.medicine.medicine_name}
                </TableCell>
                <TableCell align="right">{row.medicine.composition}</TableCell>
                <TableCell align="right">{row.mrp}</TableCell>
                <TableCell align="right">{row.selling_price}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Table Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
}
