import React from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate("/"); // Redirect to the home page or wherever you'd like
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>
      <div className="text-[#333] text-[16px] space-y-4">
        <p>
          Welcome to the CUSP platform ("Platform"), a service provided by
          Synergy Sustainability Solutions Pvt. Ltd. having registered office at
          B-102, Kalyani Apartment, Sector 6, Vasundhra, Ghaziabad -201012,
          Uttar Pradesh ("CUSP," "we," "our," or "us"). By accessing or using
          the Platform, you ("User," “Installer”, "you," or "your") agree to
          comply with and be bound by these Terms & Conditions ("T&Cs"). If you
          do not agree with these T&Cs, please do not use the Platform.
        </p>
        <h2 className="font-bold">1. Eligibility</h2>
        <p>
          • The Platform is intended for use by individuals or entities that are
          legally capable of entering into binding contracts under applicable
          law. By using the Platform, you represent and warrant that you meet
          this eligibility requirement.
        </p>
        <h2 className="font-bold">2. Services Provided</h2>
        <p>
          • CUSP provides an online platform where users can submit requirements
          for solar panel installation and other renewable energy products.
          Verified Solar Panel Installers ("SPI") and Original Equipment
          Manufacturers ("OEM") can access these requirements and provide
          quotes.
          <br />• CUSP facilitates the connection between Users and SPI/OEM but
          does not guarantee the completion or success of any transaction
          initiated through the Platform.
        </p>
        <h2 className="font-bold">3. User Responsibilities</h2>
        <p>
          • Accurate Information: Users are responsible for providing accurate
          and complete information when submitting their requirements or
          registering on the Platform.
          <br />
          • Compliance: Users agree to use the Platform in compliance with all
          applicable laws, regulations, and these T&Cs.
          <br />• Final Negotiations: Users acknowledge that the initial quotes
          provided through the Platform are tentative and may vary upon further
          assessment by the SPI/OEM. Users are responsible for negotiating the
          final fixed price directly with the SPI/OEM.
        </p>
        <h2 className="font-bold">4. Installer Responsibilities</h2>
        <ul className="space-y-3">
          <li>
            {" "}
            <strong>• Verification: </strong> All SPI/OEMs using the Platform
            must undergo a verification process as determined by CUSP.
          </li>
          <li>
            <strong>• Compliance: </strong> Installers must comply with all
            relevant laws, regulations, and industry standards when providing
            quotes and conducting installations.
          </li>
          <li>
            <strong>• Performance: </strong> SPI/OEMs must fulfill their
            obligations under accepted quotes in a timely and professional
            manner. Failure to complete projects as agreed may result in
            penalties, including suspension from receiving further quotes for
            such period as CUSP determines.
          </li>
        </ul>
        <h2 className="font-bold">5. No Guarantee of Business Conversion</h2>
        <p>
          • CUSP does not commit, warrant, or guarantee any business conversion
          for the quotes submitted by SPI/OEMs through the Platform. Users are
          free to accept or reject any quote at their discretion.
        </p>
        <h2 className="font-bold">6. Intellectual Property</h2>
        <p>
          • Unless otherwise indicated, the Site is proprietary property and all
          source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the “Content”) and the trademarks, service marks, and
          logos contained therein (the “Marks”) are owned or controlled by or
          licensed to Synergy Sustainability Solutions Private Limited or its
          Directors, and are protected by copyright and trademark laws and
          various other intellectual property rights.
        </p>
        <h2 className="font-bold">7. Limitation of Liability</h2>
        <p>
          • To the fullest extent permitted by law, CUSP shall not be liable for
          any direct, indirect, incidental, consequential, or punitive damages
          arising out of or related to the use of the Platform, the services
          provided, or any agreements or transactions made through the Platform.
        </p>
        <h2 className="font-bold">9. Indemnification</h2>
        <p>
          • Users and Installers agree to indemnify and hold harmless CUSP, its
          officers, directors, employees, and agents from and against any
          claims, damages, liabilities, and expenses (including reasonable legal
          fees) arising out of or related to their use of the Platform or
          violation of these T&Cs.
        </p>
        <h2 className="font-bold">10. Termination</h2>
        <p>
          • CUSP reserves the right to suspend or terminate a User’s/Installer’s
          access to the Platform at its sole discretion, without notice, for any
          reason, including but not limited to a breach of these T&Cs.
        </p>
        <h2 className="font-bold">11. Prohibited Activities</h2>
        <p>
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
          <br />
          As a user of the Site, you agree not to:
        </p>
        <ul className="list-disc ml-8 space-y-3">
          <li>
            Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </li>
          <li>
            Make any unauthorized use of the Site, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Site, including features that prevent or restrict
            the use or copying of any Content or enforce limitations on the use
            of the Site and/or the Content contained therein.
          </li>
          <li>Engage in unauthorized framing of or linking to the Site.</li>
          <li>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </li>
          <li>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </li>
          <li>
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </li>
          <li>
            Interfere with, disrupt, or create an undue burden on the Site or
            the networks or services connected to the Site.
          </li>
          <li>
            Attempt to impersonate another user or person or use the username of
            another user.
          </li>
          <li>Sell or otherwise transfer your profile.</li>
          <li>
            Use any information obtained from the Site in order to harass,
            abuse, or harm another person.
          </li>
          <li>
            Use the Site as part of any effort to compete with us or otherwise
            use the Site and/or the Content for any revenue-generating endeavor
            or commercial enterprise.
          </li>
          <li>
            Decipher, decompile, disassemble, or reverse engineer any of the
            software comprising or in any way making up a part of the Site.
          </li>
          <li>
            Attempt to bypass any measures of the Site designed to prevent or
            restrict access to the Site, or any portion of the Site.
          </li>
          <li>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Site to you.
          </li>
          <li>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </li>
          <li>
            Copy or adapt the Site’s software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Site or modifies, impairs, disrupts, alters, or interferes with the
            use, features, functions, operation, or maintenance of the Site.
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as “spyware” or
            “passive collection mechanisms” or “pcms”).
          </li>
          <li>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Site, or using
            or launching any unauthorized script or other software.
          </li>
          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Site.
          </li>
          <li>
            Use the Site in a manner inconsistent with any applicable laws or
            regulations.
          </li>
        </ul>
        <h2 className="font-bold">12. Amendments</h2>
        <p>
          • CUSP may amend these T&Cs at any time by posting the revised terms
          on the Platform. Continued use of the Platform after any such changes
          constitutes your acceptance of the new T&Cs.
        </p>
        <h2 className="font-bold">13. Governing Law and Jurisdiction</h2>
        <p>
          • These T&Cs shall be governed by and construed in accordance with the
          laws of [Applicable Jurisdiction]. Any disputes arising out of or
          related to these T&Cs or the use of the Platform shall be subject to
          the exclusive jurisdiction of the courts in [Applicable Jurisdiction].
        </p>
        <h2 className="font-bold">14. Contact Information</h2>
        <p>
          • If you have any questions about these T&Cs or the Platform, please
          contact us at support@cuspsolar.com.
        </p>
      </div>
      <div className="mt-8 text-center">
        <button
          className="px-8 py-2 bg-green-500 text-white rounded-md"
          onClick={handleOkClick}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default TermsOfService;
