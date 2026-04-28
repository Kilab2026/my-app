import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
console.log("ICH BIN DIE RICHTIGE APP");

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
const [showDemo, setShowDemo] = useState(false); 
console.log("showDemo:", showDemo);
const [demoLoggedIn, setDemoLoggedIn] = useState(false);
const [demoPage, setDemoPage] = useState("dashboard");
const [showInvoicePopup, setShowInvoicePopup] = useState(false);
if (showDemo) {
  if (!demoLoggedIn) {
return (
<div style={{
display:"flex",
justifyContent:"center",
alignItems:"center",
minHeight:"100vh",
background:"#eef3f8"
}}>

<div style={{
background:"white",
padding:"50px",
borderRadius:"20px",
width:"400px",
textAlign:"center"
}}>

<h1>Kilab Demo Login</h1>

<input
placeholder="demo@kilab.de"
style={{
display:"block",
width:"100%",
padding:"14px",
marginTop:"25px"
}}
/>

<input
type="password"
placeholder="demo123"
style={{
display:"block",
width:"100%",
padding:"14px",
marginTop:"15px"
}}
/>

<button
onClick={()=>setDemoLoggedIn(true)}
style={{
marginTop:"25px",
padding:"14px 30px",
borderRadius:"10px",
border:"none",
cursor:"pointer"
}}
>
Demo anmelden
</button>

</div>

</div>
);
}
return (
<div style={{
fontFamily:"Arial",
background:"#eef3f8",
minHeight:"100vh",
display:"flex"
}}>
<div style={{
width:"240px",
background:"#1f2d3d",
color:"white",
padding:"30px",
minHeight:"100vh"
}}>

<h2>Kilab</h2>

<p
onClick={()=>setDemoPage("dashboard")}
style={{
cursor:"pointer",
background: demoPage==="dashboard" ? "#32485f" : "transparent",
padding:"10px",
borderRadius:"8px"
}}
>
📊 Dashboard
</p>

<p
onClick={()=>setDemoPage("kunden")}
style={{
cursor:"pointer",
background: demoPage==="kunden" ? "#32485f" : "transparent",
padding:"10px",
borderRadius:"8px"
}}
>
👥 Kunden
</p>

<p
onClick={()=>setDemoPage("rechnungen")}
style={{
cursor:"pointer",
background: demoPage==="rechnungen" ? "#32485f" : "transparent",
padding:"10px",
borderRadius:"8px"
}}
>
🧾 Rechnungen
</p>

<p
onClick={()=>setDemoPage("reports")}
style={{
cursor:"pointer",
background: demoPage==="reports" ? "#32485f" : "transparent",
padding:"10px",
borderRadius:"8px"
}}
>
📈 Auswertungen
</p>

</div>

<div style={{flex:1,padding:"40px"}}>

<div style={{display:"flex",justifyContent:"space-between"}}>
<h1>Kilab Demo Dashboard</h1>

<button onClick={()=>setShowDemo(false)}>
Zurück zur Website
<button
style={{
marginLeft:"15px",
padding:"10px 20px",
borderRadius:"8px",
border:"none"
}}
onClick={()=>setShowDemo(false)}
>
Jetzt Testzugang anfragen
</button>
</button>
</div>

<div style={{
display:"flex",
gap:"25px",
marginTop:"40px",
flexWrap:"wrap"
}}>

<div style={{background:"white",padding:"30px",borderRadius:"20px",width:"260px"}}>
<h2>Offene Abrechnungen</h2>
<h1>42</h1>
</div>

<div style={{background:"white",padding:"30px",borderRadius:"20px",width:"260px"}}>
<h2>Kunden</h2>
<h1>18</h1>
</div>

<div style={{background:"white",padding:"30px",borderRadius:"20px",width:"260px"}}>
<h2>Monatsumsatz</h2>
<h1>12.480 €</h1>
</div>

</div>

{demoPage==="dashboard" && (
<div style={{marginTop:"50px",background:"white",padding:"30px",borderRadius:"20px"}}>
<h2>Letzte Rechnungen</h2>
<p>Pflegedienst Nord — 1.250 €</p>
<p>Sozialhilfe West — 980 €</p>
</div>
)}

{demoPage==="kunden" && (
<div style={{marginTop:"50px",background:"white",padding:"30px",borderRadius:"20px"}}>
<h2>Kundenübersicht</h2>
<p>18 aktive Kunden</p>
<p>5 neue Kunden diesen Monat</p>
<button
onClick={() => alert("Demo: Neuer Kunde angelegt")}
style={{
marginTop:"20px",
padding:"12px 24px",
borderRadius:"10px",
border:"none",
cursor:"pointer"
}}
>
+ Kunde anlegen
</button>
</div>
)}

{demoPage==="rechnungen" && (
<div style={{
marginTop:"50px",
background:"white",
padding:"30px",
borderRadius:"20px"
}}>


<h2>Rechnungsübersicht</h2>

<table style={{
width:"100%",
marginTop:"20px",
borderCollapse:"collapse"
}}>

<tr>
<th style={{textAlign:"left",padding:"12px"}}>Kunde</th>
<th style={{textAlign:"left",padding:"12px"}}>Betrag</th>
<th style={{textAlign:"left",padding:"12px"}}>Status</th>
</tr>

<tr>
<td style={{padding:"12px"}}>Pflegedienst Nord</td>
<td style={{padding:"12px"}}>1.250 €</td>
<td style={{padding:"12px"}}>Offen</td>
</tr>

<tr>
<td style={{padding:"12px"}}>Sozialhilfe West</td>
<td style={{padding:"12px"}}>980 €</td>
<td style={{padding:"12px"}}>Bezahlt</td>
</tr>

<tr>
<td style={{padding:"12px"}}>Betreuung Müller</td>
<td style={{padding:"12px"}}>1.780 €</td>
<td style={{padding:"12px"}}>In Prüfung</td>
</tr>

</table>

<button
onClick={()=>setShowInvoicePopup(true)}
style={{
marginTop:"25px",
padding:"12px 24px",
borderRadius:"10px",
border:"none",
cursor:"pointer"
}}
>
+ Neue Rechnung
</button>
<button
onClick={() => alert("PDF Export Demo gestartet")}
style={{
marginLeft:"15px",
padding:"12px 24px",
borderRadius:"10px",
border:"none",
cursor:"pointer"
}}
>
📄 PDF Export
</button>

{showInvoicePopup && (
<div style={{
position:"fixed",
top:"50%",
left:"50%",
transform:"translate(-50%,-50%)",
background:"white",
padding:"40px",
borderRadius:"20px",
boxShadow:"0 0 20px rgba(0,0,0,0.2)",
zIndex:9999
}}>

<button
onClick={()=>setShowInvoicePopup(false)}
style={{
float:"right",
border:"none",
background:"transparent",
fontSize:"20px",
cursor:"pointer"
}}
>
✕
</button>

<h3>Neue Rechnung anlegen</h3>

<input placeholder="Kunde" style={field}/>
<input placeholder="Betrag" style={field}/>

<button
onClick={()=>{
alert("Demo-Rechnung erstellt");
setShowInvoicePopup(false);
}}
style={{
marginTop:"20px"
}}
>
Speichern
</button>

</div>
)}
</div>
)}

{demoPage==="reports" && (
<div style={{
marginTop:"50px",
background:"white",
padding:"30px",
borderRadius:"20px"
}}>

<h2>Umsatzentwicklung</h2>

<div style={{
marginTop:"30px",
display:"flex",
gap:"15px",
justifyContent:"center"
}}>

<div style={{marginBottom:"18px"}}>
Jan
<div style={{height:"22px",width:"55%",background:"#32485f",borderRadius:"8px"}}></div>
</div>

<div style={{marginBottom:"18px"}}>
Feb
<div style={{height:"22px",width:"70%",background:"#32485f",borderRadius:"8px"}}></div>
</div>

<div style={{marginBottom:"18px"}}>
Mär
<div style={{height:"22px",width:"85%",background:"#32485f",borderRadius:"8px"}}></div>
</div>

</div>

<p style={{marginTop:"25px"}}>
Monatsumsatz aktuell: 12.480 €
</p>
</div>
)}

</div>
</div>
);
}

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm(
'service_ovi1757',
'template_walkzkh',
form.current,
'ft3xOTq8ha2JgKH0i'
).then(
() => {
alert("Anfrage erfolgreich gesendet!");
e.target.reset();
},
(error) => {
console.log(error);
alert("Fehler: " + error.text);
}
);
};

