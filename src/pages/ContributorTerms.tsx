import { Link } from 'react-router-dom';
import goferLogo from '/gofer-logo-square.png';

export default function ContributorTerms() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Contributor Terms</h1>
        <p className="text-gray-400 text-sm mb-8">
          Effective Date: May 1, 2026 &nbsp;&bull;&nbsp; Company: Gofer AI, Inc. &nbsp;&bull;&nbsp;{' '}
          <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
            support@goferai.space
          </a>
        </p>

        <p className="text-gray-300 leading-relaxed mb-10">
          These Contributor Terms govern your participation in Gofer AI's contributor program. By submitting videos,
          recordings, task demonstrations, or other content through the contributor program, you agree to these
          Contributor Terms.
        </p>

        <Section title="1. Eligibility">
          <p>
            You must be at least 18 years old and located in the United States to participate in the contributor
            program.
          </p>
          <p className="mt-3">
            You may not submit content on behalf of another person unless Gofer expressly authorizes you to do so in
            writing.
          </p>
        </Section>

        <Section title="2. Contributor Program Overview">
          <p>
            Gofer allows eligible users to submit human-recorded task videos for review. Gofer may accept, reject,
            process, label, score, modify, commercialize, license, sell, transfer, or create derivative works from
            accepted submissions.
          </p>
          <p className="mt-3">
            Accepted submissions may be used for robotics, artificial intelligence, simulation, machine learning,
            research, training, evaluation, benchmarking, dataset development, and commercial development.
          </p>
        </Section>

        <Section title="3. Submitted Content">
          <p>
            "Submitted Content" includes any content or information you submit to Gofer, including:
          </p>
          <List items={['Raw videos', 'Audio', 'Frames', 'Images', 'Task recordings', 'Metadata', 'Captions', 'Annotations', 'Descriptions', 'Feedback', 'Any other materials submitted through the Services']} />

          <p className="mt-4">"Derived Data" includes data generated from or related to Submitted Content, including:</p>
          <List items={['Embeddings', 'Pose estimates', 'Motion traces', 'Skeletal keypoints', 'Hand pose', 'Task labels', 'Object labels', 'Action labels', 'Canonical action traces', 'Quality scores', 'Simulation outputs', 'Robot trajectories', 'Dataset bundles', 'De-identified data', 'Aggregated data', 'Model-training or model-evaluation data']} />
        </Section>

        <Section title="4. Your Ownership">
          <p>
            You retain ownership of your Submitted Content, subject to the license you grant to Gofer under these
            Contributor Terms.
          </p>
        </Section>

        <Section title="5. License to Gofer">
          <p>
            For any Submitted Content that Gofer accepts into the contributor program, you grant Gofer an{' '}
            <strong className="text-white">exclusive, worldwide, perpetual, irrevocable, transferable,
            sublicensable, royalty-free license</strong> to use, reproduce, host, store, copy, modify, adapt, edit,
            translate, transcode, annotate, label, analyze, process, distribute, display, perform, commercialize,
            sell, license, transfer, create derivative works from, and otherwise exploit the Submitted Content and
            Derived Data for any purpose related to robotics, artificial intelligence, machine learning, simulation,
            research, training, evaluation, benchmarking, dataset development, product development, commercial
            licensing, and business operations.
          </p>
          <p className="mt-3">
            This license allows Gofer to make accepted Submitted Content and Derived Data available to approved
            customers and partners, including robotics labs, frontier AI labs, universities, research organizations,
            enterprise customers, and commercial AI or robotics developers.
          </p>
        </Section>

        <Section title="6. Exclusivity">
          <p>
            The license you grant to Gofer for accepted submissions is exclusive. This means that after Gofer accepts
            a submission, you may not license, sell, transfer, or commercialize the same submission, or substantially
            similar copies of that submission, to another robotics dataset company, AI training data company, robotics
            lab, AI lab, or commercial customer without Gofer's written permission.
          </p>
        </Section>

        <Section title="7. Payouts">
          <p>
            Gofer may pay you once per accepted video or accepted submission according to the payout terms shown at
            the time of submission.
          </p>
          <p className="mt-3">
            Payment is not guaranteed for all uploads. Gofer may reject submissions for any reason, including poor
            quality, duplication, suspected fraud, prohibited content, safety concerns, lack of permissions, or
            business needs.
          </p>
          <p className="mt-3">
            Rejected submissions are not eligible for payment unless Gofer states otherwise.
          </p>
          <p className="mt-3">
            Payouts may be made through crypto or other payment methods supported by Gofer. You may be required to
            provide identity verification, tax, sanctions-screening, wallet, or payment information before receiving
            payment.
          </p>
          <p className="mt-3">
            You are responsible for any taxes, reporting obligations, wallet security, transaction fees, or other
            obligations associated with payouts.
          </p>
        </Section>

        <Section title="8. No Ongoing Royalties">
          <p>
            Unless Gofer states otherwise in writing, payments are flat payments for accepted submissions. You are not
            entitled to royalties, revenue share, resale proceeds, downstream licensing fees, model-training fees,
            customer fees, or other ongoing compensation from Gofer's use, licensing, sale, transfer,
            commercialization, or exploitation of accepted submissions or Derived Data.
          </p>
        </Section>

        <Section title="9. Customer Use">
          <p>Gofer may license accepted submissions and Derived Data to approved customers and partners.</p>
          <p className="mt-3">
            Unless Gofer gives written permission, customers may use licensed data only for internal research,
            development, training, evaluation, benchmarking, simulation, model improvement, and related business
            purposes. Customers may not resell, publish, sublicense, redistribute, or make the data available to
            third parties without Gofer's written permission.
          </p>
          <p className="mt-3">
            Customer agreements may allow customers to train, fine-tune, evaluate, or improve commercial AI or
            robotics systems using accepted submissions and Derived Data.
          </p>
          <p className="mt-3">
            Unless otherwise stated in the applicable customer agreement, customers must stop using and delete
            licensed datasets after the license term expires. However, customer deletion obligations may not require
            removal of data from models already trained before expiration unless the customer agreement specifically
            requires that.
          </p>
        </Section>

        <Section title="10. Deletion and Withdrawal">
          <p>
            You may delete submitted videos through your dashboard or by contacting{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>
            .
          </p>
          <p className="mt-3">
            Deletion stops future licensing of the deleted raw video after the deletion request is processed.
            Deletion does not undo completed transactions.
          </p>
          <p className="mt-3">
            If Gofer licensed, sold, transferred, or otherwise made available a video, dataset, or related data to a
            customer before your deletion request was processed, that customer may retain and use the data according
            to its agreement with Gofer, unless deletion is required by law or by the applicable customer agreement.
          </p>
          <p className="mt-3">
            Deletion of raw video does not automatically delete Derived Data, including embeddings, pose estimates,
            motion traces, action labels, canonical action traces, quality scores, simulation outputs, robot
            trajectories, de-identified data, aggregated analytics, fraud-prevention records, payment records, or
            dataset provenance records, unless deletion is required by law.
          </p>
        </Section>

        <Section title="11. Your Representations and Warranties">
          <p>By submitting content, you represent and warrant that:</p>
          <List items={[
            'You are at least 18 years old.',
            'You are located in the United States.',
            'You own or have all rights necessary to submit the content.',
            'You have obtained all permissions required from visible or audible adult bystanders.',
            'The content does not contain minors.',
            'The content does not contain confidential, illegal, restricted, or prohibited material.',
            "The content does not violate any law, contract, privacy right, intellectual property right, employment obligation, confidentiality obligation, or third-party right.",
            'The content was not recorded in a location where recording or submission is prohibited.',
            'The content does not contain trade secrets or confidential workplace information unless you are authorized to submit it.',
            'The content does not include medical, financial, legal, government-ID, password, or private-screen information.',
            'The content is not fraudulent, staged in a deceptive manner, duplicated, or submitted in violation of Gofer\'s policies.',
          ]} />
        </Section>

        <Section title="12. Bystanders">
          <p>
            You may submit videos containing visible or audible adult bystanders only if you have obtained all
            necessary permissions from those individuals.
          </p>
          <p className="mt-3">You may not submit videos containing minors.</p>
          <p className="mt-3">
            Gofer may reject, blur, remove, or delete any submission containing bystanders, minors, or
            privacy-sensitive information.
          </p>
        </Section>

        <Section title="13. Prohibited Content">
          <p>You may not submit content involving:</p>
          <List items={[
            'Minors',
            'Bystanders without permission',
            'Nudity or sexual content',
            'Medical, financial, legal, or government identification information',
            'Passwords, private screens, private messages, or confidential documents',
            'Confidential workplace information or trade secrets',
            'Weapons, explosives, dangerous chemicals, or illegal activity',
            'Self-harm or unsafe instructions',
            'Activities that create unreasonable risk of harm',
            "Content recorded in violation of law, contract, workplace policy, or another person's rights",
          ]} />
        </Section>

        <Section title="14. Review, Acceptance, and Rejection">
          <p>
            Gofer may review submissions manually, automatically, or through vendors. Gofer may accept, reject, label,
            score, modify, blur, redact, remove, or delete submissions at its discretion.
          </p>
          <p className="mt-3">Gofer is not required to explain why a submission was rejected.</p>
        </Section>

        <Section title="15. No Employment Relationship">
          <p>
            Your participation in the contributor program does not create an employment, contractor, agency,
            partnership, joint venture, or fiduciary relationship between you and Gofer.
          </p>
          <p className="mt-3">You are not authorized to act on behalf of Gofer.</p>
        </Section>

        <Section title="16. Fraud and Abuse">
          <p>
            Gofer may suspend or terminate your account, withhold payouts, remove submissions, or take other action
            if we believe you have engaged in fraud, abuse, duplicate submissions, prohibited uploads,
            misrepresentation, policy violations, or unlawful activity.
          </p>
        </Section>

        <Section title="17. Privacy">
          <p>
            Gofer's collection, use, disclosure, and retention of personal information is described in the{' '}
            <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
              Gofer Privacy Policy
            </Link>
            .
          </p>
        </Section>

        <Section title="18. Changes to Contributor Terms">
          <p>
            Gofer may update these Contributor Terms from time to time. If we make material changes, we will provide
            notice as appropriate.
          </p>
          <p className="mt-3">
            Updated terms will apply to future submissions. Terms applicable to previously accepted submissions may
            continue to govern those submissions unless otherwise stated or agreed.
          </p>
        </Section>

        <Section title="19. Contact">
          <p>For questions about these Contributor Terms, contact:</p>
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
            <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
              Privacy Policy
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

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-400">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
