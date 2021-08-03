import React from "react";
import { Row, Col } from "antd";
import "./Description.less";

const Description = () => {
    return (
        <div className="description">
            <div className="container">
                <div className="product-description">
                    <h3>Product Description</h3>
                    <p>Voting telah menjadi salah satu metode untuk mengambil keputusan penting dalam kehidupan manusia. Voting digunakan mulai dari tingkat masyarakat terkecil, yaitu keluarga, sampai dengan sebuah negara. Voting digunakan untuk menghimpun aspirasi dari seluruh elemen masyarakat, dan kemudian menemukan jalan keluar yang dianggap paling baik untuk menyelesaikan permasalahan. Dalam sebuah negara yang menganut sistem politik demokrasi, Voting digunakan untuk mengambil keputusan negara yang sangat krusial, antara lain adalah untuk memilih wakil-wakil rakyat, atau untuk memilih pemimpin negara yang baru. Oleh karena itu, Voting membutuhkan prosedur pelaksanaan yang dapat menjamin kerahasiaan dan keabsahan dari hasil pelaksanaan Voting tersebut.  <br />
                        Berdasarkan realita di lapangan, proses penyelenggaraan Voting yang dilakukan dengan cara konvensional ditemukan berbagai permasalahan antara lain: <br /> </p>

                    <ol type="1">
                        <li>Permasalahan pada validitas data Pemilih.</li>
                        <li>Pemilih ganda, domisili pemilih tak sesuai, NIK fiktif. </li>
                        <li>Penyalahgunaan undangan, pemanfaatan surat suara sisa.</li>
                        <li>Permasalahan pada proses penyediaan, pencetakan dan pendistribusian kertas suara.</li>
                        <li>Banyak surat suara tidak sah.</li>
                        <li>Kerap terjadi ketidaksesuaian hasilingga akhi perhitungan manual yang dilakukan panitia pelaksana dengan hasil perhitungan yang dilakukan oleh para saksi ataupun masyarakat.</li>
                        <li>Lamanya waktu yang dibutuhkan dalam melakukan proses perhitungan manual.</li>
                        <li>Sangat dimungkinkan untuk dikondisikan selama perhitungan dan pengiriman hasil secara manual dan berjenjang.</li>
                        <li> Pemungutan suara ulang sangat mungkin terjadi dengan berbagai alasan sehingga membutuhkan biaya mahal.</li>
                    </ol>

                    <p>
                        Berangkat dari permasalahan di atas, Balai Pengkajian dan Penerapan Teknologi (BPPT) dan PT. Industri Telekomunikasi Indonesia (Persero) melakukan Perjanjian Kerja Sama dan Join Development dalam pengembangan Sistem Evoting, dimana system tersebut telah rampung dan teruji dalam pelaksanaan pertama kali tahun 2013 di Kabupaten Boyolali untuk pemilihan kepala desa di 7 desa. Sampai akhir tahun 2019, pelaksanaan Pemilihan kepala daerah dalam hal ini Kepala Desa, telah dilaksanakan di 22 kabupaten dan lebih dari 1000 desa. Melihat peluang market product Evoting ke depan , PT Inti Konten Indonesia (INTENS) menjalin kerjasama dengan Balai Pengkajian dan Penerapan Teknologi (BPPT) tentang Intermediasi Sistem Pemilihan Umum Secara Elektronik Terpadu yang tertuang dalam Perjanjian Kerjasama (PKS).</p>
                </div>
                <div className="aspek">
                    <Row>
                        <Col lg={10} sm={24}>
                            <h3>Aspek Keamanan</h3>
                            <ul type="square">
                                <li>Evoting tidak tersambung ke jaringan apapun sehingga aman dari hacker</li>
                                <li>Satu Smart Card hanya dapat digunakan satu kali</li>
                                <li>Smart card yang bisa menghasilkan surat suara hanya yang baru digenerate dari Generator</li>
                                <li>eVoting aman karena tanda pemilih sudah memilih adalah tercetaknya struk audit. Hasil dihitung setelah struk audit tercetak. Oleh karena itu walaupun listrik mati, hasil tidak hilang dan akan tersambung kembali saat listrik hidup, jika pemilih mengalami Hang di bilik, dan struk tidak keluar, maka pemilih tersebut diberi smart card lagi setelah perangkat dipulihkan kembali</li>
                            </ul>
                        </Col>
                        <Col lg={12} sm={24} offset={2}>
                            <h3>Keunggulan</h3>
                            <ul type="square">
                                <li>Efisien dan efektif</li>
                                <li>Penghitungan suara lebih cepat</li>
                                <li>Akurasi penghitungan suara tinggi</li>
                                <li>Tidak ada duplikasi data pemilih</li>
                                <li>Menghemat biaya dalam jangka panjang</li>
                                <li>Tidak ada suara rusak</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div className="demo">
                    <Row>
                        <Col lg={10} sm={24}>
                            <h3>Demo</h3>
                            <div className="bg"></div>
                        </Col>
                        <Col lg={12} sm={24} offset={2}>
                            <h3>Screenshots</h3>
                            <Row>
                                <Col span={12}>
                                    <div className="bg-ss"></div>
                                </Col>
                                <Col span={12}>
                                    <div className="bg-ss"></div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <div className="bg-ss"></div>
                                </Col>
                                <Col span={12}>
                                    <div className="bg-ss"></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <div className="brosur">
                    <h3>Brosur</h3>
                    <p><span>Klik disini</span> untuk mengunduh brosur</p>
                </div>
            </div>
        </div>
    )
}

export default Description;