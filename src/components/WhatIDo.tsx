import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          NELER
          <div>
            YAPI<span className="do-h2">YORUM</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>GELİŞTİRME</h3>
              <h4>Açıklama</h4>
              <p>
                Minecraft pluginleri, plugin paketleri, Discord botları ve web
                siteleri geliştiriyorum. Sıfırdan, kimseden yardım almadan:
                temiz kod, config dosyası ve kalıcı veri mimarisiyle teslim.
              </p>
              <h5>Yetenekler &amp; araçlar</h5>
              <div className="what-content-flex">
                <div className="what-tags">Java</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">React</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">Nuxt.js</div>
                <div className="what-tags">Discord.js</div>
                <div className="what-tags">HTML / CSS</div>
                <div className="what-tags">Git</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>PLUGIN PAKETLERİ</h3>
              <h4>Açıklama</h4>
              <p>
                Her türde sunucu paketini sıfırdan kendim tasarlıyorum:
                sistemler, ekonomi dengesi, özel menüler ve oyuncu tutma
                mekanikleri. Paketi alırsın — çalışır.
              </p>
              <h5>Yetenekler &amp; araçlar</h5>
              <div className="what-content-flex">
                <div className="what-tags">BoxPvP</div>
                <div className="what-tags">BoxMining</div>
                <div className="what-tags">SkyBlock</div>
                <div className="what-tags">UltraSkyBlock</div>
                <div className="what-tags">EmekSkyBlock</div>
                <div className="what-tags">Towny</div>
                <div className="what-tags">Survival</div>
                <div className="what-tags">Sıfırdan Tasarım</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
