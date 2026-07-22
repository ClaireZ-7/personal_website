const mediaCoverage = [
  ["城市生态地理新知", "10 June 2026"],
  ["NUSnews", "May 2026"],
  ["声景科学", "27 April 2026"],
  ["老刘学术", "26 April 2026"],
  ["海苔包装盒", "26 April 2026"],
  ["次方城 Lab", "16 April 2026"],
  ["围炉客谈", "30 March 2026"],
  ["鸭鸭不知所云", "26 March 2026"],
  ["生态系统评价课题组", "25 February 2026"],
  ["每日 paper", "24 February 2026"],
  ["围炉客谈", "13 February 2026"],
  ["全球社会学精选", "13 February 2026"],
  ["Shaned 的自习室", "12 February 2026"],
  ["地理人", "3 February 2026"],
  ["艾思科蓝", "29 January 2026"],
  ["城市生态地理新知", "24 January 2026"],
  ["城市地理之光", "10 January 2026"],
  ["The Straits Times", "10 September 2025"],
  ["气候变化经济学", "4 August 2025"],
  ["PKU 韧性城市研究室", "14 July 2025"],
  ["城市生态地理新知", "28 May 2025"],
  ["NUSbizschool", "9 April 2025"],
  ["NUS Cities Newsletter", "April 2025"],
  ["Bloomberg", "July 2024"],
  ["Business Times", "7 June 2024"],
  ["Lianhe Zaobao", "5 June 2024"],
  ["首都经济贸易大学劳动经济学院", "1 December 2023"],
  ["政治学评介", "15 November 2023"],
  ["IREUS News", "30 August 2023"],
  ["AEii 国际应用能源", "27 December 2022"],
  ["Channel News Asia", "29 July 2022"],
  ["Quartz", "21 July 2022"],
  ["狮城新闻", "7 July 2022"],
  ["NUS BIZBeat Thought Leadership", "16 June 2022"],
  ["MoneyFM", "15 June 2022"],
  ["Lianhe Zaobao", "9 June 2022"],
  ["香樟经济学术圈", "11 March 2022"],
  ["IREUS News", "27 January 2022"],
  ["香樟经济学术圈", "10 December 2021"],
  ["The Economist", "2 October 2021"],
  ["代际流动研究", "7 July 2021"],
  ["NUS News", "29 October 2019"],
  ["Channel News Asia", "17 October 2019"],
  ["The Straits Times", "17 October 2019"],
  ["The Business Times", "17 October 2019"],
  ["CUHK Business School - China Business Knowledge", "21 November 2019"],
  ["VoxChina", "4 July 2018"],
  ["The Wall Street Journal", "29 July 2013"],
] as const;

const oldMediaPattern = /<u><font color="#5040ae">MEDIA:<\/font><\/u>[\s\S]*?(?=<br \/><font color="#000000">&#8203;<\/font><br \/><u><font color="#5040ae">INVITED TALKS)/;

export function applyMediaCoverage(html: string) {
  const entries = mediaCoverage
    .map(([publication, date]) => `<strong>${publication}</strong>, ${date}`)
    .join("; ");
  const replacement = `<u><font color="#5040ae">SELECTED MEDIA COVERAGE (DETAILS AT THE END OF CV):</font></u><br /><em>${entries}.</em>`;

  return html.replace(oldMediaPattern, replacement);
}
