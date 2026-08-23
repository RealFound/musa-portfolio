import "./styles/Reviews.css";

const reviews = [
  {
    text: "Musa hocam çok güzel bir paket yaptı. Ardıl hocam, uğur hocam ve project sahibi can hocamada buradan teşekkürler. Hizmetleri harika tercihiniz burası olsun.",
    name: "@hali",
    role: "Sakura Network · SMP + Lobi Paketi",
    date: "",
  },
  {
    text: "@Musa | Minecraft beye teşekkür ederim istediğim istemediğim şeyleri ekleyip düzeltti her konuda yardımcı oldu tekrardan teşekkür ederim <<3",
    name: "grave",
    role: "UltraOpSkyblock",
    date: "20.07.2026",
  },
  {
    text: "Sınav haftaları olmalarina rağmen kiymetli vakitlerini bizim paketimizi yapmak icin ayirip uğraştıklari için teşekkür ediyorum. Samimiyetlerinden çok memnun kaldik, fiyattada çok yardimci oldular. Emek skyblock paketi yaptirdik, yapim aşamalarinda bize gösterdiler her adımı, isteğimize göre yaptılar. Herkese tavsiye ederim on numara.",
    name: "invincible",
    role: "Emek Skyblock · Towny",
    date: "12.11.2025",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-section section-container" id="reviews">
      <h2>Müşteri Yorumları</h2>
      <p className="reviews-note">
        Çalıştığım kişilerden gelen gerçek geri bildirimler.
      </p>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-stars" aria-hidden="true">
              ★★★★★
            </div>
            <p>"{review.text}"</p>
            <footer>
              {review.name}
              <span>
                {review.role}
                {review.date ? ` · ${review.date}` : ""}
              </span>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
