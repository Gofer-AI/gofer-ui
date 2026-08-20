import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function ContributorTerms() {
  return (
    <div className="min-h-screen bg-gray-950">
      <SiteHeader />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">Contributor Terms of Use</h1>
        <p className="text-gray-400 text-sm mb-8">
          Effective Date: August 20, 2026 &nbsp;&bull;&nbsp; Company: Gofer AI, Inc. &nbsp;&bull;&nbsp;{' '}
          <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
            support@goferai.space
          </a>
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Welcome to Gofer AI. These Contributor Terms of Use (the "Terms") govern your use of Gofer AI's websites,
          mobile applications (including the GoferEco capture app), contributor platform, and participation in the
          contributor program (collectively, the "Platform" and "Program"). These Terms are a binding agreement
          between you and Gofer AI, Inc. ("Gofer AI," "we," "us," or "our").
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Related documents:{' '}
          <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
            Privacy Policy
          </Link>{' '}
          and the Program Details provided by your Partner Organization. Questions:{' '}
          <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
            support@goferai.space
          </a>{' '}
          &bull; 251 Little Falls Dr., Wilmington, Delaware 19808.
        </p>
        <p className="text-yellow-300/80 text-sm leading-relaxed mb-10">
          IMPORTANT: The Program is for Contributors age 18 or older. These Terms also include an arbitration
          agreement and class action waiver. Please read them carefully.
        </p>

        <Section title="1. Eligibility and Authority">
          <p>
            Individual Contributors must be at least eighteen (18) years old and legally capable of entering into a
            binding contract. There is no parent or guardian exception for participation in the standard Contributor
            Program.
          </p>
          <p className="mt-3">
            If you are agreeing to these Terms on behalf of an organization, you represent that you have authority to
            bind that organization. An organization may be subject to separate partner, data-license, or commercial
            terms. Gofer AI may require an organization to enter a separate agreement before submitting or receiving
            data.
          </p>
        </Section>

        <Section title="2. Changes to the Platform or Terms">
          <p>
            We may modify, suspend, or discontinue features of the Platform or Program. We may update these Terms from
            time to time. If we make a material change, we will provide notice through the Platform, by email, or
            another reasonable method. If applicable law requires separate consent for a change, we will request it.
            If you do not agree to updated Terms, you must stop using the Platform and participating in the Program.
          </p>
        </Section>

        <Section title="3. Program Overview">
          <p>
            Gofer AI allows Contributors to perform Tasks and submit content such as raw videos, audio if requested,
            frames, images, metadata, captions, annotations, descriptions, device information, and feedback
            (collectively, "Submissions"). Tasks may involve ordinary hands-on activities such as
            handling dishes, wiping surfaces, sorting laundry, restocking supplies, kitchen preparation, or other
            activities shown in the Platform.
          </p>
          <p className="mt-3">
            Gofer AI may accept or reject a Submission in its reasonable discretion based on quality, duplication,
            fraud signals, safety concerns, lack of permissions, prohibited content, buyer demand, technical
            requirements, or other Program needs. Payout eligibility and acceptance criteria are described in the
            applicable Task offer and Program Details.
          </p>
          <p className="mt-3">
            Accepted Submissions may be stored before advanced processing. Gofer AI may later process a Submission,
            including when buyer demand exists, to create robotics-training or evaluation data.
          </p>
        </Section>

        <Section title="4. Your Responsibilities">
          <List items={[
            'Follow the Task instructions and provide accurate, authentic, non-duplicative content.',
            'Comply with applicable laws, recording-consent rules, property rules, and the Data Collection Policy in these Terms.',
            'Have all rights and permissions needed to record and submit the content.',
            'Do not include third-party confidential information, trade secrets, copyrighted material you are not authorized to provide, or sensitive information unrelated to the Task.',
            'Protect your account credentials and immediately report suspected unauthorized access or fraud.',
            'Provide accurate information needed for payouts, identity verification, tax compliance, or sanctions/fraud screening.',
          ]} />
        </Section>

        <Section title="5. Data Collection Policy">
          <SubHeading>Recording requirements</SubHeading>
          <List items={[
            'Obtain and document any consent, release, notice, or permission required by law before recording identifiable people or private property.',
            'Provide clear notice that recording is taking place when other people may be captured.',
            'Immediately stop or reposition the recording if a person objects or asks not to be recorded.',
            'Comply with facility and property rules. Do not record where the property owner or operator prohibits recording.',
            'Keep unconsenting people, minors, private conversations, sensitive screens, documents, and personal information out of frame.',
            'Use reasonable care when storing and transmitting recordings before upload.',
            'Follow any task-specific safety, privacy, and capture instructions shown in the Platform.',
          ]} />
          <SubHeading>Prohibited recording and submission activities</SubHeading>
          <List items={[
            'No covert or deceptive recording.',
            'No intentional recording of anyone under 18 in the standard Contributor Program.',
            'No recording in restrooms, locker rooms, changing areas, occupied bedrooms or bathrooms, or other areas with a heightened expectation of privacy.',
            'No nudity, sexual activity, intimate conduct, personal hygiene activity, abuse, violence, weapons, explosives, dangerous criminal conduct, or other harmful content unless a specifically authorized Program expressly permits the content and the law allows it.',
            'No private conversations when the required legal consent has not been obtained. Unless a Task specifically requires audio, avoid recording private conversations and understand that Gofer AI may mute or remove audio.',
            'No intentional capture of credit cards, bank details, government IDs, Social Security numbers, medical records, health information, login credentials, passwords, security codes, or other sensitive personal information.',
            'No confidential business documents, trade secrets, restricted workspaces, court proceedings, government or military facilities without authorization, or locations with posted no-recording rules.',
            'No recording of real patients or clinical care environments unless Gofer AI has expressly authorized the Task in writing under a separate program designed for that setting.',
            'No fabrication, staging, falsification, duplicate uploads, recycled recordings, manipulated metadata, or unauthorized automation unless the Task expressly permits it.',
          ]} />
        </Section>

        <Section title="6. Purchaser Industry Preferences">
          <p>
            The Platform may allow you to select the categories of organizations that may receive new licenses to an
            accepted Submission and related Derived Data ("Purchaser Industry Preferences"). These preferences are a
            core part of the Contributor Program.
          </p>
          <p className="mt-3">
            Industry category means the purchaser company, not the exact use case. A "Purchaser Industry Category" is
            Gofer AI's classification of a Commercial Purchaser based on its primary business, material business
            lines, customer onboarding information, publicly available information, and other reasonable factors. A
            category is not a representation or promise about the exact project, model, product, deployment, training
            objective, research question, end user, or downstream use for which the purchaser will use licensed data.
          </p>
          <p className="mt-3">
            Purchaser Industry Categories may include, for example, Home &amp; Domestic Robotics, Healthcare &amp;
            Care Robotics, Food &amp; Kitchen Robotics, Agriculture, Environmental &amp; Field Robotics, Research
            &amp; Education, Manufacturing &amp; Industrial Robotics, and other categories shown in the Platform. A
            purchaser may be assigned to more than one category.
          </p>
          <p className="mt-3">
            If you permit a category, an approved purchaser classified within that category may receive a new license
            to your eligible Submission or Derived Data for robotics, artificial intelligence, machine learning,
            research, training, evaluation, benchmarking, dataset development, or product development purposes
            permitted by its agreement with Gofer AI and applicable law. Your category selection does not limit the
            purchaser to the example use cases or descriptions shown next to the category in the app.
          </p>
          <p className="mt-3">
            If you block a category for a Submission, Gofer AI will not issue a new license for that Submission to a
            purchaser that Gofer AI classifies within that blocked category, even if the purchaser also fits a
            permitted category. Gofer AI may also maintain platform-wide prohibited purchaser categories that cannot
            be enabled by a Contributor.
          </p>
          <p className="mt-3">
            Preferences are prospective. A change to your Purchaser Industry Preferences does not revoke or amend a
            license that Gofer AI granted before the change. Existing purchaser rights continue under the applicable
            purchaser agreement unless the law requires otherwise. Gofer AI may change category names or
            classification criteria; if a change materially alters the meaning of a category, we will provide notice
            and may require you to review or reconfirm preferences before new licenses are issued under the changed
            category.
          </p>
        </Section>

        <Section title="7. License to Accepted Submissions and Derived Data">
          <Callout>
            In plain English: you keep ownership of what you record. By submitting, you give Gofer AI permission to
            store your recording, turn it into robotics-training data, and license it to approved buyers. You are not
            giving away ownership, and you can ask us to stop future licensing (see Section 9). This section is the
            detailed legal version of that permission.
          </Callout>
          <p className="mt-4">
            You retain ownership of the original content you create and submit, subject to the license you grant in
            these Terms.
          </p>
          <p className="mt-3">
            For each Submission that Gofer AI accepts, you grant Gofer AI a{' '}
            <strong className="text-white">non-exclusive, worldwide, transferable, sublicensable, royalty-free
            license</strong>, subject to your Purchaser Industry Preferences and the withdrawal provisions below, to
            host, store, copy, reproduce, review, modify, crop, redact, mute, transcode, annotate, label, analyze,
            process, adapt, distribute, display, commercialize, license, and otherwise use the accepted Submission for
            operation of the Program, creation of datasets, fulfillment of purchaser requests, research and
            development, quality control, fraud/safety review, and licensing to approved Commercial Purchasers.
          </p>
          <p className="mt-3">
            You also authorize Gofer AI to generate data from an accepted Submission ("Derived Data"), including hand
            landmarks, hand poses, pose estimates, motion traces, skeletal keypoints, depth information, task labels,
            object labels, action labels, canonical action traces, quality scores, de-identified data, aggregated
            data, dataset bundles, model-training data, model-evaluation data, and other task- or motion-related
            outputs produced by our processing pipeline.
          </p>
          <p className="mt-3">
            Some Derived Data may be treated as sensitive or biometric data under applicable law. Where the law
            requires a separate notice, written release, affirmative consent, retention schedule, or other
            requirement, Gofer AI will use a separate process and may limit processing or licensing by jurisdiction.
          </p>
          <p className="mt-3">
            Gofer AI does not intend to use hand pose, hand geometry, or other motion-derived outputs to identify or
            authenticate Contributors. Purchaser agreements should prohibit unauthorized re-identification of
            Contributors.
          </p>
        </Section>

        <Section title="8. Commercial Purchasers">
          <p>
            "Commercial Purchasers" are approved third-party organizations that may include robotics companies, AI
            companies, universities, research organizations, enterprise customers, or other organizations that Gofer
            AI approves for access to licensed data.
          </p>
          <p className="mt-3">
            Commercial Purchasers are eligible to receive new licenses only when their Purchaser Industry Category is
            permitted by your preferences for the relevant Submission and the purchaser satisfies Gofer AI's customer
            approval requirements. Gofer AI may deny a purchaser access even if the purchaser fits a permitted
            category.
          </p>
          <p className="mt-3">
            Buyer-facing datasets should generally use a pseudonymous Contributor identifier. Gofer AI does not
            ordinarily provide Commercial Purchasers with your personal email, phone number, payout information, tax
            information, exact mailing address, account credentials, or other direct identity information unless
            separately disclosed and permitted.
          </p>
        </Section>

        <Section title="9. Withdrawal, Deletion, and Future Licensing">
          <Callout>
            In plain English: you can ask us to stop licensing your recording going forward, and we will. But we
            cannot undo licenses we already gave to a buyer before your request, and some processed or combined data
            may remain, except where the law requires deletion. "Stop future use" is possible; "erase everything
            already licensed" is not always possible.
          </Callout>
          <p className="mt-4">
            You may request that an accepted Submission be withdrawn from future licensing through the Platform, where
            available, or by contacting{' '}
            <a href="mailto:support@goferai.space" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@goferai.space
            </a>
            . After Gofer AI processes a valid withdrawal request, we will stop issuing new licenses to that
            Submission and stop generating new Derived Data from it, except as needed for security, legal compliance,
            fraud investigation, or other purposes permitted by law.
          </p>
          <p className="mt-3">
            Withdrawal is not retroactive. It does not cancel a license already granted to a Commercial Purchaser, and
            the purchaser may continue to use the licensed Submission or Derived Data under its existing agreement
            unless the law requires otherwise.
          </p>
          <p className="mt-3">
            Deletion of the raw Submission from Gofer AI's systems may be subject to legal, security, audit, and
            existing-license obligations. Gofer AI may retain Derived Data created before withdrawal when that data
            has already been licensed, incorporated into a licensed dataset, de-identified or aggregated, cannot
            reasonably be separated, or may otherwise be retained under applicable law. Where applicable law requires
            deletion, we will comply with that law. Changing a Purchaser Industry Preference has the same prospective
            effect for future licensing; it does not automatically revoke licenses already granted.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Your privacy rights and opt-out.</strong> Because Gofer AI licenses
            accepted Submissions and Derived Data to Commercial Purchasers, some of that activity may be treated as a
            "sale" or "sharing" of Personal Data under California and similar state laws. You have the right to opt
            out. You can exercise your privacy rights, including "Do Not Sell or Share My Personal Information," as
            described in the{' '}
            <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition-colors">
              Privacy Policy
            </Link>{' '}
            or by contacting support@goferai.space. Exercising a privacy right is separate from, and not waived by,
            participation in a Partner Program.
          </p>
        </Section>

        <Section title="10. Payouts and Earnings">
          <p>
            Gofer AI may pay Contributors for accepted Submissions, milestones, completed programs, or data licenses
            according to the Task offer and Program Details that apply at the relevant time. A Submission is not
            guaranteed to be accepted or paid.
          </p>
          <p className="mt-3">
            Program Details may provide one-time Payouts, milestone payments, license-based earnings, royalties,
            revenue share, bonuses, or other compensation. You are entitled only to compensation that Gofer AI
            expressly offers in writing through the applicable Task offer, Program Details, partner agreement, or
            earnings record. Unless an applicable offer expressly provides otherwise, you are not entitled to
            additional downstream fees or compensation.
          </p>
          <p className="mt-3">
            Payouts may be processed through Stripe or another payment provider, subject to that provider's terms and
            privacy policy. You may be required to provide identity, tax, sanctions-screening, wallet, banking, or
            other payment information. You are responsible for taxes and reporting obligations applicable to your
            earnings.
          </p>
        </Section>

        <Section title="11. Accounts and Communications">
          <p>
            You may be required to create an account and provide accurate, complete, and current information. You may
            not impersonate another person or transfer your account without permission. You are responsible for
            maintaining the confidentiality of your credentials and for activity under your account.
          </p>
          <p className="mt-3">
            We may send transactional or administrative messages about your account, Tasks, Submissions, payouts,
            security, legal notices, or Program changes. Marketing messages, if any, will be sent subject to
            applicable law and available opt-out choices. Message and data rates may apply to SMS communications.
          </p>
        </Section>

        <Section title="12. Platform Restrictions">
          <p>
            You may not use the Platform to violate law or third-party rights, interfere with system security or
            operation, obtain unauthorized access, scrape or crawl the Platform, reverse engineer protected software
            except where law permits, upload malicious code, impersonate others, commit fraud, or violate the Data
            Collection Policy or Task instructions.
          </p>
        </Section>

        <Section title="13. Platform Content and Intellectual Property">
          <p>
            Gofer AI and its licensors own the Platform, software, interfaces, branding, documentation, and other
            materials we provide, excluding your Submissions. Subject to these Terms, Gofer AI grants you a limited,
            non-exclusive, non-transferable, non-sublicensable license to use the Platform for participation in the
            Program. You may not copy, modify, distribute, sell, license, or commercially exploit the Platform except
            as expressly permitted.
          </p>
        </Section>

        <Section title="14. Third-Party Services">
          <p>
            The Platform may integrate with third-party services, including sign-in, analytics, payment, cloud,
            communications, or App Store services. Those third parties may have their own terms and privacy practices.
            Gofer AI is not responsible for third-party services except as required by law.
          </p>
        </Section>

        <Section title="15. Termination">
          <p>
            You may stop using the Platform or participating in the Program at any time. Gofer AI may suspend or
            terminate access for breach of these Terms, fraud signals, legal or safety concerns, security risks, or
            other legitimate Program reasons. Provisions that by their nature should survive termination will survive,
            including existing licenses, intellectual-property terms, payment obligations already accrued, limitations
            of liability, indemnity, and dispute-resolution terms.
          </p>
        </Section>

        <Section title="16. Mobile Applications and App Stores">
          <p>
            If you download the GoferEco application through Apple, Google, or another app store, your use may also be
            subject to that store's terms. The app store is not responsible for Gofer AI's Platform, content,
            maintenance, support, or claims relating to the Platform except to the extent required by the store's
            terms or applicable law.
          </p>
        </Section>

        <Section title="17. Warranty Disclaimer">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, THE PLATFORM, PROGRAM, TASKS, CONTENT, AND RELATED SERVICES ARE
            PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED OR
            ERROR-FREE OPERATION. SOME JURISDICTIONS DO NOT ALLOW CERTAIN DISCLAIMERS, SO SOME OF THE ABOVE MAY NOT
            APPLY TO YOU.
          </p>
        </Section>

        <Section title="18. Limitation of Liability">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, GOFER AI AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES,
            AGENTS, LICENSORS, AND SERVICE PROVIDERS WILL NOT BE LIABLE FOR INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY,
            PUNITIVE, OR CONSEQUENTIAL DAMAGES, LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, OR SIMILAR LOSSES
            ARISING FROM OR RELATED TO THE PLATFORM OR PROGRAM. TO THE FULLEST EXTENT PERMITTED BY LAW, GOFER AI'S
            AGGREGATE LIABILITY TO YOU FOR CLAIMS RELATING TO THE PROGRAM WILL NOT EXCEED THE GREATER OF (A) $100 OR
            (B) THE AMOUNTS PAID OR PAYABLE BY GOFER AI TO YOU UNDER THE PROGRAM DURING THE 12 MONTHS BEFORE THE EVENT
            GIVING RISE TO THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO THESE LIMITATIONS MAY
            NOT APPLY TO YOU.
          </p>
        </Section>

        <Section title="19. Indemnity">
          <p>
            To the fullest extent permitted by law, you agree to indemnify and hold harmless Gofer AI and its
            affiliates, officers, directors, employees, agents, and representatives from claims, liabilities, damages,
            losses, and reasonable expenses, including attorneys' fees, arising from your unlawful recording
            practices, lack of required permissions, infringement of third-party rights, fraud, misuse of the
            Platform, or material breach of these Terms.
          </p>
        </Section>

        <Section title="20. Governing Law and Arbitration">
          <p>
            These Terms are governed by the Federal Arbitration Act, applicable federal law, and the laws of the State
            of Delaware, without regard to conflict-of-laws principles.
          </p>
          <p className="mt-3">
            <strong className="text-gray-200">Arbitration notice and class action waiver.</strong> Except for
            qualifying small-claims matters and claims seeking injunctive or equitable relief for actual or threatened
            infringement, misappropriation, or violation of intellectual-property rights, disputes arising out of or
            relating to these Terms, the Platform, or the Program will be resolved by binding individual arbitration
            after good-faith efforts to resolve the dispute informally.
          </p>
          <p className="mt-3">
            Unless Gofer AI and you agree otherwise, arbitration will be administered by JAMS under its then-current
            streamlined rules by one commercial arbitrator with relevant experience. The arbitration will be conducted
            in English and will take place in Wilmington, Delaware, unless the parties agree otherwise or applicable
            law requires a different location.
          </p>
          <p className="mt-3">
            YOU AND GOFER AI WAIVE THE RIGHT TO A JURY TRIAL FOR CLAIMS SUBJECT TO ARBITRATION. CLAIMS MUST BE BROUGHT
            ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF OR CLASS MEMBER IN A PURPORTED CLASS, REPRESENTATIVE,
            CONSOLIDATED, OR COLLECTIVE PROCEEDING, TO THE EXTENT PERMITTED BY LAW.
          </p>
          <p className="mt-3">
            You may opt out of this arbitration agreement by sending written notice within thirty (30) days after
            first accepting these Terms to: 251 Little Falls Dr., Wilmington, Delaware 19808. The notice must include
            your name, residence address, the email address or phone number associated with your account, and a clear
            statement that you are opting out of the arbitration agreement.
          </p>
        </Section>

        <Section title="21. Miscellaneous">
          <p>
            You are responsible for taxes, duties, filings, and governmental assessments associated with your Program
            activity, except where Gofer AI is required by law to withhold or report. You may not assign these Terms
            or your account without our written consent. We may assign these Terms in connection with our business,
            subject to applicable law. If a provision is unenforceable, it will be limited or removed to the minimum
            extent necessary and the remainder will remain in effect. These Terms, together with incorporated policies
            and applicable Program Details, constitute the agreement between you and Gofer AI regarding the subject
            matter covered by them.
          </p>
          <p className="mt-3">
            You are an independent participant in the Program and are not an employee, agent, partner, or joint
            venturer of Gofer AI. You do not have authority to bind Gofer AI.
          </p>
        </Section>

        <Section title="22. Contact">
          <p>For questions about these Terms, contact:</p>
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-3 text-gray-200 text-sm leading-relaxed">
      {children}
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
