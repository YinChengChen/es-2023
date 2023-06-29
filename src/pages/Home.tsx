export default function Home() {
  return (
    <section id="home" className="d-md-flex fullscreen-md">
      <div className="overlay">
        <div className="overlay-inner bg-image-holder bg-cover bg-bottom-left">
          <img src="./demo/images/image-3.jpg" alt="background" />
        </div>
        <div
          className="overlay-inner opacity-85"
          data-gradient-bg="[['#3c55e6','#007bff'],['#02AAB0','#00CDAC'],['#DA22FF','#007bff']]"
        ></div>
      </div>
      <div className="container align-self-md-center text-center">
        <div
          className="countdown text-white mb-5 mx-auto"
          data-countdown="2020/10/13 12:00:00"
        ></div>
        <h2 className="text-white mb-5">
          Our website is under construction. We`ll be here soon with our new
          awesome site.
        </h2>
        <a href="#our-mission" className="btn btn-white btn-norounded scrollto">
          Learn more
        </a>
        <a
          href="#subscribe"
          className="btn btn-outline-white btn-norounded scrollto"
        >
          Subscribe
        </a>
      </div>
    </section>
  );
}
