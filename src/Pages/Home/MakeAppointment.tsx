import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppoinment = () => {
  return (
    <section className="flex">
      <div>
        <img src={doctor} alt="" />
      </div>
      <div>
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl">Make an Appoinment Today</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non
          neque accusantium debitis numquam dicta fugit inventore voluptate qui
          quisquam amet vero tempora quo ullam necessitatibus quas culpa sequi
          minima aspernatur laboriosam commodi velit, delectus magni ab. Eos,
          quae optio!
        </p>
      </div>
    </section>
  );
};

export default MakeAppoinment;
