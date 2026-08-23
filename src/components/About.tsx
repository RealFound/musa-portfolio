import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">Hakkımda</h3>
        <p className="para">
          Selam, ben Musa. 2 yıldır Minecraft geliştiriciliği yapıyorum:
          plugin, plugin paketi, Discord botu ve web sitesi geliştiriyorum.
          BoxPvP'ten Survival'a kadar her türde sunucu paketini sıfırdan,
          kimseden yardım almadan kendim tasarlayıp kodluyorum. Şu an aktif
          olarak LBDev ve Oxelath'ta (eski adıyla Hosting Telekom)
          çalışıyorum. Her gün, her saat — gece 03:00'te bile ürün
          geliştirmeye müsaitim.
        </p>
      </div>
    </div>
  );
};

export default About;
