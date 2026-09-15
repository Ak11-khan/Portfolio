import { MdStarRate } from "react-icons/md";
import style from "./Profile.module.css";
import React from "react";

const Profile = () => {
  return (
    <section className={style.testimonial} id="testimonial">
      <div className={style.testimonialCard}>
        <h1 className="text-purple-lightPurple lg:text-3xl text-2xl font-semibold">
          Testimonial{" "}
        </h1>
        <p className="text-white lg:text-lg text-base mt-2 mb-8">
        Hear what others have to say about my work.
        </p>
        <a href="https://docs.google.com/forms/d/1W4mGMSk3kHayF1iHij0Yt9whBS375Y0E4kgPwyhvDik/edit" target="_blank" rel="noopener noreferrer">
    <button className="bg-beige-600 rounded-full px-2 py-1">Feedback</button>
</a>
</div>
<div>
        <div className={style.wrapper}>
          <div className={style.testimonialItem}>
            <img src="./images/dummy-man.png" alt="image" />
            <h2>Donald Childress</h2>
            <div className={style.rating}>
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </div>
            <p>
              "A software developer specializing in front-end and full-stack development. She optimizes web pages and point-of-sale systems, boosting efficiency and team productivity while enhancing customer satisfaction"
            </p>
          </div>

          <div className={style.testimonialItem}>
            <img src="./images/dummy-women.png" alt="image" />
            <h2>Easty</h2>
            <div className={style.rating}>
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </div>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              fuga itaque nesciunt laboriosam ea perspiciatis dicta beatae
              eligendi in. Autem, reiciendis distinctio"
            </p>
          </div>

          <div className={style.testimonialItem}>
            <img src="./images/dummy-women.png" alt="image" />
            <h2>Easty</h2>
            <div className={style.rating}>
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut fuga
              itaque nesciunt laboriosam ea perspiciatis dicta beatae eligendi
              in. Autem, reiciendis distinctio.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Profile;
