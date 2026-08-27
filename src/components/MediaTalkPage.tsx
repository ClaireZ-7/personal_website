type MediaItem = { outlet: string; date: string; title: string; href?: string };

const media: MediaItem[] = [
  { outlet: "城市生态地理新知", date: "10 June 2026", title: "北工商于也雯-NUS樊漪-北大易君健教授最新PNAS！独生子女政策导致城乡生育差距扩大，加剧阶层固化和代际不平等！", href: "https://mp.weixin.qq.com/s/JrBfL48CQvnjQ9_vXj2Jxw" },
  { outlet: "NUSnews", date: "25 May 2026", title: "Housing a nation: Singapore’s next chapter in focus at NUS IREUS symposium", href: "https://news.nus.edu.sg/housing-a-nation-singapores-next-chapter/" },
  { outlet: "声景科学", date: "27 April 2026", title: "子刊导读｜Nature Cities｜2026年3月刊", href: "https://mp.weixin.qq.com/s/g_S8Y2SY85uWFEuVrUo2rQ" },
  { outlet: "老刘学术", date: "26 April 2026", title: "文献分享：中国燃煤电厂关闭的污染转移效应", href: "https://www.xiaohongshu.com/explore/69ea2a8b0000000011023001?source=webshare&xhsshare=pc_web&xsec_token=AB8z8i5BfdeUMPRlYwSZ9p6pW5zuOoA2g2-c41e1AC0qY=&xsec_source=pc_share" },
  { outlet: "海苔包装盒", date: "26 April 2026", title: "番外篇·组屋真的能改变下一代的命运吗", href: "https://www.xiaohongshu.com/discovery/item/69ee238200000000230155f5?source=webshare&xhsshare=pc_web&xsec_token=ABR0VV5BRYy4HHCEfuSphw1xzbQMgFSwO924zALWnj4mY=&xsec_source=pc_share" },
  { outlet: "次方城 Lab", date: "16 April 2026", title: "【子刊关键词】第2期｜城市科学领域中，子刊/正刊最关注什么研究方向？", href: "https://mp.weixin.qq.com/s/4ojAtGNU2pyODHnDVkdd9g" },
  { outlet: "围炉客谈", date: "30 March 2026", title: "讲座预告｜新加坡国立大学樊漪教授：从棕色到绿色？中国燃煤电厂关闭的替代效应", href: "https://mp.weixin.qq.com/s/G_fTJTzQJzVKjRiJTWRw9w" },
  { outlet: "鸭鸭不知所云", date: "26 March 2026", title: "JEEM2026_从棕到绿？中国燃煤电厂关闭的 displacement effect -03 机制、稳健性与讨论", href:"https://mp.weixin.qq.com/s/pnQVfcNoPiZtDFitiN-dhw?scene=1" },
  { outlet: "生态系统评价课题组", date: "25 February 2026", title: "文献分享｜JEEM：从棕色到绿色？中国燃煤电厂关闭的污染转移效应", href: "https://mp.weixin.qq.com/s/pnQVfcNoPiZtDFitiN-dhw?scene=1" },
  { outlet: "每日 paper", date: "24 February 2026", title: "Day 827 从棕色到绿色？中国燃煤电厂关闭的污染转移效应", href: "https://mp.weixin.qq.com/s/zZN_shlqclbuD8vc0wkHfA" },
  { outlet: "围炉客谈", date: "13 February 2026", title: "顶刊阅读笔记｜JEEM：从棕色到绿色？中国燃煤电厂关闭的位移效应", href: "https://mp.weixin.qq.com/s/2mLjy87t-QGW6764aATSjw" },
  { outlet: "全球社会学精选", date: "13 February 2026", title: "人物专访｜新国立樊漪教授的顶刊研究：一套政府房能否托举一代人？", href: "https://mp.weixin.qq.com/s/8V0yMzOUMhYwrlMPWoVCZg" },
  { outlet: "Shaned 的自习室", date: "12 February 2026", title: "JEEM｜从褐色到绿色？中国燃煤电厂关闭的污染转移效应, Yi Fan et al., 2026", href: "https://mp.weixin.qq.com/s/8mgNH2qIUi3_jsrr5vPnYw" },
  { outlet: "地理人", date: "3 February 2026", title: "Nature Cities｜可支付的公共住房与代际流动", href: "https://mp.weixin.qq.com/s/c7wyKr0H3Zj4qg-efN6uiQ" },
  { outlet: "艾思科蓝", date: "29 January 2026", title: "NUS樊漪教授团队最新Nature Cities！揭示新加坡公共住房显著提升低收入家庭子女发展机会", href: "https://www.ais.cn/news/research/38167" },
  { outlet: "城市生态地理新知", date: "24 January 2026", title: "NUS樊漪教授团队最新Nature Cities！揭示新加坡公共住房显著提升低收入家庭子女发展机会", href: "https://mp.weixin.qq.com/s/nP922rmOAulq6xKf4diUqw" },
  { outlet: "城市地理之光", date: "10 January 2026", title: "最新｜新加坡国立大学《Nature Cities》发文：当房子买得起，城市住房政策如何重塑代际机会？", href: "https://mp.weixin.qq.com/s/AQVVYXLaMOx0QSxRf4qRcA" },
  { outlet: "The Straits Times", date: "10 September 2025", title: "What does love have to do with waiting for a BTO flat?", href: "https://www.straitstimes.com/singapore/whats-love-gotta-do-with-waiting-for-a-bto-flat" },
  { outlet: "气候变化经济学", date: "4 August 2025", title: "气候变化经济学论坛：洪灾后选择性迁移与媒体情绪和收入效应之间的相互作用", href: "https://mp.weixin.qq.com/s/AZUAqKh80RTVpOMcfKd9Ug" },
  { outlet: "气候变化经济学", date: "4 August 2025", title: "论坛｜洪灾后迁移-媒体情绪-收入的相互作用", href:"https://mp.weixin.qq.com/s/AZUAqKh80RTVpOMcfKd9Ug" },
  { outlet: "PKU 韧性城市研究室", date: "14 July 2025", title: "荐读丨Nature Climate Change 洪水后的选择性迁移与媒体情绪及收入效应的交互作用", href: "https://mp.weixin.qq.com/s/Rga9XR1mPnDFdY6WZa-9qg" },
  { outlet: "城市生态地理新知", date: "28 May 2025", title: "Nature Climate Change 重磅！新国大樊漪-莫纳什万新伟教授团队揭示洪灾驱动选择性迁徙，并受媒体情绪与收入影响", href: "https://mp.weixin.qq.com/s/okQp9qfhU-2knm46sz3ipg" },
  { outlet: "NUS Business School", date: "9 April 2025", title: "NUS Business Thought Leadership Series", href: "https://www.instagram.com/reel/DIOMF1NN2LV/" },
  { outlet: "NUS Cities Newsletter", date: "April 2025", title: "Like father, like son? Social engineering and intergenerational mobility in housing consumption", href: "https://cde.nus.edu.sg/nuscities/like-father-like-son-social-engineering-and-intergenerational-mobility-in-housing-consumption/" },
  { outlet: "Bloomberg", date: "July 2024", title: "Singapore Couples Are Marrying Earlier to Buy Homes, Leading Some to Regret", href: "https://www.bloomberg.com/news/articles/2024-07-04/singapore-bto-homes-couples-are-marrying-earlier-leading-some-to-regret" },
  { outlet: "The Business Times", date: "7 June 2024", title: "BTO scheme led to early marriages but may also have contributed to more divorces: study", href: "https://www.businesstimes.com.sg/property/bto-scheme-led-early-marriages-may-also-have-contributed-more-divorces-study" },
  { outlet: "Lianhe Zaobao", date: "5 June 2024", title: "国大研究：预购组屋制度或与早婚离婚有关联", href: "https://www.zaobao.com.sg/news/singapore/story20240605-3800570" },
  { outlet: "首都经济贸易大学劳动经济学院", date: "1 December 2023", title: "首经贸举办第二届“劳动与民生论坛”暨“数字经济下高质量发展与共同富裕”国际论坛", href: "https://sle.cueb.edu.cn/ljjz/81b4d2d50f5344f69e628b269e358e33.htm" },
  { outlet: "首都经济贸易大学劳动经济学院", date: "1 December 2023", title: "专家观点｜专家学者在第二届“劳动与民生论坛”暨“数字经济下高质量发展与共同富裕”国际论坛发言介绍", href: "https://sle.cueb.edu.cn/ljjz/4949944f55c3424d9cf8d59c4737b978.htm" },
  { outlet: "政治学评介", date: "15 November 2023", title: "11.16讲座丨亚裔代际社会流动（1882—1943）", href: "https://mp.weixin.qq.com/s/vEetkSZqvCRDhqdN8lZ5Rw" },
  { outlet: "IREUS News", date: "30 August 2023", title: "A look at the displacement effects of going green", href:"https://ireus.nus.edu.sg/displacement-effects-going-green/" },
  { outlet: "AEii 国际应用能源", date: "27 December 2022", title: "【Applied Energy 最新原创论文】智慧区域能源转型政策未来影响的数据驱动预测和评估", href: "https://mp.weixin.qq.com/s/oOEmKh2din3gbkENvCcsgg" },
  { outlet: "Channel News Asia", date: "29 July 2022", title: "Noisy neighbours are more than just a nuisance, they can also cause health problems", href: "https://cnalifestyle.channelnewsasia.com/wellness/noisy-neighbours-health-problems-324641" },
  { outlet: "Quartz", date: "21 July 2022", title: "For all its economic dynamism, China’s income mobility is bad and getting worse", href: "https://qz.com/1342627/for-all-its-economic-dynamism-chinas-income-mobility-is-bad-and-getting-worse" },
  { outlet: "狮城新闻", date: "7 July 2022", title: "邻居吵闹不只影响睡眠，还损害健康", href: "https://www.shicheng.news/v/yBQEq#new" },
  { outlet: "NUS BIZBeat Thought Leadership", date: "16 June 2022", title: "Noisy Neighbours Affect Your Sleep, Then Your Health", href: "https://bizbeat.nus.edu.sg/thought-leadership/article/noisy-neighbours-affect-your-sleep-then-your-health/" },
  { outlet: "MoneyFM", date: "15 June 2022", title: "Health Suites: Neighbours can affect your sleep, then your health", href: "https://www.moneyfm893.sg/guest/fan-yi-nus-business-school/" },
  { outlet: "Lianhe Zaobao", date: "9 June 2022", title: "国大研究：邻里噪音不仅干扰睡眠也影响健康", href: "https://www.zaobao.com.sg/news/singapore/story20220609-1281032" },
  { outlet: "香樟经济学术圈", date: "11 March 2022", title: "【香樟推文2420】青年逆境如何影响长期金融行为？", href: "https://mp.weixin.qq.com/s/8NG1tpUzzyBRGkZDX412dg" },
  { outlet: "IREUS News", date: "27 January 2022", title: "Housing and marriage in Singapore", href: "https://ireus.nus.edu.sg/housing-and-marriage-in-singapore-2/" },
  { outlet: "香樟经济学术圈", date: "10 December 2021", title: "【香樟推文2336】通往共同富裕之路：中国的代际收入持续性", href: "https://mp.weixin.qq.com/s/9Aitc6VgNW1kKsS28tgHyQ" },
  { outlet: "The Economist", date: "2 October 2021", title: "Just how Dickensian is China?", href: "https://www.economist.com/finance-and-economics/2021/10/02/just-how-dickensian-is-china" },
  { outlet: "代际流动研究", date: "7 July 2021", title: "【代际流动研究推文第2期】中国上升的代际收入持续性", href: "https://mp.weixin.qq.com/s/QamY6MwRu4kKZAIZegokMQ" },
  { outlet: "CUHK Business School – China Business Knowledge", date: "21 November 2019", title: "The Unstoppable Housing Market in Hong Kong", href: "https://cbk.bschool.cuhk.edu.hk/the-unstoppable-housing-market-in-hong-kong/" },
  { outlet: "Channel News Asia", date: "17 October 2019", title: "Housing policies effective in helping children from low-income families upgrade, but less so for middle class: NUS study", href: "https://www.channelnewsasia.com/singapore/housing-policies-effective-in-helping-children-low-income-families-upgrade-less-so-middle-class-nus-study-5696606" },
  { outlet: "The Straits Times", date: "17 October 2019", title: "Type of housing Singaporean parents own can impact children’s future economic status: NUS", href: "https://www.straitstimes.com/business/property/type-of-housing-singaporean-parents-own-can-impact-childrens-future-economic" },
  { outlet: "NUS News", date: "29 October 2019", title: "Parents’ housing linked to children’s economic future: NUS study", href: "https://news.nus.edu.sg/parents-housing-linked-to-childrens-economic-future-nus-study/" },
  { outlet: "The Business Times", date: "17 October 2019", title: "Type of housing Singaporean parents own can impact children’s future economic status: NUS", href: "https://www.businesstimes.com.sg/property/type-housing-singaporean-parents-own-can-impact-childrens-future-economic-status-nus" },
  { outlet: "VoxChina", date: "4 July 2018", title: "Rising Intergenerational Income Persistence in China", href: "https://voxchina.org/show-3-89.html" },
  { outlet: "The Wall Street Journal", date: "29 July 2013", title: "中国的纵向不平等不断恶化", href: "http://v515.wordpress.com/2013/07/29/%E5%B0%88%E6%AC%84%EF%BC%9A%E4%B8%AD%E5%9C%8B%E7%9A%84%E7%BA%B5%E5%90%91%E4%B8%8D%E5%B9%B3%E7%AD%89%E4%B8%8D%E6%96%AD%E6%83%A1%E5%8C%96/" },
];

