import Image from "next/image";
import imageOne from "/app/src/images/how-it-works-1.png";
import imageTwo from "/app/src/images/how-it-works-2.png";
import imageThree from "/app/src/images/how-it-works-3.png";

const Works = () => {
  return (
    <section className="works">
      <h2>How it works.</h2>
      <div className="cardWrapper">
        <div className="call">
          <Image
            src={imageOne}
            alt="Picture of a fireplace"
            className="sectionImg"
          />
          <h3>Give us a call</h3>
          <p>
            Call us and book in a &rsquo;Design Consultation&rsquo; on a date
            and time to suit you.
          </p>
        </div>

        <div className="weCome">
          <Image src={imageTwo} alt="woman by desk" className="sectionImg" />
          <h3>We come to you...</h3>
          <p>
            We come to your home to do an assessment of the space and to your
            preference.
          </p>
        </div>

        <div className="recommend">
          <Image src={imageThree} alt="woman by desk" className="sectionImg" />
          <h3>We recommend...</h3>
          <p>We send you a bespoke set of fireplace recommendations.</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
