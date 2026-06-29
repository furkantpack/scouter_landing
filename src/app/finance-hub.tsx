import {
  RiArrowRightUpLongLine,
  RiCheckboxCircleFill,
  RiLayoutGridLine,
  RiNotification3Line,
  RiPlayFill,
  RiSearchLine,
  RiSettings3Line,
} from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const financeBrands = [
  { name: 'Synergy', src: 'https://alignui.com/images/blocks/hero-1-brand-1.svg' },
  { name: 'Horizon', src: 'https://alignui.com/images/blocks/hero-1-brand-2.svg' },
  { name: 'Catalyst', src: 'https://alignui.com/images/blocks/hero-1-brand-3.svg' },
  { name: 'Phoenix', src: 'https://alignui.com/images/blocks/hero-1-brand-4.svg' },
  { name: 'Solaris', src: 'https://alignui.com/images/blocks/hero-1-brand-5.svg' },
];

const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

export default function FinanceHub() {
  return (
    <section className="finance-hub-section" aria-labelledby="finance-hub-title">
      <div className="finance-hub-content">
        <header className="finance-hub-header">
          <div className="finance-hub-label"><b>NEW</b><span>All accounts, global access</span><RiArrowRightUpLongLine /></div>
          <h2 id="finance-hub-title">All your finance data, one hub</h2>
          <p>Manage transfers, insights, and audits seamlessly in one place for smarter financial control.</p>
          <div className="finance-hub-actions">
            <Link href="#">Launch the portal <RiArrowRightUpLongLine /></Link>
            <button type="button"><RiPlayFill />View the process</button>
          </div>
          <ul className="finance-hub-benefits">
            <li><RiCheckboxCircleFill />Monitor live fund flow</li>
            <li><RiCheckboxCircleFill />Review monthly outflows</li>
            <li><RiCheckboxCircleFill />Detect unusual activity</li>
          </ul>
        </header>

        <div className="finance-hub-stage">
          <div className="finance-hub-tabs" aria-label="Portal view">
            <span><RiLayoutGridLine />Overview</span>
            <span className="is-active"><RiSettings3Line />Settings</span>
            <span>↔ Payment</span>
          </div>

          <div className="finance-dashboard">
            <aside className="finance-sidebar">
              <div className="finance-logo"><i>A</i><span><b>Apex</b><small>Finance &amp; Banking</small></span></div>
              <small className="finance-nav-label">MAIN</small>
              <nav aria-label="Finance portal">
                <span className="is-active">▦ Dashboard</span>
                <span>▤ My Cards</span>
                <span>⇄ Transfer</span>
                <span>◷ Transactions</span>
                <span>▣ Payments</span>
                <span>◎ Exchange</span>
              </nav>
              <small className="finance-nav-label">OTHERS</small>
              <nav><span>⚙ Settings</span><span>◉ Support</span></nav>
              <div className="finance-profile"><i>AT</i><span><b>Arthur Taylor</b><small>arthur@alignui.com</small></span></div>
            </aside>

            <div className="finance-workspace">
              <div className="finance-toolbar">
                <div className="finance-welcome"><i>AT</i><span><b>Arthur Taylor</b><small>Welcome back to Apex 👋</small></span></div>
                <div className="finance-tools"><RiSearchLine /><RiNotification3Line /><button type="button">Move Money ↗</button></div>
              </div>

              <div className="finance-dashboard-grid">
                <section className="finance-panel finance-card-panel">
                  <header><b>▣ My Cards</b><button type="button">＋ Add Card</button></header>
                  <div className="finance-card-tabs"><span>Virtual (2)</span><span>Physical</span></div>
                  <div className="finance-bank-card">
                    <div><i>A</i><span>◉ Active</span><b>●●</b></div>
                    <small>Savings Card</small>
                    <strong>$16,058.94</strong>
                    <span>Card Number <b>•••• 1234</b></span>
                    <span>Expiry Date <b>06/27</b></span>
                    <span>Spending Limit <b>$12,000.00</b></span>
                  </div>
                  <div className="finance-transactions"><b>RECENT TRANSACTIONS</b><span><i>N</i>Netflix Cashback <strong>-$36.24</strong></span><span><i>R</i>Rental Income <strong>$800.00</strong></span><span><i>G</i>Grocery Shopping <strong>-$84.14</strong></span></div>
                </section>

                <section className="finance-panel finance-budget-panel">
                  <header><b>▥ Budget Overview</b><span>● Income &nbsp; ● Expenses &nbsp; ● Scheduled</span></header>
                  <div className="finance-kpis"><span><small>INCOME</small><b>$96,000.00</b></span><span><small>EXPENSES</small><b>$24,000.00</b></span><span><small>SCHEDULED</small><b>$14,000.00</b></span></div>
                  <div className="finance-bars" aria-label="Monthly budget chart">
                    {months.map((month, index) => <span key={`${month}-${index}`}><i style={{ height: `${52 + (index % 4) * 9}px` }} /><b>{month}</b></span>)}
                  </div>
                </section>

                <section className="finance-panel finance-summary-panel">
                  <header><b>◷ Spending Summary</b><span>Last Week⌄</span></header>
                  <div className="finance-gauge"><span><small>SPEND</small><b>$1,800.00</b></span></div>
                  <div className="finance-summary-items"><span>Shopping<b>$900.00</b></span><span>Utilities<b>$600.00</b></span><span>Others<b>$200.00</b></span></div>
                </section>

                <section className="finance-panel finance-exchange-panel">
                  <header><b>◷ Exchange</b><span>Currencies</span></header>
                  <div className="finance-currency-row"><span>🇺🇸 USD⌄</span><b>⇆</b><span>🇪🇺 EUR⌄</span></div>
                  <strong>$100.00</strong>
                  <small>Available · $16,058.94</small>
                  <button type="button">◷ Exchange</button>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="finance-trusted">
          <p>Trusted solutions for global finance</p>
          <div>{financeBrands.map((brand) => <Image key={brand.name} src={brand.src} alt={brand.name} width={106} height={24} />)}</div>
        </div>
      </div>
    </section>
  );
}
