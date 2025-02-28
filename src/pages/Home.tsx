import CTA from "styled/CTA";
import { Accent, StyledTitle } from "styled/Random";

export default function Home(): JSX.Element {
  return (
    <div>
      <StyledTitle>Ready to Play?</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>'s'</Accent> to start playing!
      </CTA>
    </div>
  );
}
