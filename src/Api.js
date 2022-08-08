import React, { Component } from "react";

// const serverGetUrl = 'https://ipinfo.io/161.185.160.93/geo';
// const serverPutUrl = '';

// const getData = (onSuccess) => {
//     return fetch(serverGetUrl)
//         .then((response) => response.json())
//         .then(onSuccess)
//         .catch('Error')
// };

// const sendData = (onSuccess, onFail, body) => {
//     fetch(serverPutUrl,
//         {
//             method: 'POST',
//             body,
//         },
//     )
//         .then((response) => {
//             if (response.ok) {
//                 onSuccess();
//             } else {
//                 onFail();
//             }
//         })
//         .catch(() => {
//             onFail();
//         });
// }

// export { getData, sendData };



// Получение данных из API/ VAR 1

export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: "",
    };
  }

  componentDidMount() {
    fetch("https://ipinfo.io/161.185.160.93/geo")
      .then((res) => res.json)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <p> Error {error.message} </p>;
    } else if (!isLoaded) {
      return <p> Loading... </p>;
    } else {
      return (
        <ul>
          {" "}
          {items.map((item) => (
            <li key={item.name}> {item.ip} </li>
          ))}{" "}
        </ul>
      );
    }
  }
}


// Получение данных из API/ проверка в console.log

const getData = async (url) => {

    const response = await fetch(url);
    console.log(response);
  };
  
  getData("https://ipinfo.io/161.185.160.93/geo");

