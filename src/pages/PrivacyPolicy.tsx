import LegalLayout from '../components/LegalLayout';

const h2 = 'text-xl font-bold text-gray-900 mt-10 mb-3 pb-2 border-b border-gray-200';
const h3 = 'text-base font-semibold text-gray-800 mt-5 mb-2';
const p = 'text-gray-700 mb-3 leading-relaxed';
const ul = 'list-disc pl-6 mb-3 space-y-1 text-gray-700';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy for Pantry Tab" lastUpdated="February 6, 2026">

      <h2 className={h2}>1. Introduction</h2>
      <p className={p}>
        This Privacy Policy describes how <strong>Pantry Tab LLC</strong>, a Texas limited liability
        company ("we," "us," "our," "Company"), collects, uses, and shares information when you use
        the Pantry Tab application ("the App").
      </p>
      <p className={p}>
        By using the App, you agree to the collection and use of information in accordance with this
        policy.
      </p>

      <h2 className={h2}>2. Information We Collect</h2>

      <h3 className={h3}>2.1 Information You Provide Directly</h3>
      <p className={p}><strong>Account Information:</strong></p>
      <ul className={ul}>
        <li>Email address</li>
        <li>Full name</li>
        <li>Password (encrypted)</li>
      </ul>
      <p className={p}><strong>Profile Information:</strong></p>
      <ul className={ul}>
        <li>Subscription plan (Free or Premium)</li>
        <li>Account status</li>
        <li>Payment information (stored securely by Stripe, not by us)</li>
      </ul>
      <p className={p}><strong>Household Information:</strong></p>
      <ul className={ul}>
        <li>Household name</li>
        <li>Household member names and roles</li>
        <li>Location/property names</li>
      </ul>
      <p className={p}><strong>Personal and Health Information:</strong></p>
      <ul className={ul}>
        <li>Names and relationships of household members</li>
        <li>Birthdates</li>
        <li>Sex/gender</li>
        <li>Height and weight</li>
        <li>Activity levels</li>
        <li>
          <strong>Allergy information</strong> (allergen names, severity, notes, custom keywords)
        </li>
        <li>Dismissed allergy alerts</li>
      </ul>
      <p className={p}><strong>Inventory and Food Data:</strong></p>
      <ul className={ul}>
        <li>Food items in pantry, fridge, and freezer</li>
        <li>Item quantities, locations, and expiration dates</li>
        <li>Purchase history</li>
        <li>Barcode information</li>
        <li>Nutritional information</li>
        <li>Photos of receipts and food items</li>
      </ul>
      <p className={p}><strong>Recipe and Meal Planning Data:</strong></p>
      <ul className={ul}>
        <li>Recipes (ingredients, instructions, photos)</li>
        <li>Meal plans</li>
        <li>Dietary preferences</li>
        <li>Saved marketplace recipes</li>
      </ul>
      <p className={p}><strong>Shopping Data:</strong></p>
      <ul className={ul}>
        <li>Grocery lists</li>
        <li>Store preferences</li>
        <li>Price comparisons</li>
        <li>Coupon usage</li>
      </ul>
      <p className={p}><strong>Home Maintenance Data:</strong></p>
      <ul className={ul}>
        <li>Maintenance schedules and tasks</li>
        <li>Appliance information</li>
        <li>Property details</li>
      </ul>
      <p className={p}><strong>Community Content:</strong></p>
      <ul className={ul}>
        <li>Forum posts and comments</li>
        <li>Recipe reviews and ratings</li>
        <li>Marketplace recipe submissions</li>
        <li>Photos and other media you upload</li>
      </ul>

      <h3 className={h3}>2.2 Information Collected Automatically</h3>
      <p className={p}><strong>Usage Information:</strong></p>
      <ul className={ul}>
        <li>Pages viewed and features used</li>
        <li>Time and duration of visits</li>
        <li>Interactions with other users' content</li>
        <li>Search queries</li>
      </ul>
      <p className={p}><strong>Device Information:</strong></p>
      <ul className={ul}>
        <li>Device type and model</li>
        <li>Operating system</li>
        <li>Browser type</li>
        <li>IP address</li>
        <li>Device identifiers</li>
      </ul>
      <p className={p}><strong>Camera and Photo Access:</strong></p>
      <ul className={ul}>
        <li>Photos you take or upload for barcodes, receipts, or recipes</li>
        <li>We process these photos to extract information (text, barcodes)</li>
      </ul>

      <h3 className={h3}>2.3 Information from Third Parties</h3>
      <p className={p}><strong>OAuth Authentication:</strong></p>
      <p className={p}>
        When you sign in with Google, Apple, or Facebook, we receive:
      </p>
      <ul className={ul}>
        <li>Email address</li>
        <li>Full name</li>
        <li>Profile picture (if provided by the service)</li>
      </ul>
      <p className={p}><strong>Payment Information:</strong></p>
      <p className={p}>
        We use Stripe for payment processing. Stripe collects and processes:
      </p>
      <ul className={ul}>
        <li>Credit/debit card information</li>
        <li>Billing address</li>
        <li>Payment history</li>
      </ul>
      <p className={p}>We do not store your full payment card details.</p>

      <h2 className={h2}>3. How We Use Your Information</h2>
      <p className={p}>We use the information we collect to:</p>

      <h3 className={h3}>3.1 Provide and Improve the App</h3>
      <ul className={ul}>
        <li>Create and manage your account</li>
        <li>Enable core features (inventory tracking, meal planning, etc.)</li>
        <li>Provide allergy alerts (with no guarantee of accuracy)</li>
        <li>Sync data across your devices and household members</li>
        <li>Process payments for Premium subscriptions</li>
        <li>Provide customer support</li>
        <li>Send transactional emails (password resets, subscription confirmations)</li>
        <li>Improve and develop new features</li>
      </ul>

      <h3 className={h3}>3.2 Household Sharing</h3>
      <ul className={ul}>
        <li>
          Share inventory, recipes, meal plans, and other data with your household members
        </li>
        <li>Display your name and basic profile information to household members</li>
        <li>Allow household members to view and edit shared data</li>
      </ul>

      <h3 className={h3}>3.3 Community Features</h3>
      <ul className={ul}>
        <li>Display your name with content you post publicly</li>
        <li>Show recipes you share in the Marketplace</li>
        <li>Display your ratings and comments on community content</li>
      </ul>

      <h3 className={h3}>3.4 Analytics and Performance</h3>
      <ul className={ul}>
        <li>Analyze usage patterns to improve the App</li>
        <li>Monitor App performance and fix bugs</li>
        <li>Understand which features are most popular</li>
      </ul>

      <h3 className={h3}>3.5 Legal and Security</h3>
      <ul className={ul}>
        <li>Comply with legal obligations</li>
        <li>Protect against fraud and abuse</li>
        <li>Enforce our Terms of Service</li>
      </ul>

      <h3 className={h3}>3.6 Legal Basis for Processing (GDPR)</h3>
      <p className={p}>
        For users in the European Economic Area (EEA) and United Kingdom, we process your personal
        data based on the following legal bases:
      </p>
      <p className={p}><strong>Consent:</strong></p>
      <ul className={ul}>
        <li>Marketing communications (if offered in the future)</li>
        <li>Optional features you enable</li>
      </ul>
      <p className={p}><strong>Contract Performance:</strong></p>
      <ul className={ul}>
        <li>Creating and managing your account</li>
        <li>Providing App features and services</li>
        <li>Processing payments</li>
      </ul>
      <p className={p}><strong>Legitimate Interests:</strong></p>
      <ul className={ul}>
        <li>Improving the App and developing new features</li>
        <li>Analytics and performance monitoring</li>
        <li>Preventing fraud and abuse</li>
        <li>Customer support</li>
      </ul>
      <p className={p}><strong>Legal Obligation:</strong></p>
      <ul className={ul}>
        <li>Compliance with applicable laws</li>
        <li>Responding to legal requests</li>
      </ul>
      <p className={p}>
        You have the right to withdraw consent or object to processing based on legitimate
        interests. See Section 5 for your rights.
      </p>

      <h2 className={h2}>4. How We Share Your Information</h2>

      <h3 className={h3}>4.1 Household Members</h3>
      <p className={p}>
        When you join or create a household,{' '}
        <strong>all household members can view and edit shared data</strong>, including:
      </p>
      <ul className={ul}>
        <li>Inventory items</li>
        <li>Recipes and meal plans</li>
        <li>Grocery lists</li>
        <li>People and allergy information</li>
        <li>Home maintenance schedules</li>
      </ul>
      <p className={p}>
        <strong>Important:</strong> Even if you remove a member from your household, they may retain
        copies of data they previously had access to.
      </p>

      <h3 className={h3}>4.2 Public Community Content</h3>
      <p className={p}>
        When you post content publicly (Marketplace recipes, forum posts, comments), that content
        is <strong>visible to all App users</strong> and includes:
      </p>
      <ul className={ul}>
        <li>Your name</li>
        <li>Content you posted</li>
        <li>Timestamps</li>
      </ul>

      <h3 className={h3}>4.3 Service Providers</h3>
      <p className={p}>
        We share information with third-party service providers who help us operate the App:
      </p>
      <p className={p}><strong>Supabase (Database and Authentication):</strong></p>
      <ul className={ul}>
        <li>Stores all your data</li>
        <li>Handles user authentication</li>
        <li>Privacy Policy: supabase.com/privacy</li>
      </ul>
      <p className={p}><strong>Stripe (Payment Processing):</strong></p>
      <ul className={ul}>
        <li>Processes subscription payments</li>
        <li>Stores payment information</li>
        <li>Privacy Policy: stripe.com/privacy</li>
      </ul>
      <p className={p}><strong>OAuth Providers (Google, Apple, Facebook):</strong></p>
      <ul className={ul}>
        <li>Handle social login authentication</li>
        <li>See their respective privacy policies</li>
      </ul>
      <p className={p}><strong>Cloud Storage:</strong></p>
      <ul className={ul}>
        <li>Stores photos and media you upload</li>
      </ul>

      <h3 className={h3}>4.4 Legal Requirements</h3>
      <p className={p}>We may disclose your information if required to:</p>
      <ul className={ul}>
        <li>Comply with legal obligations (court orders, subpoenas)</li>
        <li>Protect our rights and property</li>
        <li>Prevent fraud or abuse</li>
        <li>Protect user safety</li>
      </ul>

      <h3 className={h3}>4.5 Business Transfers</h3>
      <p className={p}>
        If we are acquired by or merged with another company, your information may be transferred as
        part of that transaction.
      </p>

      <h3 className={h3}>4.6 We Do Not Sell Your Data</h3>
      <p className={p}>
        We do not sell your personal information to third parties for their marketing purposes.
      </p>

      <h2 className={h2}>5. Your Rights and Choices</h2>

      <h3 className={h3}>5.1 Access and Update</h3>
      <p className={p}>
        You can access and update most of your information directly in the App through your profile
        and settings.
      </p>

      <h3 className={h3}>5.2 Delete Your Account</h3>
      <p className={p}>You can delete your account at any time. This will:</p>
      <ul className={ul}>
        <li>Remove your personal information from our active database</li>
        <li>Delete your individual data</li>
        <li>Remove you from any households</li>
      </ul>
      <p className={p}>
        <strong>Note:</strong> Content you shared publicly (Marketplace recipes, forum posts) may
        remain visible but will be anonymized.
      </p>

      <h3 className={h3}>5.3 Export Your Data</h3>
      <p className={p}>
        You can export your data by contacting us at{' '}
        <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
          support@pantrytab.com
        </a>
        .
      </p>

      <h3 className={h3}>5.4 Marketing Communications</h3>
      <p className={p}>
        We currently do not send marketing emails. If we do in the future, you can opt out.
      </p>

      <h3 className={h3}>5.5 Rights for EEA/UK Users (GDPR)</h3>
      <p className={p}>
        If you are in the European Economic Area or United Kingdom, you have additional rights:
      </p>
      <ul className={ul}>
        <li><strong>Right to access:</strong> Request a copy of your data</li>
        <li><strong>Right to rectification:</strong> Correct inaccurate data</li>
        <li><strong>Right to erasure:</strong> Request deletion of your data</li>
        <li><strong>Right to restriction:</strong> Limit how we use your data</li>
        <li><strong>Right to portability:</strong> Receive your data in a structured format</li>
        <li><strong>Right to object:</strong> Object to certain data processing</li>
        <li><strong>Right to withdraw consent:</strong> Withdraw consent for data processing</li>
      </ul>
      <p className={p}>
        To exercise these rights, contact us at{' '}
        <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
          support@pantrytab.com
        </a>
        .
      </p>

      <h3 className={h3}>5.6 Rights for California Users (CCPA)</h3>
      <p className={p}>
        If you are a California resident, you have rights under the California Consumer Privacy Act:
      </p>
      <ul className={ul}>
        <li>
          <strong>Right to know:</strong> What personal information we collect and how we use it
        </li>
        <li>
          <strong>Right to delete:</strong> Request deletion of your personal information
        </li>
        <li>
          <strong>Right to opt-out:</strong> Opt out of sale of personal information (we do not sell
          data)
        </li>
        <li>
          <strong>Right to non-discrimination:</strong> We will not discriminate against you for
          exercising your rights
        </li>
      </ul>
      <p className={p}>
        To exercise these rights, contact us at{' '}
        <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
          support@pantrytab.com
        </a>
        .
      </p>

      <h2 className={h2}>6. Data Security</h2>
      <p className={p}>
        We implement reasonable security measures to protect your information, including:
      </p>
      <ul className={ul}>
        <li>Encryption of data in transit (HTTPS/SSL)</li>
        <li>Encrypted password storage</li>
        <li>Access controls and authentication</li>
        <li>Regular security monitoring</li>
      </ul>
      <p className={p}>
        <strong>However, no method of transmission or storage is 100% secure.</strong> We cannot
        guarantee absolute security of your data. See our Terms of Service for limitations on our
        liability.
      </p>

      <h2 className={h2}>7. Data Retention</h2>
      <p className={p}>We retain your information for as long as:</p>
      <ul className={ul}>
        <li>Your account is active</li>
        <li>Necessary to provide the App's features</li>
        <li>Required by law</li>
      </ul>
      <p className={p}>After you delete your account:</p>
      <ul className={ul}>
        <li>We will delete or anonymize your personal information</li>
        <li>Some data may be retained in backups for up to 90 days</li>
        <li>
          Public content (Marketplace recipes, forum posts) may remain but will be anonymized
        </li>
      </ul>

      <h2 className={h2}>8. Children's Privacy</h2>
      <p className={p}>
        The App is not intended for children under 13. We do not knowingly collect information from
        children under 13. If you believe we have collected information from a child under 13,
        please contact us immediately.
      </p>

      <h2 className={h2}>9. International Data Transfers</h2>
      <p className={p}>
        Your information is stored and processed in the United States. If you are outside the United
        States, your information will be transferred to and processed in the United States, which may
        have different data protection laws than your country.
      </p>
      <p className={p}>
        By using the App, you consent to the transfer of your information to the United States.
      </p>

      <h2 className={h2}>10. Cookies and Similar Technologies</h2>
      <p className={p}>We use cookies and similar technologies to:</p>
      <ul className={ul}>
        <li>Keep you logged in</li>
        <li>Remember your preferences</li>
        <li>Analyze App usage</li>
      </ul>
      <p className={p}>
        You can control cookies through your browser settings, but disabling cookies may limit App
        functionality.
      </p>

      <h2 className={h2}>11. Third-Party Links</h2>
      <p className={p}>
        The App may contain links to third-party websites or services. We are not responsible for
        the privacy practices of these third parties. Please review their privacy policies.
      </p>

      <h2 className={h2}>12. Changes to This Privacy Policy</h2>
      <p className={p}>
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes by:
      </p>
      <ul className={ul}>
        <li>Posting the new Privacy Policy in the App</li>
        <li>Updating the "Last Updated" date</li>
        <li>Sending an email notification (for material changes)</li>
      </ul>
      <p className={p}>
        Your continued use of the App after changes constitutes acceptance of the updated Privacy
        Policy.
      </p>

      <h2 className={h2}>13. Contact Us</h2>
      <p className={p}>
        If you have questions about this Privacy Policy or want to exercise your privacy rights,
        contact us at:
      </p>
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
        For GDPR or CCPA requests, please include "Privacy Rights Request" in the subject line.
      </p>

      <h2 className={h2}>14. Specific Disclosures</h2>

      <h3 className={h3}>14.1 Health Information Disclaimer</h3>
      <p className={p}>
        While we collect allergy and health information,{' '}
        <strong>we are not a healthcare provider</strong> and do not treat this information as
        protected health information under HIPAA. This information is used solely to provide App
        features and is not shared with healthcare providers.
      </p>

      <h3 className={h3}>14.2 Photo Processing</h3>
      <p className={p}>
        Photos you upload for barcode scanning or receipt processing may be processed by third-party
        services to extract information. These services process photos temporarily and do not store
        them permanently.
      </p>

      <h3 className={h3}>14.3 Household Data Sharing</h3>
      <p className={p}>
        <strong>Important:</strong> All data in a household is shared with all household members. If
        you have privacy concerns about certain data, do not add it to a shared household.
      </p>

      <h3 className={h3}>14.4 Community Content is Public</h3>
      <p className={p}>
        Anything you post in the Marketplace or Community forums is{' '}
        <strong>public and visible to all users</strong>. Do not post sensitive personal information.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200">
        <p className="font-bold text-gray-900 leading-relaxed">
          BY USING PANTRY TAB, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY
          POLICY.
        </p>
      </div>
    </LegalLayout>
  );
}
