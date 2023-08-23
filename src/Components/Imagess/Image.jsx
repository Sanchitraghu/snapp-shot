import React from "react";
import styles from "./Image.module.css";
const Image = ({ data }) => {
  return (
    <div className={`${styles.imggs}`}>
      {data?.length === 0 ? (
        <h1>Fetching...</h1>
      ) : (
        data.map((x) => {
          return (
            <div className={`${styles.zoom}`}>
              <img
                key={x.id}
                className={`${styles.imgg}`}
                src={x.src.landscape}
                alt="krishna"
              />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Image;

// API KEY: djQWHHZbuQQxJkmVJUUZQgerukEjRzdb55AjJjMpKPA7Q0G9E1WGnVYV;
