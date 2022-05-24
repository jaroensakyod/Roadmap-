import React from "react";
import Subtitle from "../Subtitle";
import Right from "../Right";
import BigButton from "../BigButton";
import Group62 from "../Group62";
import Group66 from "../Group66";
import Group79 from "../Group79";
import "./Roadmap960.css";

function Roadmap960(props) {
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
    type,
    x121,
    commonRareLegend,
    commonRare,
    x122,
    number,
    planets,
    nftSpecifications,
    socialMedia,
    subtitleProps,
    group62Props,
    group79Props,
  } = props;

  return (
    <div className="roadmap-960 screen">
      <div className="body-4">
        <div className="overlap-group8-2">
          <Subtitle className={subtitleProps.className} />
          <img className="head-2" src={head} />
          <div className="desktop-navbar-2">
            <Right />
            <BigButton />
          </div>
          <Group62 className={group62Props.className} />
          <div className="overlap-group-7">
            <div className="ellipse-1-2"></div>
            <img className="catusv2-t-1-2" src={catusv2T1} />
          </div>
          <img className="rectangle-51-4" src={rectangle51} />
          <img className="rectangle-52-2" src={rectangle52} />
          <div className="overlap-group1-5">
            <img className="et-gfh8-1-2" src={etgfh81} />
            <img className="et-gfh8-3-2" src={etgfh83} />
            <img className="vector-10" src="/img/vector-10@2x.png" />
          </div>
          <img className="pie-chart-01-1-2" src={pieChart011} />
          <img className="image-1-2" src={image1} />
          <div className="group-container-2">
            <Group66 />
            <div className="group-63-2">
              <img className="saveplanet-1-2" src={saveplanet1} />
              <div className="ellipse-2-2"></div>
            </div>
            <Group79 className={group79Props.className} />
          </div>
          <div className="overlap-group3-1">
            <div className="rectangle-56-2"></div>
            <div className="rectangle-57-2"></div>
            <div className="group-76-2">
              <div className="overlap-group-8">
                <img className="catear1-01-1-2" src={catear1011} />
                <img className="catear1-01-2-2" src={catear1012} />
                <img className="catear1-01-3-4" src={catear10131} />
                <img className="catear1-01-4-2" src={catear1014} />
                <img className="catear1-01-3-5" src={catear10132} />
                <img className="vector-11" src={vector2} />
                <img className="vector-12" src={vector3} />
                <div className="body-5 michroma-normal-white-32px">{body}</div>
              </div>
              <div className="surname-5 michroma-normal-white-32px">{surname}</div>
            </div>
            <img className="group-77-2" src={group77} />
          </div>
          <div className="group-60-1">
            <div className="overlap-group4-2">
              <div className="head-face-body-2 michroma-normal-white-24px">{headFaceBody}</div>
              <div className="rectangle-50-6"></div>
              <div className="attributes-2 genos-normal-white-48px">{attributes}</div>
            </div>
            <div className="rectangle-51-5"></div>
            <div className="background-hand-back-2 michroma-normal-white-24px">{backgroundHandBack}</div>
          </div>
          <div className="overlap-group5-2">
            <img className="x1-1-2" src={x11} />
            <img className="vector-13" src={vector4} />
            <img className="vector-14" src={vector5} />
          </div>
          <div className="group-59-2">
            <div className="type-2 genos-normal-white-48px">{type}</div>
            <div className="flex-row-3">
              <div className="rectangle-50-7"></div>
              <img className="x1-2-6" src={x121} />
              <div className="common-rare-container-2 michroma-normal-white-24px">
                <div className="common-rare-legend-2">{commonRareLegend}</div>
                <div className="common-rare-2">{commonRare}</div>
              </div>
            </div>
          </div>
          <div className="group-81-2">
            <div className="overlap-group7-1">
              <img className="x1-2-7" src={x122} />
              <div className="number-2 michroma-normal-white-48px">{number}</div>
              <div className="planets-2 montserrat-medium-black-haze-32px">{planets}</div>
              <div className="rectangle-50-8"></div>
            </div>
            <div className="nft-specifications-2 genos-normal-white-48px">{nftSpecifications}</div>
          </div>
          <img className="social-media-2" src={socialMedia} />
        </div>
      </div>
    </div>
  );
}

export default Roadmap960;
