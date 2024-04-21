import CallToAction from "@/components/CallToAction";
import Qualification from "/src/components/Qualification";
import Why from "/src/components/Why";

export default function Home() {
  return (
    <main>
      <div className="cta-parent-grid">
        <div className="cta-text">
          <div className="cta-text-small">
            <p>Ready to transform</p>
            <p>your life into</p>
            <p>something <span className="bold">better?</span></p>
          </div>
          <div className="cta-text-large">
            <p>Ready to transform your life</p>
            <p>into something <span className="bold">better?</span></p>
          </div>
        </div>
        <picture className="cta-field-picture">
          <source media="(min-width:1056px)" srcSet="/field-large.jpg" />
          <source media="(min-width:600px)" srcSet="/field-medium.jpg" />
          <img src="/field-small.jpg" alt="Photo of a field" title="Photo by Hayden Scott on Unsplash at https://unsplash.com/photos/field-during-golden-hour-43NH8q0QNMo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" />  
        </picture>
        <div className="cta-grid">
          <CallToAction 
            iconCode="fa-regular fa-calendar-days"
            title="Ready to meet with a life coach?"
            button="Schedule a session"
            link="https://everydaybetterandbetter.as.me/"
          />
          <CallToAction 
            iconCode="fa-solid fa-book"
            title="Not ready for coaching?"
            button="Find solutions"
          />
          <CallToAction 
            iconCode="fa-solid fa-pen-nib"
            title="Looking for more helpful insights?"
            button="Trudy's blog"
          />
        </div>
      </div>
      <section className="about-me">
        <div className="about-me-color-block">
          <h2 className="light-icon">Hi, I'm Trudy Johnson!</h2>
          <img
            src="/trudy-johnson-pink.jpg"
            alt="Picture of Trudy Johnson"
          />
        </div>
        <p>I specialize in teaching people how to overcome adversity, gain new perspectives, create a new story, solve problems, identify self-sabotaging thoughts and behaviors, and exercise self-mastery principles and techniques.</p>
        <p>Other titles that might resonate with you would be: Life Empowerment Coach, Spiritual Health Coach, Transformational Coach, Thought Coach, or Happiness Coach. If this is what you're hoping to achieve, then I might be the right coach for you.</p>
        <p>I am a wife and mother of four wonderful human beings, three darling grandchildren, and one crazy little dog. They have been my greatest teachers and represent the best parts of me. Our lives have been filled with highs, lows, and everything in between, and it has been a meaningful journey."</p>
        <button className="btn btn-navy">Contact Me</button>
      </section>
      <div className="qual-picture-grid">
        <div className="qual-grid">
          {/* development since 1990 */}
          <Qualification 
            number="1990"
            content="Years of Personal Development"
            doesIncrement="true"
          />
          {/* studying since 2006 */}
          <Qualification 
            number="2006"
            content="Years Studying Light Work"
            doesIncrement="true"
          />
          {/* coaching since 2009 */}
          <Qualification 
            number="2009"
            content="Years Coaching"
            doesIncrement="true"
          />
          <Qualification 
            number="6"
            content="Healing Modalities"
            doesIncrement="false"
          />
        </div>
        <picture className="qual-field-picture">
          <source media="(min-width:1000px)" srcSet="/field2-large.jpg" />
          <source media="(min-width:600px)" srcSet="/field2-medium.jpg" />
          <img src="/field2-small.jpg" alt="Photo of a field of flowers" title="Photo by Andreas Kretschmer on Unsplash at https://unsplash.com/photos/white-flowers-in-tilt-shift-lens-zUytXs3fusw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" />
        </picture>
      </div>
      <div className="why-container">
        <h2 className="why-heading">Why Life Coaching?</h2>
        <div className="why-grid">
          <Why
            iconCode="fa-regular fa-lightbulb"
            title="GREATER CLARITY"
            content="A coach can help you define your core values, determine what you really want, create a vision for your future, and set goals that are in alignment with your values and vision."
          />
          <Why
            iconCode="fa-solid fa-handshake-simple"
            title="ACCOUNTABILITY"
            content="A coach can identify obstacles and hidden saboteurs, guide you in releasing or overcoming them, help you see options and possibilities, and assist you in strategizing."
          />
          <Why
            iconCode="fa-solid fa-unlock"
            title="UNLOCK YOUR POTENTIAL"
            content="A coach can empower you with knowledge, inspire you to take action, motivate you to stretch and grow, encourage you to stay the course, and celebrate your wins."
          />
          <Why
            iconCode="fa-solid fa-child-reaching"
            title="EMPOWERMENT"
            content="A coach can empower you to take ownership of your life, instill confidence in your abilities, help you overcome self-doubt, provide helpful feedback, and monitor your progress."
          />
        </div>
      </div>
    </main>
  );
}
