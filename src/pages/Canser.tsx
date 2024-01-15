// Canser.jsx

import React from "react";
import ConsertBox from "../components/ConsertBox";

function Canser() {
  return (
    <div>
      <div className="concert-container">

        <ConsertBox  date="20 NİSAN" destriptions="Etkinlik Hakkında Bilmeniz Gerekenler
8 yaşından küçük çocuklar etkinliğe alınmamaktadır.

8 yaş ve üzeri bilete tabidir.

Etkinlik girişinde bilet kontrolü yapılacaktır, biletinizi telefondan göstermeniz gerekmektedir." img="edis.png" title="EDİS"/>
              
        <div className="concert-box">
          <h2>EMİR CAN İĞREK KONSERİ</h2>
          <p>
          Sevilen sanatçı EMİR CAN İĞREK çok yakında sevenleriyle buluşmaya hazırlanıyor
          </p>
          <img src="emircan.jpg" alt="Konser Afişi 1" />
        </div>
        <div className="concert-box">
          <h2>Konser Başlığı 3</h2>
          <p>
            Konser Bilgileri 3: Buraya konser ile ilgili bilgileri ekleyebilirsiniz.
          </p>
          <img src="afis1.jpg" alt="Konser Afişi 1" />
        </div>

        <div className="concert-box">
          <h2>Konser Başlığı 4</h2>
          <p>
            Konser Bilgileri 4: Buraya konser ile ilgili bilgileri ekleyebilirsiniz.
          </p>
          <img src="afis2.jpg" alt="Konser Afişi 2" />
        </div>
      </div>
    </div>
  );
}

export default Canser;
