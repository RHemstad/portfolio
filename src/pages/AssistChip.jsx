import CaseStudyLayout from '../components/case-study/CaseStudyLayout';
import CaseStudyIntro from '../components/case-study/CaseStudyIntro';
import CaseStudySection from '../components/case-study/CaseStudySection';
import CaseStudyFigure from '../components/case-study/CaseStudyFigure';
import CaseStudyMediaStage from '../components/case-study/CaseStudyMediaStage';
import CaseStudySequence from '../components/case-study/CaseStudySequence';
import CaseStudyComparison from '../components/case-study/CaseStudyComparison';
import CaseStudyIndex from '../components/case-study/CaseStudyIndex';

const sections = [
  {
    "id": "context",
    "title": "Understanding its role in Copilot"
  },
  {
    "id": "boundary",
    "title": "Working out the difference"
  },
  {
    "id": "specification",
    "title": "Working through the UX flows"
  },
  {
    "id": "product-adoption",
    "title": "Responding to product needs"
  },
  {
    "id": "reflection",
    "title": "Looking back"
  }
];

export default function AssistChip() {
  return (
    <CaseStudyLayout index={<CaseStudyIndex sections={sections} />} intro={
      <CaseStudyIntro
        eyebrow="AI/ML Interface Design · SAS Viya Copilot · 2024–2026"
        title="Designing the Boundary Between Suggestion and Action"
      >
        <blockquote className="cs-epigraph">
          <p>
            In a minute there is time
            <br />
            For decisions and revisions which a minute will reverse.
          </p>
          <p className="cs-epigraph-attribution">
            — T. S. Eliot, <cite>The Love Song of J. Alfred Prufrock</cite>
          </p>
        </blockquote>
        <p className="cs-prose">In 2024, AI was suddenly everywhere in technology. Companies were moving quickly to understand what generative AI could do and how it might fit into existing products. SAS was no different. Developers were building rough Copilot prototypes, testing ideas, and trying to understand what this new technology might mean for our software.</p>
        <p className="cs-prose">In the Product Experience division, I was paired with Jessica Peter, a colleague, to help determine the UX and UI for SAS Viya Copilot.</p>
        <p className="cs-prose">Neither of us came into the work as an expert in AI interfaces. There really wasn’t an established playbook to follow. We had to learn quickly: studying emerging products, looking at what developers were building, debating interaction models, creating specifications, and revising our thinking as product teams began putting the patterns into practice.</p>
        <p className="cs-prose">Between 2024 and the end of 2025, Jessica and I worked on the UX and UI specifications for 15 Copilot components, including Chat Bubble, Copilot Pane, Chat History, Chat Input, Coding Assistant, File Uploader, and Assist Chip. We documented the evolving system in a shared Figma library that became a working reference for designers and developers. This is the story of how one of those components, Assist Chip, came to be for Copilot and what it meant to design while the technology—and our understanding of it—was still changing.</p>
      </CaseStudyIntro>
    }>
      <CaseStudyMediaStage>
      <CaseStudyFigure
        src="/images/portfolio/assist-chip-hero.png"
        alt="SAS Visual Analytics report beside a Copilot response with two suggested follow-up actions."
        caption="Assist Chips in SAS Visual Analytics offer suggested next steps beneath a Copilot response."
      />
      </CaseStudyMediaStage>
      <CaseStudySection {...sections[0]}>
        <p className="cs-prose">To understand the role of Assist Chip, Jessica and I started a discovery phase by looking at other AI products, including ChatGPT and Claude. From our own experience using those tools, we had a basic understanding of the idea, but we still needed to figure out how it would fit into our products.</p>
        <p className="cs-prose">Our first attempt organized suggestions into three categories: Welcome, Tools, and Recommendations. We were trying to answer some practical questions: Where would a suggestion show up? In what context? What purpose would it serve? The problems became clearer when we started trying to fit those categories into real product requirements. “Welcome” described where a suggestion appeared rather than what kind of interaction it was. “Tools” and “Recommendations” could become subjective depending on the context. Basically, the same suggestion could belong to more than one category.</p>
        <p className="cs-prose">The name changed along the way too. Initially, we called it Prompt Card. But we already had Card components, and they functioned quite differently. We then tried Prompt Tile, which introduced another problem: in Nova, Cards were called Tiles, while in FUI, they were called Cards. We were carrying the same confusion from one system into another. We settled on Assist Chip because the name seemed to better describe its purpose.</p>
        <p className="cs-prose">Looking back, it’s obvious we had been thinking too much about the content and not enough about the behavior. Around this point, I took over the component work from Jessica and began looking more closely at how it should behave.</p>
      </CaseStudySection>
      <CaseStudySection {...sections[1]}>
        <p className="cs-prose">An Assist Chip behaves much like a button: selecting the whole element triggers a response. The distinction became clearer when I considered what each component helped someone do. A Button answered, “What action do I want to take?” A Card answered, “What should I understand?” An Assist Chip answered, “What could I try next?” These questions helped me define where Assist Chips belonged. An interaction wasn’t an Assist Chip if it changed a project or workflow state, required confirmation, navigated elsewhere, or initiated a recovery screen.</p>
        <p className="cs-prose">To help other designers understand which component to use in their designs, I created a document comparing Assist Chips with Buttons, Cards, Token Input, and Tokenizer. It explained their different purposes, behaviors, levels of commitment, and common misuses, so designers could apply those distinctions in their own work.</p>
      </CaseStudySection>
      <CaseStudySection {...sections[2]}>
        <p className="cs-prose">The most challenging part for me was creating the UX flows. I had an initial UX and UI specification, but working through the flows showed how many decisions I still needed to make. It was easy enough to say that someone could select a suggestion. But what happened to the other suggestions alongside it? Did they disappear? Could someone return to them later? What happened if the person submitted their own prompt instead, or if Copilot encountered an error?</p>
        <p className="cs-prose">Those decisions affected how the component worked within the whole Copilot experience. I had to document what caused suggestions to appear, what happened when someone selected one, and how the interface changed through processing, responses, and errors.</p>
        <CaseStudyFigure
          wide
          src="/images/portfolio/assist-chip-ux-flows.webp"
          alt="Eight annotated Assist Chip flows arranged in rows, covering welcome, selection, custom prompts, subsequent suggestions, and error handling."
          caption="Overview of eight Assist Chip UX flows covering the welcome experience, suggestion selection, custom prompts, subsequent suggestions, and error handling. Each flow documents how the interface changes throughout the interaction."
        />
        <p className="cs-prose">I revised the specification as our understanding developed and designers started using the Figma component in their product designs. Sometimes I thought I had worked something out, only to encounter a requirement I hadn’t anticipated.</p>
        <p className="cs-prose">At the same time, I was creating the UI specification and making sure the component fit our design system. I was moving back and forth between behavior and appearance, alongside my work on the other Copilot components.</p>
        <p className="cs-prose">The first version used wireframes because I was still working out the interaction. As the component matured, I replaced the wireframes with styled components and continued updating the specification.</p>
        <p className="cs-prose">I also created a template and accompanying prompt to help generate machine-readable Markdown specifications from the component documentation. This gave developers and AI-assisted development tools a consistent structure for interpreting the component rules.</p>
        <CaseStudyMediaStage>
          <CaseStudySequence>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-flow-01-options.png"
              alt="Copilot offers three Assist Chips beneath its response."
              caption={<><strong>1. Suggested options</strong><br />Assist Chips offer optional ways to continue the conversation.</>}
            /></li>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-flow-02-select.png"
              alt="The suggestion ‘What changed since last month?’ is highlighted in blue."
              caption={<><strong>2. Selection</strong><br />The user selects “What changed since last month?”</>}
            /></li>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-flow-03-message.png"
              alt="The selected suggestion appears as a user message; the Assist Chips are no longer displayed."
              caption={<><strong>3. User message</strong><br />The selected suggestion becomes a message in the conversation.</>}
            /></li>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-flow-04-processing.png"
              alt="Copilot displays a three-dot processing indicator beneath the user's message."
              caption={<><strong>4. Processing</strong><br />A visible indicator shows that Copilot is preparing its response.</>}
            /></li>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-flow-05-response.png"
              alt="Copilot responds with a summary of changes in revenue, accounts, deal size, and churn."
              caption={<><strong>5. Response</strong><br />Copilot adds its answer to the conversation.</>}
            /></li>
          </CaseStudySequence>
        </CaseStudyMediaStage>
      </CaseStudySection>
      <CaseStudySection {...sections[3]}>
        <p className="cs-prose">I had also created the initial visual treatment for Assist Chip, based on the contexts I understood at the time. Once product teams began integrating Copilot, new requirements started to appear.</p>
        <p className="cs-prose">A UX designer working on Visual Analytics showed me screens with several Assist Chips inside a narrow Copilot pane. The existing component was too tall. When multiple suggestions appeared, users couldn’t see all of them without scrolling.</p>
        <p className="cs-prose">I opened a Jira story, created a more compact slim variant, aligned it with our design system, and brought it back to the product designer for review.</p>
        <p className="cs-prose">Later, a designer working on Model Manager brought another need. Her early sketches explored suggestions that were even more compact and, in some contexts, visually quieter.</p>
        <p className="cs-prose">Those conversations resulted in two additional variants: Small and Subtle. I developed the component specifications from those ideas, using the established FUI typography, spacing, states, tokens, and accessibility patterns.</p>
        <p className="cs-prose">For the visual styling, I made a point of reusing some conventions from the existing Button system because they made the component easier for designers and developers to understand.</p>
        <CaseStudyFigure
          wide
          src="/images/portfolio/assist-chip-tokens.webp"
          alt="UI specifications for Standard, Slim, Small, and Subtle Assist Chips, showing annotated anatomy, interaction states, and design-token references."
          caption="UI specification excerpt showing anatomy, interaction states, and design-token references for the Standard, Slim, Small, and Subtle Assist Chip variants."
        />
        <CaseStudyMediaStage>
          <CaseStudyComparison>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-variant-standard.png"
              alt="Standard Assist Chips displayed as three rounded, raised suggestion controls."
              caption={<><strong>Standard</strong><br />Rounded suggestion controls with a raised visual treatment.</>}
            /></li>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-variant-slim.png"
              alt="Slim Assist Chips displayed with flatter borders and less vertical padding."
              caption={<><strong>Slim</strong><br />A flatter treatment with reduced vertical padding.</>}
            /></li>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-variant-small.png"
              alt="Small Assist Chips displayed as three compact suggestion controls."
              caption={<><strong>Small</strong><br />Compact controls with a tighter vertical arrangement.</>}
            /></li>
            <li><CaseStudyFigure
              src="/images/portfolio/assist-chip-variant-subtle.png"
              alt="Subtle Assist Chips displayed as text suggestions with leading arrows and no surrounding boxes."
              caption={<><strong>Subtle</strong><br />Text-led suggestions with directional cues instead of surrounding boxes.</>}
            /></li>
          </CaseStudyComparison>
        </CaseStudyMediaStage>
      </CaseStudySection>
      <CaseStudySection {...sections[4]}>
        <p className="cs-prose">Looking back, Jessica and I approached the work more naively than we realized at the time. We were learning as quickly as we could, and a component that initially seemed straightforward turned out to involve far more decisions than we expected.</p>
        <p className="cs-prose">When I took over the component, there were still requirements to work through. Questions surfaced as I developed the specifications, talked with developers, and saw designers use the components in their product designs. We had to keep revisiting decisions as we learned more.</p>
        <p className="cs-prose">Assist Chip was one of 15 Copilot components I worked on, and I was frequently moving between them. Development was also at different stages across the components, even as there was considerable urgency to get AI capabilities into products.</p>
        <p className="cs-prose">That is part of what I want this case study to convey: how the work actually developed, including the uncertainty, collaboration, and revisions along the way.</p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
