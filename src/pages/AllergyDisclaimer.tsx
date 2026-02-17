import LegalLayout from '../components/LegalLayout';

const h2 = 'text-xl font-bold text-gray-900 mt-10 mb-3 pb-2 border-b border-gray-200';
const h3 = 'text-base font-semibold text-gray-800 mt-5 mb-2';
const p = 'text-gray-700 mb-3 leading-relaxed';
const ul = 'list-disc pl-6 mb-3 space-y-1 text-gray-700';
const warn = 'text-gray-900 font-bold mb-3 leading-relaxed';

export default function AllergyDisclaimer() {
  return (
    <LegalLayout title="Health &amp; Allergy Disclaimer" lastUpdated="February 6, 2026">

      <div className="bg-orange-50 border-l-4 border-orange-brand px-5 py-4 mb-8 rounded-r-lg">
        <p className="font-bold text-gray-900 text-lg mb-1">CRITICAL NOTICE: READ THIS CAREFULLY</p>
        <p className={p}>
          Pantry Tab provides tools for tracking allergy information and sending alerts about
          potential allergens.{' '}
          <strong>
            THIS FEATURE IS PROVIDED FOR INFORMATIONAL PURPOSES ONLY AND COMES WITH SIGNIFICANT
            LIMITATIONS.
          </strong>
        </p>
        <p className="text-gray-700 leading-relaxed">
          By using the allergy tracking and alert features, you acknowledge and agree to the
          following:
        </p>
      </div>

      <h2 className={h2}>1. NOT A MEDICAL DEVICE OR SERVICE</h2>

      <h3 className={h3}>1.1 No Medical Advice</h3>
      <ul className={ul}>
        <li>
          Pantry Tab <strong>IS NOT</strong> a medical device, medical service, or healthcare
          provider
        </li>
        <li>
          We <strong>DO NOT</strong> provide medical advice, diagnosis, or treatment
        </li>
        <li>
          The App is <strong>NOT</strong> a substitute for professional medical advice or treatment
        </li>
        <li>
          <strong>ALWAYS</strong> consult with qualified healthcare professionals about allergies
          and health conditions
        </li>
      </ul>

      <h3 className={h3}>1.2 Not FDA Approved</h3>
      <ul className={ul}>
        <li>
          The App and its allergy features are <strong>NOT</strong> approved by the FDA or any
          medical regulatory body
        </li>
        <li>
          The App is <strong>NOT</strong> intended to diagnose, treat, cure, or prevent any disease
          or medical condition
        </li>
      </ul>

      <h2 className={h2}>2. ALLERGY ALERTS: SEVERE LIMITATIONS</h2>

      <h3 className={h3}>2.1 No Guarantee of Accuracy</h3>
      <p className={p}>The allergy alert system <strong>MAY FAIL</strong> in numerous ways:</p>
      <p className={p}><strong>False Negatives (Missed Allergens):</strong></p>
      <ul className={ul}>
        <li>
          The App <strong>MAY FAIL TO DETECT</strong> allergens in your food or products
        </li>
        <li>Allergens may be present under different names or synonyms we don't recognize</li>
        <li>Ingredients may change without our knowledge</li>
        <li>Product data may be incomplete, outdated, or incorrect</li>
        <li>User error in entering or scanning items</li>
        <li>Technical failures in the alert system</li>
      </ul>
      <p className={p}><strong>False Positives (Incorrect Alerts):</strong></p>
      <ul className={ul}>
        <li>The App may incorrectly flag safe items as containing allergens</li>
        <li>Keyword matching may produce spurious warnings</li>
      </ul>

      <h3 className={h3}>2.2 Data Sources</h3>
      <p className={p}>Our allergy alerts rely on:</p>
      <ul className={ul}>
        <li>User-entered data (which may be incorrect or incomplete)</li>
        <li>Barcode databases (which may be inaccurate, outdated, or incomplete)</li>
        <li>Recipe ingredients (which users may enter incorrectly)</li>
        <li>Product information from third parties (which we cannot verify)</li>
      </ul>
      <p className={warn}>
        WE MAKE NO REPRESENTATIONS OR WARRANTIES about the accuracy, completeness, or reliability
        of any of these data sources.
      </p>

      <h3 className={h3}>2.3 You Must Verify</h3>
      <p className={p}><strong>YOU MUST ALWAYS:</strong></p>
      <ul className={ul}>
        <li>Read product labels yourself</li>
        <li>Verify ingredient lists directly on packaging</li>
        <li>Contact manufacturers when uncertain</li>
        <li>Use your own judgment about food safety</li>
        <li>Follow medical advice from your healthcare providers</li>
      </ul>
      <p className={warn}>NEVER rely solely on the App's allergy alerts.</p>

      <h2 className={h2}>3. NO LIABILITY FOR HEALTH CONSEQUENCES</h2>

      <h3 className={h3}>3.1 Complete Disclaimer</h3>
      <p className={warn}>
        WE ARE NOT LIABLE FOR ANY HEALTH CONSEQUENCES resulting from use of the App, including but
        not limited to:
      </p>
      <ul className={ul}>
        <li>Allergic reactions (mild, moderate, or severe)</li>
        <li>Anaphylaxis or anaphylactic shock</li>
        <li>Hospitalization or emergency medical treatment</li>
        <li>Chronic health problems</li>
        <li>Death or permanent injury</li>
        <li>Any other health-related injury or damage</li>
      </ul>

      <h3 className={h3}>3.2 User Assumes All Risk</h3>
      <p className={warn}>YOU ASSUME ALL RISK associated with:</p>
      <ul className={ul}>
        <li>Relying on the App's allergy alerts</li>
        <li>Entering or scanning food items</li>
        <li>Consuming food tracked in the App</li>
        <li>Sharing allergy information with household members</li>
        <li>Any health-related use of the App</li>
      </ul>

      <h3 className={h3}>3.3 No Liability for System Failures</h3>
      <p className={p}>We are <strong>NOT LIABLE</strong> if:</p>
      <ul className={ul}>
        <li>The App fails to send an allergy alert</li>
        <li>Alerts are delayed or not delivered</li>
        <li>The App crashes or becomes unavailable</li>
        <li>Data syncing fails</li>
        <li>Notifications are disabled or not received</li>
        <li>The allergy database is incomplete or incorrect</li>
        <li>Third-party services fail</li>
      </ul>

      <h2 className={h2}>4. NUTRITIONAL INFORMATION</h2>

      <h3 className={h3}>4.1 Informational Only</h3>
      <p className={p}>Nutritional information provided in the App is:</p>
      <ul className={ul}>
        <li>For informational purposes only</li>
        <li>May be inaccurate, incomplete, or outdated</li>
        <li><strong>NOT</strong> verified by nutrition professionals</li>
        <li>
          <strong>NOT</strong> a substitute for consulting with a registered dietitian or healthcare
          provider
        </li>
      </ul>

      <h3 className={h3}>4.2 No Dietary Advice</h3>
      <ul className={ul}>
        <li>
          We <strong>DO NOT</strong> provide dietary advice or meal planning guidance for medical
          conditions
        </li>
        <li>Recipe nutritional calculations may be incorrect</li>
        <li>Serving sizes may vary</li>
        <li>Food preparation methods can affect nutritional content</li>
      </ul>

      <h2 className={h2}>5. HEALTH DATA TRACKING</h2>

      <h3 className={h3}>5.1 Personal Health Information</h3>
      <p className={p}>The App allows you to track:</p>
      <ul className={ul}>
        <li>Height and weight</li>
        <li>Activity levels</li>
        <li>Birthdates and ages</li>
        <li>Sex/gender</li>
      </ul>
      <p className={p}>This information is:</p>
      <ul className={ul}>
        <li><strong>NOT</strong> monitored by healthcare professionals</li>
        <li><strong>NOT</strong> used to provide medical recommendations</li>
        <li><strong>NOT</strong> protected health information under HIPAA</li>
        <li>Shared with all members of your household</li>
      </ul>

      <h3 className={h3}>5.2 No Health Monitoring</h3>
      <ul className={ul}>
        <li>We do <strong>NOT</strong> monitor your health data</li>
        <li>We do <strong>NOT</strong> provide alerts about health concerns</li>
        <li>We do <strong>NOT</strong> notify you of health risks</li>
        <li>We are <strong>NOT</strong> responsible for health consequences related to tracked data</li>
      </ul>

      <h2 className={h2}>6. FOOD SAFETY</h2>

      <h3 className={h3}>6.1 Expiration Date Tracking</h3>
      <p className={p}>The App's expiration date tracking feature:</p>
      <ul className={ul}>
        <li>Is for informational purposes only</li>
        <li><strong>DOES NOT GUARANTEE</strong> food safety</li>
        <li>May be inaccurate or incorrect</li>
        <li>
          <strong>IS NOT</strong> a substitute for your own judgment about food freshness
        </li>
      </ul>
      <p className={warn}>YOU ARE RESPONSIBLE for determining whether food is safe to consume.</p>

      <h3 className={h3}>6.2 No Liability for Foodborne Illness</h3>
      <p className={p}>We are <strong>NOT LIABLE</strong> for:</p>
      <ul className={ul}>
        <li>Food poisoning or foodborne illness</li>
        <li>Consuming spoiled or contaminated food</li>
        <li>Incorrect storage or handling of food</li>
        <li>Any health consequences from food consumption</li>
      </ul>

      <h3 className={h3}>6.3 Storage Recommendations</h3>
      <p className={p}>
        Any storage location recommendations (freezer, fridge, pantry) are:
      </p>
      <ul className={ul}>
        <li>General suggestions only</li>
        <li>May not be appropriate for all foods</li>
        <li><strong>NOT</strong> verified by food safety experts</li>
      </ul>
      <p className={warn}>ALWAYS follow USDA and FDA food safety guidelines.</p>

      <h2 className={h2}>7. RECIPE SAFETY</h2>

      <h3 className={h3}>7.1 Recipe Disclaimer</h3>
      <p className={p}>
        Recipes in the App (whether created by you, other users, or sourced from elsewhere):
      </p>
      <ul className={ul}>
        <li>Are <strong>NOT</strong> tested for safety</li>
        <li>May contain allergens not listed or identified</li>
        <li>May have incorrect or incomplete ingredient lists</li>
        <li>May have preparation steps that could be unsafe</li>
        <li>Are provided <strong>AS-IS</strong> without any warranties</li>
      </ul>

      <h3 className={h3}>7.2 Cook at Your Own Risk</h3>
      <p className={warn}>
        YOU ASSUME ALL RISK when preparing or consuming recipes from the App, including:
      </p>
      <ul className={ul}>
        <li>Allergic reactions to ingredients</li>
        <li>Foodborne illness from improper preparation</li>
        <li>Injuries from cooking</li>
        <li>Any other consequences</li>
      </ul>

      <h3 className={h3}>7.3 Verify Ingredients</h3>
      <p className={p}><strong>YOU MUST:</strong></p>
      <ul className={ul}>
        <li>Verify all recipe ingredients before preparation</li>
        <li>Check for allergens in all ingredients</li>
        <li>Use safe food preparation practices</li>
        <li>Follow your own judgment about recipe safety</li>
      </ul>

      <h2 className={h2}>8. THIRD-PARTY INFORMATION</h2>

      <h3 className={h3}>8.1 No Control Over Third-Party Data</h3>
      <p className={p}>The App may use information from:</p>
      <ul className={ul}>
        <li>Barcode databases</li>
        <li>Product manufacturers</li>
        <li>Recipe websites</li>
        <li>Other users</li>
        <li>Public databases</li>
      </ul>
      <p className={warn}>
        WE HAVE NO CONTROL over this information and CANNOT VERIFY its accuracy.
      </p>

      <h3 className={h3}>8.2 Third-Party Services May Fail</h3>
      <p className={p}>
        Services we rely on (barcode scanning, receipt processing, etc.) may:
      </p>
      <ul className={ul}>
        <li>Provide incorrect information</li>
        <li>Become unavailable</li>
        <li>Change without notice</li>
        <li>Have their own errors and limitations</li>
      </ul>
      <p className={p}>
        We are <strong>NOT LIABLE</strong> for third-party service failures or inaccuracies.
      </p>

      <h2 className={h2}>9. YOUR RESPONSIBILITIES</h2>

      <h3 className={h3}>9.1 Medical Consultation</h3>
      <p className={p}><strong>YOU MUST:</strong></p>
      <ul className={ul}>
        <li>Consult healthcare professionals about allergies and health conditions</li>
        <li>Follow medical advice from qualified providers</li>
        <li>Maintain your own allergy action plan</li>
        <li>Carry emergency medications (EpiPen, etc.) as prescribed</li>
        <li>Seek immediate medical attention for allergic reactions</li>
      </ul>

      <h3 className={h3}>9.2 Vigilance Required</h3>
      <p className={p}><strong>YOU MUST:</strong></p>
      <ul className={ul}>
        <li>Always read product labels</li>
        <li>Verify ingredient information</li>
        <li>Use your own judgment about food safety</li>
        <li>Not rely solely on the App for allergy management</li>
        <li>Keep allergy information up to date in the App</li>
        <li>Inform household members about allergies</li>
      </ul>

      <h3 className={h3}>9.3 Accurate Data Entry</h3>
      <p className={p}><strong>YOU ARE RESPONSIBLE</strong> for:</p>
      <ul className={ul}>
        <li>Entering accurate information into the App</li>
        <li>Scanning items correctly</li>
        <li>Updating allergen information</li>
        <li>Correcting errors you discover</li>
        <li>Verifying all data before relying on it</li>
      </ul>

      <h2 className={h2}>10. CHILDREN AND VULNERABLE INDIVIDUALS</h2>

      <h3 className={h3}>10.1 Parental Responsibility</h3>
      <p className={p}>If you track allergies or health information for children:</p>
      <ul className={ul}>
        <li>
          <strong>YOU ARE SOLELY RESPONSIBLE</strong> for their health and safety
        </li>
        <li>You must exercise appropriate parental oversight</li>
        <li>Do not rely on the App as a substitute for parental vigilance</li>
        <li>Consult pediatricians and allergists as appropriate</li>
      </ul>

      <h3 className={h3}>10.2 High-Risk Individuals</h3>
      <p className={p}>If you or a household member has:</p>
      <ul className={ul}>
        <li>Severe or life-threatening allergies</li>
        <li>Multiple food allergies</li>
        <li>Compromised immune system</li>
        <li>Other high-risk health conditions</li>
      </ul>
      <p className={p}><strong>YOU MUST:</strong></p>
      <ul className={ul}>
        <li>Exercise extreme caution</li>
        <li>Not rely primarily on the App for safety</li>
        <li>Work closely with healthcare providers</li>
        <li>Have appropriate emergency plans and medications</li>
      </ul>

      <h2 className={h2}>11. NO EMERGENCY SERVICES</h2>

      <h3 className={h3}>11.1 Call 911</h3>
      <p className={p}>The App <strong>DOES NOT:</strong></p>
      <ul className={ul}>
        <li>Provide emergency services</li>
        <li>Contact emergency responders</li>
        <li>Monitor for medical emergencies</li>
        <li>Provide emergency medical advice</li>
      </ul>
      <div className="bg-red-50 border-l-4 border-red-500 px-5 py-3 mb-4 rounded-r-lg">
        <p className="font-bold text-red-800">
          IN AN EMERGENCY, CALL 911 OR YOUR LOCAL EMERGENCY NUMBER.
        </p>
      </div>

      <h3 className={h3}>11.2 No Real-Time Monitoring</h3>
      <ul className={ul}>
        <li>We do <strong>NOT</strong> monitor your use of the App</li>
        <li>We do <strong>NOT</strong> receive alerts when you have reactions</li>
        <li>We do <strong>NOT</strong> provide any emergency response</li>
      </ul>

      <h2 className={h2}>12. Indemnification</h2>
      <p className={p}>
        You agree to indemnify, defend, and hold harmless{' '}
        <strong>
          Pantry Tab LLC, its members, managers, officers, employees, contractors, agents, and
          affiliates
        </strong>{' '}
        from any and all claims, damages, losses, liabilities, costs, and expenses (including
        reasonable legal fees, medical costs, and court costs) arising from:
      </p>
      <ul className={ul}>
        <li>Your use of the allergy tracking features</li>
        <li>Any allergic reactions, health consequences, or medical emergencies</li>
        <li>Your reliance on App information</li>
        <li>Food consumption decisions made using the App</li>
        <li>Any health-related use of the App</li>
        <li>Claims by household members or third parties affected by your use of the App</li>
      </ul>
      <p className={p}>
        This indemnification obligation survives termination of your use of the App.
      </p>

      <h2 className={h2}>13. Acceptance of Risk</h2>
      <p className={p}>
        <strong>BY USING THE HEALTH AND ALLERGY FEATURES OF PANTRY TAB, YOU ACKNOWLEDGE THAT:</strong>
      </p>
      <ol className="list-decimal pl-6 mb-3 space-y-1 text-gray-700">
        <li>You have read and understood this disclaimer</li>
        <li>You understand the limitations and risks</li>
        <li>You will not rely solely on the App for allergy management</li>
        <li>You will always verify information yourself</li>
        <li>You will consult healthcare professionals</li>
        <li>You assume all risk for health consequences</li>
        <li>You will not hold us liable for any health-related damages</li>
      </ol>

      <h2 className={h2}>14. Contact</h2>
      <p className={p}>
        If you have questions about this disclaimer, contact us at{' '}
        <a href="mailto:support@pantrytab.com" className="text-green-brand underline">
          support@pantrytab.com
        </a>
        .
      </p>
      <p className={p}>
        <strong>
          However, we CANNOT and WILL NOT provide medical advice or assistance with health-related
          questions.
        </strong>
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 space-y-3">
        <p className="font-bold text-gray-900 leading-relaxed">
          IF YOU DO NOT ACCEPT THESE TERMS AND THIS DISCLAIMER, DO NOT USE THE ALLERGY TRACKING OR
          HEALTH FEATURES OF PANTRY TAB.
        </p>
        <p className="font-bold text-gray-900">USE AT YOUR OWN RISK.</p>
      </div>
    </LegalLayout>
  );
}
