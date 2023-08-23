import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { FaSearch } from "react-icons/fa";
import styles from "./Header.module.css";
import Item from "../Items/Item";

const Header = () => {
  const [cl, setcl] = useState("Mountain");
  const [search, setsearch] = useState("");
  const [data, setData] = useState([]);
  const defaultt = ["Mountain", "Beach", "Birds", "Food"];
  const api_data = async () => {
    await fetch(`https://api.pexels.com/v1/search?query=${cl}`, {
      headers: {
        Authorization: import.meta.env.VITE_AUTHORIZATION,
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        setData(res.photos);
      });
  };
  useEffect(() => {
    api_data();
  }, [cl]);

  const searchcl = () => {
    setcl(search);
  };

  const call = (e) => {
    setcl(e.target.innerText);
  };

  return (
    <div>
      <div className={`${styles.main_header}`}>
        <h1>Snap Shot</h1>
        <div className={`${styles.search}`}>
          <input
            onChange={(e) => setsearch(e.target.value)}
            type="search"
            name="Search"
            placeholder="Search"
          />
          <div
            onClick={searchcl}
            // Enter press krne wala nhi bnraaa
            className={search.length === 0 ? `${styles.fa1}` : `${styles.fa}`}
          >
            <FaSearch color="white" fontSize={"25px"} />
          </div>
        </div>
        <div className={`${styles.defaultt}`}>
          {defaultt.map((x) => {
            return <Button para={x} call={call} />;
          })}
        </div>
      </div>
      <Item heading={cl} data={data} />
    </div>
  );
};

export default Header;

// "https://api.pexels.com/v1/search?query=nature&per_page=1"
