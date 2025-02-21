import React from "react";

function AboutMe() {
  return (
    <section
      id="about"
      className="pt-20 bg-gray-800 flex flex-col items-center"
    >
      <div className="w-4/5 max-w-4xl bg-gray-400/40 shadow-lg p-10 rounded-lg flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-1/3">
          <img
            src="/pfp.png"
            alt="Online profile picture"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <div className="w-2/3 text-white">
          <h2 className="text-3xl font-bold mb-4">Hi, I'm Ryan!</h2>
          <p className="text-lg">
            I'm a Computer Science student at the University of Maryland,
            minoring in Cybersecurity in the ACES Honors Program. I expect to
            graduate in Spring 2026.
          </p>
          <p className="mt-4 text-lg">
            I've always been fascinated by technology and security, and I love
            tackling challenges that involve problem-solving and reverse
            engineering. Whether it's working on cybersecurity challenges,
            developing applications, or exploring machine learning, I'm always
            looking for ways to expand my skill set.
          </p>
        </div>
      </div>
      <div className="w-4/5 max-w-4xl bg-gray-400/40 shadow-lg p-10 mt-10 rounded-lg text-white">
        <h3 className="text-2xl font-bold mb-4">More About Me</h3>
        <p className="text-lg">
          Currently, I'm an intern at Esri, working on ArcGIS Hub. I have
          experience in backend development, frontend development, and cloud
          infrastructure. In my free time, I enjoy working on side projects and
          experimenting with new technologies.
        </p>
        <p className="mt-4 text-lg">
          Outside of coding, I'm a huge D.C. sports fan—I love watching the
          Nationals and the Commanders. When the weather is nice, I enjoy
          golfing and playing intramural sports at my university. Most recently,
          I’ve picked up drawing and have been enjoying experimenting with
          different styles and seeing my progress.
        </p>
        <p className="mt-6 text-lg font-semibold">
          Thanks for stopping by my website! Feel free to connect with me
          through this site or any of my linked socials.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
