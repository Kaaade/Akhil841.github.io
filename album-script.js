function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function factFunction() {
var funFacts = ["D12 released a mixtape in 2015 called the Devil's Night Mixtape!", "Eminem was the only white member of D12!", "The band was called D12 because each of the six main artists rapped as both themself and their alter ego, thus making 12 personas in the band", "Contrary to most bands, D12 does not have a lead singer.", "D12's latest song was the song Bane, on the 2016 album SHADYXV"];
var factSelector = getRandomInt(0, 5);
document.getElementById("fun-fact").innerHTML = funFacts[factSelector];
}
