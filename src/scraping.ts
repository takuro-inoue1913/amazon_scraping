function getRaceFromCalendar() {
  var response = UrlFetchApp.fetch("https://www.jra.go.jp/keiba/calendar2021/2021/2/0207.html");
  var content = response.getContentText("SJIS");

  var venues = Parser.data(content).from('<table class="basic narrow-xy">').to('</table>').iterate();
  for (var index = 0; index < venues.length; index++) {
    var venue = venues[index];

    Logger.log(Parser.data(venue).from('<div class="main">').to('</div>').build());
  }
}