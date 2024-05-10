import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
// import {MarkazAbout} from '../../components/bimm-about/MarkazAbout'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bimm-about">
        <div className="container">
          <div className="bimm-about_main">
            <center>
              <h1>Markaz Xaqida</h1>
            </center>
          </div>
          <div className="bimm-about_contents">
            <ol>
              <li>
                <h4>
                  ﻿O‘zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar
                  vazirligi huzuridagi Oliy ta’lim tizimi pedagog va rahbar
                  kadrlarini qayta tayyorlash va ularning malakasini oshirishni
                  tashkil etish Bosh ilmiy-metodik markazi O‘zbekiston
                  Respublikasi Vazirlar Mahkamasining 2012 yil 26 sentyabrdagi
                  “Oliy ta’lim m uassasalari pedagog kadrlarini qayta tayyorlash
                  va ularning malakasini oshirish tizimini yanada
                  takomillashtirish chora-tadbirlari to‘g‘risida”gi 278-son
                  qarori bilan tashkil etilgan.
                </h4>
              </li>
              <li>
                <p>
                  <b>Bosh ilmiy-metodik markazning maqsadi</b> – oliy ta’lim
                  tizimi pedagog va rahbar kadrlarini qayta tayyorlash va
                  malakasini oshirish jarayonlari sifatini takomillashtirish va
                  monitoringini olib borish, ularni me’yoriy va metodik
                  ta’minotini amalga oshirish, qayta tayyorlash va malaka
                  oshirish jarayonlariga zamonaviy pedagogik va
                  axborot-kommunikatsiya texnologiyalarini keng joriy etilishini
                  tashkillashtirishdan iborat.{" "}
                </p>
              </li>
              <li>
                <p>
                  <b>
                    Bosh ilmiy-metodik markazning asosiy vazifalari
                    quyidagilardan iborat:{" "}
                  </b>
                </p>
              </li>
              <li>
                - professor-o‘qituvchilar tarkibining kasbiy tayyorgarligi
                darajasi, ularning yuqori malakali kadrlarni tayyorlash talab
                qilinadigan darajasini ta’minlash bo‘yicha ish natijalari hamda
                ilg‘or xalqaro pedagogik tajribani o‘rganish asosida, zamonaviy
                metodikalardan foydalangan holda oliy ta’lim muassasalari
                pedagog kadrlarini qayta tayyorlash va ularning malakasini
                oshirish bo‘yicha o‘quv reja va dasturlari, o‘quv-metodik va
                me’yoriy hujjatlarni ishlab chiqish;
              </li>
              <li>
                - tegishli ta’lim fanlari bo‘yicha o‘quv dasturlari mazmunini
                takomillashtirishni, ta’limni ishlab chiqarish bilan
                integratsiyalashni ta’minlash maqsadida iqtisodiyotning turli
                tarmoqlari bo‘yicha mamlakatimizning ilg‘or zamonaviy uskunalar
                va texnologiyalar bilan jihozlangan korxonalar bilan hamkorlik
                qilish hamda ulardan pedagoglarni qayta tayyorlash va ularning
                malakasini oshirish uchun bazaviy ob’yektlar sifatida
                foydalanish bo‘yicha dasturlar ishlab chiqish;{" "}
              </li>
              <li>
                - malaka oshirishning ta’lim jarayoni sifati va natijalarini
                tizimli tahlil qilish, monitoringini olib borish, pedagoglarning
                zamonaviy talablarga muvofiq oliy ta’lim sifatini ta’minlash
                uchun zarur bo‘lgan kasbiy ko‘nikmalari va layoqatlari
                rivojlanishining o‘zgarishini baholab borish;
              </li>
              <li>
                - bazaviy oliy ta’lim muassasalari bilan birgalikda ilg‘or
                xorijiy tajribani hisobga olgan holda chet tillari va zamonaviy
                axborot-kommunikatsiya texnologiyalarini o‘qitish bo‘yicha
                o‘quv-metodik materiallar tayyorlanishi va samarali metodikalar
                ishlab chiqilishini ta’minlash, mazkur yo‘nalishlar bo‘yicha
                mintaqaviy va tarmoq markazlarida seminar-treninglar tashkil
                qilish;
              </li>
              <li>
                - pedagoglarni zamonaviy ilm-fan yutuqlari, tegishli
                mutaxassisliklar bo‘yicha ilm-fanni rivojlantirishning ustuvor
                yo‘nalishlari, ilmiy eksperimentlar, ilmiy tadqiqotlar
                o‘tkazishning samarali metodlari bilan tanishtirish maqsadida
                ilmiy-tadqiqot muassasalari (Fanlar Akademiyasining ilmiy
                muassasalari, tarmoq ilmiy- tadqiqot institutlari, markazlari,
                laboratoriyalari va shu kabilar) bilan hamkorlik qilish,
                tegishli ta’lim fanlari bo‘yicha o‘quv dasturlari mazmunini
                takomillashtirish, ta’limni ishlab chiqarish bilan
                integratsiyalashni ta’minlash borasida iqtisodiyot sohalarining
                ilg‘or zamonaviy uskunalar va texnologiyalar bilan jihozlangan
                korxonalaridan pedagoglarni qayta tayyorlash va ularning
                malakasini oshirish uchun bazaviy ob’yektlar sifatida
                foydalanish dasturlarini ishlab chiqish;
              </li>
              <li>
                - mintaqaviy va tarmoq markazlari faoliyatini muvofiqlashtirish,
                oliy ta’lim muassasalarining rahbar xodimlari (rektor,
                prorektor, dekan va bo‘lim boshliqlari) malakasini oshirish
                kurslarini tashkil qilish va o‘tkazish.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
