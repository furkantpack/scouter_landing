'use client';

import { useId, useState } from 'react';
import { RiCheckboxCircleFill } from '@remixicon/react';
import Link from 'next/link';

const plans = [
  {
    name: 'Ücretsiz plan',
    description: 'Günlük işlerini yöneten bağımsız çalışanlar ve bireysel kullanıcılar için.',
    monthly: '₺0',
    yearly: '₺0',
    features: ['Kolay uygulama bağlantıları', 'Hızlı entegrasyon kurulumu', 'Gerçek zamanlı veri senkronizasyonu'],
    featured: false,
  },
  {
    name: 'İşletme planı',
    description: 'Ödeme, tahsilat ve ekip süreçlerini yöneten küçük işletmeler için.',
    monthly: '₺49',
    yearly: '₺470',
    features: ['Çok kullanıcılı erişim', 'Yerel ve uluslararası transferler', 'Fatura ve ödeme talepleri', 'Sanal ve fiziksel kartlar', '10+ para birimi hesabı', 'Öncelikli e-posta ve sohbet desteği'],
    featured: true,
  },
  {
    name: 'Global plan',
    description: 'Finans ve uyumluluk ihtiyaçları olan büyüyen şirketler için.',
    monthly: '₺399',
    yearly: '₺3.830',
    features: ['Özel müşteri yöneticisi', 'Özel limit ve yetkiler', 'Gerçek zamanlı işlem raporları', 'Gelişmiş API erişimi', 'Otomatik ödeme ve bordro', 'Uyumluluk başlangıç desteği', 'Çoklu şirket hesabı', 'SOC 2 Type II ve GDPR uyumluluğu'],
    featured: false,
  },
];

export default function FlexiblePricing() {
  const [isYearly, setIsYearly] = useState(false);
  const switchId = useId();

  return (
    <section className="flexible-pricing" aria-labelledby="flexible-pricing-title">
      <div className="flexible-pricing-heading">
        <div>
          <span>Her aşama için esnek planlar</span>
          <h2 id="flexible-pricing-title">Modern ekipler için akıllı fiyatlandırma</h2>
        </div>
        <div className="flexible-pricing-settings">
          <p>Büyüyen ekiplerin ihtiyaçlarına göre ölçeklenen fiyatlar.</p>
          <label htmlFor={switchId}>
            <button
              type="button"
              id={switchId}
              role="switch"
              aria-checked={isYearly}
              className={isYearly ? 'is-active' : ''}
              onClick={() => setIsYearly((value) => !value)}
            >
              <i />
            </button>
            <strong>%20 tasarruf et</strong> yıllık ödemede
          </label>
        </div>
      </div>

      <div className="flexible-plan-grid">
        {plans.map((plan) => (
          <article className={`flexible-plan-card ${plan.featured ? 'is-featured' : ''}`} key={plan.name}>
            <div className="flexible-plan-info">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>
            <div className="flexible-plan-price">
              <strong>{isYearly ? plan.yearly : plan.monthly}</strong>
              {plan.monthly !== '₺0' && <span>/{isYearly ? 'yıl' : 'ay'}</span>}
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}><RiCheckboxCircleFill />{feature}</li>
              ))}
            </ul>
            <Link href="#">Ücretsiz başla</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
