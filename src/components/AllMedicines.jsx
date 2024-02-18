import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavbarComp from "./Navbar";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function AllMedicines() {
  const { isFetching, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://med-lyhk.onrender.com/medicine").then((res) => res.json()),
  });

  if (isFetching) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  // If data is available, render the table
  return (
    <>
      <NavbarComp />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>MEDICINE NAME</TableCell>
              <TableCell align="right">COMPOSITION</TableCell>
              <TableCell align="right">MRP&nbsp;(g)</TableCell>
              <TableCell align="right">SELLING PRICE&nbsp;(g)</TableCell>
              <TableCell align="right">UNIT&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
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
      </TableContainer>
    </>
  );
}
