import React from "react";

import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
    return(
        <>
        <footer className="section-footer">
            <ul className="footer-social">
            <li>
                        <a href="https://github.com/sahani78" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare className="github_icon" />
                        </a>
                    </li>

                <li>
                    <a href="https://twitter.com/" target="_" rel="noopener noreferrer">
                        <FaXTwitter className="twitter_icon"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram/sahani1086" target="_">
                    <FaInstagram className="insta_icon"/>
                    </a>
                </li>
            </ul>
        </footer>
        </>
    )
}