import React from "react";

export default function Footer() {
  return (
    <div className="footer-container container">
      <div className="row">
        <div className="col sm">
          Copyright © 2019-2022 Universal Health Fellowship. All rights
          reserved.
        </div>
        <div className="col sm">
          <a href="https://www.linkedin.com" target="_blank" className="faIcon">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" className="faIcon">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="faIcon"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="faIcon"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" className="faIcon">
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
