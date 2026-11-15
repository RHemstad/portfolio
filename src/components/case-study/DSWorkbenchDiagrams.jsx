import { useId } from 'react';
import { ArrowDown, ArrowLeft, CornerLeftUp } from 'lucide-react';
import './ds-workbench-diagrams.css';

function DiagramStep({ title, children, emphasis = false, last = false }) {
  return (
    <li className="wb-diagram-step">
      <div className={`wb-diagram-node${emphasis ? ' wb-diagram-node--emphasis' : ''}`}>
        <h4>{title}</h4>
        {children}
      </div>
      {!last && <ArrowDown className="wb-diagram-connector" size={22} aria-hidden="true" />}
    </li>
  );
}

function ResourceCard({ title, children }) {
  return <li><strong>{title}</strong><span>{children}</span></li>;
}

export function TokenObservatoryDiagram() {
  const titleId = useId();

  return (
    <figure className="wb-diagram" aria-labelledby={titleId}>
      <h3 id={titleId}>Early Token Observatory architecture</h3>
      <ol className="wb-diagram-steps" role="list">
        <DiagramStep title="SAS internal token server">
          <p>Token Emporium JSON files · Products and Sites</p>
        </DiagramStep>
        <DiagramStep title="Retrieve and normalize">
          <p>JavaScript scripts download files and standardize their structure</p>
        </DiagramStep>
        <DiagramStep title="AI-ready knowledge base">
          <ul className="wb-diagram-resources wb-diagram-resources--three" role="list">
            <ResourceCard title="Token registry">Names, metadata, contextual values</ResourceCard>
            <ResourceCard title="Layer registry">Themes, languages, densities</ResourceCard>
            <ResourceCard title="Resolution model">Precedence and defaults</ResourceCard>
          </ul>
        </DiagramStep>
        <DiagramStep title="GitHub Copilot + reusable prompts" emphasis last>
          <p>Explain · Choose · Resolve · Analyze · Document</p>
        </DiagramStep>
      </ol>
      <figcaption>Simplified architecture reconstructed from the Token Observatory archive, showing the early knowledge-base approach.</figcaption>
    </figure>
  );
}

export function WorkbenchWorkflowDiagram() {
  const titleId = useId();

  return (
    <figure className="wb-diagram" aria-labelledby={titleId}>
      <h3 id={titleId}>An AI-supported design workflow</h3>
      <div className="wb-diagram-cycle">
        <ol className="wb-diagram-steps wb-diagram-steps--cycle" role="list">
          <DiagramStep title="Designer">
            <p>Defines the task and evaluates the outcome</p>
          </DiagramStep>
          <DiagramStep title="Resources supporting the task">
            <ul className="wb-diagram-resources" role="list">
              <ResourceCard title="Project instructions">Constraints and conventions</ResourceCard>
              <ResourceCard title="Design knowledge">Tokens, components, patterns</ResourceCard>
              <ResourceCard title="Skills and prompts">Reusable procedures and tasks</ResourceCard>
              <ResourceCard title="Implementation resources">Filament packages and tools</ResourceCard>
            </ul>
          </DiagramStep>
          <DiagramStep title="GitHub Copilot in DS Workbench" emphasis>
            <p>AI-assisted task execution and prototyping</p>
          </DiagramStep>
          <DiagramStep title="Review, refine, and share" last>
            <p>Design judgment, validation, and iteration</p>
          </DiagramStep>
        </ol>
        <ArrowLeft className="wb-diagram-return-arrow" size={20} aria-hidden="true" />
      </div>
      <p className="wb-diagram-feedback"><CornerLeftUp size={20} aria-hidden="true" />Return to the designer to refine the task and repeat as needed.</p>
      <figcaption>Conceptual model of the resources and review practices supporting DS Workbench.</figcaption>
    </figure>
  );
}
