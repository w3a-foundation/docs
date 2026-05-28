import Link from 'next/link';

const overview = [
  { name: 'Overview', desc: 'What W3A is, the six-layer value chain, the federation model, how to read these docs', href: '/docs' },
  { name: 'Membership', desc: 'Rights, obligations, admission process, cross-link to /join on w3a.foundation', href: '/docs/membership' },
  { name: 'Governance', desc: 'Coordination layer scope, director slate, intervention triggers, dispute resolution', href: '/docs/governance' },
];

const stack = [
  { name: 'Substrate', desc: 'Quasar consensus, PQ primitives, Ringtail, FHE precompiles, threshold-MPC custody, ERC-3643 / T-REX, LX DEX, AIVM A-Chain', href: '/docs/substrate' },
  { name: 'IP & Licensing', desc: 'Three-tier LEL / LRL-PR / SCLA model, the closed luxcpp/ GPU tier, bifurcated licensor posture', href: '/docs/ip-licensing' },
  { name: 'Capital Pool', desc: 'Three-layer architecture: substrate-coordination, member-operating, acquisition-spawn. Treasury policy', href: '/docs/capital-pool' },
];

const properties = [
  { name: 'Decentralization & Resilience', desc: 'Non-custodial sovereignty, DeFi reach, no-single-point-of-failure, the 2023 regional-banking contrast', href: '/docs/decentralization-resilience' },
  { name: 'The Bank for AI', desc: 'x402 native settlement, agent economics, Hanzo + Zoo + AIVM contributions, algo-trading benchmarks', href: '/docs/bank-for-ai' },
  { name: 'Unified Liquidity', desc: 'Collapse geographic + asset-class + payment-rail fragmentation into one substrate', href: '/docs/unified-liquidity' },
];

const onboarding = [
  { name: 'Onboarding Guide', desc: 'SPA template → integration brief → IAM tenant → KMS root-key → brand config → CI/CD → soft launch → GA', href: '/docs/onboarding-guide' },
];

const sections = [
  { title: 'Overview', items: overview },
  { title: 'Technical Substrate', items: stack },
  { title: 'Structural Properties', items: properties },
  { title: 'Becoming a Member', items: onboarding },
];

export default function HomePage() {
  return (
    <main className="pb-6 md:pb-12">
      <section className="relative flex flex-col items-center text-center mx-auto w-full max-w-[1400px] px-6 pt-24 md:pt-36 pb-16 md:pb-24">
        <div className="absolute inset-x-0 top-0 h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(600px 300px ellipse at center top, rgba(255,255,255,0.04), transparent 70%)' }} />
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-sm text-[#737373] mb-6">
          Substrate · IP · Distribution · Liquidity · Banking · Capital
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          Web3 Alliance
        </h1>
        <p className="text-[#737373] md:text-xl max-w-2xl mb-8">
          A federation of licensed banks, brokers, transfer agents, fund managers, and
          crypto-asset service providers operating under one post-quantum substrate, one
          multi-tier licensing regime, and one coordination layer.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/docs" className="rounded-lg bg-[#fafafa] text-[#0a0a0a] px-6 py-3 text-sm font-medium hover:bg-white transition-colors">
            Read the Docs
          </Link>
          <Link href="/docs/membership" className="rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors">
            Membership
          </Link>
          <Link href="/docs/substrate" className="rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors">
            Substrate
          </Link>
          <Link href="/docs/onboarding-guide" className="rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors">
            Onboarding
          </Link>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12 space-y-16">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
            <div className={`grid grid-cols-1 ${section.items.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : section.items.length >= 3 ? 'sm:grid-cols-3' : section.items.length >= 2 ? 'sm:grid-cols-2' : ''} gap-3 mt-4`}>
              {section.items.map((item) => (
                <Link key={item.name} href={item.href}
                  className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 min-h-[120px] hover:border-white/20 hover:bg-white/[0.05] transition-all">
                  <div>
                    <div className="text-sm font-semibold text-[#fafafa] mb-1">{item.name}</div>
                    <div className="text-xs text-[#525252] group-hover:text-[#737373] transition-colors leading-relaxed">{item.desc}</div>
                  </div>
                  <span className="text-xs text-[#525252] group-hover:text-[#737373] mt-3">View docs →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="relative flex flex-col items-center text-center py-16">
          <h2 className="text-3xl font-bold mb-3">Apply for membership</h2>
          <p className="text-[#737373] text-sm mb-6 max-w-lg">
            Member admission is a contracted IP-licensing event. Onboarding runs the
            partnership-template SPA, IAM provisioning, KMS root-key seal, brand
            bootstrap, and CI/CD wiring through to soft launch and GA.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/docs/onboarding-guide" className="rounded-lg bg-[#fafafa] text-[#0a0a0a] px-6 py-3 text-sm font-medium hover:bg-white transition-colors">
              Onboarding Guide
            </Link>
            <Link href="/docs/ip-licensing" className="rounded-lg border border-white/[0.08] px-6 py-3 text-sm font-medium hover:bg-white/[0.05] transition-colors">
              IP & Licensing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
