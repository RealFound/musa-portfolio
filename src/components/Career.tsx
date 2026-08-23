import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Kariyerim <span>&</span>
          <br /> Deneyimim
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Minecraft Developer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              BoxPvP, BoxMining, Towny, SkyBlock, UltraSkyBlock, EmekSkyBlock
              ve Survival sunucu paketlerini sıfırdan, kimseden yardım almadan
              tasarlayıp geliştirdim.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Plugin Developer</h4>
                <h5>LBDev</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Profesyonel lb serisi pluginler: lbShieldEditor, lbDailyRewards,
              lbRainbow, lbMeteorEvents — yakında LBDev sitesinde
              yayınlanacak.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aktif Geliştirici</h4>
                <h5>LBDev + Oxelath</h5>
              </div>
              <h3>ŞİMDİ</h3>
            </div>
            <p>
              Şu an aktif olarak LBDev'de geliştirme yapıyor, Oxelath'ta
              (Hosting Telekom'ın yeni adı) çalışıyorum. lbWebShop üzerinde
              geliştirmeler devam ediyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
