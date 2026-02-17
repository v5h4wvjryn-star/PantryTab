import LegalLayout from '../components/LegalLayout';

const h2 = 'text-xl font-bold text-gray-900 mt-10 mb-3 pb-2 border-b border-gray-200';
const h3 = 'text-base font-semibold text-gray-800 mt-5 mb-2';
const p = 'text-gray-700 mb-3 leading-relaxed';
const ul = 'list-disc pl-6 mb-3 space-y-1 text-gray-700';
const warn = 'text-gray-900 font-bold mb-3 leading-relaxed';

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund and Cancellation Policy" lastUpdated="February 6, 2026">

      <p className={p}>
        This Refund and Cancellation Policy applies to Pantry Tab subscriptions offered by{' '}
        <strong>Pantry Tab LLC</strong>, a Texas limited liability company ("we," "us," "our").
      </p>

      <h2 className={h2}>1. Subscription Model Overview</h2>
      <p className={p}>
        Pantry Tab operates on a <strong>paid subscription model only</strong>. There is no
        permanent free plan.
      </p>

      <h3 className={h3}>1.1 Free Trial</h3>
      <ul className={ul}>
        <li>New users receive a <strong>14-day free trial</strong> upon account creation</li>
        <li>No payment information is required to start your trial</li>
        <li>Full App features are available during the trial period</li>
        <li>
          <strong>The trial does not automatically convert to a paid subscription</strong>
        </li>
        <li>
          At the end of the trial, access to the App will be restricted until a subscription is
          purchased
        </li>
      </ul>

      <h3 className={h3}>1.2 Paid Plans</h3>
      <p className={p}>
        After the trial period ends, you must choose a paid subscription to continue using Pantry
        Tab:
      </p>
      <ul className={ul}>
        <li><strong>Monthly Plan:</strong> Billed once per month</li>
        <li><strong>Annual Plan:</strong> Billed once per year (typically offered at a discount)</li>
      </ul>
      <p className={p}>
        All prices are in U.S. Dollars (USD) and are subject to change with notice.
      </p>

      <h3 className={h3}>1.3 No Free Tier</h3>
      <p className={p}>
        There is no permanent free version of Pantry Tab. Once your 14-day trial ends, a paid
        subscription is required for access.
      </p>

      <h2 className={h2}>2. Billing and Payment</h2>

      <h3 className={h3}>2.1 Payment Processing</h3>
      <p className={p}>
        All payments are processed securely by <strong>Stripe</strong>. We do not store your
        payment card details.
      </p>

      <h3 className={h3}>2.2 Billing Date</h3>
      <ul className={ul}>
        <li>
          <strong>Monthly:</strong> You are billed on the same date each month following your
          subscription start date
        </li>
        <li>
          <strong>Annual:</strong> You are billed once per year on the anniversary of your
          subscription start date
        </li>
      </ul>

      <h3 className={h3}>2.3 Failed Payments</h3>
      <p className={p}>If your payment fails:</p>
      <ul className={ul}>
        <li>We will retry your payment method</li>
        <li>Your account access may be suspended</li>
        <li>You remain responsible for any unpaid balances</li>
        <li>We may terminate your account for repeated payment failures</li>
      </ul>

      <h2 className={h2}>3. Automatic Renewal</h2>

      <h3 className={h3}>3.1 Auto-Renewal</h3>
      <p className={warn}>
        YOUR SUBSCRIPTION AUTOMATICALLY RENEWS at the end of each billing period (monthly or
        annually) at the then-current subscription rate, unless you cancel before the renewal date.
      </p>

      <h3 className={h3}>3.2 Renewal Notification</h3>
      <p className={p}>
        We will attempt to send a renewal reminder email before your renewal date. However:
      </p>
      <ul className={ul}>
        <li><strong>You are responsible for tracking your own renewal date</strong></li>
        <li>Failure to receive a reminder email does not entitle you to a refund</li>
        <li>
          It is your responsibility to cancel before renewal if you do not wish to continue
        </li>
      </ul>

      <h3 className={h3}>3.3 California Residents</h3>
      <p className={p}>
        In compliance with California law: Your subscription will automatically renew and your
        payment method will be charged at the then-current rate unless you cancel before the renewal
        date. You may cancel at any time as described in Section 4.
      </p>

      <h2 className={h2}>4. Cancellation</h2>

      <h3 className={h3}>4.1 How to Cancel</h3>
      <p className={p}>You may cancel your subscription at any time through:</p>
      <ul className={ul}>
        <li>The App's billing settings</li>
        <li>
          Contacting us at{' '}
          <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
            support@pantrytab.com
          </a>
        </li>
        <li>Your Stripe customer portal</li>
      </ul>

      <h3 className={h3}>4.2 When Cancellation Takes Effect</h3>
      <ul className={ul}>
        <li>
          Cancellation takes effect <strong>at the end of your current paid billing period</strong>
        </li>
        <li>You retain access to the App until the end of the period you have paid for</li>
        <li><strong>No partial-period refunds are issued</strong></li>
      </ul>

      <h3 className={h3}>4.3 Your Responsibility to Cancel</h3>
      <ul className={ul}>
        <li>
          You are solely responsible for canceling your subscription before renewal
        </li>
        <li>
          We are not responsible for charges that occur because you failed to cancel in time
        </li>
        <li>Forgetting to cancel is not grounds for a refund</li>
      </ul>

      <h2 className={h2}>5. Refund Policy</h2>

      <h3 className={h3}>5.1 ALL SALES ARE FINAL</h3>
      <div className="bg-orange-50 border-l-4 border-orange-brand px-5 py-4 mb-4 rounded-r-lg">
        <p className="font-bold text-gray-900 mb-2">
          WE DO NOT OFFER REFUNDS.
        </p>
        <p className="text-gray-700 mb-2">
          All subscription fees are non-refundable, including but not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
          <li>Unused portions of a subscription period</li>
          <li>Partial months or partial years</li>
          <li>Subscriptions you forgot to cancel before renewal</li>
          <li>Subscriptions where you did not use the App</li>
          <li>Subscriptions cancelled mid-period</li>
          <li>Annual subscriptions you wish to terminate early</li>
          <li>Dissatisfaction with the App or its features</li>
          <li>Technical issues, bugs, downtime, or service interruptions</li>
          <li>Data loss, sync failures, or other App errors</li>
          <li>Failure of allergy alerts or any other App feature</li>
          <li>Change of mind after subscribing</li>
          <li>Any other reason not specifically listed in Section 5.2</li>
        </ul>
      </div>
      <p className={warn}>By subscribing, you acknowledge and agree that all payments are final.</p>

      <h3 className={h3}>5.2 Narrow Exceptions (At Our Sole Discretion)</h3>
      <p className={p}>
        We may, but are not required to, issue a refund only in the following circumstances:
      </p>
      <p className={p}><strong>a) Verified Billing Error</strong></p>
      <p className={p}>
        If you were charged an incorrect amount due to a clear technical error on our part (e.g.,
        charged twice for the same period, charged a different amount than quoted).
      </p>
      <p className={p}><strong>b) Unauthorized Charge</strong></p>
      <p className={p}>
        If you can demonstrate that your account was compromised and used without your
        authorization, and you reported it to us promptly.
      </p>
      <p className={p}>To request consideration under these exceptions:</p>
      <ul className={ul}>
        <li>
          Email{' '}
          <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
            support@pantrytab.com
          </a>{' '}
          within <strong>7 days</strong> of the charge
        </li>
        <li>Include your account email, the charge date, and documentation</li>
        <li>We will investigate and respond within 10 business days</li>
        <li>Our decision is final</li>
      </ul>
      <p className={warn}>
        We reserve the right to deny any refund request that does not meet these criteria.
      </p>

      <h3 className={h3}>5.3 Chargebacks Are Prohibited</h3>
      <p className={p}>
        Initiating a chargeback or payment dispute with your bank or credit card company for a
        charge that does not meet the narrow exceptions in Section 5.2 is a violation of these Terms
        and may result in:
      </p>
      <ul className={ul}>
        <li>Immediate and permanent account termination</li>
        <li>Being prohibited from creating future accounts</li>
        <li>Recovery action for the disputed amount plus associated fees and costs</li>
      </ul>
      <p className={p}>
        <strong>Contact us before initiating a chargeback.</strong> We can often resolve billing
        questions without a dispute.
      </p>

      <h3 className={h3}>5.4 No Refunds Because of Trial Period</h3>
      <p className={p}>
        The 14-day free trial exists specifically so you can evaluate the App before paying. For
        this reason:
      </p>
      <ul className={ul}>
        <li>
          <strong>No refunds will be given</strong> because you did not enjoy or use the App after
          your trial ended
        </li>
        <li>
          <strong>No refunds will be given</strong> because you forgot the trial was ending
        </li>
        <li>
          Completing your trial and subscribing constitutes your agreement that you had adequate
          opportunity to evaluate the App before paying
        </li>
      </ul>

      <h2 className={h2}>6. Price Changes</h2>

      <h3 className={h3}>6.1 Our Right to Change Prices</h3>
      <p className={p}>We may change subscription prices at any time.</p>

      <h3 className={h3}>6.2 Notice</h3>
      <p className={p}>
        We will provide at least <strong>30 days' notice</strong> before a price increase takes
        effect, via email or in-app notification.
      </p>

      <h3 className={h3}>6.3 Your Options</h3>
      <ul className={ul}>
        <li>Continue your subscription at the new price (acceptance by continued use)</li>
        <li>Cancel before your next renewal to avoid the new price</li>
        <li><strong>No refunds</strong> if you cancel due to a price increase</li>
      </ul>

      <h2 className={h2}>7. Plan Changes</h2>

      <h3 className={h3}>7.1 Upgrading from Monthly to Annual</h3>
      <ul className={ul}>
        <li>The annual rate will apply at your next billing cycle</li>
        <li>No immediate charge adjustment is made</li>
        <li>No refund for the remaining monthly period</li>
      </ul>

      <h3 className={h3}>7.2 Downgrading from Annual to Monthly</h3>
      <ul className={ul}>
        <li>Downgrade takes effect at the end of your current annual period</li>
        <li><strong>No refund</strong> for the remaining annual period</li>
        <li>You retain annual access until the period expires</li>
      </ul>

      <h2 className={h2}>8. Account Termination</h2>

      <h3 className={h3}>8.1 Termination by Us</h3>
      <p className={p}>
        We may terminate your account at any time for violations of our Terms of Service,
        fraudulent activity, or for any other reason at our discretion.
      </p>
      <ul className={ul}>
        <li><strong>No refund</strong> will be issued upon termination for cause</li>
        <li>You forfeit any remaining subscription time</li>
        <li>You remain liable for any unpaid amounts</li>
      </ul>

      <h3 className={h3}>8.2 Termination by You (Account Deletion)</h3>
      <ul className={ul}>
        <li>
          Deleting your account does <strong>NOT</strong> automatically cancel your subscription
        </li>
        <li>You must cancel your subscription separately to stop billing</li>
        <li><strong>No refund</strong> is provided upon account deletion</li>
        <li>You are responsible for canceling before deleting your account</li>
      </ul>

      <h2 className={h2}>9. EU and UK Residents — 14-Day Statutory Withdrawal Right</h2>

      <h3 className={h3}>9.1 Your Right to Withdraw</h3>
      <p className={p}>
        If you are in the European Union or United Kingdom, you have a statutory right to withdraw
        from your purchase within <strong>14 days</strong> of your subscription start date, provided
        you have <strong>NOT</strong> used any paid features during that period.
      </p>
      <p className={p}>
        <strong>Important:</strong> If you use the App's features after your trial ends and your
        paid subscription begins, you expressly waive your right to withdraw.
      </p>

      <h3 className={h3}>9.2 How to Exercise This Right</h3>
      <p className={p}>
        Email us at{' '}
        <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
          support@pantrytab.com
        </a>{' '}
        within 14 days of your subscription start date with:
      </p>
      <ul className={ul}>
        <li>Your name and account email address</li>
        <li>A clear statement that you wish to withdraw from the purchase</li>
        <li>The date of your subscription purchase</li>
      </ul>
      <p className={p}>
        We will process your refund within 14 days of receiving your withdrawal request.
      </p>

      <h3 className={h3}>9.3 Waiver</h3>
      <p className={p}>
        By using the App after your trial ends and your paid subscription begins, you expressly
        consent to the immediate performance of the contract and acknowledge that you lose your
        right to withdraw.
      </p>

      <h2 className={h2}>10. Taxes</h2>
      <p className={p}>
        You are responsible for any applicable sales tax, VAT, GST, or other taxes on your
        subscription. Where required by law, taxes will be calculated and added at checkout.
      </p>

      <h2 className={h2}>11. Changes to This Policy</h2>
      <p className={p}>
        We may update this Refund and Cancellation Policy at any time. Changes will be posted in
        the App and on our website. Your continued use of the App after changes constitutes
        acceptance of the updated Policy.
      </p>

      <h2 className={h2}>12. Contact</h2>
      <p className={p}>For billing questions, contact us at:</p>
      <p className={p}>
        <strong>Email:</strong>{' '}
        <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
          support@pantrytab.com
        </a>
      </p>
      <p className={p}>
        <strong>Mailing Address:</strong>
        <br />
        Pantry Tab LLC
        <br />
        729 Grapevine Hwy, Unit #3199
        <br />
        Hurst, TX 76054
      </p>
      <p className={p}>
        <strong>Response Time:</strong> We aim to respond within 5–10 business days.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 space-y-2">
        <p className="font-bold text-gray-900 leading-relaxed">
          BY SUBSCRIBING TO PANTRY TAB, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE
          TO THIS REFUND AND CANCELLATION POLICY.
        </p>
        <p className="font-bold text-gray-900">
          ALL SALES ARE FINAL. NO REFUNDS EXCEPT AS REQUIRED BY LAW.
        </p>
      </div>
    </LegalLayout>
  );
}
