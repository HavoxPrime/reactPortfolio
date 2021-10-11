import React from "react";

export const Home = () => {
  return (
    <div>
      <header>
        <h2 id="forNav">Storm Morzos Portfolio</h2>
        <nav>
          <ul>
            <li>
              <a href="#aboutMe">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </header>

      <h1>Welcome!</h1>
      <article id="aboutMe">
        <h2>About Me</h2>
        <p>
          Hello and welcome! My name is Storm Morzos and this is my portfolio
          page. It is fortunate that this town has such a talented smith. The
          quality of Larzuk's work surely complements your skills. In fact, he
          would have been quite welcome among the Horadrim.The appearance of the
          mage you describe sounds like one I met back in Tristram. Many
          Vizjerei came to fight against Diablo, the Lord of Terror. Perhaps,
          this is one of them. You know, fate seems to have frowned upon all of
          the heroes who confronted that terrible Evil. Take care or the same
          may happen to you.It is clear that Andariel is acting on behalf of
          Diablo to prevent anyone from following him eastward. Her defeat would
          allow you to continue the pursuit. Ancient lore has it that while
          Andariel was spawned in the Burning Hells, she is not fond of
          fire.During my time with the Horadrim, we often debated the nature of
          Mount Arreat. We knew that the Barbarian clans zealously guarded the
          mountain as their sacred duty. However, many dismissed their zeal as
          simple superstition...combined with an inborn hostility toward
          outsiders. Those Horadrim who trekked up Arreat were never heard from
          again...Still, I do not believe they died at the hands of the
          Barbarians.
        </p>
      </article>
      <h2>Projects</h2>
      <section id="projects" class="mainBox">
        <article
          class="proBox"
          id="pro1"
          data-link="https://havoxprime.github.io/cocktailAndFood/"
        >
          1 Cocktail and Food.
        </article>
        <article
          class="proBox"
          id="pro2"
          data-link="https://project2-nfty.herokuapp.com"
        >
          2 NFTy
        </article>
        <article
          class="proBox"
          id="pro3"
          data-link="https://inventory-management-system-0.herokuapp.com/"
        >
          3 IMS
        </article>
        <article class="proBox" id="pro4">
          4 To be added later.
        </article>
      </section>
      <footer>
        <section class="dafoot">
          <a href="https://github.com/HavoxPrime?tab=repositories">github</a>
          <a href="https://www.linkedin.com/in/storm-morzos-vp866/">linkedin</a>
        </section>
      </footer>
    </div>
  );
};

export default Home;
