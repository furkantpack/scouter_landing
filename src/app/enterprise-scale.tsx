import { RiCheckboxCircleFill } from '@remixicon/react';
import Image from 'next/image';
import type { ReactNode } from 'react';

const uptimeBars = Array.from({ length: 42 });
const defaultSpeedMetrics = [
  { value: '2x', label: 'Faster performance' },
  { value: '3x', label: 'Faster task views' },
  { value: '5x', label: 'Faster universal search' },
];

type EnterpriseScaleContent = {
  badge: string;
  title: ReactNode;
  cards: {
    uptime: {
      title: string;
      body: ReactNode;
      status: string;
      value: string;
      periodStart: string;
      periodEnd: string;
      visualImage?: string;
    };
    speed: {
      title: string;
      body: ReactNode;
      metrics: { value: string; label: string }[];
      visualImage?: string;
    };
    admin: {
      title: string;
      body: ReactNode;
      visualImage?: string;
      chips: {
        session: string;
        ip: string;
        user: string;
        auth: ReactNode;
        permissions: string;
        audit: string;
      };
    };
  };
};

const defaultContent: EnterpriseScaleContent = {
  badge: 'Enterprise ready',
  title: (
    <>
      Built for unmatched enterprise<br />
      scalability, security, and reliability.
    </>
  ),
  cards: {
    uptime: {
      title: '99.9% uptime guarantee',
      body: (
        <>
          Ensure your operations never skip a beat with our 99.9% uptime
          guarantee, keeping every workflow smooth and uninterrupted.
        </>
      ),
      status: 'All services online',
      value: '99.9% uptime',
      periodStart: '3 months ago',
      periodEnd: 'Today',
    },
    speed: {
      title: 'Unmatched speed and scalability',
      body: (
        <>
          Scale complex operations with responsive performance engineered
          to stay fast as your teams, data, and workflows grow.
        </>
      ),
      metrics: defaultSpeedMetrics,
    },
    admin: {
      title: 'Advanced admin tools',
      body: (
        <>
          Everything you need to protect your data, manage access,
          configure permissions, and maintain a comprehensive activity log
          is built in.
        </>
      ),
      chips: {
        session: 'Session management',
        ip: 'IP restrictions',
        user: 'Admin',
        auth: <>Google<br />and 2FA</>,
        permissions: 'Permissions',
        audit: 'Audit log',
      },
    },
  },
};

type EnterpriseScaleProps = {
  content?: EnterpriseScaleContent;
};

export default function EnterpriseScale({ content = defaultContent }: EnterpriseScaleProps) {
  return (
    <section className="enterprise-scale-section" aria-labelledby="enterprise-scale-title">
      <div className="enterprise-scale-content">
        <header className="enterprise-scale-header">
          <span className="enterprise-scale-badge"><i />{content.badge}</span>
          <h2 id="enterprise-scale-title">{content.title}</h2>
        </header>

        <div className="enterprise-scale-grid">
          <article className="enterprise-card enterprise-uptime-card">
            <div className="enterprise-card-copy">
              <h3>{content.cards.uptime.title}</h3>
              <p>{content.cards.uptime.body}</p>
            </div>
            {content.cards.uptime.visualImage ? (
              <div className="enterprise-image-visual">
                <Image
                  src={content.cards.uptime.visualImage}
                  alt={content.cards.uptime.title}
                  width={1312}
                  height={1199}
                  className="enterprise-card-image"
                />
              </div>
            ) : (
              <div className="uptime-visual" aria-label={content.cards.uptime.value}>
                <div className="uptime-panel">
                  <div className="uptime-panel-header">
                    <span><RiCheckboxCircleFill />{content.cards.uptime.status}</span>
                    <strong>{content.cards.uptime.value}</strong>
                  </div>
                  <div className="uptime-bars" aria-hidden="true">
                    {uptimeBars.map((_, index) => <i key={index} />)}
                  </div>
                  <div className="uptime-period"><span>{content.cards.uptime.periodStart}</span><span>{content.cards.uptime.periodEnd}</span></div>
                </div>
              </div>
            )}
          </article>

          <article className="enterprise-card enterprise-speed-card">
            <div className="enterprise-card-copy">
              <h3>{content.cards.speed.title}</h3>
              <p>{content.cards.speed.body}</p>
            </div>
            {content.cards.speed.visualImage ? (
              <div className="enterprise-image-visual">
                <Image
                  src={content.cards.speed.visualImage}
                  alt={content.cards.speed.title}
                  width={1312}
                  height={1199}
                  className="enterprise-card-image"
                />
              </div>
            ) : (
              <div className="speed-visual" aria-label="Performance improvements">
                {content.cards.speed.metrics.map((metric, index) => (
                  <div className="speed-meter-card" key={metric.value}>
                    <div className={`speed-meter speed-meter-${index + 1}`}>
                      <span>{metric.value}</span>
                    </div>
                    <small>{metric.label}</small>
                  </div>
                ))}
              </div>
            )}
          </article>

          <article className="enterprise-card enterprise-admin-card">
            {content.cards.admin.visualImage ? (
              <div className="enterprise-image-visual enterprise-admin-image-visual">
                <Image
                  src={content.cards.admin.visualImage}
                  alt={content.cards.admin.title}
                  width={1312}
                  height={1199}
                  className="enterprise-card-image"
                />
              </div>
            ) : (
              <div className="admin-visual" aria-label="Advanced administration controls">
                <div className="admin-network" aria-hidden="true" />
                <span className="admin-chip admin-chip-session">{content.cards.admin.chips.session}</span>
                <span className="admin-chip admin-chip-ip">{content.cards.admin.chips.ip}</span>
                <span className="admin-chip admin-chip-user">{content.cards.admin.chips.user}</span>
                <div className="admin-sheet admin-sheet-auth"><strong>{content.cards.admin.chips.auth}</strong><i /></div>
                <div className="admin-sheet admin-sheet-permissions">
                  <strong>{content.cards.admin.chips.permissions}</strong>
                  <span /><span /><span />
                </div>
                <div className="admin-sheet admin-sheet-audit"><strong>{content.cards.admin.chips.audit}</strong><span /><span /><span /></div>
              </div>
            )}
            <div className="enterprise-card-copy enterprise-admin-copy">
              <h3>{content.cards.admin.title}</h3>
              <p>{content.cards.admin.body}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
