import React, { useEffect } from "react";

const Problem2 = () => {
  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/?format=json&page=2")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn-lg btn-outline-primary" type="button">
            All Contacts
          </button>
          <button className="btn btn-lg btn-outline-warning" type="button">
            US Contacts
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ut
          officia deleniti ex a ea, nobis ipsa ullam minus qui voluptatem
          laborum temporibus sed doloremque vitae ab libero ipsum, magni
          consequuntur placeat ducimus quae! Eveniet deserunt possimus, quasi,
          blanditiis soluta, nisi ab nobis modi impedit nihil adipisci.
          Molestiae at maiores earum praesentium nam est dicta eaque cum error,
          sequi architecto excepturi quod illo quae porro, exercitationem unde
          inventore amet nisi laudantium expedita cumque reiciendis aperiam.
          Magnam temporibus sit consequuntur laudantium dolorem aperiam
          reiciendis libero eius tempore possimus omnis, veritatis tenetur
          eveniet minus labore cumque corporis recusandae velit laboriosam
          soluta totam beatae. Esse magni repudiandae blanditiis nostrum dolor
          tenetur, cumque quo ipsum.
        </p>
      </div>
    </div>
  );
};

export default Problem2;
