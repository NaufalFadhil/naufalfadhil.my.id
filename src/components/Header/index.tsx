"use client";

import Image from "next/image";
import Style from "../../styles/Home.module.css";
import { useState } from "react";

export default function Header() {
  const [downloadText, setDownloadText] = useState("DOWNLOAD RESUME");

  const downloadHandler = () => {
    setDownloadText("Downloading...");
    setTimeout(() => {
      setDownloadText("Currently Unavailable");
    }, 1000);
  };

  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <h1 className={Style.headerName}>
                      <span className="color-dark">NAUFAL</span>
                      <br />FADHIL<br />
                      <span className="color-dark">ATHALLAH</span>
                    </h1>
                    <h3 className={Style.headerTitle}>Developer | Student | Alien</h3>
                    <button className={`${Style.btnDownload} mt-3`} onClick={downloadHandler}>
                        {downloadText}
                    </button>
                </div>
                <div className="col d-none d-md-block">
                    <Image src="assets/images/avatar/foto_header_primary.svg" width={400} height={450} alt="Foto Fadhil" className="mt-3" />
                </div>
            </div>
        </div>
    </header>
  )
}
