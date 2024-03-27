import React from "react";

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
                <img src={require("../../react-2@2x.png")} alt="logo" />
                <h3 className="mb-0">Reactjs App with API</h3>
              </div>
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4>Flickr</h4>
                  <p className="pb-0 mb-0">
                    Purpose: API is used for searching images. We can download the
                images from the app.
                  </p>
                </div>
                <div className="link me-3">
                  <p className="mb-0 py-0">
                    {" "}
                    <a href="https://www.flickr.com/services/api/">
                    https://www.flickr.com/services/api/
                    </a>
                    <img
                      src={require("../../noun-link.png")}
                      className="ms-2"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="container pt-5">
        {children}
      </main>

      <footer className="footer footer-dark">
        
      </footer>
    </>
  );
};
