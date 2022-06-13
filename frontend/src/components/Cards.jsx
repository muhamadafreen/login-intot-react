import React from "react";

function Card(props) {
  return (
    <div className="col">
        <div className="aboutCard  ">
          <div className="imgcard">
            <img src={props.img} alt="card-img-1" />
          </div>
          <div className="cardtittle">
            <h4>{props.title}</h4>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus.
            </p>
          </div>
          <div className="cardbtn">
            <a href="" className=" cardbutton">
              Read More
            </a>
          </div>
        </div>
     
      
    </div>
  );
}

function Cards() {
  return (
    <div className="cardSection">
      <h2>WHY INITIATIVE COMPANY</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem
      </p>
      <div className=" row cards">
        <Card title="10 YEARS EXPERIENCE" img="images/card-img-1.png" />
       <Card title="A PRO ARCHITECTS TEAM" img="images/card-img-2.png"/>
        <Card title="1000+ HAPPY CUSTOMERS" img="images/card-img-3.png"/>
      </div>
    </div>
  );
}

export default Cards;
