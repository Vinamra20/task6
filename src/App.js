import "./App.css";

function App() {
  return (
    <div className="App">
      <nav id="navbar-example2" className="navbar bg-light px-3 mb-3">
        <a className="navbar-brand" href="#scrollspyHeading1">
          Shefali Jain
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              Myself
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              My Qualifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading5">
              My Skills & Hobbies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading4">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-light p-3 rounded-2"
        tabindex="0"
      >
        <h4 id="scrollspyHeading1">Myself</h4>
        <img src="pi.jpeg" alt="myimg"></img>
        <p>Hello My name is Shefali Jain. </p>
        <h4 id="scrollspyHeading2">My Qualifications</h4>
        <ul>
          <li>
            Completed 10 standard with 92.2% in the year 2019 from Maharishi
            Vidya Mandir Senior Secondary School
          </li>
          <li>
            Completed 12 standard with 94.2% in the year 2021 from Maharishi
            Vidya Mandir Senior Secondary School
          </li>
        </ul>
        <h4 id="scrollspyHeading5">My Skills and Hobbies</h4>
        <table border="5" className="mx-auto">
          <tr>
            <td>
              <table cellspacing="10" border="5">
                <thead>
                  <tr>
                    <td>Skill</td>
                    <td>Grades</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Python</td>
                    <td>✨✨✨✨</td>
                  </tr>
                  <tr>
                    <td>Machine Learning</td>
                    <td>✨✨✨✨</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table cellspacing="10" border="5">
                <thead>
                  <tr>
                    <td>Skill</td>
                    <td>Grades</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Problem Solving</td>
                    <td>✨✨✨✨</td>
                  </tr>
                  <tr>
                    <td>Photography</td>
                    <td>✨✨✨✨</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
        <ol type="i">
          <li>Python Programming</li>
          <li>Machine Learning</li>
          <li>Listening Music</li>
          <li>Playing Outdoor Games</li>
        </ol>
        <h4 id="scrollspyHeading4">Contact Me</h4>
        <p>For Contacting me, Please fill the form </p>
        <div
          className="mx-auto"
          style={{ width: "50%", border: "1px solid black" }}
        >
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Message for me
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                alert("Thanks for contacting me");
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
