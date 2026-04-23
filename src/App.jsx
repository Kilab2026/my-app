function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      backgroundColor:"#f7f9fc",
      padding:"40px"
    }}>

      <div style={{
        maxWidth:"1000px",
        margin:"auto"
      }}>

        {/* Hero */}
        <section style={{
          textAlign:"center",
          padding:"70px 20px"
        }}>
          <h1 style={{fontSize:"52px"}}>
            Kilab Abrechnung
          </h1>

          <p style={{
            fontSize:"22px",
            maxWidth:"700px",
            margin:"auto"
          }}>
            Digitale Abrechnungssoftware für effiziente,
            sichere und moderne Verwaltung.
          </p>

          <button style={{
            marginTop:"30px",
            padding:"18px 35px",
            fontSize:"20px",
            borderRadius:"12px",
            border:"none",
            cursor:"pointer"
          }}>
            30 Tage kostenlos testen
          </button>
        </section>


        {/* Funktionen */}
        <h2 style={{textAlign:"center"}}>
          Funktionen
        </h2>

        <div style={{
          display:"flex",
          gap:"25px",
          flexWrap:"wrap",
          justifyContent:"center",
          marginTop:"40px"
        }}>

          <div style={cardStyle}>
            <h3>Abrechnungsverwaltung</h3>
            <p>Rechnungen erstellen und verwalten.</p>
          </div>

          <div style={cardStyle}>
            <h3>Automatisierung</h3>
            <p>Prozesse vereinfachen und Zeit sparen.</p>
          </div>

          <div style={cardStyle}>
            <h3>Auswertungen</h3>
            <p>Berichte und Statistiken auf einen Blick.</p>
          </div>

        </div>


        {/* Preise */}
        <section style={{
          marginTop:"70px",
          textAlign:"center"
        }}>
          <h2>Preise</h2>

          <div style={{
            background:"white",
            padding:"35px",
            borderRadius:"20px",
            maxWidth:"450px",
            margin:"auto"
          }}>
            <h3>30 Tage kostenlos testen</h3>

            <p>Danach z.B. 29 € monatlich</p>
          </div>
        </section>


        {/* Kontakt */}
        <section style={{
          marginTop:"70px",
          textAlign:"center"
        }}>
          <h2>Kontakt</h2>

          <p>
            Nancy Krull<br/>
            Alltagsflitzer<br/>
            August-Bebel-Str. 24<br/>
            23936 Grevesmühlen
          </p>

          <p>
            015901271882<br/>
            alltagsflitzer@hotmail.com
          </p>
        </section>


        {/* Footer */}
        <footer style={{
          marginTop:"80px",
          textAlign:"center",
          paddingTop:"30px",
          borderTop:"1px solid #ccc"
        }}>
          <p>
            Impressum | Datenschutz
          </p>

          <p>
            USt-ID: 080/241/00112
          </p>
        </footer>

      </div>
    </div>
  );
}

const cardStyle = {
  background:"white",
  padding:"30px",
  width:"260px",
  borderRadius:"18px"
}

export default App;