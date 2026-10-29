import CaseStudyLayout from '../components/case-study/CaseStudyLayout';
import CaseStudyIntro from '../components/case-study/CaseStudyIntro';
import CaseStudySection from '../components/case-study/CaseStudySection';
import CaseStudyFigure from '../components/case-study/CaseStudyFigure';
import CaseStudyIndex from '../components/case-study/CaseStudyIndex';

const sections = [
  {
    "id": "understanding-the-problem",
    "title": "Understanding the Problem"
  },
  {
    "id": "semantic-naming",
    "title": "Developing a Semantic Naming System"
  },
  {
    "id": "token-infrastructure",
    "title": "From Naming Conventions to Token Infrastructure"
  },
  {
    "id": "building-token-depot",
    "title": "Building Token Depot"
  },
  {
    "id": "token-emporium",
    "title": "Creating Token Emporium"
  },
  {
    "id": "evolving-the-architecture",
    "title": "Evolving the Architecture"
  },
  {
    "id": "outcomes",
    "title": "Outcomes and Impact"
  }
];

export default function TokenArchitecture() {
  return (
    <CaseStudyLayout index={<CaseStudyIndex sections={sections} />} intro={
      <CaseStudyIntro eyebrow="Token Architecture · SAS · 2021–present" title="Building a Shared Language for Design and Development">
        <blockquote className="cs-epigraph">
          <p>I learn by going where I have to go.</p>
          <p className="cs-epigraph-attribution">
            — Theodore Roethke, <cite>The Waking</cite>
          </p>
        </blockquote>
        <p className="cs-prose">In 2021, I was asked to document the naming conventions for our product design tokens. The problem was that we didn't have a consistent convention to document.</p>
        <p className="cs-prose">What began as an effort to make sense of nearly 1,000 tokens eventually led to a new naming system, a shared infrastructure for managing and distributing tokens, and a tool for exploring them. Along the way, the work also changed how our designers and developers collaborated. What started as a relatively straightforward assignment has continued to expand and evolve as the needs of our design system have grown.</p>
      </CaseStudyIntro>
    }>
      <CaseStudySection {...sections[0]}>
        <p className="cs-prose">I started by examining our existing token collection, sorting and grouping tokens in Figma to see if I could identify a recognizable naming pattern.</p>
        <p className="cs-prose">It quickly became apparent that documenting the existing conventions would be difficult. I found inconsistent terminology, redundant tokens, and numerous outliers. Some tokens had different names despite representing the same purpose, while others shared values but served different purposes. Our naming conventions didn't consistently distinguish between them.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_original_token_analysis.webp"
          alt="Original secondary, neutral, and primary color tokens sorted into essential values, incidental values, and outliers."
          caption="Sorting the existing collection into patterns and outliers exposed inconsistencies that a naming guide alone couldn’t resolve."
        />
        <p className="cs-prose">Other tokens used names that described their visual appearance rather than their intended purpose. For example, a token named dark made little sense when switching between light and dark themes. I also discovered inconsistencies across token categories, including color, typography, spacing, and interactive states.</p>
        <p className="cs-prose">The more I examined the collection, the clearer it became that renaming individual tokens wouldn't solve the underlying problem. We needed a standardized methodology that could accommodate our existing tokens while providing a consistent approach to naming new ones.</p>
      </CaseStudySection>
      <CaseStudySection {...sections[1]}>
        <p className="cs-prose">My primary objectives were to establish a naming system that would:</p>
        <ul className="cs-prose">
          <li>Be semantic and consistent: Communicate a token's purpose and context through a recognizable naming pattern.</li>
          <li>Be scalable and flexible: Accommodate new tokens, components, and requirements without repeatedly restructuring the convention.</li>
          <li>Support shared understanding: Create terminology that designers and developers could consistently interpret, recognize, and reuse.</li>
        </ul>
        <p className="cs-prose">I eventually developed a naming framework organized into four groups:</p>
        <ul className="cs-prose">
          <li>Base: The foundation of a token name, describing its category, concept, and property.</li>
          <li>Modifier: Additional information that distinguishes variants, states, scales, or modes.</li>
          <li>Object: Identifiers for tokens associated with specific components, component groups, or elements.</li>
          <li>Namespace: Identifiers that establish broader context, such as the system, theme, or domain.</li>
        </ul>
        <p className="cs-prose">The approach was intentionally flexible. Not every token required every naming level. Instead, a token could begin with a broadly reusable definition and become more specific as needed.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_naming_taxonomy_1.webp"
          alt="Naming taxonomy showing namespace, object, base, and modifier groups with their naming levels and examples."
          caption="Four naming groups—namespace, object, base, and modifier—provided a framework for moving from shared definitions to more specific contexts."
        />
        <p className="cs-prose">The framework also supported relationships between tokens through aliasing. A component-specific token, for example, could reference a shared semantic token, which in turn referenced a core value. This allowed us to reuse design decisions while retaining the flexibility to change individual implementations without affecting unrelated components.</p>
        <p className="cs-prose">With a proposed framework established, I presented my findings to management. I explained why documenting our existing conventions wasn't sufficient, demonstrated the inconsistencies I had uncovered, and outlined the benefits of adopting a more systematic naming approach.</p>
        <p className="cs-prose">The proposal received approval, providing us with a consistent methodology for refactoring our existing tokens and creating new ones.</p>
      </CaseStudySection>
      <CaseStudySection {...sections[2]}>
        <p className="cs-prose">As the token renaming progressed, I began thinking about another problem: how we were storing and maintaining all these definitions.</p>
        <p className="cs-prose">Rather than continuing to manage tokens primarily through Figma and spreadsheets, why couldn't we maintain them in a centralized repository and generate the formats our developers needed, such as CSS, Sass, or JavaScript variables?</p>
        <p className="cs-prose">I had been reading about tools such as Style Dictionary, Theo, and Tokens Studio, which offered different approaches to managing and transforming design tokens. While I wasn't confident that adopting an external solution would be feasible within our enterprise environment, I was interested in understanding how these systems worked.</p>
        <p className="cs-prose">The more I researched, the more I recognized the potential of JSON as a way to organize and maintain our token definitions independently of the tools that consumed them.</p>
        <p className="cs-prose">I decided to experiment with the idea myself.</p>
        <p className="cs-prose">Using online tutorials and other resources, I learned JSON and created a GitHub repository where I began translating our tokens into structured JSON files. It was an initial proof of concept, but it allowed me to explore how token definitions could be stored, organized, and maintained outside Figma.</p>
        <p className="cs-prose">With the inclusion of some configuration files, including some token transformer scripts, I was able to export them to different platforms including Figma.</p>
        <p className="cs-prose">That experiment became the foundation for an idea I called Token Warehouse: a centralized source for our design tokens that could support a broader process for generating and distributing the token packages our products needed. Upon presenting this proof of concept to upper management, I secured support to develop this idea into our broader ecosystem.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_json_examples.webp"
          alt="Token Warehouse repository showing themed color aliases and core size definitions with values, types, and usage metadata."
          caption="Structured JSON definitions gave us a way to maintain token values, references, and usage information outside Figma."
        />
      </CaseStudySection>
      <CaseStudySection {...sections[3]}>
        <p className="cs-prose">With my initial JSON proof of concept in place, I began collaborating with another designer, Mark Malek, and developer Nick Barnette to turn the idea into a working infrastructure that could support SAS's enterprise environment.</p>
        <p className="cs-prose">Together, we developed Token Depot, a shared GitHub-based ecosystem consisting of two principal tools. Token Warehouse would serve as the central repository for our JSON token definitions, while Token Exchange would process those definitions and generate packages developers could consume through SAS's npm ecosystem.</p>
        <p className="cs-prose">This introduced a different way of working. Designers continued creating and refining visual styles in Figma, but we also took ownership of maintaining their corresponding definitions in Token Warehouse. Changes could then be processed through the build pipeline and delivered as updated packages for development teams.</p>
        <p className="cs-prose">For designers, this required learning new skills. Working with JSON, Git, and repository workflows was initially unfamiliar, but it also gave us more direct ownership of the design decisions that ultimately appeared in our products.</p>
        <p className="cs-prose">For a period, we also used Tokens Studio to connect our token definitions with Figma Variables, although we eventually discontinued the plugin because of reliability issues.</p>
        <p className="cs-prose">Perhaps the most meaningful outcome was the change in how our teams worked together. Token Depot became a shared responsibility between design and development, fostering a closer collaboration that continues today.</p>
      </CaseStudySection>
      <CaseStudySection {...sections[4]}>
        <p className="cs-prose">With Token Depot established, another problem became increasingly apparent: how could people easily find, inspect, and understand the tokens available to them?</p>
        <p className="cs-prose">Designers could reference styles and values in Figma, but developers and testers often needed a more accessible way to look up token definitions. We maintained spreadsheets for this purpose, but keeping them updated was cumbersome, and finding the right information wasn't always easy.</p>
        <p className="cs-prose">I envisioned a website that would make our token collection easier to explore, with searchable names, resolved values, and visual representations of properties such as colors, typography, spacing, and shadows.</p>
        <p className="cs-prose">I had experience with HTML, CSS, and JavaScript, but knew I needed stronger development skills to build the application I had in mind. I enrolled in a six-month online React bootcamp and began independently designing and developing what became Token Emporium.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_te_homepage.webp"
          alt="Token Emporium homepage with navigation for brand, product, site, and graph tokens."
          caption="Token Emporium gave the token collection a browsable home, organized around the categories people needed to reference."
        />
        <p className="cs-prose">My goal was to make the information both accessible and useful: organizing tokens into recognizable categories, providing visual previews wherever possible, and allowing people to quickly find and understand the values they needed across different themes and contexts.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_te_color_tokens.webp"
          alt="Token Emporium table of action background control colors, including alert, disabled, hover, normal, and selected states."
          caption="Token names, resolved values, visual swatches, and usage descriptions brought the meaning of each token into one view."
        />
        <p className="cs-prose">I initially developed Emporium in my own work GitHub repository. After demonstrating the application, management recognized its value and supported incorporating it into Token Depot.</p>
        <p className="cs-prose">That meant rewriting parts of the application to function within the shared infrastructure. During this transition, Nick reviewed my React code and suggested improvements as my development skills continued to grow.</p>
        <p className="cs-prose">What began as a personal solution to the frustration of maintaining spreadsheets became a widely used internal resource for designers, developers, and others working with the design system.</p>
      </CaseStudySection>
      <CaseStudySection {...sections[5]}>
        <p className="cs-prose">As our design system matured, Token Depot needed to accommodate increasingly complex requirements. One particularly significant challenge was supporting multiple dimensions of design tokens, including theme, density, and language.</p>
        <p className="cs-prose">The initial request for density support came from a data-intensive application whose users wanted more information displayed within the available screen space. Supporting compact and spacious layouts meant reconsidering how our tokens defined spacing, component dimensions, typography, icons, and other visual properties.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_three_density_scale.webp"
          alt="The same form shown in low, medium, and high density, with explanations of spacing and component size changes."
          caption="Three density modes illustrated how spacing and component dimensions could adapt to different information needs."
        />
        <p className="cs-prose">Mark and I began by evaluating which token categories needed to respond to density changes and how those adjustments could maintain consistency, readability, and accessibility across products.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_tokens-impacted.webp"
          alt="Token properties grouped by whether they remain shared or change with density or theme."
          caption="Mark and I examined which token properties should remain shared and which needed to respond to theme or density."
        />
        <p className="cs-prose">Typography introduced an especially difficult constraint. Our standard font size was 14px, reducing to 12px in compact mode. However, certain languages, including Chinese, required larger default font sizes and line heights to preserve legibility.</p>
        <p className="cs-prose">This created conflicts between density and language-specific typography. Ideally, each density mode would adjust typography appropriately for every language. But our existing approach couldn't fully accommodate those combinations. We had to work within those limitations, prioritizing legibility even when density switching couldn't produce the same visual changes across every locale.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_language-groups.png"
          alt="Interface examples comparing Chinese, Western European and Slavic, Middle Eastern and East Asian, and global diverse language groups."
          caption="Language requirements added another dimension: typography needed to remain legible across scripts while accommodating changes in density."
        />
        <p className="cs-prose">The larger challenge was architectural. Our JSON files had previously been organized primarily around themes. Adding independent density and language requirements meant we needed a more flexible, multidimensional structure rather than maintaining separate sets of tokens for every possible combination.</p>
        <p className="cs-prose">I was tasked with restructuring the JSON architecture and adopted a domain-based approach. Shared foundational tokens were organized separately from contextual definitions for themes, languages, and densities. Manifest files controlled the order in which definitions were applied: theme, language, density, and finally language-group overrides. Language-specific adjustments occurred at two stages, allowing us to establish values before density was applied and override density values where language requirements took precedence.</p>
        <CaseStudyFigure wide
          src="/images/portfolio/td_order_of_json_files.webp"
          alt="Simplified file layering diagram showing base styles followed by theme, density, and locale overrides."
          caption="Shared foundations were combined with contextual overrides. This diagram simplifies the sequence; in implementation, language overrides occurred both before and after density."
        />
        <p className="cs-prose">This allowed us to maintain common definitions while introducing targeted overrides for specific contexts. The structure also needed to remain compatible with Figma Variables and the existing Token Exchange pipeline.</p>
        <p className="cs-prose">Once the architecture was updated, the revised definitions were incorporated into our central repository and made available through the development pipeline. We documented the changes and conducted workshops to help teams understand and adopt the new structure.</p>
        <p className="cs-prose">The work reinforced an important principle: our token architecture needed to accommodate changing requirements without forcing us to rebuild the system each time a new dimension was introduced.</p>
        <p className="cs-prose">More recently, I've begun exploring how our token definitions can better support AI-assisted design and development. This involves extending token metadata beyond names and values to describe intent, usage, relationships, and contextual information.</p>
        <p className="cs-prose">I've completed the initial research and presented a proposal to management, which has been approved. The next phase involves implementing the metadata changes so AI-assisted tools can interpret our design tokens with greater accuracy and context.</p>
      </CaseStudySection>
      <CaseStudySection {...sections[6]}>
        <p className="cs-prose">When I began this project, I had no idea where it would lead. I was given an assignment that, after some investigation, simply wasn't feasible in its original form. Rather than reporting that back to management, I saw an opportunity to understand the underlying problem and explore a better solution.</p>
        <p className="cs-prose">There was no master plan. Each solution seemed to reveal another need. A consistent naming system led to questions about how we stored and maintained our tokens. Token Warehouse provided a centralized source, Token Exchange made those definitions deliverable, and Token Emporium made them easier to access and understand. I wasn't always certain that my ideas would work, or that I had the technical skills to implement them. But I was willing to learn, experiment, and see where they led.</p>
        <p className="cs-prose">Perhaps the most meaningful outcome was one I hadn't anticipated. For years, we'd discussed how to improve collaboration between design and development. Yet this project did more to close that gap than I ever expected. By taking ownership of Token Warehouse and participating directly in the development workflow, our design team moved beyond the traditional handoff model toward a more collaborative partnership with developers. We weren't simply documenting design decisions for someone else to implement; we were sharing responsibility for maintaining the system that delivered them.</p>
        <p className="cs-prose">Looking back, that shift in how we worked together may be the most lasting contribution of the entire project.</p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
