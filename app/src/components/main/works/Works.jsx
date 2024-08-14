import Image from "next/image";

const Works = () => {
  return (
    <section className="works">
      <h2>How it works.</h2>
      <div className="cardWrapper">
        <div className="call">
          <Image
            src="/public/how-it-works-1.png"
            alt="Picture of a fireplace"
            width="500"
            height="500"
            className="sectionImg"
          />
          <h3>Give us a call</h3>
          <p>
            Call us and book in a &rsquo;Design Consultation&rsquo; on a date
            and time to suit you.
          </p>
        </div>

        <div className="weCome">
          <Image
            src="/public/how-it-works-2.png"
            alt="woman by desk"
            width="500"
            height="500"
            className="sectionImg"
          />
          <h3>We come to you...</h3>
          <p>
            We come to your home to do an assessment of the space and to your
            preference.
          </p>
        </div>

        <div className="recommend">
          <Image
            src="/public/how-it-works-3.png"
            alt="woman by desk"
            width="500"
            height="500"
            className="sectionImg"
          />
          <h3>We recommend...</h3>
          <p>We send you a bespoke set of fireplace recommendations.</p>
        </div>
      </div>
    </section>
  );
};

export default Works;
