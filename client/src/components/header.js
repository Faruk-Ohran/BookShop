import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

class header extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Navbar className="header w-100" bg="light" expand="lg">
        <div className="container w-100 justify-content-sm-center">
          <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-4">
              <svg
                className="bi bi-book"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 018.5 2.5v11a.5.5 0 01-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 010 13.5v-11a.5.5 0 01.276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 01.22-.103 12.958 12.958 0 012.7-.869zM1 2.82v9.908c.846-.343 1.944-.672 3.074-.788 1.143-.118 2.387-.023 3.426.56V2.718c-1.063-.929-2.631-.956-4.09-.664A11.958 11.958 0 001 2.82z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 007.5 2.5v11a.5.5 0 00.854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0016 13.5v-11a.5.5 0 00-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 00-.799-.34 12.96 12.96 0 00-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0115 2.82z"
                  clipRule="evenodd"
                />
              </svg>
              <Navbar.Brand className="brandName" href="#home">
                Prodavnica knjiga
              </Navbar.Brand>
            </div>
            <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-8">
              <Form
                inline
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              >
                <FormControl
                  type="text"
                  placeholder="Pretraži sve knjige"
                  className="mr-sm-2 w-75"
                />
                <Button type="button" className="btn btn-outline-secondary">
                  Pretraži
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default header;
