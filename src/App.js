import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      rec: [
        {
          grid: 1,
          name: "kishan",
          email: "kishan@gmail.com",
          password: "kishan@123",
          course: ["html", "css", "bootstrap", "js"],
          city: "surat",
        },
        {
          grid: 2,
          name: "jay",
          email: "jay@gmail.com",
          password: "kishan@123",
          course: ["photosho", "figma", "illustrator", "adobe xd"],
          city: "rajkot",
        },
        {
          grid: 3,
          name: "ajay",
          email: "ajay@gmail.com",
          password: "ajay@123",
          course: ["html", "css", "bootstrap", "nodejs"],
          city: "amareli",
        },
        {
          grid: 4,
          name: "nisha",
          email: "nisha@gmail.com",
          password: "nisha@123",
          course: ["html", "css", "bootstrap", "python"],
          city: "vadodara",
        },
      ],
    };
    this.state.data = {
      employee: [
        {
          empid: 1,
          empname: "abc",
          empemail: "abc@gmail.com",
          empphone: 12345,
          empaddress: {
            country: "india",
            state: "gujarat",
            city: "surat",
            area: "motavarachha",
          },
          empdeg: "junior",
          empsalary: 23000,
          empdepartment: "ui/ux",
        },
        {
          empid: 2,
          empname: "def",
          empemail: "def@gmail.com",
          empphone: 2121,
          empaddress: {
            country: "india",
            state: "rajasthan",
            city: "jaypur",
            area: "jaypurabc",
          },
          empdeg: "junior",
          empsalary: 21000,
          empdepartment: "web design",
        },
        {
          empid: 3,
          empname: "ghi",
          empemail: "ghi@gmail.com",
          empphone: 2212,
          empaddress: {
            country: "india",
            state: "maharashtra",
            city: "pune",
            area: "abcpune",
          },
          empdeg: "seniour",
          empsalary: 65000,
          empdepartment: "backend developer",
        },
        {
          empid: 4,
          empname: "jkl",
          empemail: "jkl@gmail.com",
          empphone: 212112,
          empaddress: {
            country: "india",
            state: "karnatak",
            city: "bengaluru",
            area: "kgf",
          },
          empdeg: "tl",
          empsalary: 150000,
          empdepartment: "frontend developer",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <center>
          <h2>
            1. Create a Class based component to implement this data pass to
            another component show in your component and must be use props.
          </h2>
          <table border={1}>
            <thead>
              <th>GR ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Course</th>
              <th>City</th>
            </thead>
            <tbody>
              {this.state.rec.map((val) => (
                <tr>
                  <td>{val.grid}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>
                    {val.course.map((cr) => (
                      <span>{cr}, </span>
                    ))}
                  </td>
                  <td>{val.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
        <center>
          <h2>Task 2</h2>
          <table border={1}>
            <thead>
              <th>empid</th>
              <th>empname</th>
              <th>empemail</th>
              <th>empphone</th>
              <th>empaddress</th>
              <th>empdeg</th>
              <th>empsalary</th>
              <th>empdepartment</th>
            </thead>
            <tbody>
              {this.state.data.employee.map((val) => (
                <tr>
                  <td>{val.empid}</td>
                  <td>{val.empname}</td>
                  <td>{val.empemail}</td>
                  <td>{val.empphone}</td>
                  <td>
                    <thead>
                      <th>country</th>
                      <td>{val.empaddress.country}</td>
                    </thead>
                    <thead>
                      <th>state</th>
                      <td>{val.empaddress.state}</td>
                    </thead>
                    <thead>
                      <th>city</th>
                      <td>{val.empaddress.city}</td>
                    </thead>
                    <thead>
                      <th>area</th>
                      <td>{val.empaddress.area}</td>
                    </thead>
                  </td>
                  <td>{val.empdeg}</td>
                  <td>{val.empsalary}</td>
                  <td>{val.empdepartment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </>
    );
  }
}

export default Counter;
