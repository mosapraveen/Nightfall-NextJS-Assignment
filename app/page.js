"use client";

import { useState } from "react";

const products = [
  {
    name: "Moonlight Mint",
    desc: "Cool peppermint, lavender and a soft vanilla finish.",
    price: "$24",
    tag: "Most calming",
  },
  {
    name: "Midnight Berry",
    desc: "Wild berries, hibiscus and chamomile with a silky finish.",
    price: "$26",
    tag: "Best seller",
  },
  {
    name: "Quiet Citrus",
    desc: "Lemon balm, orange blossom and honeybush for a gentle wind-down.",
    price: "$22",
    tag: "Fresh & light",
  },
];

export default function Home() {
  const [selected, setSelected] = useState("Midnight Berry");
  const [message, setMessage] = useState("");

  function addToCart(name) {
    setSelected(name);
    setMessage(`${name} added to your night ritual.`);
    setTimeout(() => setMessage(""), 2500);
  }

  return (
    <main>
      <div className="announcement">FREE SHIPPING ON 2+ TINS · YOUR NIGHT STARTS HERE</div>

      <nav className="nav container">
        <a className="brand" href="#top" aria-label="Nightfall home">
          <span className="brandMark">RB</span>
          <span>NIGHTFALL</span>
        </a>
        <div className="navLinks">
          <a href="#blend">The blend</a>
          <a href="#ritual">The ritual</a>
          <a href="#shop">Shop</a>
        </div>
        <a className="navButton" href="#shop">Shop tea <span>↗</span></a>
      </nav>

      <section className="hero container" id="top">
        <div className="heroCopy">
          <div className="eyebrow"><span className="dot" /> RED BULL, REIMAGINED</div>
          <h1>Give your <em>night</em> wings.</h1>
          <p className="heroLead">
            The world’s most famous energy brand takes a hard left turn:
            a premium botanical tea designed for the beautiful art of doing less.
          </p>
          <div className="heroActions">
            <a className="primary" href="#shop">Find your calm <span>→</span></a>
            <a className="textLink" href="#blend">Explore the blend <span>↓</span></a>
          </div>
          <div className="trust">
            <span>✦</span> Caffeine-free · 100% botanical · No artificial flavors
          </div>
        </div>

        <div className="heroVisual" aria-label="Nightfall tea product">
          <div className="moon moonOne" />
          <div className="moon moonTwo" />
          <div className="stars">✦　·　✦　　·　　✦</div>
          <div className="canShadow" />
          <div className="can">
            <div className="canTop">NIGHTFALL</div>
            <div className="canLogo">RB</div>
            <div className="canLine" />
            <div className="canName">MIDNIGHT<br />BERRY</div>
            <div className="canBottom">BOTANICAL NIGHT TEA</div>
          </div>
          <div className="orbit orbitA" />
          <div className="orbit orbitB" />
          <div className="floatingNote noteA">SLEEP<br /><strong>DEEPER</strong></div>
          <div className="floatingNote noteB">0mg<br /><strong>CAFFEINE</strong></div>
        </div>
      </section>

      <section className="marquee">
        <div>LESS RUSH · MORE HUSH · LESS RUSH · MORE HUSH · LESS RUSH · MORE HUSH ·</div>
      </section>

      <section className="story container" id="blend">
        <div className="sectionLabel">01 / THE OPPOSITE</div>
        <div className="storyGrid">
          <div>
            <h2>From <span>“go”</span> to<br />“slow.”</h2>
          </div>
          <div>
            <p className="bigText">
              Red Bull built a culture around speed, adrenaline and staying switched on.
              Nightfall keeps the unmistakable attitude — then flips the mission completely.
            </p>
            <p>
              Same rebellious spirit. New destination. Three carefully balanced botanicals,
              zero caffeine, and a ritual that asks you to put your phone down before the world does.
            </p>
          </div>
        </div>
      </section>

      <section className="ritualSection" id="ritual">
        <div className="container">
          <div className="sectionLabel light">02 / THE NIGHTFALL RITUAL</div>
          <h2 className="lightTitle">Three minutes.<br /><em>One quieter you.</em></h2>
          <div className="steps">
            {[
              ["01", "Boil", "Bring the water to a gentle simmer. No rush."],
              ["02", "Steep", "Let the botanicals bloom for 4–5 minutes."],
              ["03", "Unplug", "Sip slowly. Screen down. Lights low."],
            ].map(([num, title, text]) => (
              <div className="step" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shop container" id="shop">
        <div className="sectionHeader">
          <div>
            <div className="sectionLabel">03 / PICK YOUR NIGHT</div>
            <h2>Find your off switch.</h2>
          </div>
          <p>Small-batch botanical blends made for the last hour of your day.</p>
        </div>

        <div className="productGrid">
          {products.map((product) => (
            <article className={`productCard ${selected === product.name ? "selected" : ""}`} key={product.name}>
              <div className="productVisual">
                <div className="miniCan">
                  <span>RB</span>
                  <small>NIGHTFALL</small>
                  <b>{product.name.toUpperCase()}</b>
                  <i>BOTANICAL TEA</i>
                </div>
                <span className="tag">{product.tag}</span>
              </div>
              <div className="productInfo">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                </div>
                <div className="buyRow">
                  <strong>{product.price}</strong>
                  <button onClick={() => addToCart(product.name)}>Add to ritual +</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote">
        <div className="container quoteInner">
          <div className="quoteMark">“</div>
          <blockquote>We made a tea for the people who are done<br />trying to outrun tomorrow.</blockquote>
          <span>— NIGHTFALL, A CONCEPTUAL REIMAGINING</span>
        </div>
      </section>

      <section className="final container">
        <div>
          <div className="eyebrow"><span className="dot" /> TONIGHT, CHOOSE SLOW</div>
          <h2>Your energy<br /><em>can wait.</em></h2>
        </div>
        <a className="primary dark" href="#shop">Shop Nightfall <span>→</span></a>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="brand"><span className="brandMark">RB</span><span>NIGHTFALL</span></div>
          <p>Concept project · Red Bull reimagined as a premium nighttime tea.</p>
          <span>© 2026</span>
        </div>
      </footer>

      {message && <div className="toast">{message} ✓</div>}
    </main>
  );
}