import Image from "next/image";

const Founderworks = () => {
  return (
    <section className="works">
      <div className="cardWrapper">

        <div className="call">
        <h3>Our craftmanship</h3>
      <p>Mike and Mandy studied and honed their craft under the fireplace msensei Vik Von Blaze. 
        Nothing gets delivered to a customer without their sign-off.</p>
          <Image
            src="/founders-1.png"
            alt="Old man hones carpentry skills"
            width={500}
            height={500}
            className="sectionImg"
          />
         </div>

        <div className="weCome">
        <h3>Our experience</h3>
      <p>Numbers don't lie - we've been around for 20+ years
         and have a long list of happy customers who gladly recommend us.</p>
          <Image
            src="/founders-2.png"
            alt="man shaving down object"
            width={500}
            height={500}
            className="sectionImg"
          />
        </div>

        <div className="recommend">
        <h3>Our guarantee</h3>
      <p>If you're not 100% satisfied, we will fully refund your purchase. 
        Also, we offer free repairs for the first 20 years of ownership. Find that somewhere else!</p>
          <Image
            src="/founders-3.png"
            alt="woman sanding wooden board"
            width={500}
            height={500}
            className="sectionImg"
          />
          </div>
      </div>
    </section>
  );
};

export default Founderworks;