const talks: Record<string, string[]> = {
  "2026": ["Fudan University", "University of Hong Kong", "Chinese University of Hong Kong", "City University of Hong Kong", "Monash University", "Deakin University", "Lingnan University", "Hong Kong Baptist University", "Xiamen University", "Southern University of Science and Technology", "Workshop on Climate Risk, Sustainability, and Real Estate (HKUST)", "Institute of Real Estate and Urban Studies Living Symposium (invited speaker & panellist)", "Hong Kong Economic Association Annual Conference*", "Research School of Finance, Actuarial Studies and Statistics Summer Research Camp (Australian National University)"],
  "2025": ["Hong Kong University of Science and Technology", "Hong Kong Polytechnic University", "Forum of Climate Change Economics", "Shandong University, School of Economics", "Asian Economic Development Conference, Peking University", "Nexus Forum*", "NUS Cities Brownbag", "SGFIN Annual Research Conference on Sustainability", "Asian Bureau of Finance and Economic Research Annual Conference†", "Global Research Network on Housing and Demographic Dynamics Workshop†"],
  "2024": ["AREUEA-ASSA Annual Conference", "Finance Down Under (invited discussant)", "University of Melbourne", "SGFIN Annual Research Conference on Sustainability", "Asian Bureau of Finance and Economic Research Annual Conference", "Meeting of the Society of Economics of the Household", "Hong Kong University of Science and Technology", "Nanyang Technological University", "Curtin University", "SMU-Jinan Conference on Urban and Regional Economics*"],
  "2023": ["Jinan-SMU Conference on Urban and Regional Economics*", "Hong Kong Economic Association Biennial Conference*", "Labor and People’s Livelihood Forum, Capital University of Economics and Business (invited keynote speaker)", "American Real Estate and Urban Association Virtual Seminar", "Real Estate Finance and Investment Symposium†", "Zhejiang University", "MIT Asia Real Estate Initiative Inaugural Symposium", "Asian Bureau of Finance and Economic Research 10th Annual Conference†", "Annual International Conference of American Real Estate and Urban Economics Association†", "Asian Meeting of the Econometric Society", "Asian Real Estate Society and Global Chinese Real Estate Congress Joint International Conference†", "China Economic Society Annual Conference*", "Asia-Pacific Network for Housing Research Intergenerational Housing Workshop", "International Symposium on Frontiers of Economics of Environment and Health"],
  "2022": ["University of Hong Kong", "Chinese University of Hong Kong", "City University of Hong Kong", "Hong Kong Polytechnic University", "East China Normal University", "Asian Meeting of Econometric Society-China (Virtual)", "Asian Meeting of Econometric Society in East and South-East Asia (Virtual)*", "Asian Real Estate Society-American Real Estate and Urban Economics Association International Conference (Virtual)†", "Nanjing University (Virtual)", "University of Hong Kong (Virtual)", "Allied Social Science Associations Annual Conference (Virtual)†", "NUS-HKU-NTU Applied Economic Workshop (Virtual)", "European Meeting of the Urban Economics Association (Virtual)", "Asian Bureau of Finance and Economic Research 9th Annual Conference"],
  "2021": ["City University of Hong Kong (Virtual)", "North American Meeting of the Urban Economics Association (Virtual)*†", "Asian and Australasian Society of Labour Economics (Virtual)", "University of International Business and Economics (Virtual)", "European Real Estate Society Annual Conference (Virtual)", "Asian Meeting of the Econometric Society (Virtual)", "Meeting of the Society for the Study of Economic Inequality (Virtual)*", "AREUEA-Asian Real Estate Society-Global Chinese Real Estate Congress Joint Annual Conference (Virtual)*†", "Econometric Society European Meeting (Virtual)"],
  "2020": ["ShanghaiTech University (Virtual)"],
  "2019": ["Econometric Society Asia Meeting", "Asian Real Estate Annual Conference*†", "Global Chinese Real Estate Congress", "Asian and Australasian Society of Labour Economics Annual Conference*", "Urban Economics Association Conference European Meeting*†", "American Real Estate and Urban Economics Association International Conference"],
  "2018": ["American Real Estate and Urban Economics Association International Conference†", "European Real Estate Society Annual Conference†", "SMU Conference on Urban and Regional Economics"],
  "2017": ["European Real Estate Society Annual Conference†", "American Real Estate and Urban Economics Association International Conference†", "The Chinese Economists Society Annual Conference", "NUS-IRES Symposium", "Asian Real Estate Society Annual Conference†", "International Symposium on Contemporary Labor Economics"],
  "2016": ["Biennial Conference of Hong Kong Economic Association"],
  "2015": ["American Economic Association Annual Conference", "Royal Economic Society Annual Conference"],
  "2014": ["Annual Congress of the European Economic Association", "European Meeting of the Econometric Society"],
  "2013": ["IZA/World Bank Conference on Employment and Development", "Chinese Economic Association (UK and Europe) Annual Conference"],
  "2012": ["Annual Conference of the European Society for Population Economics"],
  "2010": ["Annual Conference of the European Society for Population Economics"],
};

