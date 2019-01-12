import React from "react";
import { Image } from "react-bootstrap";

class Movies extends React.Component {
  render() {
    return (
      <table>
        
        <tbody>
          <tr>
            <td className="td" style={{ padding: 10, margin: 10 }}>
              <Image
                width={180}
                height={180}
                src={this.props.result.poster_path}
                alt="Movie"
              />
            </td>
            <td
              className="td"
              style={{ padding: 10, margin: 10, color: "rgb(14, 14, 15)" }}
            >
              <h3>
                <strong>{this.props.result.title}</strong>
              </h3>
              <p>{this.props.result.overview}</p>
              <button type="submit"> View</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Movies;
