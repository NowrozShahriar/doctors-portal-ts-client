import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../../components/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      className="mt-36"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="flex-col p-0 hero-content lg:flex-row">
          <img
            src={doctor}
            alt=""
            className="hidden xl:-mt-24 lg:block lg:w-1/2"
          />
          <div className="my-12 lg:my-0 lg:w-1/2">
            <h3 className="mx-8 my-3 text-xl font-bold text-secondary">
              Appointment
            </h3>
            <h2 className="mx-8 my-3 text-4xl font-semibold text-white ">
              Make an Appoinment Today
            </h2>
            <p className="mx-8 my-3 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non
              neque accusantium debitis numquam dicta fugit inventore voluptate
              qui quisquam amet vero tempora quo ullam necessitatibus quas culpa
              sequi minima aspernatur laboriosam commodi velit, delectus magni
              ab. Eos, quae optio!
            </p>
            <div className="mx-8 my-4">
              <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