return (
<div style={{fontFamily:"Arial",backgroundColor:"#f7f9fc",padding:"40px"}}>
<div style={{maxWidth:"1000px",margin:"auto"}}>

<section style={{textAlign:"center",padding:"70px 20px"}}>

<h1 style={{fontSize:"52px"}}>Kilab Abrechnung</h1>

<p style={{fontSize:"22px",maxWidth:"700px",margin:"auto"}}>
Digitale Abrechnungssoftware für effiziente, sichere und moderne Verwaltung.
</p>

<div style={{marginTop:"30px"}}>

<button
style={{
padding:"18px 35px",
fontSize:"20px",
borderRadius:"12px",
border:"none"
}}
>
30 Tage kostenlos testen
</button>

<button
onClick={() => setShowDemo(true)}
style={{
marginLeft:"15px",
padding:"18px 35px",
fontSize:"20px",
borderRadius:"12px",
border:"1px solid #333",
background:"orange",
color:"black",
cursor:"pointer"
}}
>
Demo testen
</button>

</div>

</section>

<h2 style={{textAlign:"center"}}>Funktionen</h2>
<div style={{display:"flex",gap:"25px",flexWrap:"wrap",justifyContent:"center",marginTop:"40px"}}>
<div style={card}><h3>Abrechnungsverwaltung</h3><p>Rechnungen erstellen und verwalten.</p></div>
<div style={card}><h3>Automatisierung</h3><p>Prozesse vereinfachen und Zeit sparen.</p></div>
<div style={card}><h3>Auswertungen</h3><p>Berichte und Statistiken auf einen Blick.</p></div>
</div>

<section style={{marginTop:"70px",textAlign:"center"}}>
<h2>Preise</h2>
<div style={{background:"white",padding:"35px",borderRadius:"20px",maxWidth:"450px",margin:"auto"}}>
<h3>30 Tage kostenlos testen</h3>
<p>Danach z.B. 29 € monatlich</p>
</div>
</section>

<section style={{marginTop:"70px",textAlign:"center"}}>
<h2>Testversion anfragen</h2>
<form
ref={form}
onSubmit={sendEmail}
style={{background:"white",padding:"35px",borderRadius:"20px",maxWidth:"500px",margin:"auto"}}
>
<input name="user_name" placeholder="Name" required style={field} />
<input name="user_email" placeholder="E-Mail" required style={field} />
<input name="company" placeholder="Firma (optional)" style={field} />
<textarea name="message" required style={field}></textarea>

<button
 type="submit"
 style={{marginTop:"20px",padding:"15px 30px",borderRadius:"12px",border:"none",cursor:"pointer"}}
>
Testzugang anfragen
</button>
</form>
</section>

<section style={{marginTop:"70px",textAlign:"center"}}>
<h2>Kontakt</h2>
<p>Nancy Krull<br/>Alltagsflitzer<br/>August-Bebel-Str. 24<br/>23936 Grevesmühlen</p>
<p>015901271882<br/>alltagsflitzer@hotmail.com</p>
</section>

<footer style={{marginTop:"80px",textAlign:"center",paddingTop:"30px",borderTop:"1px solid #ccc"}}>
<p>Impressum | Datenschutz</p>
<p>USt-ID: 080/241/00112</p>
</footer>

</div>
</div>
);
}

export default App;