import React from "react";
import Group62 from "../Group62";
import Group66 from "../Group66";
import Group79 from "../Group79";
import "./Roadmap2000.css";

function Roadmap2000(props) {
  const {
    head,
    community,
    roadmap,
    surname1,
    catusv2T1,
    rectangle51,
    rectangle52,
    etgfh81,
    etgfh83,
    pieChart011,
    image1,
    saveplanet1,
    catear1011,
    catear1012,
    catear10131,
    catear1014,
    catear10132,
    vector2,
    vector3,
    body,
    surname2,
    group77,
    headFaceBody,
    backgroundHandBack,
    attributes,
    vector4,
    x11,
    vector5,
    x121,
    type,
    commonRareLegend,
    commonRare,
    rectangle50,
    x122,
    number,
    planets,
    nftSpecifications,
    copywright2022Rnx,
    socialMedia,
  } = props;

  return (
    <div className="roadmap-2000 screen">
      <div className="body">
        <div className="overlap-group9">
          <img className="head" src={head} />
          <div className="desktop-navbar">
            <div className="overlap-group">
              <div className="right">
                <div className="desktop-menu">
                  <div className="text-link"></div>
                  <div className="text-link-1">
                    <div className="community">{community}</div>
                  </div>
                  <div className="text-link-2">
                    <div className="roadmap">{roadmap}</div>
                  </div>
                </div>
              </div>
              <div className="big-button">
                <div className="master-button">
                  <div className="text-button">
                    <div className="surname montserrat-bold-white-24px">{surname1}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Group62 />
          <div className="overlap-group1">
            <div className="ellipse-1"></div>
            <img className="catusv2-t-1" src={catusv2T1} />
          </div>
          <img className="rectangle-51" src={rectangle51} />
          <img className="rectangle-52" src={rectangle52} />
          <div className="overlap-group2">
            <img className="et-gfh8-1" src={etgfh81} />
            <img className="vector" src="/img/vector@1x.png" />
            <img className="et-gfh8-3" src={etgfh83} />
          </div>
          <img className="pie-chart-01-1" src={pieChart011} />
          <img className="image-1" src={image1} />
          <div className="group-container">
            <Group66 />
            <div className="group-63">
              <img className="saveplanet-1" src={saveplanet1} />
              <div className="ellipse-2"></div>
            </div>
            <Group79 />
          </div>
          <div className="overlap-group4">
            <div className="rectangle-56"></div>
            <div className="rectangle-57"></div>
            <div className="group-76">
              <div className="overlap-group-1">
                <img className="catear1-01-1" src={catear1011} />
                <img className="catear1-01-2" src={catear1012} />
                <img className="catear1-01-3" src={catear10131} />
                <img className="catear1-01-4" src={catear1014} />
                <img className="catear1-01-3-1" src={catear10132} />
                <img className="vector-1" src={vector2} />
                <img className="vector-2" src={vector3} />
                <div className="body-1 michroma-normal-white-36px">{body}</div>
              </div>
              <div className="surname-1 michroma-normal-white-36px">{surname2}</div>
            </div>
            <img className="group-77" src={group77} />
          </div>
          <div className="overlap-group5">
            <div className="head-face-body michroma-normal-white-24px">{headFaceBody}</div>
            <div className="background-hand-back michroma-normal-white-24px">{backgroundHandBack}</div>
            <div className="rectangle-50"></div>
            <div className="rectangle-51-1"></div>
            <div className="attributes genos-normal-white-48px">{attributes}</div>
          </div>
          <div className="group-82">
            <img className="vector-3" src={vector4} />
            <img className="x1-1" src={x11} />
            <img className="vector-4" src={vector5} />
          </div>
          <div className="group-59">
            <div className="overlap-group7">
              <img className="x1-2" src={x121} />
              <div className="rectangle-50-1"></div>
              <div className="type genos-normal-white-48px">{type}</div>
            </div>
            <div className="common-rare-container michroma-normal-white-24px">
              <div className="common-rare-legend">{commonRareLegend}</div>
              <div className="common-rare">{commonRare}</div>
            </div>
          </div>
          <div className="group-81">
            <img className="rectangle-50-2" src={rectangle50} />
            <div className="overlap-group8">
              <img className="x1-2-1" src={x122} />
              <div className="number michroma-normal-white-48px">{number}</div>
              <div className="planets montserrat-medium-black-haze-32px">{planets}</div>
              <div className="nft-specifications genos-normal-white-48px">{nftSpecifications}</div>
            </div>
          </div>
          <div className="copywright-2022-rnx">{copywright2022Rnx}</div>
          <img className="social-media" src={socialMedia} />
        </div>
      </div>
    </div>
  );
}

export default Roadmap2000;
