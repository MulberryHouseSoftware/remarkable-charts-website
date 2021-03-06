import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function About() {
  return (
    <Layout title={`About`} description="We're Mulberry House Software">
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Welcome</h1>
          <p>Create great looking charts and data visualizations</p>
        </div>
        <div class="avatar margin-vert--md">
          <a
            class="avatar__photo-link avatar__photo avatar__photo--lg"
            href="https://www.linkedin.com/in/johnwalley"
          >
            <img alt="John Walley Profile" src="/img/profile-pic.jpg" />
          </a>
          <div class="avatar__intro">
            <h4 class="avatar__name">
              <a
                href="https://www.linkedin.com/in/johnwalley"
                target="_blank"
                rel="noreferrer noopener"
              >
                John Walley
              </a>
            </h4>
            <small class="avatar__subtitle">
              CEO @ Mulberry House Software
            </small>
          </div>
        </div>
        <div className="text">
          <div className="col">
            <p>
              Hi! I'm John Walley and I believe in the power of data
              visualization to engage, inspire, and communicate stories. I
              founded Mulberry House Software in 2017 to help clients visualize
              and understand their data.
            </p>
            <p>
              Remarkable Charts is our first product and we want to make it easy
              for anyone to create great looking charts and data visualizations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
