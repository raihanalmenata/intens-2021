import React from "react";

import LogoIntents from "../../assets/img/intens-logo.png";
import "./AboutUs.less";

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <div className="container">
                <div className="title">
                    <p>About Us:</p>
                    <h3>Inti Konten Indonesia</h3> <br />
                    <hr />
                </div>
                <div className="content">
                    <img src={LogoIntents} alt="Logo Intens" />
                    <div className="content-description">
                        <h5>Menjadi IT Solution & Content Provider yang dikenal secara global</h5>
                        <p>Didirikan pada tahun 2010 dengan kepemilikan saham 99 persen oleh PT INTI (Persero) salah satu badan usaha milik negara yang termasuk dalam  kelompok industri strategis, dan 1 persen oleh PT WBI (Widya Bhakti Inti), Intens dimaksudkan untuk memberikan solusi produk maupun proses bagi pertumbuhan bisnis pelanggan melalui penyediaan solusi bidang konten, aplikasi serta layanan value added lainnya berbasis teknologi informasi. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;