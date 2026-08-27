const internationalExposurePattern = /<div class="paragraph"><strong><font color="#5040ae"><u>INTERNATIONAL EXPOSURE<\/u>[\s\S]*?<\/div>(?=\n\t\t\t<\/div>)/;

export function removeInternationalExposure(html: string) {
  return html.replace(internationalExposurePattern, "");
}
