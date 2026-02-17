import LegalLayout from '../components/LegalLayout';

const h2 = 'text-xl font-bold text-gray-900 mt-10 mb-3 pb-2 border-b border-gray-200';
const h3 = 'text-base font-semibold text-gray-800 mt-5 mb-2';
const p = 'text-gray-700 mb-3 leading-relaxed';
const ul = 'list-disc pl-6 mb-3 space-y-1 text-gray-700';
const warn = 'text-gray-900 font-bold mb-3 leading-relaxed';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service for Pantry Tab" lastUpdated="February 6, 2026">

      <h2 className={h2}>1. Acceptance of Terms</h2>
      <p className={p}>
        By accessing or using Pantry Tab ("the App"), you agree to be bound by these Terms of
        Service. If you do not agree to these terms, do not use the App.
      </p>
      <p className={p}>
        Pantry Tab is operated by <strong>Pantry Tab LLC</strong>, a Texas limited liability company
        ("we," "us," "our," "Company"). By using this App, you enter into a legally binding
        agreement with us.
      </p>

      <h2 className={h2}>2. Description of Service</h2>
      <p className={p}>
        Pantry Tab is a household management application that provides tools for:
      </p>
      <ul className={ul}>
        <li>Managing pantry, refrigerator, and freezer inventory</li>
        <li>Tracking grocery lists and comparing prices</li>
        <li>Managing recipes and meal plans</li>
        <li>Tracking household maintenance schedules</li>
        <li>Managing allergy information</li>
        <li>Scanning barcodes and receipts</li>
        <li>Sharing household data with other users</li>
        <li>Accessing community recipes and forums</li>
      </ul>

      <h2 className={h2}>3. USE AT YOUR OWN RISK — NO WARRANTIES</h2>
      <p className={warn}>
        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
        EXPRESS OR IMPLIED.
      </p>
      <p className={p}>You acknowledge and agree that:</p>

      <h3 className={h3}>3.1 Allergy and Health Information</h3>
      <ul className={ul}>
        <li>
          <strong>WE ARE NOT RESPONSIBLE FOR ANY ALLERGIC REACTIONS, HEALTH ISSUES, OR MEDICAL
          CONSEQUENCES</strong> arising from your use of the allergy tracking features
        </li>
        <li>
          The App's allergy alerts are <strong>NOT A SUBSTITUTE FOR MEDICAL ADVICE</strong> or
          personal vigilance
        </li>
        <li>
          <strong>YOU ARE SOLELY RESPONSIBLE</strong> for managing your own or your family's
          allergies and health conditions
        </li>
        <li>We make no guarantees about the accuracy, completeness, or reliability of allergy alerts</li>
        <li><strong>ALWAYS READ PRODUCT LABELS</strong> and verify ingredients yourself</li>
        <li>The App may fail to detect allergens or may provide false alerts</li>
      </ul>

      <h3 className={h3}>3.2 Data Accuracy and Reliability</h3>
      <ul className={ul}>
        <li>
          We make <strong>NO WARRANTIES</strong> about the accuracy, completeness, or reliability of
          any information in the App
        </li>
        <li>
          Nutritional information, prices, product data, and recipes are provided for informational
          purposes only
        </li>
        <li><strong>WE ARE NOT LIABLE</strong> for incorrect, outdated, or missing information</li>
        <li>You are responsible for verifying all information before relying on it</li>
      </ul>

      <h3 className={h3}>3.3 Data Synchronization and Loss</h3>
      <ul className={ul}>
        <li>
          We make <strong>NO GUARANTEES</strong> about data synchronization between devices or users
        </li>
        <li>
          <strong>YOUR DATA MAY BE LOST, CORRUPTED, OR FAIL TO SYNC</strong> at any time
        </li>
        <li>
          We are <strong>NOT RESPONSIBLE</strong> for any data loss, regardless of cause
        </li>
        <li>You are solely responsible for backing up any important information</li>
        <li>Household sharing features may result in data conflicts or loss</li>
      </ul>

      <h3 className={h3}>3.4 Technical Failures</h3>
      <ul className={ul}>
        <li>The App may be unavailable, slow, or malfunction at any time</li>
        <li>Features may not work as expected or may fail completely</li>
        <li>
          We are <strong>NOT LIABLE</strong> for any technical issues, outages, or failures
        </li>
        <li>
          Third-party services (barcode scanning, receipt processing, etc.) may fail or provide
          incorrect results
        </li>
      </ul>

      <h3 className={h3}>3.5 Food Safety</h3>
      <ul className={ul}>
        <li>
          The App does <strong>NOT GUARANTEE</strong> the safety or freshness of food items
        </li>
        <li>Expiration date tracking is for informational purposes only</li>
        <li>
          <strong>WE ARE NOT RESPONSIBLE</strong> for foodborne illness, spoiled food, or any health
          consequences
        </li>
        <li>You must use your own judgment about food safety</li>
      </ul>

      <h3 className={h3}>3.6 AI and Automated Features</h3>
      <p className={p}>
        The App may use artificial intelligence, machine learning, or automated systems to:
      </p>
      <ul className={ul}>
        <li>Provide recommendations</li>
        <li>Process receipts and barcodes</li>
        <li>Generate meal plans or suggestions</li>
        <li>Identify allergens or ingredients</li>
      </ul>
      <p className={p}><strong>You acknowledge and agree that:</strong></p>
      <ul className={ul}>
        <li>AI outputs are automated and may be incorrect, incomplete, or biased</li>
        <li>AI-generated recommendations are not professional advice</li>
        <li>You remain solely responsible for all decisions based on AI outputs</li>
        <li>We make no warranties about the accuracy of AI-generated content</li>
        <li>AI systems may produce unexpected or nonsensical results</li>
      </ul>

      <h3 className={h3}>3.7 No Fiduciary Duty or Professional Relationship</h3>
      <p className={warn}>
        We do not assume any fiduciary duty, duty of care, or professional obligation to users.
      </p>
      <ul className={ul}>
        <li>
          We are not your advisor, healthcare provider, nutritionist, or financial counselor
        </li>
        <li>Our relationship is solely that of a technology service provider</li>
        <li>You may not rely on us as if we owed you a professional duty</li>
        <li>Any reliance on App content is at your sole risk</li>
      </ul>

      <h2 className={h2}>4. Limitation of Liability</h2>
      <p className={warn}>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>

      <h3 className={h3}>4.1 No Liability for Damages</h3>
      <p className={warn}>
        WE SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
        PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
      </p>
      <ul className={ul}>
        <li>Allergic reactions or health complications</li>
        <li>Food poisoning or foodborne illness</li>
        <li>Data loss or corruption</li>
        <li>Financial losses from incorrect pricing or shopping information</li>
        <li>Property damage</li>
        <li>Lost time or opportunities</li>
        <li>Any other damages of any kind</li>
      </ul>

      <h3 className={h3}>4.2 Maximum Liability Cap</h3>
      <p className={p}>
        Our total liability to you for any claims arising from your use of the App shall not exceed
        the amount you paid us in the 12 months prior to the claim, or $50, whichever is less.
      </p>

      <h3 className={h3}>4.3 Exclusions Apply Even If</h3>
      <p className={p}>These limitations apply even if:</p>
      <ul className={ul}>
        <li>We were advised of the possibility of such damages</li>
        <li>Any remedy fails of its essential purpose</li>
        <li>The damages were foreseeable</li>
      </ul>

      <h2 className={h2}>5. User Accounts and Security</h2>

      <h3 className={h3}>5.1 Account Creation</h3>
      <ul className={ul}>
        <li>You must provide accurate information when creating an account</li>
        <li>You are responsible for maintaining the confidentiality of your password</li>
        <li>You are responsible for all activities under your account</li>
        <li>You must be at least 13 years old to use the App</li>
      </ul>

      <h3 className={h3}>5.2 Household Sharing</h3>
      <ul className={ul}>
        <li>
          When you join or create a household, other household members can view and edit shared data
        </li>
        <li>You are responsible for managing who has access to your household</li>
        <li>We are not responsible for unauthorized access by household members</li>
        <li>
          Removing a member from your household does not delete their copies of shared data
        </li>
      </ul>

      <h2 className={h2}>6. User-Generated Content</h2>

      <h3 className={h3}>6.1 Your Content</h3>
      <ul className={ul}>
        <li>You retain ownership of content you create (recipes, posts, comments)</li>
        <li>
          By sharing content publicly in the Marketplace or Community, you grant us a worldwide,
          non-exclusive, royalty-free license to use, display, and distribute that content
        </li>
        <li>You are solely responsible for the content you post</li>
      </ul>

      <h3 className={h3}>6.2 Prohibited Content</h3>
      <p className={p}>You may not post content that:</p>
      <ul className={ul}>
        <li>Violates any law or regulation</li>
        <li>Infringes on intellectual property rights</li>
        <li>Contains harmful, threatening, or abusive material</li>
        <li>Contains personal information about others without consent</li>
        <li>Is spam or misleading</li>
      </ul>

      <h3 className={h3}>6.3 We May Remove Content</h3>
      <p className={p}>
        We reserve the right to remove any content at any time without notice or liability.
      </p>

      <h2 className={h2}>7. Subscription and Billing</h2>

      <h3 className={h3}>7.1 Free and Premium Plans</h3>
      <ul className={ul}>
        <li>The App offers both free and premium subscription tiers</li>
        <li>Premium features and pricing are subject to change</li>
        <li>Subscriptions are billed through Stripe</li>
      </ul>

      <h3 className={h3}>7.2 Auto-Renewal</h3>
      <ul className={ul}>
        <li>Premium subscriptions automatically renew unless canceled</li>
        <li>You must cancel before the renewal date to avoid charges</li>
        <li>We are not responsible for charges from failed cancellation attempts</li>
      </ul>

      <h3 className={h3}>7.3 Refunds</h3>
      <ul className={ul}>
        <li>See our separate Refund Policy for details</li>
        <li>We reserve the right to refuse refunds</li>
      </ul>

      <h2 className={h2}>8. Third-Party Services</h2>
      <p className={p}>The App integrates with third-party services including:</p>
      <ul className={ul}>
        <li>Supabase (database and authentication)</li>
        <li>Stripe (payment processing)</li>
        <li>OAuth providers (Google, Apple, Facebook)</li>
        <li>Coupon aggregation services</li>
      </ul>
      <p className={p}>We are <strong>NOT RESPONSIBLE</strong> for:</p>
      <ul className={ul}>
        <li>The availability or performance of third-party services</li>
        <li>Privacy practices of third-party services</li>
        <li>Any damages caused by third-party services</li>
      </ul>

      <h2 className={h2}>9. Intellectual Property</h2>

      <h3 className={h3}>9.1 Our Rights</h3>
      <p className={p}>
        The App, including its design, code, features, and content (excluding user-generated
        content), is owned by us and protected by copyright and other intellectual property laws.
      </p>

      <h3 className={h3}>9.2 Limited License</h3>
      <p className={p}>
        We grant you a limited, non-exclusive, non-transferable license to use the App for personal,
        non-commercial purposes.
      </p>

      <h3 className={h3}>9.3 Restrictions</h3>
      <p className={p}>You may not:</p>
      <ul className={ul}>
        <li>Copy, modify, or distribute the App</li>
        <li>Reverse engineer or attempt to extract source code</li>
        <li>Use the App for commercial purposes without permission</li>
        <li>Remove copyright or proprietary notices</li>
      </ul>

      <h2 className={h2}>10. Privacy</h2>
      <p className={p}>
        Your use of the App is subject to our Privacy Policy. By using the App, you consent to our
        collection and use of your data as described in the Privacy Policy.
      </p>

      <h2 className={h2}>11. Export Control and Sanctions Compliance</h2>

      <h3 className={h3}>11.1 Prohibited Jurisdictions</h3>
      <p className={p}>
        You may not use the App if you are located in, or a resident of, any country subject to
        U.S. trade sanctions or embargoes, including but not limited to:
      </p>
      <ul className={ul}>
        <li>Cuba, Iran, North Korea, Syria, or the Crimea region</li>
        <li>Any other jurisdiction where use would violate applicable export control laws</li>
      </ul>

      <h3 className={h3}>11.2 Prohibited Lists</h3>
      <p className={p}>You represent that you are not:</p>
      <ul className={ul}>
        <li>Listed on any U.S. government prohibited or restricted party list</li>
        <li>Subject to sanctions by the U.S., EU, or other applicable authorities</li>
        <li>Acting on behalf of any prohibited entity</li>
      </ul>

      <h3 className={h3}>11.3 Compliance</h3>
      <p className={p}>
        You agree to comply with all applicable export control, sanctions, and trade laws.
      </p>

      <h2 className={h2}>12. Termination</h2>

      <h3 className={h3}>12.1 Your Right to Terminate</h3>
      <p className={p}>You may stop using the App and delete your account at any time.</p>

      <h3 className={h3}>12.2 Our Right to Terminate</h3>
      <p className={p}>
        We may suspend or terminate your access to the App at any time, for any reason, without
        notice or liability.
      </p>

      <h3 className={h3}>12.3 Effect of Termination</h3>
      <ul className={ul}>
        <li>Upon termination, your right to use the App ceases immediately</li>
        <li>We may delete your data at any time after termination</li>
        <li>You are responsible for exporting any data you wish to keep</li>
      </ul>

      <h2 className={h2}>13. Indemnification</h2>
      <p className={p}>
        You agree to indemnify, defend, and hold harmless{' '}
        <strong>
          Pantry Tab LLC, its members, managers, officers, employees, contractors, agents, and
          affiliates
        </strong>{' '}
        from any and all claims, damages, losses, liabilities, costs, and expenses (including
        reasonable legal fees and court costs) arising from:
      </p>
      <ul className={ul}>
        <li>Your use of the App</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any rights of another person or entity</li>
        <li>Content you post or share</li>
        <li>Any allergic reactions, health issues, or medical consequences</li>
        <li>Any food safety issues or foodborne illness</li>
        <li>Your reliance on App information or features</li>
      </ul>
      <p className={p}>
        This indemnification obligation survives termination of your use of the App.
      </p>

      <h2 className={h2}>14. Modifications to Terms</h2>
      <p className={p}>
        We may modify these Terms at any time. Changes will be effective when posted. Your continued
        use of the App after changes constitutes acceptance of the new Terms.
      </p>

      <h2 className={h2}>15. Modifications to the App</h2>
      <p className={p}>We reserve the right to:</p>
      <ul className={ul}>
        <li>Modify or discontinue any feature at any time</li>
        <li>Change pricing for Premium subscriptions</li>
        <li>Add or remove integrations with third-party services</li>
      </ul>
      <p className={p}>
        We are not liable for any modifications, suspensions, or discontinuation of the App or any
        feature.
      </p>

      <h2 className={h2}>16. Dispute Resolution</h2>

      <h3 className={h3}>16.1 Governing Law</h3>
      <p className={p}>
        These Terms are governed by the laws of the State of Texas, United States, without regard to
        conflict of law principles.
      </p>

      <h3 className={h3}>16.2 Arbitration</h3>
      <p className={p}>
        Any dispute arising from these Terms shall be resolved through binding arbitration in
        Tarrant County, Texas, rather than in court, except that you may assert claims in small
        claims court.
      </p>

      <h3 className={h3}>16.3 Class Action Waiver</h3>
      <p className={p}>
        You agree to resolve disputes with us only on an individual basis, and you waive any right
        to bring claims as a class action or class arbitration.
      </p>

      <h2 className={h2}>17. General Provisions</h2>

      <h3 className={h3}>17.1 Entire Agreement</h3>
      <p className={p}>
        These Terms constitute the entire agreement between you and us regarding the App.
      </p>

      <h3 className={h3}>17.2 Severability</h3>
      <p className={p}>
        If any provision is found unenforceable, the remaining provisions will remain in effect.
      </p>

      <h3 className={h3}>17.3 No Waiver</h3>
      <p className={p}>
        Our failure to enforce any right or provision does not constitute a waiver of that right.
      </p>

      <h3 className={h3}>17.4 Assignment</h3>
      <p className={p}>
        You may not assign these Terms. We may assign our rights and obligations to any party.
      </p>

      <h3 className={h3}>17.5 Contact</h3>
      <p className={p}>
        For questions about these Terms, contact us at{' '}
        <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
          support@pantrytab.com
        </a>
        .
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

      <h2 className={h2}>18. Additional Disclaimers</h2>

      <h3 className={h3}>18.1 Medical Disclaimer</h3>
      <p className={warn}>
        PANTRY TAB IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE MEDICAL ADVICE. CONSULT A
        HEALTHCARE PROFESSIONAL FOR MEDICAL ADVICE REGARDING ALLERGIES, NUTRITION, OR HEALTH
        CONDITIONS.
      </p>

      <h3 className={h3}>18.2 Recipe Disclaimer</h3>
      <p className={p}>
        Recipes are provided for informational purposes only. We are not responsible for the results
        of following any recipe, including taste, nutritional content, or food safety.
      </p>

      <h3 className={h3}>18.3 Price Comparison Disclaimer</h3>
      <p className={p}>
        Price information is provided by third parties and may be inaccurate or outdated. We make no
        guarantees about pricing and are not responsible for pricing errors.
      </p>

      <h3 className={h3}>18.4 Barcode and Receipt Scanning Disclaimer</h3>
      <p className={p}>
        Barcode and receipt scanning features use third-party services and AI/automated processing,
        and may be inaccurate. Always verify scanned information.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="font-bold text-gray-900 leading-relaxed">
          BY USING PANTRY TAB, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE
          BOUND BY THESE TERMS OF SERVICE.
        </p>
      </div>
    </LegalLayout>
  );
}
