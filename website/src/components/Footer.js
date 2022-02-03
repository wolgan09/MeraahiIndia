import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",

    width: "100%",
    bac: "red",
    color: "white",
    textAlign: "center",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
      <footer className={"bottom-0" + classes.footer}>
        <div className="mx-auto grid grid-cols-4 relative bottom-0 bg-gray-900 text-center">
          <div className="w-48 text-white">
            <h6 className="react-navigation-column__title">Company</h6>
            <ul className="react-navigation-links">
              <li>
                <a className="HKWm" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="HKWm" href="/careers">
                  Careers
                </a>
              </li>
              <li>
                <a className="HKWm" href="/mobile">
                  Mobile
                </a>
              </li>
              <li>
                <a className="HKWm" href="/news">
                  Blog
                </a>
              </li>
              <li>
                <a className="HKWm" href="/company">
                  How we work
                </a>
              </li>
            </ul>
          </div>
          <div className="w-48 text-white">
            <div className="react-navigation-column">
              <h6 className="react-navigation-column__title">Contact</h6>
              <ul className="react-navigation-links">
                <li>
                  <a className="HKWm" href="/help">
                    Help/FAQ
                  </a>
                </li>
                <li>
                  <a className="HKWm" href="/press-contact">
                    Press
                  </a>
                </li>
                <li>
                  <a
                    className="HKWm"
                    href="https://affiliates.kayak.com/?languagecode=EN"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a className="HKWm" href="/aos">
                    Hotel owners
                  </a>
                </li>
                <li>
                  <a className="HKWm" href="/partners-contact">
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    className="HKWm"
                    href="https://www.kayak.co.in/c/advertising/"
                  >
                    Advertise with us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-48 text-white">
            <div className="react-navigation-column">
              <h6 className="react-navigation-column__title">Contact</h6>
              <ul className="react-navigation-links">
                <li>
                  <a className="HKWm" href="/help">
                    Help/FAQ
                  </a>
                </li>
                <li>
                  <a className="HKWm" href="/press-contact">
                    Press
                  </a>
                </li>
                <li>
                  <a
                    className="HKWm"
                    href="https://affiliates.kayak.com/?languagecode=EN"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a className="HKWm" href="/aos">
                    Hotel owners
                  </a>
                </li>
                <li>
                  <a className="HKWm" href="/partners-contact">
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    className="HKWm"
                    href="https://www.kayak.co.in/c/advertising/"
                  >
                    Advertise with us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-48 text-white">
            <div className="react-navigation-column">
              <h6 className="react-navigation-column__title">Social links</h6>
            </div>
          </div>
        </div>
      </footer>

      <div className="min-w-full text-stone-300 text-right bottom-0 bg-gray-900 pr-5">
        <p>Copyright © 2022 MeraahiIndia</p>
      </div>
    </div>
  );
}

export default Footer;
