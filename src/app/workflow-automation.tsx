import {
  RiFileList3Line,
  RiInboxArchiveLine,
  RiPriceTag3Line,
  RiRouteLine,
} from '@remixicon/react';
import Link from 'next/link';

const workflows = [
  {
    icon: RiFileList3Line,
    text: <>Prepare an audit process from an invoice and bill of lading.</>,
  },
  {
    icon: RiPriceTag3Line,
    text: <>Create a warehouse receipt from master and stop bills of lading.</>,
  },
  {
    icon: RiInboxArchiveLine,
    text: <>Send customers a report with active shipments and current tracking.</>,
  },
  {
    icon: RiRouteLine,
    text: <>Route exceptions to the right team and keep every system in sync.</>,
  },
];

export default function WorkflowAutomation() {
  return (
    <section className="workflow-section">
      <div className="workflow-surface">
        <div className="workflow-track-wrap">
          <div className="workflow-track">
            {[...workflows, ...workflows].map((workflow, index) => {
              const Icon = workflow.icon;
              return (
                <article className="workflow-card" key={`${index}-${Icon.displayName ?? 'workflow'}`}>
                  <Icon />
                  <p>{workflow.text}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="workflow-bottom">
          <h2>
            <span>Workflow Automation.</span>
            <span>Built for modern teams.</span>
          </h2>

          <div className="workflow-copy">
            <p>
              Automate operations from the first request to the final handoff.
              Manage exceptions and view your data across every connected system.
            </p>
            <Link href="/">Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
