import React from "react";
import style from "./portfolio.module.scss";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="inner">
        <h2>Portfolio</h2>
        <div className="contents">
          {/* 팀프로젝트 */}
          <div className="porfolio-box">
            <div className="portfolio-team">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="" alt="img" />
              </a>
              <div>
                <li>프로젝트명 : </li>
                <li>프로젝트 기간 : </li>
                <li>프로젝트 주제 : </li>
                <li>프로젝트 기여도 : </li>
                <li>프로젝트 도구 : </li>
                <li>프로젝트 사용언어 : </li>
                <li>프로젝트 피그마 : </li>
                <li>프로젝트 Git : </li>
                <li>프로젝트 노션 : </li>
              </div>
            </div>
          </div>
          {/* 개인 스터디 프로젝트 */}
          <div className="portfolio-box"></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
