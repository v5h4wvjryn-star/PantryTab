import LegalLayout from '../components/LegalLayout';

const h2 = 'text-xl font-bold text-gray-900 mt-10 mb-3 pb-2 border-b border-gray-200';
const h3 = 'text-base font-semibold text-gray-800 mt-5 mb-2';
const p = 'text-gray-700 mb-3 leading-relaxed';
const ul = 'list-disc pl-6 mb-3 space-y-1 text-gray-700';
const warn = 'text-gray-900 font-bold mb-3 leading-relaxed';

export default function RefundCancellationPolicy() {
  return (
    <LegalLayout title="Refund &amp; Cancellation Policy" lastUpdated="February 17, 2026">

      {/* ── SECTION 1 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>1. Overview</h2>
      <p className={p}>
        {/* TODO: Add overview / intro paragraph */}
      </p>

      {/* ── SECTION 2 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>2. Subscription Plans</h2>
      <p className={p}>
        {/* TODO: Describe subscription tiers and billing cycles */}
      </p>

      {/* ── SECTION 3 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>3. Free Trial</h2>
      <p className={p}>
        {/* TODO: Free trial terms */}
      </p>

      {/* ── SECTION 4 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>4. Cancellation</h2>
      <p className={p}>
        {/* TODO: How to cancel, when cancellation takes effect */}
      </p>

      {/* ── SECTION 5 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>5. Refund Eligibility</h2>
      <p className={p}>
        {/* TODO: Refund eligibility criteria */}
      </p>

      {/* ── SECTION 6 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>6. How to Request a Refund</h2>
      <p className={p}>
        {/* TODO: Refund request process */}
      </p>

      {/* ── SECTION 7 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>7. Non-Refundable Items</h2>
      <p className={p}>
        {/* TODO: List non-refundable charges */}
      </p>

      {/* ── SECTION 8 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>8. Billing Disputes</h2>
      <p className={p}>
        {/* TODO: How to dispute a charge */}
      </p>

      {/* ── SECTION 9 ─────────────────────────────────────────────────── */}
      <h2 className={h2}>9. Changes to This Policy</h2>
      <p className={p}>
        {/* TODO: Policy change notice */}
      </p>

      {/* ── SECTION 10 ────────────────────────────────────────────────── */}
      <h2 className={h2}>10. Contact Us</h2>
      <p className={p}>
        {/* TODO: Contact info */}
      </p>

    </LegalLayout>
  );
}
