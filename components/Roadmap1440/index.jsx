import React from "react";
import Subtitle from "../Subtitle";
import Right from "../Right";
import BigButton from "../BigButton";
import Group62 from "../Group62";
import Group66 from "../Group66";
import Group79 from "../Group79";
import "./Roadmap1440.css";

function Roadmap1440(props) {
  const {
    head,
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
    surname,
    group77,
    headFaceBody,
    attributes,
    backgroundHandBack,
    x11,
    vector4,
    vector5,
    x121,
    type,
    commonRareLegend,
    commonRare,
    x122,
    number,
    nftSpecifications,
    planets,
    socialMedia,
    group62Props,
  } = props;

  return (
    <div className="roadmap-1440 screen">
      <div className="body-2">
        <div className="overlap-group9-1">
          <Subtitle />
          <img className="head-1" src={head} />
          <div className="desktop-navbar-1">
            <Right />
            <BigButton />
          </div>
          <Group62 className={group62Props.className} />
          <div className="overlap-group-5">
            <div className="ellipse-1-1"></div>
            <img className="catusv2-t-1-1" src={catusv2T1} />
          </div>
          <img className="rectangle-51-2" src={rectangle51} />
          <img className="rectangle-52-1" src={rectangle52} />
          <div className="overlap-group1-4">
            <img className="et-gfh8-1-1" src={etgfh81} />
            <img className="vector-5" src="/img/vector-5@2x.png" />
            <img className="et-gfh8-3-1" src={etgfh83} />
          </div>
          <img className="pie-chart-01-1-1" src={pieChart011} />
          <img className="image-1-1" src={image1} />
          <div className="group-container-1">
            <Group66 />
            <div className="group-63-1">
              <img className="saveplanet-1-1" src={saveplanet1} />
              <div className="ellipse-2-1"></div>
            </div>
            <Group79 />
          </div>
          <div className="overlap-group3">
            <div className="rectangle-56-1"></div>
            <div className="rectangle-57-1"></div>
            <div className="group-76-1">
              <div className="overlap-group-6">
                <img className="catear1-01-1-1" src={catear1011} />
                <img className="catear1-01-2-1" src={catear1012} />
                <img className="catear1-01-3-2" src={catear10131} />
                <img className="catear1-01-4-1" src={catear1014} />
                <img className="catear1-01-3-3" src={catear10132} />
                <img className="vector-6" src={vector2} />
                <img className="vector-7" src={vector3} />
                <div className="body-3 michroma-normal-white-36px">{body}</div>
              </div>
              <div className="surname-2 michroma-normal-white-36px">{surname}</div>
            </div>
            <img className="group-77-1" src={group77} />
          </div>
          <div className="group-60">
            <div className="overlap-group4-1">
              <div className="head-face-body-1 michroma-normal-white-24px">{headFaceBody}</div>
              <div className="rectangle-50-3"></div>
              <div className="attributes-1 genos-normal-white-48px">{attributes}</div>
            </div>
            <div className="rectangle-51-3"></div>
            <div className="background-hand-back-1 michroma-normal-white-24px">{backgroundHandBack}</div>
          </div>
          <div className="group-82-1">
            <div className="overlap-group5-1">
              <img className="x1-1-1" src={x11} />
              <img className="vector-8" src={vector4} />
            </div>
            <img className="vector-9" src={vector5} />
          </div>
          <div className="group-59-1">
            <div className="overlap-group6">
              <img className="x1-2-4" src={x121} />
              <div className="rectangle-50-4"></div>
              <div className="type-1 genos-normal-white-48px">{type}</div>
            </div>
            <div className="common-rare-container-1 michroma-normal-white-24px">
              <div className="common-rare-legend-1">{commonRareLegend}</div>
              <div className="common-rare-1">{commonRare}</div>
            </div>
          </div>
          <div className="group-81-1">
            <div className="overlap-group8-1">
              <img className="x1-2-5" src={x122} />
              <div className="number-1 michroma-normal-white-48px">{number}</div>
              <div className="rectangle-50-5"></div>
              <div className="nft-specifications-1 genos-normal-white-48px">{nftSpecifications}</div>
            </div>
            <div className="planets-1 montserrat-medium-black-haze-32px">{planets}</div>
          </div>
          <img className="social-media-1" src={socialMedia} />
        </div>
      </div>
    </div>
  );
}

export default Roadmap1440;
