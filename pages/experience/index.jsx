import Color from "../../components/utils/page.colors.util";
import ComingSoon from "../../components/sections/comingsoon";

import colors from "../../content/experience/_colors.json";
import settings from "../../content/_settings.json";
import Career from "../../components/sections/index/career";

//
export default function CaseStudies({}) {
  return (
    <>
      <Color colors={colors} />
      <Career></Career>
    </>
  );
}
