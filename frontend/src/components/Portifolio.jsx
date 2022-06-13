import React from "react";

function Portifolio() {
    return (
        <div className="portfolioSection" id="portfolio">
            <div className="container portfoliocontent">
                <h2>OUR PORTFOLIO</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                    looking at its layout. The point of using Lorem</p>
            </div>
            <div className="row portfolioImgs">
                <div className="col-md-8"> <img className="img-port" src="images/portfolio-img-1.png" alt="portfolio-img-1"/></div>
                <div className="col-md-4"><img className="img-port" src="images/portfolio-img-2.jpg" alt="portfolio-img-2"/></div>
                <div className="col-md-4"><img className="img-port" src="images/portfolio-img-3.png" alt="portfolio-img-3"/></div>
                <div className="col-md-8"><img className="img-port" src="images/portfolio-img-4.png" alt="portfolio-img-4"/></div>
            </div>

        </div>
    )

}
export default Portifolio;