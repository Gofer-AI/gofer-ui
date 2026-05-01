import { Link } from 'react-router-dom';
import goferLogo from '/gofer-logo-square.png';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={goferLogo} alt="Gofer AI" className="w-9 h-9 rounded-full" />
            <span className="text-white font-bold text-2xl tracking-tight">
              Gofer <span className="text-blue-600">AI</span>
            </span>
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">
          Effective Date: May 1, 2026 &nbsp;&bull;&nbsp; Company: Gofer AI, Inc. &nbsp;&bull;&nbsp;{' '}
          <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
            support@goferai.space
          </a>
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Gofer AI, Inc. ("Gofer," "we," "us," or "our") provides a web and app-based platform that allows adult users
          in the United States to upload human-recorded task videos for review, processing, compensation, robotics
          research, artificial intelligence development, simulation, evaluation, and commercial dataset licensing.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you
          use our website, application, contributor program, and related services (collectively, the "Services").
        </p>
        <p className="text-gray-300 leading-relaxed mb-10">
          By using the Services, creating an account, submitting content, or participating in the contributor program,
          you acknowledge that we process your personal information as described in this Privacy Policy.
        </p>

        <Section title="1. Scope of this Privacy Policy">
          <p>
            This Privacy Policy applies to Gofer's web and app platform and related contributor services offered to
            users in the United States.
          </p>
          <p className="mt-3">
            This Privacy Policy does not replace our Contributor Terms, Terms of Service, customer agreements, or any
            separate written agreement you may enter into with Gofer. If you submit videos or other content through the
            contributor program, the Contributor Terms govern the ownership, license, payout, and commercial-use terms
            for accepted submissions.
          </p>
        </Section>

        <Section title="2. Personal Information We Collect">
          <p>
            We collect personal information you provide directly to us, information generated through your use of the
            Services, information contained in submitted content, and information from third-party services you choose
            to connect.
          </p>

          <SubHeading>A. Account and identity information</SubHeading>
          <p>We may collect:</p>
          <List items={['Name', 'Email address', 'Phone number', 'Username', 'Age or date of birth', 'Location information', 'Account credentials', 'User ID or internal account identifiers']} />

          <SubHeading>B. Payment and payout information</SubHeading>
          <p>Because contributors may be paid for accepted submissions, we may collect:</p>
          <List items={['Payment preferences', 'Crypto wallet information', 'Payout history', 'Accepted-upload records', 'Tax information', 'Identity verification information', 'Sanctions-screening or fraud-prevention information', 'Other information required to process contributor payouts']} />
          <p className="mt-3">
            We may use third-party payment, tax, identity verification, sanctions-screening, or crypto payout providers
            to process payments.
          </p>

          <SubHeading>C. Submitted content</SubHeading>
          <p>When you upload videos or other content, we may collect and process:</p>
          <List items={['Raw videos', 'Audio', 'Still frames', 'Task recordings', 'Visible people, including you and permitted adult bystanders', 'Hands, body movements, gestures, posture, and motion', 'Voice or other sounds', 'Objects, tools, rooms, homes, workplaces, screens, documents, or surroundings visible in the recording', 'Metadata associated with the recording, such as timestamps, file information, duration, camera/device metadata, task labels, and upload history']} />
          <p className="mt-3 text-yellow-300/80 text-sm">
            Submitted videos may reveal sensitive information about you, your surroundings, your habits, your location,
            your possessions, your work environment, or other individuals. Do not submit content that includes
            information you do not want reviewed, processed, licensed, or used as described in this Privacy Policy and
            our Contributor Terms.
          </p>

          <SubHeading>D. Motion, biometric-adjacent, and robotics-relevant data</SubHeading>
          <p>We may extract or generate data from submitted content, including:</p>
          <List items={['Hand pose', 'Body pose', 'Skeletal keypoints', 'Object interaction data', 'Motion trajectories', 'Task phases', 'Grasp timing', 'Movement patterns', 'Action labels', 'Canonical action traces', 'Robot-compatible motion representations', 'Quality scores', 'Safety scores', 'Dataset provenance records']} />
          <p className="mt-3">
            We do not use this information to identify, authenticate, track, or surveil individuals. We use it to
            develop, evaluate, and license robotics and AI datasets, tools, simulations, and related systems.
          </p>

          <SubHeading>E. Derived AI and robotics data</SubHeading>
          <p>We may generate derivative data from submitted content, including:</p>
          <List items={['Captions', 'Embeddings', 'Transcripts', 'Video summaries', 'Segment labels', 'Task labels', 'Object labels', 'Frames', 'Simulation outputs', 'Robot trajectories', 'Synthetic or transformed training data', 'Dataset bundles', 'Evaluation benchmarks', 'Model-training, model-evaluation, and quality-control data']} />

          <SubHeading>F. Technical and usage information</SubHeading>
          <p>When you use the Services, we may automatically collect:</p>
          <List items={['IP address', 'Device information', 'Browser type', 'Operating system', 'App version', 'Pages or features used', 'Upload timestamps', 'Log files', 'Error reports', 'Crash data', 'Cookie or similar technology data', 'Approximate location derived from IP address', 'Analytics and performance data']} />

          <SubHeading>G. Communications</SubHeading>
          <p>If you contact us, we may collect:</p>
          <List items={['Name', 'Contact information', 'Message contents', 'Support history', 'Feedback', 'Complaint or appeal information']} />

          <SubHeading>H. Third-party connection information</SubHeading>
          <p>
            If you connect third-party services to Gofer, we may collect information authorized by you or made
            available through those services, subject to your settings and the third party's own policies.
          </p>
        </Section>

        <Section title="3. How We Use Personal Information">
          <p>We use personal information for the following purposes:</p>
          <List items={[
            'To provide, operate, maintain, and improve the Services',
            'To create and administer user accounts',
            'To verify user eligibility, including age eligibility',
            'To receive, review, process, label, score, accept, reject, or remove submitted content',
            'To operate the contributor program',
            'To process payouts for accepted submissions',
            'To conduct identity verification, tax compliance, sanctions screening, abuse prevention, and fraud prevention',
            'To generate captions, embeddings, labels, motion traces, canonical action traces, simulation outputs, robot trajectories, datasets, and other derived data',
            'To build, train, fine-tune, test, benchmark, evaluate, and improve robotics systems, multimodal AI systems, machine learning models, simulation tools, and related infrastructure',
            'To create, package, license, sell, transfer, or otherwise make available accepted submissions and derived data to approved customers and partners',
            'To support robotics labs, frontier AI labs, universities, enterprise customers, and research partners',
            'To conduct quality control, auditing, compliance review, and safety review',
            'To detect prohibited content or policy violations',
            'To respond to user requests, appeals, complaints, and support inquiries',
            'To communicate with you about the Services, contributor program, payouts, policy updates, and security notices',
            'To comply with law, legal process, tax obligations, accounting requirements, and regulatory obligations',
            'To protect our rights, users, partners, customers, and Services',
          ]} />
        </Section>

        <Section title="4. Contributor Program and Commercial Data Licensing">
          <p>
            Gofer operates a contributor program that allows eligible adult users to submit task videos for possible
            acceptance and compensation.
          </p>
          <p className="mt-3">
            If your submission is accepted, it may be used, processed, commercialized, licensed, sold, transferred, or
            otherwise made available to approved customers and partners for robotics, artificial intelligence, research,
            training, evaluation, benchmarking, simulation, and commercial development.
          </p>
          <p className="mt-3">Accepted submissions may be provided to:</p>
          <List items={['Robotics labs', 'Frontier AI labs', 'Universities', 'Research organizations', 'Enterprise customers', 'Commercial AI or robotics developers', 'Other approved customers or partners']} />
          <p className="mt-3">
            Customers may receive raw videos, processed videos, frames, audio, captions, labels, motion traces,
            embeddings, canonical action traces, simulation outputs, robot trajectories, dataset bundles, or other
            derived data, depending on the applicable agreement.
          </p>
          <p className="mt-3">
            Unless otherwise permitted in writing by Gofer, customers may use licensed data only for their internal
            research, development, training, evaluation, benchmarking, simulation, and model-improvement purposes.
            Customers may not resell, publish, sublicense, redistribute, or make the data available to third parties
            without Gofer's written permission.
          </p>
        </Section>

        <Section title="5. User Ownership and Gofer's License">
          <p>
            You retain ownership of videos and content you submit. However, when a submission is accepted into the
            contributor program, you grant Gofer the license described in our Contributor Terms.
          </p>
          <p className="mt-3">
            In general, accepted submissions grant Gofer an exclusive, worldwide, perpetual, transferable,
            sublicensable license to use, reproduce, modify, process, distribute, commercialize, license, sell,
            transfer, create derivative works from, and otherwise exploit the accepted submission and related data for
            robotics, artificial intelligence, research, evaluation, simulation, dataset development, model development,
            and commercial licensing purposes.
          </p>
          <p className="mt-3">
            Because this license is central to the contributor program, you should read the{' '}
            <Link to="/contributor-terms" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contributor Terms
            </Link>{' '}
            carefully before submitting content.
          </p>
        </Section>

        <Section title="6. Payouts">
          <p>
            Gofer may pay contributors once per accepted video or accepted submission, according to the payout terms
            shown at the time of submission.
          </p>
          <p className="mt-3">
            Rejected submissions are not eligible for payment unless we state otherwise. We may reject submissions for
            quality issues, duplicate content, prohibited content, suspected fraud, lack of proper permissions, safety
            concerns, policy violations, or other reasons.
          </p>
          <p className="mt-3">
            We may use crypto payout providers, identity verification providers, tax providers, sanctions-screening
            providers, fraud-prevention vendors, or payment processors to administer payouts. You are responsible for
            any taxes associated with payouts you receive.
          </p>
        </Section>

        <Section title="7. How We Disclose Personal Information">
          <p>We may disclose personal information to the following categories of recipients.</p>

          <SubHeading>A. Service providers</SubHeading>
          <p>We may share information with service providers that help us operate the Services, including:</p>
          <List items={['Cloud storage providers', 'Hosting providers', 'AI labeling vendors', 'Analytics providers', 'Security providers', 'Payment processors', 'Crypto payout providers', 'Identity verification providers', 'Tax providers', 'Customer support tools', 'Infrastructure and software vendors']} />

          <SubHeading>B. Customers and commercial partners</SubHeading>
          <p>
            We may disclose accepted submissions and derived data to approved customers and partners, including
            robotics labs, frontier AI labs, universities, research institutions, enterprise customers, and commercial
            AI or robotics developers.
          </p>

          <SubHeading>C. Business partners</SubHeading>
          <p>
            We may disclose information to business partners that help us develop, operate, evaluate, market, or
            improve the Services, subject to appropriate contractual restrictions.
          </p>

          <SubHeading>D. Legal, regulatory, tax, safety, and compliance purposes</SubHeading>
          <p>We may disclose information if we believe disclosure is necessary or appropriate to:</p>
          <List items={['Comply with law or legal process', 'Respond to lawful requests by public authorities', 'Meet tax, accounting, or regulatory obligations', 'Protect the rights, property, or safety of Gofer, users, customers, partners, or others', 'Detect or prevent fraud, abuse, security incidents, or policy violations', 'Enforce our Terms of Service, Contributor Terms, customer agreements, or other agreements', 'Investigate disputes or claims']} />

          <SubHeading>E. Corporate transactions</SubHeading>
          <p>
            If Gofer is involved in a merger, acquisition, financing, reorganization, bankruptcy, sale of assets, or
            similar transaction, personal information may be disclosed or transferred as part of that transaction.
          </p>

          <SubHeading>F. With your consent or direction</SubHeading>
          <p>We may disclose information when you consent to or direct the disclosure.</p>
        </Section>

        <Section title="8. Prohibited and Restricted Content">
          <p>You may not submit content that includes:</p>
          <List items={['Minors', 'Bystanders without required permission', 'Medical, financial, legal, or government identification information', 'Passwords, private screens, private messages, or confidential documents', 'Confidential workplace information or trade secrets', 'Nudity or sexual content', 'Weapons, explosives, dangerous chemicals, or illegal activity', 'Self-harm or unsafe instructions', 'Content recorded where you lack permission to record or submit the content', "Content that violates another person's privacy, intellectual property, confidentiality, or other rights"]} />
          <p className="mt-3">
            You may submit videos that include visible or audible adult bystanders only if you have obtained all
            necessary permissions from those individuals. Gofer may reject, blur, remove, or delete submissions
            containing bystanders at its discretion.
          </p>
          <p className="mt-3">Videos containing minors are prohibited and may be rejected or deleted.</p>
        </Section>

        <Section title="9. Privacy Review and Safety Controls">
          <p>
            Gofer may review submitted content manually, automatically, or through vendors. We may use AI systems,
            human reviewers, quality-control tools, safety classifiers, or labeling vendors to review content.
          </p>
          <p className="mt-3">
            We may blur, redact, reject, remove, or delete content that contains prohibited information or that
            presents privacy, safety, legal, or quality concerns.
          </p>
          <p className="mt-3">
            We may also retain certain records for fraud prevention, abuse prevention, safety auditing, compliance,
            payment administration, and legal purposes.
          </p>
        </Section>

        <Section title="10. Data Retention">
          <p>
            We retain personal information for as long as reasonably necessary for the purposes described in this
            Privacy Policy, including to operate the Services, administer the contributor program, process payments,
            comply with law, resolve disputes, prevent fraud, maintain security, and support our commercial dataset
            licensing activities.
          </p>
          <p className="mt-3">
            Accepted but unlicensed submissions may be retained for up to 24 months for dataset development, quality
            review, customer evaluation, fraud prevention, contributor payment administration, and licensing
            opportunities. After that period, Gofer may delete, de-identify, or retain the submission if it remains
            necessary for an active dataset, audit, legal obligation, dispute, investigation, or user-authorized
            licensing opportunity.
          </p>
          <p className="mt-3">
            We may retain payment, tax, identity verification, fraud-prevention, compliance, and legal records for
            longer periods where required or permitted by law.
          </p>
        </Section>

        <Section title="11. Deletion Requests">
          <p>
            You may delete submitted videos through your dashboard or by contacting{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>
            .
          </p>
          <p className="mt-3">
            When you delete a raw video, Gofer will remove it from your user dashboard promptly. We will delete the
            raw video, extracted frames, audio, and captions from active backend systems within 30 days and complete
            deletion from ordinary backup systems within 90 days, unless retention is required or permitted for legal,
            tax, fraud-prevention, payment, compliance, dispute, security, or contractual reasons.
          </p>
          <p className="mt-3">
            Deletion applies to future licensing activity. After deletion is processed, Gofer will not include the
            deleted raw video in new licensing transactions.
          </p>
          <p className="mt-3">
            Deletion does not undo completed transactions. If a video, dataset, or related data was licensed, sold,
            transferred, or otherwise made available to a customer before your deletion request was processed, that
            customer may retain and use the data according to its agreement with Gofer, unless deletion is required by
            law or by the applicable customer agreement.
          </p>
          <p className="mt-3">
            Deletion of a raw video does not automatically delete derived data, including embeddings, pose estimates,
            motion traces, action labels, canonical action traces, quality scores, simulation outputs, robot
            trajectories, de-identified data, aggregated analytics, fraud-prevention records, payment records, or
            dataset provenance records, unless deletion is required by law.
          </p>
        </Section>

        <Section title="12. De-identified and Aggregated Information">
          <p>
            We may process personal information in de-identified, aggregated, or transformed form for research,
            analytics, dataset development, model training, model evaluation, simulation, robotics development, quality
            measurement, safety review, commercial licensing, and product improvement.
          </p>
          <p className="mt-3">
            We may retain and use de-identified, aggregated, or derived information as permitted by law.
          </p>
        </Section>

        <Section title="13. Your Privacy Rights and Choices">
          <p>
            Depending on where you live, you may have rights regarding your personal information, including the right
            to:
          </p>
          <List items={[
            'Know what personal information we collect, use, disclose, or make available',
            'Access personal information we maintain about you',
            'Request correction of inaccurate personal information',
            'Request deletion of certain personal information',
            'Request portability of certain personal information',
            'Opt out of certain processing, including sale, sharing, targeted advertising, or profiling where applicable',
            'Withdraw consent where processing is based on consent',
            'Appeal a decision we make about a privacy request',
            'Use an authorized agent to submit a request where permitted by law',
            'Not be discriminated against for exercising privacy rights',
          ]} />
          <p className="mt-3">
            These rights are not absolute. We may deny or limit a request where permitted by law, including where
            information is needed for legal compliance, payment administration, tax records, fraud prevention,
            security, dispute resolution, completed transactions, customer contracts, internal business records, or
            other lawful purposes.
          </p>
          <p className="mt-3">
            To exercise your rights, contact us at{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>
            . We may verify your identity before fulfilling a request. If we deny your request, you may appeal by
            contacting us at the same email address and stating that you are appealing our decision.
          </p>
        </Section>

        <Section title="14. California Privacy Notice">
          <p>This section applies to California residents.</p>
          <p className="mt-3">
            Depending on how California privacy law applies to Gofer, California residents may have the right to:
          </p>
          <List items={[
            'Know the categories and specific pieces of personal information we collect',
            'Know the categories of sources of personal information',
            'Know the purposes for collecting, using, selling, or sharing personal information',
            'Know the categories of third parties to whom we disclose personal information',
            'Request deletion of personal information',
            'Request correction of inaccurate personal information',
            'Request access to personal information',
            'Opt out of sale or sharing of personal information where applicable',
            'Limit use of sensitive personal information where applicable',
            'Use an authorized agent',
            'Not be discriminated against for exercising privacy rights',
          ]} />
          <p className="mt-3">
            Gofer operates a contributor program in which users may choose to submit content for compensation.
            Accepted submissions may be licensed, sold, transferred, or otherwise made available to approved customers
            and partners for robotics, artificial intelligence, research, evaluation, simulation, and commercial
            development.
          </p>
          <p className="mt-3">
            Gofer does not knowingly collect personal information from children or minors. Users must be at least 18
            years old to use the Services or submit content.
          </p>
          <p className="mt-3">
            We honor Global Privacy Control signals where required by applicable law and technically feasible.
          </p>
          <p className="mt-3">
            To exercise California privacy rights, contact:{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>
          </p>
        </Section>

        <Section title="15. Cookies and Similar Technologies">
          <p>
            We and our service providers may use cookies, pixels, SDKs, local storage, analytics tools, and similar
            technologies to operate the Services, understand usage, improve performance, detect abuse, remember
            preferences, and support analytics or marketing.
          </p>
          <p className="mt-3">
            You may control cookies through your browser settings. Some features may not function properly if cookies
            are disabled.
          </p>
        </Section>

        <Section title="16. Security">
          <p>
            We use reasonable technical, organizational, and administrative safeguards designed to protect personal
            information from unauthorized access, disclosure, alteration, loss, misuse, or destruction.
          </p>
          <p className="mt-3">
            No system is completely secure. You are responsible for maintaining the confidentiality of your account
            credentials and for submitting content only when you are comfortable with the uses described in this
            Privacy Policy and the Contributor Terms.
          </p>
        </Section>

        <Section title="17. Children">
          <p>
            The Services are not directed to children or minors. You must be at least 18 years old to create an
            account, use the Services, or submit content.
          </p>
          <p className="mt-3">
            We do not knowingly collect personal information from children or minors. Videos containing minors are
            prohibited and may be rejected or deleted. If you believe a child or minor has provided personal
            information to Gofer, contact us at{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>
            .
          </p>
        </Section>

        <Section title="18. U.S.-Only Services">
          <p>
            The Services are currently intended for users located in the United States. We do not intentionally offer
            the Services to users outside the United States at this time.
          </p>
        </Section>

        <Section title="19. Changes to this Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will provide notice
            as appropriate, such as by updating the effective date, posting a notice in the Services, or contacting
            you.
          </p>
          <p className="mt-3">
            Your continued use of the Services after the updated Privacy Policy becomes effective means you
            acknowledge the updated Privacy Policy.
          </p>
        </Section>

        <Section title="20. Contact Us">
          <p>
            For questions, complaints, privacy requests, deletion requests, appeals, or other privacy-related matters,
            contact:
          </p>
          <div className="mt-3 text-gray-300">
            <p>Gofer AI, Inc.</p>
            <p>
              Email:{' '}
              <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
                support@goferai.space
              </a>
            </p>
            <p>State of Incorporation: Delaware</p>
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

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
