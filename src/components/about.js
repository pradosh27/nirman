import React, { useEffect } from 'react';
import './about.css';

const About = () => {
  useEffect(() => {
    const foot = document.querySelectorAll('footer > .foot > a > i');

    foot.forEach((e) =>
      e.addEventListener('mouseover', () => {
        e.classList.add('fa-shake');
      })
    );

    foot.forEach((e) =>
      e.addEventListener('mouseout', () => {
        e.classList.remove('fa-shake');
      })
    );
  }, []);

  return (
    <>
      <div className="containers">
        <section className="abouts">
          <div className="about-images">
            <img src="./Colingo2.jpeg" alt="" />
          </div>
          <div className="about-contents">
            <h2>Get New Jobs!!</h2>
            <div className="about-rights">
              <div className="about-right-contents">
                <div className="about-right-content-p1s">Rashan shop</div>
                <div className="about-right-content-p1s">Saloon shop</div>
                <div className="about-right-content-p1s">Sweet shop</div>
              </div>
              <div className="about-right-contents">
                <div className="about-right-content-p1s">Fast food</div>
                <div className="about-right-content-p1s">Restaurants</div>
                <div className="about-right-content-p1s">Jewelry Shop</div>
              </div>
              <div className="about-right-contents">
                <div className="about-right-content-p1s">Clothes store</div>
                <div className="about-right-content-p1s">Restaurants</div>
                <div className="about-right-content-p1s">Medical Store</div>
              </div>
            </div>
            <a href="#" className="read-mores">
              Explore
            </a>
          </div>
        </section>
      </div>

      <div className="containers" style={{ paddingTop: '100px' }}>
        <section className="abouts">
          <div className="about-contents">
            <h2>Let the right people know you’re open to work</h2>
            <div className="about-rights">
              With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.
            </div>
            <a href="#" className="read-mores">
              Explore
            </a>
          </div>

          <div className="about-images">
            <img src="../assets/Co-Lingo1.jpeg" alt="error" />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
