import React, {useState, useEffect} from "react";
import BackgroundImage from '../../assets/images/dummy-background.png';

export default function Dashboard(){

  const [hoverEnabled, setIsHoverEnabled] = useState("");
  const [clickEnabled, setIsClickEnabled] = useState("");
  const [activeIcon, setActiveIcon] = useState("");

  const toggleHoverAction = (value) => (e) => {
    e.preventDefault();
    setIsHoverEnabled(value);
    e.stopPropagation();
  }

  const toggleClickAction = (value) => (e) => {
    e.preventDefault();
    setIsHoverEnabled('');
    setIsClickEnabled(value);
    e.stopPropagation();
  }

  const toggleMouseLeaveAction = () => {
    setIsHoverEnabled("");
  }

  const toggleClickRemove = (e) => {
    e.preventDefault();
    setIsHoverEnabled('');
    setIsClickEnabled('');
    e.stopPropagation();
  }
  

  return(
    <div>
      <div className="action-container">
        <div className="top-action-header display-flex">
          <div onMouseOver={toggleHoverAction("more")} onMouseLeave={toggleMouseLeaveAction} className="action-icon display-flex default-icon">
            <svg className="flex-item" width="8" height="20" viewBox="0 0 8 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#838383"/>
              <circle cx="4" cy="20" r="4" fill="#838383"/>
              <circle cx="4" cy="36" r="4" fill="#838383"/>
            </svg>
            <div style={{display : `${hoverEnabled === "more" ? "flex" : "none"}`}} className="action-button-tooltip left-tooltip display-flex">
              <div className="arrow-left flex-item"></div>
              <div className="tooltip-container flex-item">
                <p>More</p>
              </div>
            </div>
          </div>
          <div style={{position: "absolute", right: 18}}>
            <div className="action-icon-text object-border-radius">
              <svg width="24" height="24" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.10417 13.625L15.2083 17.5M8.10417 13.625V5.875M8.10417 13.625L1 17.5M15.2083 17.5L22.3125 13.625M15.2083 17.5V9.75M15.2083 17.5V25.25M15.2083 17.5L8.10417 21.375M15.2083 17.5L22.3125 21.375M22.3125 13.625V5.875M22.3125 13.625L29.4167 17.5M22.3125 5.875L15.2083 2L8.10417 5.875M22.3125 5.875L15.2083 9.75M8.10417 5.875L15.2083 9.75M8.10417 29.125L1 25.25V17.5M8.10417 29.125L15.2083 25.25M8.10417 29.125V21.375M15.2083 25.25L22.3125 29.125M1 17.5L8.10417 21.375M22.3125 29.125L29.4167 25.25V17.5M22.3125 29.125V21.375M29.4167 17.5L22.3125 21.375" stroke="#838383" stroke-width="2"/>
              </svg>
              <p>Objects</p>
            </div>
            <div className="action-icon-text people-border-radius">
              <svg width="24" height="24" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.55 15.6C18.5843 15.6 19.5763 16.0109 20.3077 16.7423C21.0391 17.4737 21.45 18.4657 21.45 19.5V22.425C21.45 26.4303 17.3784 29.25 10.725 29.25C4.0716 29.25 0 26.4303 0 22.425V19.5C0 18.4657 0.410892 17.4737 1.14228 16.7423C1.87368 16.0109 2.86566 15.6 3.9 15.6H17.55ZM17.55 17.55H3.9C3.38283 17.55 2.88684 17.7554 2.52114 18.1211C2.15545 18.4868 1.95 18.9828 1.95 19.5V22.425C1.95 25.1687 5.02905 27.3 10.725 27.3C16.4209 27.3 19.5 25.1687 19.5 22.425V19.5C19.5 18.9828 19.2946 18.4868 18.9289 18.1211C18.5632 17.7554 18.0672 17.55 17.55 17.55ZM27.3 15.6C28.3343 15.6 29.3263 16.0109 30.0577 16.7423C30.7891 17.4737 31.2 18.4657 31.2 19.5V20.475C31.2 24.5486 28.1424 27.3 22.425 27.3C22.15 27.3 21.879 27.2942 21.6177 27.2805C22.0233 26.8086 22.3626 26.3016 22.6356 25.7576L22.8247 25.3422H22.9008C27.2532 25.2155 29.25 23.322 29.25 20.475V19.5C29.25 18.9828 29.0446 18.4868 28.6789 18.1211C28.3132 17.7554 27.8172 17.55 27.3 17.55H23.0665C22.8114 16.8307 22.4179 16.1682 21.9082 15.6H27.3ZM10.725 0C11.6213 -1.33555e-08 12.5088 0.176534 13.3368 0.519522C14.1649 0.86251 14.9172 1.36524 15.551 1.999C16.1848 2.63276 16.6875 3.38514 17.0305 4.21319C17.3735 5.04123 17.55 5.92873 17.55 6.825C17.55 7.72127 17.3735 8.60877 17.0305 9.43682C16.6875 10.2649 16.1848 11.0172 15.551 11.651C14.9172 12.2848 14.1649 12.7875 13.3368 13.1305C12.5088 13.4735 11.6213 13.65 10.725 13.65C8.9149 13.65 7.17893 12.9309 5.899 11.651C4.61906 10.3711 3.9 8.6351 3.9 6.825C3.9 5.0149 4.61906 3.27893 5.899 1.999C7.17893 0.71906 8.9149 2.69726e-08 10.725 0ZM24.375 3.9C25.6679 3.9 26.9079 4.41361 27.8221 5.32786C28.7364 6.24209 29.25 7.48207 29.25 8.775C29.25 10.0679 28.7364 11.3079 27.8221 12.2221C26.9079 13.1364 25.6679 13.65 24.375 13.65C23.0821 13.65 21.8421 13.1364 20.9279 12.2221C20.0136 11.3079 19.5 10.0679 19.5 8.775C19.5 7.48207 20.0136 6.24209 20.9279 5.32786C21.8421 4.41361 23.0821 3.9 24.375 3.9ZM10.725 1.95C9.43207 1.95 8.19209 2.46361 7.27785 3.37785C6.36361 4.29209 5.85 5.53207 5.85 6.825C5.85 8.11793 6.36361 9.35791 7.27785 10.2721C8.19209 11.1864 9.43207 11.7 10.725 11.7C12.0179 11.7 13.2579 11.1864 14.1721 10.2721C15.0864 9.35791 15.6 8.11793 15.6 6.825C15.6 5.53207 15.0864 4.29209 14.1721 3.37785C13.2579 2.46361 12.0179 1.95 10.725 1.95ZM24.375 5.85C23.5992 5.85 22.8553 6.15817 22.3067 6.70671C21.7582 7.25526 21.45 7.99924 21.45 8.775C21.45 9.55076 21.7582 10.2947 22.3067 10.8433C22.8553 11.3918 23.5992 11.7 24.375 11.7C25.1508 11.7 25.8947 11.3918 26.4433 10.8433C26.9918 10.2947 27.3 9.55076 27.3 8.775C27.3 7.99924 26.9918 7.25526 26.4433 6.70671C25.8947 6.15817 25.1508 5.85 24.375 5.85Z" fill="#838383"/>
              </svg>
              <p>People</p>
            </div>
          </div>
        </div>

        <div class="side-action-bar">
          <div id="invite" onClick={toggleClickAction("invite")} onMouseOver={toggleHoverAction("invite")} onMouseLeave={toggleMouseLeaveAction} className={`action-icon display-flex default-icon m-b-16 ${clickEnabled === "invite" ? "active-default-icon active-icon" : ""}`}>
            <svg className="flex-item" width="24" height="24" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.25 0.625H3.75C2.9875 0.625 2.25623 0.927901 1.71707 1.46707C1.1779 2.00623 0.875 2.7375 0.875 3.5V26.5C0.875 27.2625 1.1779 27.9938 1.71707 28.5329C2.25623 29.0721 2.9875 29.375 3.75 29.375H38.25C39.0125 29.375 39.7438 29.0721 40.2829 28.5329C40.8221 27.9938 41.125 27.2625 41.125 26.5V3.5C41.125 2.7375 40.8221 2.00623 40.2829 1.46707C39.7438 0.927901 39.0125 0.625 38.25 0.625ZM35.0875 3.5L21 13.2462L6.9125 3.5H35.0875ZM3.75 26.5V4.80812L20.1806 16.1787C20.4213 16.3457 20.7071 16.4351 21 16.4351C21.2929 16.4351 21.5787 16.3457 21.8194 16.1787L38.25 4.80812V26.5H3.75Z" fill="#838383"/>
            </svg>
            <div style={{display : `${hoverEnabled === "invite" && clickEnabled === "" ? "flex" : "none"}`}} className="action-button-tooltip left-tooltip display-flex">
              <div className="arrow-left flex-item"></div>
              <div className="tooltip-container flex-item">
                <p>Invite</p>
              </div>
            </div>
            {
              clickEnabled === "invite" && (
                <div className="left-tooltip display-flex" style={{position: "absolute"}}>
                  <div className="arrow-left default-arrow-margin"></div>
                  <div className="action-button-container">
                    <div className="display-flex space-between m-b-12">
                      <p className="flex-item heading" style={{color: "#000000"}}>Invite</p>
                      <svg onClick={toggleClickRemove} className="flex-item close-icon" width="8" height="10" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="-1" x2="12.26" y2="-1" transform="matrix(0.63272 -0.774381 -0.825591 -0.564269 0 10.2683)" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round"/>
                        <line x1="1" y1="-1" x2="12.26" y2="-1" transform="matrix(0.639226 0.769019 -0.820804 0.571209 0 0.802856)" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <p className="sub-heading">Room Link</p>
                    <div className="link-container display-flex">
                      <input className="link-text flex-item" type="text" value="abc"></input>
                      <div className="link-button display-flex flex-item" style={{backgroundColor: "#03c903"}}>
                        <p class="flex-item">Copy</p>
                      </div>
                    </div>

                    <p className="sub-heading m-t-16">Room Code</p>
                    <div className="link-container display-flex">
                      <input className="link-text flex-item" type="text" value="279692"></input>
                      <div className="link-button display-flex flex-item" style={{backgroundColor: "#0096FF"}}>
                        <p class="flex-item">Copy</p>
                      </div>
                    </div>
                    <p class="sub-text m-t-4">Enter code on <span>letslucid.link</span></p>

                    <p className="sub-heading m-t-16">Embed Code</p>
                    <div className="link-container display-flex">
                      <input className="link-text flex-item" type="text" value="<iframe src='https://test.com'></iframe>"></input>
                      <div className="link-button display-flex flex-item" style={{backgroundColor: "#5D3FD3"}}>
                        <p class="flex-item">Copy</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>

          <div onMouseOver={toggleHoverAction("voice")} onMouseLeave={toggleMouseLeaveAction} className="action-icon display-flex default-icon-stroke m-b-16">
            <svg class="flex-item" width="18" height="24" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 9C24 5.13401 20.866 2 17 2C13.134 2 10 5.13401 10 9V22C10 25.866 13.134 29 17 29C20.866 29 24 25.866 24 22V9Z" stroke="#838383" stroke-width="4" stroke-linejoin="round"/>
              <path d="M2 21C2 29.284 8.716 36 17 36C25.284 36 32 29.284 32 21" stroke="#838383" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 36V42" stroke="#838383" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div style={{display : `${hoverEnabled === "voice" ? "flex" : "none"}`}} className="action-button-tooltip left-tooltip display-flex">
              <div className="arrow-left flex-item"></div>
              <div className="tooltip-container flex-item">
                <p>Voice</p>
              </div>
            </div>
          </div>

          <div id="share-screen-button" onMouseOver={toggleHoverAction("share-screen-button")} onMouseLeave={toggleMouseLeaveAction} className="action-icon display-flex m-b-16" style={{backgroundColor : hoverEnabled === "share-screen-button" ? "#8400C2" : "#FFFFFF"}}>
            <svg className="flex-item" width="24" height="24" viewBox="0 0 44 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 27.5001C21.6353 27.5001 21.2856 27.3552 21.0277 27.0974C20.7699 26.8395 20.625 26.4898 20.625 26.1251V10.1943L16.0985 14.7236C15.8403 14.9818 15.4902 15.1268 15.125 15.1268C14.7599 15.1268 14.4097 14.9818 14.1515 14.7236C13.8933 14.4654 13.7483 14.1152 13.7483 13.7501C13.7483 13.385 13.8933 13.0348 14.1515 12.7766L21.0265 5.90159C21.1542 5.77354 21.306 5.67195 21.473 5.60263C21.6401 5.53331 21.8192 5.49763 22 5.49763C22.1809 5.49763 22.36 5.53331 22.527 5.60263C22.6941 5.67195 22.8458 5.77354 22.9735 5.90159L29.8485 12.7766C30.1067 13.0348 30.2518 13.385 30.2518 13.7501C30.2518 14.1152 30.1067 14.4654 29.8485 14.7236C29.5903 14.9818 29.2402 15.1268 28.875 15.1268C28.5099 15.1268 28.1597 14.9818 27.9015 14.7236L23.375 10.1943V26.1251C23.375 26.4898 23.2302 26.8395 22.9723 27.0974C22.7144 27.3552 22.3647 27.5001 22 27.5001Z" fill={hoverEnabled === "share-screen-button" ? "#FFFFFF" : "#8400C2"}/>
              <path d="M0 5.5C0 4.04131 0.579462 2.64236 1.61091 1.61091C2.64236 0.579462 4.04131 0 5.5 0H38.5C39.9587 0 41.3576 0.579462 42.3891 1.61091C43.4205 2.64236 44 4.04131 44 5.5V27.5C44 28.9587 43.4205 30.3576 42.3891 31.3891C41.3576 32.4205 39.9587 33 38.5 33H5.5C4.04131 33 2.64236 32.4205 1.61091 31.3891C0.579462 30.3576 0 28.9587 0 27.5V5.5ZM5.5 2.75C4.77065 2.75 4.07118 3.03973 3.55546 3.55546C3.03973 4.07118 2.75 4.77065 2.75 5.5V27.5C2.75 28.2293 3.03973 28.9288 3.55546 29.4445C4.07118 29.9603 4.77065 30.25 5.5 30.25H38.5C39.2293 30.25 39.9288 29.9603 40.4445 29.4445C40.9603 28.9288 41.25 28.2293 41.25 27.5V5.5C41.25 4.77065 40.9603 4.07118 40.4445 3.55546C39.9288 3.03973 39.2293 2.75 38.5 2.75H5.5Z" fill={hoverEnabled === "share-screen-button" ? "#FFFFFF" : "#8400C2"}/>
            </svg>
            <div style={{display : `${hoverEnabled === "share-screen-button" ? "flex" : "none"}`}} className="action-button-tooltip left-tooltip display-flex">
              <div className="arrow-left flex-item"></div>
              <div className="tooltip-container flex-item">
                <p>Share</p>
              </div>
            </div>
          </div>

          <div id="model-3d" onMouseOver={toggleHoverAction("model-3d")} onMouseLeave={toggleMouseLeaveAction} className="action-icon display-flex m-b-16" style={{backgroundColor : hoverEnabled === "model-3d" ? "#117B00" : "#FFFFFF"}}>
            <svg class="flex-item" width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.812 13.172L24.812 5.17202C24.5561 5.05828 24.2791 4.99951 23.999 4.99951C23.7189 4.99951 23.4419 5.05828 23.186 5.17202L5.186 13.172C5.146 13.19 5.118 13.22 5.078 13.242C5.022 13.27 4.962 13.288 4.91 13.322C4.866 13.352 4.832 13.39 4.79 13.422C4.64381 13.5307 4.51558 13.6616 4.41 13.81C4.37 13.866 4.328 13.916 4.292 13.972C4.23247 14.0777 4.18164 14.1881 4.14 14.302C4.122 14.356 4.094 14.406 4.078 14.46C4.02777 14.6357 4.00153 14.8173 4 15V35C4 35.792 4.464 36.506 5.188 36.828L23.188 44.828C23.448 44.944 23.724 45 24 45C24.2785 44.9929 24.5524 44.9275 24.804 44.808L24.812 44.828L42.812 36.828C43.1658 36.6711 43.4664 36.4148 43.6773 36.0903C43.8882 35.7658 44.0003 35.387 44 35V15C44.0003 14.613 43.8882 14.2342 43.6773 13.9097C43.4664 13.5852 43.1658 13.3289 42.812 13.172ZM24 9.19002L37.076 15L24 20.81L21.384 19.648L10.926 15L24 9.19002ZM8 33.702V18.078L22 24.3V39.922L8 33.702ZM26 39.922V24.3L40 18.078V33.702L26 39.922Z" fill={hoverEnabled === "model-3d" ? "#FFFFFF" : "#117B00"}/>
            </svg>
            <div style={{display : `${hoverEnabled === "model-3d" ? "flex" : "none"}`}} className="action-button-tooltip left-tooltip display-flex">
              <div className="arrow-left flex-item"></div>
              <div className="tooltip-container flex-item">
                <p>Place</p>
              </div>
            </div>
          </div>

          <div id="emoji-button" onMouseOver={toggleHoverAction("emoji-button")} onMouseLeave={toggleMouseLeaveAction} className="action-icon display-flex m-b-16" style={{backgroundColor : hoverEnabled === "emoji-button" ? "#FF8A00" : "#FFFFFF"}}>
            <svg class="flex-item" width="24" height="24" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 43.125C17.6625 43.125 12.5436 41.0047 8.76948 37.2305C4.99531 33.4564 2.875 28.3375 2.875 23C2.875 17.6625 4.99531 12.5436 8.76948 8.76948C12.5436 4.99531 17.6625 2.875 23 2.875C28.3375 2.875 33.4564 4.99531 37.2305 8.76948C41.0047 12.5436 43.125 17.6625 43.125 23C43.125 28.3375 41.0047 33.4564 37.2305 37.2305C33.4564 41.0047 28.3375 43.125 23 43.125ZM23 46C29.1 46 34.9501 43.5768 39.2635 39.2635C43.5768 34.9501 46 29.1 46 23C46 16.9 43.5768 11.0499 39.2635 6.73654C34.9501 2.42321 29.1 0 23 0C16.9 0 11.0499 2.42321 6.73654 6.73654C2.42321 11.0499 0 16.9 0 23C0 29.1 2.42321 34.9501 6.73654 39.2635C11.0499 43.5768 16.9 46 23 46Z"  fill={hoverEnabled === "emoji-button" ? "#FFFFFF" : "#FF8A00"}/>
              <path d="M35.4516 27.3125C35.704 27.7496 35.8368 28.2453 35.8368 28.75C35.8368 29.2547 35.704 29.7504 35.4516 30.1875C34.1902 32.3735 32.3752 34.1888 30.1894 35.4505C28.0035 36.7123 25.5239 37.376 23 37.375C20.4766 37.3755 17.9976 36.7115 15.8123 35.4498C13.627 34.1881 11.8124 32.3731 10.5512 30.1875C10.299 29.7507 10.1662 29.2552 10.1661 28.7507C10.1659 28.2463 10.2985 27.7507 10.5505 27.3138C10.8025 26.8768 11.165 26.5138 11.6017 26.2613C12.0383 26.0087 12.5337 25.8755 13.0381 25.875H32.9619C33.4665 25.875 33.9623 26.0079 34.3993 26.2602C34.8364 26.5125 35.1993 26.8755 35.4516 27.3125ZM20.125 18.6875C20.125 21.068 18.837 18.6875 17.25 18.6875C15.663 18.6875 14.375 21.068 14.375 18.6875C14.375 16.307 15.663 14.375 17.25 14.375C18.837 14.375 20.125 16.307 20.125 18.6875ZM31.625 18.6875C31.625 21.068 30.337 18.6875 28.75 18.6875C27.163 18.6875 25.875 21.068 25.875 18.6875C25.875 16.307 27.163 14.375 28.75 14.375C30.337 14.375 31.625 16.307 31.625 18.6875Z"  fill={hoverEnabled === "emoji-button" ? "#FFFFFF" : "#FF8A00"}/>
            </svg>
            <div style={{display : `${hoverEnabled === "emoji-button" ? "flex" : "none"}`}} className="action-button-tooltip left-tooltip display-flex">
              <div className="arrow-left flex-item"></div>
              <div className="tooltip-container flex-item">
                <p>React</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-action-header display-flex">
          <div id="exit-button" onMouseOver={toggleHoverAction("exit-button")} onMouseLeave={toggleMouseLeaveAction} className="action-icon display-flex" style={{backgroundColor : hoverEnabled === "exit-button" ? "#EC0055" : "#FFFFFF"}}>
            <svg class="flex-item" width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.4792 33.9375C23.2917 34.75 24.6042 34.75 25.4167 33.9375L32.8958 26.4583C33.089 26.2656 33.2422 26.0367 33.3467 25.7846C33.4513 25.5326 33.5051 25.2624 33.5051 24.9896C33.5051 24.7167 33.4513 24.4466 33.3467 24.1945C33.2422 23.9425 33.089 23.7136 32.8958 23.5208L25.4167 16.0417C25.0271 15.6521 24.4988 15.4333 23.9479 15.4333C23.397 15.4333 22.8687 15.6521 22.4792 16.0417C22.0896 16.4312 21.8708 16.9595 21.8708 17.5104C21.8708 18.0613 22.0896 18.5896 22.4792 18.9792L26.3958 22.9167H8.33333C7.1875 22.9167 6.25 23.8542 6.25 25C6.25 26.1458 7.1875 27.0833 8.33333 27.0833H26.3958L22.4792 31C21.6667 31.8125 21.6875 33.1458 22.4792 33.9375ZM39.5833 6.25H10.4167C9.3116 6.25 8.25179 6.68899 7.47039 7.47039C6.68899 8.25179 6.25 9.3116 6.25 10.4167V16.6667C6.25 17.8125 7.1875 18.75 8.33333 18.75C9.47917 18.75 10.4167 17.8125 10.4167 16.6667V12.5C10.4167 11.3542 11.3542 10.4167 12.5 10.4167H37.5C38.6458 10.4167 39.5833 11.3542 39.5833 12.5V37.5C39.5833 38.6458 38.6458 39.5833 37.5 39.5833H12.5C11.3542 39.5833 10.4167 38.6458 10.4167 37.5V33.3333C10.4167 32.1875 9.47917 31.25 8.33333 31.25C7.1875 31.25 6.25 32.1875 6.25 33.3333V39.5833C6.25 41.875 8.125 43.75 10.4167 43.75H39.5833C41.875 43.75 43.75 41.875 43.75 39.5833V10.4167C43.75 8.125 41.875 6.25 39.5833 6.25Z" fill={hoverEnabled === "exit-button" ? "#FFFFFF" : "#EC0055"}/>
            </svg>
            <div style={{display : `${hoverEnabled === "exit-button" ? "flex" : "none"}`}} className="action-button-tooltip left-tooltip display-flex">
              <div className="arrow-left flex-item"></div>
              <div className="tooltip-container flex-item">
                <p>Leave</p>
              </div>
            </div>
          </div>
          <div id="chat-button" onMouseOver={toggleHoverAction("chat-button")} onMouseLeave={toggleMouseLeaveAction} className="action-icon display-flex" style={{backgroundColor : hoverEnabled === "chat-button" ? "#008CC8" : "#FFFFFF"}}>
            <svg class="flex-item" width="24" height="24" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.5 4.08331C13.2423 4.08331 4.08337 11.4109 4.08337 20.4166C4.08337 26.3538 7.95846 31.6785 14.2917 34.5736V44.9166L25.1942 36.7398C36.1314 36.4478 44.9167 29.2366 44.9167 20.4166C44.9167 11.4109 35.7578 4.08331 24.5 4.08331ZM24.5 32.6666H23.8202L18.375 36.75V31.8153L17.0663 31.311C11.5763 29.1979 8.16671 25.0226 8.16671 20.4166C8.16671 13.6608 15.4942 8.16665 24.5 8.16665C33.5058 8.16665 40.8334 13.6608 40.8334 20.4166C40.8334 27.1725 33.5058 32.6666 24.5 32.6666Z" fill={hoverEnabled === "chat-button" ? "#FFFFFF" : "#008CC8"}/>
            </svg>
            <div style={{display : `${hoverEnabled === "chat-button" ? "flex" : "none"}`}} className="action-button-tooltip right-tooltip display-flex">
              <div className="tooltip-container flex-item">
                <p>Chat</p>
              </div>
              <div className="arrow-right flex-item"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-3d-container">
        <img className="full-w" src={BackgroundImage} />
      </div>
    </div>
  )
}