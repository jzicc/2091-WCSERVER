(function calculate() {
  var rph,
    hrsWorked,
    gWeek,
    gross,
    tax,
    sss,
    piFund,
    pHealth,
    totalDeduc,
    netSal;

  rph = 300;
  hrsWorked = 4;
  gWeek = 6;

  // Gross Income
  gross = rph * hrsWorked * gWeek;

  //Tax is 10%
  tax = 0.2 - gross;

  //SSS
  sss = 1200;

  //Pag-Ibig Fund
  piFund = 300;

  //PhilHealth
  pHealth = 400;

  //Total Deductions
  totalDeduc = tax + sss + piFund + pHealth;

  //The Net Salary
  netSal = gross - totalDeduc;
});
module.exports = calculate;