export default function MediaTalkPage() {
  return <article className="media-talk-page">
    <header className="media-talk-hero">
      <div className="media-talk-intro"><p className="eyebrow">International Exposure</p><h1>Media &amp; Talk</h1><p>Selected media coverage, invited talks, and conference presentations.</p></div>
      <nav className="media-talk-jump" aria-label="On this page">
        <a href="#media"><span>01</span><strong>Media coverage</strong></a>
        <a href="#talks"><span>02</span><strong>Talks &amp; presentations</strong></a>
      </nav>
    </header>
    <section className="media-talk-section" id="media">
      <div className="media-talk-heading"><div><p className="section-label">01 · Coverage</p><h2>Media details</h2></div><p>Latest first</p></div>
      <ul className="media-list">{media.map((item, index) => <li key={`${item.outlet}-${item.date}-${index}`}><div className="media-meta"><strong>{item.outlet}</strong><time>{item.date}</time></div>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{item.title}<span aria-hidden="true"> ↗</span></a> : <span>{item.title}</span>}</li>)}</ul>
    </section>
    <section className="media-talk-section talks-section" id="talks">
      <div className="media-talk-heading"><div><p className="section-label">02 · Engagements</p><h2>Invited talks &amp; conference presentations</h2></div><div className="talk-note"><p>Latest first</p><p>* Session chair &nbsp; † Discussant at the same conference</p></div></div>
      <div className="talk-years">{Object.entries(talks).sort(([a], [b]) => Number(b) - Number(a)).map(([year, items]) => <section className="talk-year" key={year}><h3>{year}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div>
    </section>
  </article>;
}
