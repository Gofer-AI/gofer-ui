import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">
          Effective Date: August 20, 2026 &nbsp;&bull;&nbsp; Company: Gofer AI, Inc. &nbsp;&bull;&nbsp;{' '}
          <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
            support@goferai.space
          </a>
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Gofer AI, Inc. ("Gofer AI," "we," "us," or "our") operates websites, mobile applications (including the
          GoferEco capture app), organization-led contributor programs, independent contributor programs when
          offered, and related services (collectively, the "Services"). This Privacy Policy explains what Personal
          Data we collect, how we use and disclose it, how organization-linked recordings may be processed and
          licensed, and the choices available to individuals and Partner Organizations.
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          This Privacy Policy should be read together with our{' '}
          <Link to="/contributor-terms" className="text-blue-400 hover:text-blue-300 transition-colors">
            Contributor Terms of Use
          </Link>{' '}
          and any applicable Partner Agreement or Program Details. Where applicable law requires consent separate
          from general terms, including for certain sensitive, biometric, or body-derived data, we will request that
          consent separately.
        </p>

        <Section title="Plain-English summary">
          <div className="space-y-4">
            <SummaryRow topic="Who may contribute">
              The standard beta is for individuals age 18 or older who participate through an approved Partner
              Organization. Independent contributor access may be offered separately in the future.
            </SummaryRow>
            <SummaryRow topic="How beta access works">
              A Contributor creates an account and joins an approved Partner Program using an organization code,
              invitation, or other access method.
            </SummaryRow>
            <SummaryRow topic="Who controls program licensing">
              For organization-linked Submissions, the Partner Organization sets the applicable purchaser-industry
              permissions under its Partner Agreement. Individual Contributors do not independently change those
              commercial licensing settings unless the Program expressly says otherwise.
            </SummaryRow>
            <SummaryRow topic="What the Partner Organization can see">
              Program identity, assigned Tasks, submission dates, review status, completion records, verified
              activity hours, and related program information. Access to the recording itself is provided only if the
              applicable Program expressly allows it.
            </SummaryRow>
            <SummaryRow topic="Who can license accepted data">
              Approved Commercial Purchasers whose industry classification is permitted by the applicable Partner
              Licensing Preferences.
            </SummaryRow>
            <SummaryRow topic="What an industry category means">
              The category describes the purchaser company's industry, not a guarantee about a specific model,
              project, deployment, end user, or downstream use.
            </SummaryRow>
            <SummaryRow topic="Who receives revenue share">
              Revenue share for the organization-led beta is governed by the Partner Agreement and is generally paid
              to the Partner Organization. An individual is paid by Gofer AI only if a written Task offer or Program
              Details expressly says so.
            </SummaryRow>
            <SummaryRow topic="What buyers normally do not receive">
              Your personal email, phone number, payout or tax information, exact home address, or account
              credentials. Buyer-facing datasets should use a pseudonymous Contributor ID unless we separately
              disclose otherwise and obtain any required consent.
            </SummaryRow>
          </div>
        </Section>

        <Section title="1. Scope, Roles, and Eligibility">
          <p>
            This Privacy Policy applies to Personal Data we collect through the Services. "Personal Data" means
            information that identifies, relates to, describes, or can reasonably be linked to an individual,
            including information treated as personal, sensitive, or biometric data under applicable law.
          </p>
          <p className="mt-3">
            "Contributor" means an individual who creates an account and submits recordings or related data. "Partner
            Organization" means a business, nonprofit, community organization, or other entity approved by Gofer AI
            to operate an organization-led program. "Partner Program" means a Gofer AI capture program administered
            with a Partner Organization. "Commercial Purchaser" means an approved third party that licenses eligible
            Gofer AI data.
          </p>
          <SubHeading>Contributor age</SubHeading>
          <p>
            Contributors in the standard beta must be at least eighteen (18) years old. There is no parent or
            guardian exception. We do not knowingly permit anyone under 18 to create a Contributor account or submit
            recordings in the standard beta. If we learn that a person under 18 submitted Personal Data, we will take
            reasonable steps to delete it, subject to legal obligations.
          </p>
          <SubHeading>Organization-first beta</SubHeading>
          <p>
            During the organization-led beta, Contributor access is provided through approved Partner Organizations.
            Gofer AI may later offer an Independent Contributor Program with separate Program Details, compensation
            terms, and licensing controls.
          </p>
          <SubHeading>Geographic scope and data location</SubHeading>
          <p>
            The Services are currently offered only in the United States, and Personal Data is stored and processed
            on cloud infrastructure (including Amazon Web Services) located in the United States. We do not currently
            target the Services to individuals located in the European Union, United Kingdom, or other regions with
            separate cross-border transfer requirements. If we later offer the Services in those regions, we will
            provide the additional notices and transfer mechanisms those laws require.
          </p>
        </Section>

        <Section title="2. Personal Data We Collect">
          <p>
            We collect the following categories of Personal Data. For each category, we describe why we use it and
            who may receive it.
          </p>
          <SubHeading>Account and contact data</SubHeading>
          <p>
            Name, email address, phone number, username, and account identifiers &mdash; used for account creation,
            support, eligibility, security, fraud prevention, and communications. Shared with service providers and,
            for organization-linked participation, the Partner Organization. Not ordinarily disclosed to Commercial
            Purchasers.
          </p>
          <SubHeading>Organization and program data</SubHeading>
          <p>
            Partner Organization, organization code, role or affiliation, assigned program, coordinator, worksite or
            approved capture location, and participation status &mdash; used to join the correct Partner Program,
            assign Tasks, enforce program rules, and administer participation.
          </p>
          <SubHeading>Payment and compliance data</SubHeading>
          <p>
            Bank/payment account information, payout history, tax information, and sanctions or fraud-screening data,
            if payment is offered directly by Gofer AI &mdash; used to process expressly offered payments,
            tax/compliance, and fraud prevention. Not disclosed to Commercial Purchasers. Partner Organization
            revenue-share payment data is handled under the Partner Agreement.
          </p>
          <SubHeading>Device and network data</SubHeading>
          <p>
            IP address, device identifiers, device model, operating system, app/browser version, and crash logs
            &mdash; used for security, troubleshooting, analytics, upload management, and service operation.
          </p>
          <SubHeading>Usage and analytics data</SubHeading>
          <p>
            Task views, navigation, submission activity, feature usage, and referral/source information &mdash; used
            to operate and improve the Services, prevent fraud, and understand product use.
          </p>
          <SubHeading>Demographic and eligibility data</SubHeading>
          <p>
            Age or date of birth, approximate region or ZIP code, and other information voluntarily provided &mdash;
            used for eligibility, compliance, dataset diversity analysis, and research. Commercial Purchasers may
            receive broad demographic bands or regional categories when appropriate and permitted, not exact date of
            birth or exact home address unless separately disclosed and permitted.
          </p>
          <SubHeading>Submissions / sensory data</SubHeading>
          <p>
            Videos, photos, audio if enabled, frames, images, captions, Task descriptions, device metadata, and
            recordings of the approved work environment &mdash; used for review, quality control, cataloging,
            storage, licensing, and later processing into robotics-training or evaluation data. Shared with service
            providers and, for accepted Submissions, approved Commercial Purchasers subject to the applicable Partner
            Licensing Preferences.
          </p>
          <SubHeading>Body- and motion-derived data</SubHeading>
          <p>
            Hand landmarks, hand pose, hand geometry, skeletal or motion traces, pose estimates, action traces, depth
            information, and similar outputs derived from a Submission &mdash; used for robotics-data processing,
            dataset creation, quality analysis, research, and training/evaluation products. We do not intend to use
            these outputs to identify or authenticate Contributors.
          </p>
          <SubHeading>Task and quality inferences</SubHeading>
          <p>
            Task labels, object labels, action labels, quality scores, scene or motion characteristics, retry
            reasons, and other inferences tied to dataset quality &mdash; used for cataloging, matching buyer demand,
            review, dataset development, and program administration.
          </p>
          <SubHeading>Activity and verification records</SubHeading>
          <p>
            Assigned Tasks, completion timestamps, submission status, approval/retry status, verified activity hours,
            and program notes &mdash; used to operate organization-led programs and provide participation records.
            Commercial Purchasers generally receive only dataset metadata needed for the licensed data.
          </p>
          <SubHeading>Consent, licensing, and audit records</SubHeading>
          <p>
            Consent version, Partner Program, licensing category settings, license history, withdrawal or deletion
            requests, and related audit records &mdash; used to honor choices, document permissions, administer
            licenses, resolve disputes, and comply with law.
          </p>
        </Section>

        <Section title="3. Partner Programs, Organization Codes, and Organization Visibility">
          <p>
            When you join a Partner Program using an organization code, invitation, or other approved method, Gofer
            AI associates your account with that Partner Organization for the applicable Program. You authorize us to
            use that association to provide Tasks, verify participation, administer the Program, and share the program
            information described in this section.
          </p>
          <p className="mt-3">
            The applicable Partner Organization may receive your name or program identifier, organization
            affiliation, assigned Tasks, submission timestamps, submission status, approval or retry status, verified
            activity hours, and related program administration information. The Partner Organization may use that
            information for its own legitimate program purposes, such as staff training, work-program administration,
            volunteer administration, or community-service tracking, subject to its own legal obligations and notices.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Recording access.</strong> The Partner Organization does not
            automatically receive access to the raw recording solely because you joined its Program. If a Partner
            Program permits the organization to review raw recordings, Gofer AI will disclose that in the Program
            Details, task flow, or other notice before or at the time the recording is submitted.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Program classification.</strong> A Partner Organization, not Gofer AI,
            decides whether participation is part of paid work, staff training, volunteering, community service, or
            another organization program. Gofer AI may display "verified activity hours" based on recorded and
            approved activity, but Gofer AI does not certify that those hours satisfy any court, school, employer,
            licensing, tax, or other external requirement.
          </p>
        </Section>

        <Section title="4. Contributor Submissions and On-Demand Processing">
          <p>
            A Submission may include raw video and related metadata. Gofer AI may accept, reject, or request a retry
            under the Contributor Terms and applicable Program Details. Accepted raw Submissions may be stored in our
            catalog before advanced processing occurs.
          </p>
          <p className="mt-3">
            We may perform deeper processing later, including when a prospective purchaser requests a particular
            dataset, when we need to evaluate quality, or when we prepare data for licensing or delivery. This
            on-demand approach allows Gofer AI to store eligible raw data first and perform more expensive processing
            when there is a product, quality, or purchaser need.
          </p>
          <p className="mt-3">
            Processing may create "Derived Data," such as hand poses, motion traces, depth information, task labels,
            object labels, action labels, quality scores, de-identified data, dataset bundles, and model-training or
            evaluation data. The specific processing steps may change as our technology develops.
          </p>
          <p className="mt-3">
            Do not intentionally submit private, confidential, medical, financial, account, identification, or other
            sensitive information that is not required by the Task. Recording rules are described in the Contributor
            Terms, applicable Task instructions, and Partner Program requirements.
          </p>
        </Section>

        <Section title="5. Partner Licensing Preferences and Commercial Licensing">
          <p>
            For organization-linked Submissions, the Partner Organization controls the purchaser-industry settings
            that apply to new commercial licenses under its Partner Agreement ("Partner Licensing Preferences").
            Individual Contributors do not independently change those commercial settings for Partner Program
            Submissions unless the applicable Program expressly provides that option.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Industry category, not exact use case.</strong> A purchaser-industry
            category describes the Commercial Purchaser as an organization based on its primary business, material
            business lines, public information, customer onboarding information, and other reasonable factors. It does
            not describe or guarantee the exact model, project, product, deployment, research question, end user, or
            downstream use for which the purchaser may use licensed data.
          </p>
          <p className="mt-3">
            For example, if a Partner Organization permits a Food &amp; Kitchen Robotics category, an approved
            organization classified within that industry may be eligible to license the applicable data for robotics
            or AI research, training, evaluation, benchmarking, dataset development, or product development permitted
            by its agreement with Gofer AI. The category does not mean the data can only be used for a specific
            kitchen task or named robot.
          </p>
          <p className="mt-3">
            A Commercial Purchaser may be classified into more than one industry category. If the purchaser falls
            within any category blocked by the applicable Partner Licensing Preferences, Gofer AI will not issue a new
            license to that purchaser for the affected data, even if the purchaser also fits a permitted category.
            Gofer AI may also maintain platform-wide prohibited purchaser categories.
          </p>
          <p className="mt-3">
            Partner Licensing Preferences are prospective. Changing a preference does not automatically cancel a
            license already granted before the change. Existing purchaser rights continue under the applicable
            purchaser agreement unless applicable law requires otherwise.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Independent contributor programs.</strong> If Gofer AI later offers an
            Independent Contributor Program, the Program Details may allow an individual Contributor to choose
            purchaser-industry settings for their independent Submissions. Those controls will be disclosed
            separately and do not change the organization-led beta rules above.
          </p>
        </Section>

        <Section title="6. How We Use Personal Data">
          <List items={[
            'Provide, operate, secure, troubleshoot, and improve the Services',
            'Create and manage accounts and organization affiliations',
            'Administer Partner Programs, assign Tasks, verify participation, and provide activity records to the applicable Partner Organization',
            'Review, accept, reject, store, catalog, and quality-check Submissions',
            'Process accepted Submissions into robotics and AI training/evaluation data, including on demand when buyer or product needs exist',
            'Match accepted data with approved Commercial Purchasers consistent with the applicable Partner Licensing Preferences',
            'License accepted Submissions and Derived Data and administer license history',
            'Calculate and process compensation or revenue share only where applicable written Program Details or Partner Agreements provide for it',
            'Prevent fraud, duplication, prohibited recordings, abuse, and security incidents',
            'Comply with legal obligations, enforce agreements, and protect the rights and safety of Gofer AI, Contributors, Partner Organizations, purchasers, and others',
            'Conduct internal analytics, testing, research, and product development',
          ]} />
          <p className="mt-3">
            We do not use body- or motion-derived data for advertising personalization or to identify or authenticate
            Contributors unless we separately disclose that purpose and obtain any consent required by law.
          </p>
        </Section>

        <Section title="7. How We Disclose Personal Data">
          <SubHeading>Service providers</SubHeading>
          <p>
            We may disclose Personal Data to vendors that provide cloud hosting, storage, security, analytics,
            customer support, payment processing, communications, content review, fraud prevention, data processing,
            and similar services. They may process data only as permitted by their agreements with us and applicable
            law.
          </p>
          <SubHeading>Partner Organizations</SubHeading>
          <p>
            For organization-linked participation, we disclose program information to the applicable Partner
            Organization as described in Section 3. The Partner Organization is responsible for its own use of that
            information and may have its own privacy notice or policies. We do not automatically provide the Partner
            Organization with raw recording access unless the applicable Program expressly allows it.
          </p>
          <SubHeading>Commercial Purchasers</SubHeading>
          <p>
            For accepted Submissions, we may disclose or license the Submission, Derived Data, and associated dataset
            metadata to approved Commercial Purchasers when the purchaser fits the applicable Partner Licensing
            Preferences. Depending on applicable law, this licensing activity may be treated as a "sale" or other
            regulated disclosure of Personal Data even if the transaction is structured as a license.
          </p>
          <p className="mt-3">
            Buyer-facing datasets should generally use a pseudonymous Contributor identifier. We do not ordinarily
            provide a Commercial Purchaser with your personal email, phone number, payout information, tax
            information, exact home address, account credentials, or other direct account information. If a customer
            arrangement would require identified Contributor information, we will disclose that separately and obtain
            any consent required by law before doing so. Our purchaser agreements should restrict unauthorized
            re-identification of Contributors and require purchasers to comply with applicable law and license terms.
          </p>
          <SubHeading>Legal and business transfers</SubHeading>
          <p>
            We may disclose Personal Data when reasonably necessary to comply with law, regulation, legal process,
            governmental request, security obligations, or to protect rights, property, or safety. We may also
            transfer Personal Data in connection with a merger, acquisition, financing, reorganization, bankruptcy,
            or sale of all or part of our business, subject to applicable law.
          </p>
        </Section>

        <Section title="8. Your Right to Opt Out of Sale or Sharing">
          <p>
            Because we license accepted Submissions and Derived Data to Commercial Purchasers, some of this activity
            may be treated as a "sale" or "sharing" of Personal Data under the California Consumer Privacy Act (as
            amended) and similar state laws, even though it is structured as a license.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">How to opt out.</strong> You have the right to direct us not to sell or
            share your Personal Data. To exercise this right, contact us at{' '}
            <a href="mailto:support@goferai.space?subject=Do%20Not%20Sell%20or%20Share%20My%20Personal%20Information" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>{' '}
            with the subject "Do Not Sell or Share My Personal Information." We will not discriminate against you for
            exercising this right. Where we honor an opt-out, we will stop issuing new licenses that would constitute
            a sale or sharing of your Personal Data; an opt-out does not cancel licenses already validly granted
            before we processed your request, except where applicable law requires otherwise.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Minors.</strong> We do not knowingly sell or share the Personal Data of
            individuals under 16 years of age. The standard beta is limited to individuals 18 and older.
          </p>
        </Section>

        <Section title="9. De-Identified and Aggregated Data">
          <p>
            We may create aggregated, anonymized, or de-identified data that is not reasonably linkable to an
            identifiable individual. We may use and disclose such data for lawful business purposes. Where applicable
            law requires us to maintain data in de-identified form, we will take reasonable measures designed to
            prevent re-identification and will not attempt to re-identify it except as permitted by law.
          </p>
        </Section>

        <Section title="10. Sensitive and Body-Derived Data">
          <p>
            Some jurisdictions regulate certain body-derived, biometric, precise-location, health, or other sensitive
            data more strictly than ordinary Personal Data. Where applicable law requires a separate notice, retention
            schedule, written release, or affirmative consent, Gofer AI will use a separate in-app or written process
            rather than relying only on acceptance of this Privacy Policy or the Contributor Terms.
          </p>
          <p className="mt-3">
            Because Gofer AI may generate hand pose, hand geometry, or related motion outputs, the legal
            classification of particular outputs may vary by jurisdiction and technical implementation. Gofer AI may
            limit, modify, or disable certain collection or processing features in some jurisdictions. Gofer AI does
            not intend to use these outputs to identify or authenticate Contributors.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Illinois and other biometric-specific laws.</strong> Some states,
            including Illinois under its Biometric Information Privacy Act (BIPA), regulate certain hand geometry or
            body-derived identifiers as biometric data and require a separate written notice, a written release, and a
            published retention and destruction schedule before collection. Where such a law applies, Gofer AI will
            obtain the separate consent and provide the separate notice through a distinct process before generating
            or retaining the regulated data, and may limit, disable, or geographically restrict the relevant
            collection or processing until those requirements are met.
          </p>
        </Section>

        <Section title="11. People Who Appear in Contributor Recordings">
          <p>
            Partner Programs are intended to use approved recording zones and approved Tasks. Contributors should keep
            customers, clients, recipients, donors, patients, minors, unconsenting coworkers, private conversations,
            medical information, financial information, confidential documents, and other sensitive content out of
            frame. If you believe you appear in a Gofer AI Submission without appropriate permission, contact{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>{' '}
            and provide enough information for us to investigate.
          </p>
        </Section>

        <Section title="12. Tracking Technologies">
          <p>
            We may use cookies, SDKs, local storage, pixels, analytics tools, and similar technologies to operate the
            Services, remember preferences, understand usage, prevent fraud, and improve performance. You can control
            cookies and similar technologies through your browser settings. Disabling certain technologies may affect
            functionality.
          </p>
        </Section>

        <Section title="13. Data Security">
          <p>
            We use reasonable administrative, technical, and physical safeguards designed for the nature of the data
            we process, including access controls and security measures for stored and transmitted data. No method of
            transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Breach notification.</strong> If we become aware of a security breach
            that compromises Personal Data, we will notify affected individuals, Partner Organizations, and
            regulators where and as required by applicable law, without unreasonable delay.
          </p>
        </Section>

        <Section title="14. Data Retention">
          <p>
            We retain Personal Data only for as long as reasonably necessary for the purposes described in this
            Policy, to comply with legal obligations, resolve disputes, prevent fraud, administer programs and
            payments, maintain licensing records, and enforce agreements. Retention periods may differ by data type.
          </p>
          <List items={[
            'Account and organization-affiliation data: generally while your account or applicable Partner Program participation is active and for a reasonable period afterward for legal, security, audit, and dispute purposes.',
            'Rejected Submissions: generally for a limited quality-review or appeal period, then deleted or de-identified unless a longer period is required for fraud, safety, legal, or program-audit reasons.',
            'Accepted but unlicensed Submissions: generally while cataloged and eligible for future licensing under the applicable Partner Program, unless withdrawn under the Partner Agreement, removed in response to an applicable legal right, or a shorter period is required by law.',
            'Licensed Submissions and license records: retained as needed to administer existing purchaser rights, document the license, comply with law, and resolve disputes.',
            'Derived Data: retained while needed for permitted dataset, licensing, research, audit, or legal purposes. Deletion or withdrawal may not require removal of Derived Data already licensed, incorporated into a licensed dataset, de-identified or aggregated, or otherwise allowed to remain under applicable law.',
            'Activity and verification records: retained as needed to administer Partner Programs, verify approved activity, resolve disputes, and satisfy the Partner Agreement or applicable law.',
            'Consent, preference, and audit records: retained as needed to demonstrate what permissions and restrictions applied when data was processed or licensed.',
            'Body-derived or biometric data subject to a specific statutory retention schedule: handled under the applicable schedule and any separate biometric notice.',
          ]} />
        </Section>

        <Section title="15. Your Rights and Controls">
          <p>
            Depending on where you live and the nature of your relationship with Gofer AI, you may have rights to
            request access, correction, deletion, portability, a list of categories of recipients, restriction or
            objection to certain processing, or to opt out of certain sales or disclosures. We will honor rights
            required by applicable law.
          </p>
          <List items={[
            'Access and copy: request information about Personal Data we maintain about you.',
            'Correction: request correction of inaccurate Personal Data.',
            'Deletion: request deletion of eligible Personal Data.',
            'Organization affiliation: request correction of an incorrect Partner Organization association or contact support if you no longer participate in a Partner Program.',
            'Consent withdrawal: where we rely on consent and applicable law gives you a withdrawal right, you may withdraw that consent through the method we provide.',
            'Commercial licensing controls in Partner Programs: Partner Licensing Preferences are controlled by the Partner Organization under its Partner Agreement. Individual privacy rights and consent rights are separate from those commercial settings and are not waived by participation in a Partner Program.',
            'Future licensing and deletion requests: if you ask us to stop processing or licensing Personal Data tied to your Submission, we will evaluate and honor the request to the extent required by applicable law and the rights applicable to the Submission. A request does not automatically cancel licenses already validly granted before the request.',
            'Appeal: where required by law, appeal our decision on a privacy request.',
          ]} />
          <p className="mt-3">
            To submit a privacy request, use privacy controls in the Services where available or contact{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>
            . We may need to verify your identity before completing certain requests. If your request concerns a
            Partner Program, we may need to coordinate with the applicable Partner Organization where legally
            permitted and necessary.
          </p>
        </Section>

        <Section title="16. No Contributors Under 18">
          <p>
            The standard Contributor Program is limited to individuals age 18 and older. Contributors must not
            intentionally record minors as part of a Submission. Any separate program involving minors would require
            a distinct written program, legal review, and all required permissions; such a program is not part of the
            standard beta.
          </p>
        </Section>

        <Section title="17. Changes to This Policy">
          <p>
            We may update this Privacy Policy as our Services, technology, business model, or legal obligations
            change. If we make a material change, we will provide notice through the Services, by email, or by another
            reasonable method. Where required by law, we will obtain new consent before applying a materially
            different processing practice to Personal Data already collected.
          </p>
        </Section>

        <Section title="18. Contact Information">
          <p>
            For questions, complaints, privacy requests, deletion requests, appeals, or other privacy-related matters,
            contact:
          </p>
          <div className="mt-3 text-gray-300">
            <p>Gofer AI, Inc.</p>
            <p>Website: goferai.space</p>
            <p>
              Email:{' '}
              <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
                support@goferai.space
              </a>
            </p>
            <p>Address: 251 Little Falls Dr., Wilmington, Delaware 19808</p>
          </div>
        </Section>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            <Link to="/contributor-terms" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contributor Terms
            </Link>
            {' '}&bull;{' '}
            <Link to="/" className="hover:text-gray-400 transition-colors">
              Back to Home
            </Link>
          </p>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-800">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-gray-200 mt-5 mb-2">{children}</h3>;
}

function SummaryRow({ topic, children }: { topic: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-gray-200 font-semibold">{topic}</p>
      <p className="text-gray-400 mt-1">{children}</p>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
