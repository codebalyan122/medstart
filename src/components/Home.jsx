import React from "react";
// import { useQuery } from "@tanstack/react-query";
import "../styles/Home.css";
import NavbarComp from "./Navbar";
import Cardcomponent from "./CardComponent";

const Home = () => {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch("https://med-lyhk.onrender.com/medicine").then((res) => res.json()),
  // });

  // if (isPending) return "Loading...";

  // if (error) return "An error has occurred: " + error.message;

  // console.log(data);
  return (
    <div className="container1">
      <NavbarComp />
      <div
        style={{
          height: "10vh",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Dashboard</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        <Cardcomponent />
        <Cardcomponent />

        <Cardcomponent />
        <Cardcomponent />
        <Cardcomponent />

        <Cardcomponent />
      </div>
    </div>
  );
};

export default Home;
