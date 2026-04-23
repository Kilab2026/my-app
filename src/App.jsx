Ersetze den kompletten Inhalt von `src/App.jsx` mit diesem Code (und setze deine drei EmailJS-Werte ein):

```jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const card = {
  background:"white",
  padding:"30px",
  width:"260px",
  borderRadius:"18px"
};

const field = {
  display:"block",
  width:"100%",
  padding:"14px",
  marginTop:"15px",
  borderRadius:"10px",
  border:"1px solid #ccc"
};

function App() {

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'Service-x59myr9',
    'template-walkzkh',
    form.current,
    '9XPoXOhrpZuJA4Rk7Psk4'
  ).then(
    () => {
      alert("Anfrage erfolgreich gesendet!");
      e.target.reset();
    },
    () => {
      alert("Fehler beim Versand.");
    }
  );
};

return (
<div style={{
fontFamily:"Arial",
backgroundColor:"#f7f9fc",
padding:"40px"
}}>

<div style={{maxWidth:"1000px",margin:"auto"}}>

<section style={{
textAlign:"center",
padding:"70px 20px"
}}>
<h1 style={{fontSize:"52px"}}>Kilab Abrechnung</h1>

<p style={{
fontSize:"22px",
maxWidth:"700px",
margin:"auto"
}}>
Digitale Abrechnungssoftware für effiziente, sichere und moderne Verwaltung.
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


<h2 style={{textAlign:"center"}}>Funktionen</h2>

<div style={{
display:"flex",
gap:"25px",
flexWrap:"wrap",
justifyContent:"center",
marginTop:"40px"
}}>
<div style={card}>
<h3>Abrechnungsverwaltung</h3>
<p>Rechnungen erstellen und verwalten.</p>
</div>

<div style={card}>
<h3>Automatisierung</h3>
<p>Prozesse vereinfachen und Zeit sparen.</p>
</div>

<div style={card}>
<h3>Auswertungen</h3>
<p>Berichte und Statistiken auf einen Blick.</p>
</div>
</div>


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


<section style={{
marginTop:"70px",
textAlign:"center"
}}>
<h2>Testversion anfragen</h2>

<form
ref={form}
onSubmit={sendEmail}
style={{
background:"white",
padding:"35px",
borderRadius:"20px",
maxWidth:"500px",
margin:"auto"
}}
>
<input name="name" placeholder="Name" style={field}/>
<input name="email" placeholder="E-Mail" style={field}/>
<input name="company" placeholder="Firma (optional)" style={field}/>
<textarea name="message" placeholder="Nachricht" style={field}></textarea>

<button
type="submit"
style={{
marginTop:"20px",
padding:"15px 30px",
borderRadius:"12px",
border:"none",
cursor:"pointer"
}}
>
Testzugang anfragen
</button>

</form>
</section>


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


<footer style={{
marginTop:"80px",
textAlign:"center",
paddingTop:"30px",
borderTop:"1px solid #ccc"
}}>
<p>Impressum | Datenschutz</p>
<p>USt-ID: 080/241/00112</p>
</footer>

</div>
</div>
);
}

export default App;
