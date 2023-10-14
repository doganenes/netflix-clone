import React from "react";
import styled from "styled-components";
import NetflixLogo from "./Logonetflix.png";
import NetflixBackground from "./background.jpg";
import TelevisionImage from "./tv.png";
import VideoSource from "./video-tv-0819.mp4";
import TelevisionImage2 from "./devices.png";
import VideoSource2 from "./video-devices.mp4";

const mobile = "576px";
const tablet = "768px";
const desktop = "992px";
const largeDesktop = "1200px";

const HomePageContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContainer = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)),
    url(${NetflixBackground}) no-repeat center;
  background-size: cover;
  padding: 5rem 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomContainer = styled.div`
  background-color: black;
  padding: 5rem 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TelevisionContainer = styled.div`
  position: relative;
  width: 80vw;
  height: 60vw;

  &::before {
    content: "";
    background: url(${(props) => props.televisionImage}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 700px;
    height: 500px;
  }

  @media (min-width: ${desktop}) {
    width: 900px;
    height: 700px;
  }
`;

const InnerVideo = styled.video`
  width: 67%; // Televizyonun içine sığdırmak için
  height: 60%; // Televizyonun içine sığdırmak için
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${mobile}) {
    width: 80%;
    height: 70%;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    width: 70%;
    height: 62%;
  }
`;

const TelevisionContainer2 = styled(TelevisionContainer)`
  &::before {
    content: "";
    background: url(${(props) => props.televisionImage}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;
const InnerVideo2 = styled(InnerVideo)`
  width: 50%; // Televizyonun içine sığdırmak için
  height: 60%; // Televizyonun içine sığdırmak için
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: ${mobile}) {
    top: 40%;
  }

  @media (min-width: ${tablet}) and (max-width: ${desktop}) {
    top: 38%;
  }
`;

const Logo = styled.img`
  width: 60%;
  margin-bottom: 3rem;

  @media (min-width: ${tablet}) {
    width: 40%;
  }

  @media (min-width: ${desktop}) {
    width: 250px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (min-width: ${tablet}) {
    font-size: 4rem;
  }

  @media (min-width: ${desktop}) {
    font-size: 5rem;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // Genişlik arttırılarak daha geniş bir alanda gösterim sağlandı.
  margin-top: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  font-weight: 500;
  padding: 1.5rem 0; // Padding eklenerek yükseklik arttırılır.

  &:after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 0; // Sol kenardan başlaması için 0 değeri verildi.
    width: 100%; // Tam satırı kaplaması için %100 değeri verildi.
    height: 2px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:last-child:after {
    display: none;
  }

  @media (min-width: ${tablet}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${desktop}) {
    font-size: 1.5rem;
  }
`;

const HorizontalRule = styled.div`
  width: 100%; // Uzunluk ayarlaması yapıldı. İsteğe göre değiştirilebilir.
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5); // Renk ayarı yapıldı.
  margin: 2rem auto; // Otomatik merkezleme ve üstten-boşluk ayarı yapıldı.
`;

const EmailInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  width: 100%;
`;

const EmailInput = styled.input`
  padding: 1.2rem;
  border: 2px solid #e50914;
  border-radius: 4px;
  font-size: 1.3rem;
  width: 45%;
  margin-right: 0.8rem;
  @media (max-width: ${mobile}) {
    width: 70%;
  }

  @media (min-width: ${tablet}) {
    width: 50%;
  }

  @media (min-width: ${desktop}) {
    width: 45%;
  }
`;

const SubscribeButton = styled.button`
  padding: 1.2rem 2.5rem;
  border: none;
  background-color: #e50914;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.4rem;
  transition: background-color 0.2s;
  font-weight: bold;

  &:hover {
    background-color: #f5131e;
  }
`;

const FaqContainer = styled.div`
  width: 90%;
  margin-top: 2rem;
  @media (min-width: ${tablet}) {
    width: 80%;
  }

  @media (min-width: ${desktop}) {
    width: 70%;
  }
`;

const FaqItem = styled.div`
  margin-bottom: 1.5rem;
  cursor: pointer;

  & .btn-link {
    font-size: 1.3rem;

    @media (min-width: ${tablet}) {
      font-size: 1.4rem;
    }

    @media (min-width: ${desktop}) {
      font-size: 1.5rem;
    }
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #e50914;
    }
  }

  & .card-body {
    font-size: 1.3rem;
    padding: 1rem 2rem;
  }
`;

function AnaSayfa() {
  return (
    <HomePageContainer>
      <TopContainer>
        <Logo src={NetflixLogo} alt="Netflix Logo" />
        <Title>Herkes burada!</Title>
        <DescriptionContainer className="row">
          <Description className="col-md-12">
            Favori oyuncunuz, en yakın arkadaşınız, karşı komşunuz. Tabii
            filmin, dizinin ve belgeselin âlâsı da.
          </Description>
        </DescriptionContainer>
      </TopContainer>
      <BottomContainer>
        <DescriptionContainer className="row">
          {[
            {
              text: "Televizyonunuzda izleyin...",
              hasTelevision: true,
              televisionImage: TelevisionImage,
              videoSource: VideoSource,
              TelevisionContainerComponent: TelevisionContainer,
              InnerVideoComponent: InnerVideo
            },
            "Çevrimdışı izlemek için...",
            {
              text: "Istediğiniz her yerde izleyin...",
              hasTelevision: true,
              televisionImage: TelevisionImage2,
              videoSource: VideoSource2,
              TelevisionContainerComponent: TelevisionContainer2,
              InnerVideoComponent: InnerVideo2
            },
            "Çocuklarınız için profiller oluşturun..."
          ].map((item, index) => {
            if (typeof item === "object" && item.hasTelevision) {
              const TelevisionComp = item.TelevisionContainerComponent;
              const VideoComp = item.InnerVideoComponent;
              return (
                <Description className="col-12 col-md-10 col-lg-8 mx-auto">
                  {item.text}
                  <div className="row">
                    <div className="col-12 col-lg-6">
                      <TelevisionComp televisionImage={item.televisionImage}>
                        <VideoComp autoPlay loop muted>
                          <source src={item.videoSource} type="video/mp4" />
                        </VideoComp>
                      </TelevisionComp>
                    </div>
                  </div>
                </Description>
              );
            } else {
              return <Description key={index}>{item}</Description>;
            }
          })}
        </DescriptionContainer>

        <HorizontalRule />

        <FaqContainer>
          <FaqItem className="accordion" id="faqAccordion">
            <div className="card bg-transparent border-0">
              <div
                className="card-header bg-transparent border-0"
                id="headingOne"
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link text-white"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Netflix nedir?
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#faqAccordion"
              >
                <div className="card-body">
                  Netflix, film, dizi ve belgesel izleyebileceğiniz bir yayın
                  servisidir.
                </div>
              </div>
            </div>
            {/* Eklenen FAQ maddeleri */}
            {/* Diğer faq öğeleri buraya eklenebilir. */}
          </FaqItem>
        </FaqContainer>

        <EmailInputContainer className="row">
          <div className="col-md-8 col-sm-12">
            <EmailInput type="email" placeholder="E-posta adresi" />
          </div>
          <div className="col-md-4 col-sm-12">
            <SubscribeButton>Başlayın</SubscribeButton>
          </div>
        </EmailInputContainer>
      </BottomContainer>
    </HomePageContainer>
  );
}

export default AnaSayfa;
