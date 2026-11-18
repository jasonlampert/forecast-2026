// ---------------------------------------------------------------------------
// YOUR SITE SETTINGS. This is the only file you need to edit (plus your CSVs).
// Edit it on github.com: open this file, click the pencil icon, change the
// text between the quotation marks, then click "Commit changes".
// ---------------------------------------------------------------------------

window.SITE_CONFIG = {

  // The name shown at the top of your site. A nickname or made-up forecaster
  // name is fine and recommended. Do not put your real name, email, photo,
  // or anything else that identifies you on this site.
  forecaster_name: "",

  // One short line under the name (optional).
  tagline: "",

  // A plain-language description of YOUR model, in your own words. Each line in
  // quotes is one paragraph, followed by a comma. Two or three short paragraphs:
  // what your forecast is built from, how you set the national environment,
  // and how you handled uncertainty. Until you fill this in, your site shows a
  // reminder in this spot.
  //
  // For example, the class model could be described like this (describe your
  // own model):
  //   "A fundamentals-only model (no polls). Each race's predicted Democratic share combines the district's partisan lean, incumbency, and a forecast of the national House vote from presidential approval, gas prices, income and the midterm penalty.",
  //   "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals come from 10,000 simulated elections.",
  method: [
  "A regression model trained on about 2,950 contested House and Senate races from 2012–2024, with recent elections weighted more heavily. Each race's predicted Democratic share starts from the national environment and adjusts for the district's partisan lean, its previous result (when the lines haven't changed), incumbency, fundraising, scandal markers from Wikipedia, demographics, race polls where they exist, and expert ratings from Cook, Inside Elections and Sabato.",
  "The national environment comes from the generic-ballot polling average (RealClearPolitics, 9–26 October), corrected for how far the polls missed in past elections. Because that correction rests on only seven elections, it is shrunk toward zero. It moves the Democratic share from 54.4% to 53.9%.",
  "Uncertainty combines one national error shared by every race, a state error shared by races in the same state, and a separate error for each race, all sized from the model's misses when backtested on 2012–2024. The national error is never allowed below 2.25 points. Seat totals come from 20,000 simulated elections.",
  ],

  // Your data files. Leave these alone unless you renamed your files.
  forecast_file: "forecast.csv",
  sims_file: "seat_sims.csv",

  // Course links. Leave these as they are.
  links: {
    class_forecast: "https://kevinmdeluca.com/forecast/class/",
    tracker: "https://kevinmdeluca.com/forecast/",
    gallery: "https://kevin-deluca-polisci.github.io/plsc2219-forecasts/gallery.html"
  }
};
