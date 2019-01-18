import React from "react";
import { Image } from "react-bootstrap";

const Movies = props => {
  return (
    <table>
      <tbody>
        <tr>
          <td className="td" style={{ padding: 10, margin: 10 }}>
            <Image
              width={180}
              height={180}
              src={props.result.poster_path}
              alt="Movie"
            />
          </td>
          <td
            className="td"
            style={{ padding: 10, margin: 10, color: "rgb(14, 14, 15)" }}
          >
            <h3>
              <strong>{props.result.title}</strong>
            </h3>
            <p>{props.result.overview}</p>
            <button type="submit"> View</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Movies;
