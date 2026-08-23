import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "lbShieldEditor",
    category: "Plugin — ücretsiz · tamamlandı",
    tools: "Java, Paper, GUI editörü, undo/redo",
    image: "/images/work-shield-editor.svg",
  },
  {
    name: "lbDailyRewards",
    category: "Plugin — ücretsiz · tamamlandı",
    tools: "Java, günlük ödül döngüsü, GUI takvim",
    image: "/images/work-daily-rewards.svg",
  },
  {
    name: "lbRainbow",
    category: "Plugin — ücretsiz · tamamlandı",
    tools: "Java, Paper, renk döngüleri",
    image: "/images/work-rainbow.svg",
  },
  {
    name: "lbMeteorEvents",
    category: "Plugin — tamamlandı",
    tools: "Java, event engine, krater & loot sistemi",
    image: "/images/work-meteor-events.svg",
  },
  {
    name: "lbWebShop",
    category: "Web — yapılıyor",
    tools: "Web mağaza, ödeme entegrasyonu, panel",
    image: "/images/work-webshop.svg",
  },
  {
    name: "Sunucu Paketleri",
    category: "BoxPvP · SkyBlock · Towny · Survival",
    tools: "Sıfırdan tasarım, ekonomi, özel menüler",
    image: "/images/work-server-packages.svg",
  },
];

const Work = () => {
  useGSAP(() => {
    // Yatay kaydırma mesafesini ölç. Pin aktifken .work-section inline
    // 0x0 boyut alır, o yüzden ölçümü yalnızca tetikleyici kurulmadan
    // önce bir kez yapıyoruz; sonrasında bu değer sabit kalır.
    let distance = 0;
    function measure() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!boxes.length || !container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      if (!rect.width) return;
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding =
        parseInt(window.getComputedStyle(boxes[0]).padding) / 2 || 0;
      distance = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    // ScrollSmoother loader bitene kadar paused durumda; pin'i daha erken
    // kurmak 0x0 ölçümüne yol açıyordu. Smoother hazır olana kadar bekle.
    const isReady = () => {
      const smoother = ScrollSmoother.get();
      return !!smoother && !smoother.paused();
    };

    let timeline: gsap.core.Timeline | null = null;
    let pollTimer: number | undefined;
    let imageTimer: number | undefined;

    const build = () => {
      if (timeline || window.innerWidth <= 1024) return;
      measure();
      if (distance <= 0) return;
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${distance}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          id: "work",
        },
      });
      timeline.to(".work-flex", {
        x: -distance,
        ease: "none",
      });
      // Görseller yüklendikten sonra bir kez daha tazele
      imageTimer = window.setTimeout(() => ScrollTrigger.refresh(), 900);
    };

    if (isReady()) {
      build();
    } else {
      pollTimer = window.setInterval(() => {
        if (isReady()) {
          window.clearInterval(pollTimer);
          pollTimer = undefined;
          build();
        }
      }, 120);
    }

    return () => {
      if (pollTimer) window.clearInterval(pollTimer);
      if (imageTimer) window.clearTimeout(imageTimer);
      timeline?.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Benim <span>İşlerim</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Araçlar ve özellikler</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
