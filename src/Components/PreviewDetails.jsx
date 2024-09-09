import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";
const PreviewDetails = ({ formData, handleSubmit, loading }) => {
  const [isChecked, setIschecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const handleTermsModal = () => setShowTermsModal(!showTermsModal);
  const handlePrivacyModal = () => setShowPrivacyModal(!showPrivacyModal);

  return (
    <div className="p-6 border border-gray-300 rounded-md m-4">
      <h2 className="text-center font-bold text-lg mb-4 text-[#004A9C]">
        Preview Your Details
      </h2>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-[#004A9C]">Personal Information</h3>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>House Number:</strong> {formData.houseNumber}
        </p>
        <p>
          <strong>Street:</strong> {formData.street}
        </p>
        <p>
          <strong>City:</strong> {formData.city}
        </p>
        <p>
          <strong>State:</strong> {formData.state}
        </p>
        <p>
          <strong>District:</strong> {formData.district}
        </p>
        <p>
          <strong>Pin Code:</strong> {formData.pinCode}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-[#004A9C]">Connection Details</h3>
        <p>
          <strong>Connection Type:</strong> {formData.connectionType}
        </p>
        <p>
          <strong>Need Subsidy:</strong> {formData.needSubsidy ? "Yes" : "No"}
        </p>
        <p>
          <strong>Current Sanction Load:</strong> {formData.currentSanctionLoad}
        </p>
        <p>
          <strong>Consumption Over Last Month:</strong> {formData.consumption}
        </p>
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-[#004A9C]">Roof Details</h3>
        <p>
          <strong>Type of Roof:</strong> {formData.typeofRoof}
        </p>
        <p>
          <strong>Length:</strong> {formData.length.units}
        </p>
        <p>
          <strong>Breadth:</strong> {formData.breadth.units}
        </p>
        <p>
          <strong>Total Area (Sqft):</strong> {formData.sft}
        </p>
        <p>
          <strong>Floor Number:</strong> {formData.floorNumber}
        </p>
        {formData.roofLayout && (
          <p>
            <strong>Roof Layout File:</strong> {formData.roofLayout.name}
          </p>
        )}
      </div>

      <div className="preview-section mb-4">
        <h3 className="font-semibold text-[#004A9C]">Uploads</h3>
        {formData.video && (
          <p>
            <strong>Video Upload:</strong> {formData.video.name}
          </p>
        )}
        {formData.image && (
          <p>
            <strong>Image Upload:</strong> {formData.image.name}
          </p>
        )}
        {formData.electricityBill && (
          <p>
            <strong>Electricity Bill:</strong> {formData.electricityBill.name}
          </p>
        )}
        {formData.gstCertificate && (
          <p>
            <strong>GST Certificate:</strong> {formData.gstCertificate.name}
          </p>
        )}
        {formData.identityProof && (
          <p>
            <strong>Identity Proof:</strong> {formData.identityProof.name}
          </p>
        )}
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <div
          className={`flex w-6 h-6  justify-center max-[900px]:w-10 max-[900px]:h-5  border-2 border-gray-300 rounded-md cursor-pointer ${
            isChecked ? "bg-[#004A9C]" : "bg-white"
          }`}
          onClick={() => setIschecked(!isChecked)}
        >
          {isChecked && <FaCheck className="text-white" />}
        </div>
        <label className="text-gray-500 text-sm">
          By checking this, you accept the{" "}
          <span
            className="text-[#004A9C] cursor-pointer font-[600] underline"
            onClick={handleTermsModal}
          >
            Terms & Conditions
          </span>{" "}
          and{" "}
          <span
            className="text-[#004A9C] cursor-pointer font-[600] underline"
            onClick={handlePrivacyModal}
          >
            Data Privacy
          </span>
          .
        </label>
      </div>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-[800px] w-full mx-4 space-y-5">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold mb-4">
                Terms & Conditions
              </h2>
              <button
                className="text-black text-xl font-bold"
                onClick={() => setShowTermsModal(false)}
              >
                X
              </button>
            </div>
            <div className="space-y-4">
              <div className="h-96 overflow-y-scroll">
                <p>
                  Welcome to the CUSP platform ("Platform"), a service provided
                  by Synergy Sustainability Solutions Pvt. Ltd. having
                  registered office at B-102, Kalyani Apartment, Sector 6,
                  Vasundhra, Ghaziabad -201012, Uttar Pradesh ("CUSP," "we,"
                  "our," or "us"). By accessing or using the Platform, you
                  ("User," “Installer”, "you," or "your") agree to comply with
                  and be bound by these Terms & Conditions ("T&Cs"). If you do
                  not agree with these T&Cs, please do not use the Platform.
                </p>
                <h2 className="font-bold">1. Eligibility</h2>
                <p>
                  • The Platform is intended for use by individuals or entities
                  that are legally capable of entering into binding contracts
                  under applicable law. By using the Platform, you represent and
                  warrant that you meet this eligibility requirement.
                </p>
                <h2 className="font-bold">2. Services Provided</h2>
                <p>
                  • CUSP provides an online platform where users can submit
                  requirements for solar panel installation and other renewable
                  energy products. Verified Solar Panel Installers ("SPI") and
                  Original Equipment Manufacturers ("OEM") can access these
                  requirements and provide quotes.
                  <br />• CUSP facilitates the connection between Users and
                  SPI/OEM but does not guarantee the completion or success of
                  any transaction initiated through the Platform.
                </p>
                <h2 className="font-bold">3. User Responsibilities</h2>
                <p>
                  • Accurate Information: Users are responsible for providing
                  accurate and complete information when submitting their
                  requirements or registering on the Platform.
                  <br />
                  • Compliance: Users agree to use the Platform in compliance
                  with all applicable laws, regulations, and these T&Cs.
                  <br />• Final Negotiations: Users acknowledge that the initial
                  quotes provided through the Platform are tentative and may
                  vary upon further assessment by the SPI/OEM. Users are
                  responsible for negotiating the final fixed price directly
                  with the SPI/OEM.
                </p>
                <h2 className="font-bold">4. Installer Responsibilities</h2>
                <ul className="space-y-3">
                  <li>
                    {" "}
                    <strong>• Verification: </strong> All SPI/OEMs using the
                    Platform must undergo a verification process as determined
                    by CUSP.
                  </li>
                  <li>
                    <strong>• Compliance: </strong> Installers must comply with
                    all relevant laws, regulations, and industry standards when
                    providing quotes and conducting installations.
                  </li>
                  <li>
                    <strong>• Performance: </strong> SPI/OEMs must fulfill their
                    obligations under accepted quotes in a timely and
                    professional manner. Failure to complete projects as agreed
                    may result in penalties, including suspension from receiving
                    further quotes for such period as CUSP determines.
                  </li>
                </ul>
                <h2 className="font-bold">
                  5. No Guarantee of Business Conversion
                </h2>
                <p>
                  • CUSP does not commit, warrant, or guarantee any business
                  conversion for the quotes submitted by SPI/OEMs through the
                  Platform. Users are free to accept or reject any quote at
                  their discretion.
                </p>
                <h2 className="font-bold">6. Intellectual Property</h2>
                <p>
                  • Unless otherwise indicated, the Site is proprietary property
                  and all source code, databases, functionality, software,
                  website designs, audio, video, text, photographs, and graphics
                  on the Site (collectively, the “Content”) and the trademarks,
                  service marks, and logos contained therein (the “Marks”) are
                  owned or controlled by or licensed to Synergy Sustainability
                  Solutions Private Limited or its Directors, and are protected
                  by copyright and trademark laws and various other intellectual
                  property rights.
                </p>
                <h2 className="font-bold">7. Limitation of Liability</h2>
                <p>
                  • To the fullest extent permitted by law, CUSP shall not be
                  liable for any direct, indirect, incidental, consequential, or
                  punitive damages arising out of or related to the use of the
                  Platform, the services provided, or any agreements or
                  transactions made through the Platform.
                </p>
                <h2 className="font-bold">9. Indemnification</h2>
                <p>
                  • Users and Installers agree to indemnify and hold harmless
                  CUSP, its officers, directors, employees, and agents from and
                  against any claims, damages, liabilities, and expenses
                  (including reasonable legal fees) arising out of or related to
                  their use of the Platform or violation of these T&Cs.
                </p>
                <h2 className="font-bold">10. Termination</h2>
                <p>
                  • CUSP reserves the right to suspend or terminate a
                  User’s/Installer’s access to the Platform at its sole
                  discretion, without notice, for any reason, including but not
                  limited to a breach of these T&Cs.
                </p>
                <h2 className="font-bold">11. Prohibited Activities</h2>
                <p>
                  You may not access or use the Site for any purpose other than
                  that for which we make the Site available. The Site may not be
                  used in connection with any commercial endeavors except those
                  that are specifically endorsed or approved by us.
                  <br />
                  As a user of the Site, you agree not to:
                </p>
                <ul className="list-disc ml-8 space-y-3">
                  <li>
                    Systematically retrieve data or other content from the Site
                    to create or compile, directly or indirectly, a collection,
                    compilation, database, or directory without written
                    permission from us.
                  </li>
                  <li>
                    Make any unauthorized use of the Site, including collecting
                    usernames and/or email addresses of users by electronic or
                    other means for the purpose of sending unsolicited email, or
                    creating user accounts by automated means or under false
                    pretenses.
                  </li>
                  <li>
                    Circumvent, disable, or otherwise interfere with
                    security-related features of the Site, including features
                    that prevent or restrict the use or copying of any Content
                    or enforce limitations on the use of the Site and/or the
                    Content contained therein.
                  </li>
                  <li>
                    Engage in unauthorized framing of or linking to the Site.
                  </li>
                  <li>
                    Trick, defraud, or mislead us and other users, especially in
                    any attempt to learn sensitive account information such as
                    user passwords.
                  </li>
                  <li>
                    Make improper use of our support services or submit false
                    reports of abuse or misconduct.
                  </li>
                  <li>
                    Engage in any automated use of the system, such as using
                    scripts to send comments or messages, or using any data
                    mining, robots, or similar data gathering and extraction
                    tools.
                  </li>
                  <li>
                    Interfere with, disrupt, or create an undue burden on the
                    Site or the networks or services connected to the Site.
                  </li>
                  <li>
                    Attempt to impersonate another user or person or use the
                    username of another user.
                  </li>
                  <li>Sell or otherwise transfer your profile.</li>
                  <li>
                    Use any information obtained from the Site in order to
                    harass, abuse, or harm another person.
                  </li>
                  <li>
                    Use the Site as part of any effort to compete with us or
                    otherwise use the Site and/or the Content for any
                    revenue-generating endeavor or commercial enterprise.
                  </li>
                  <li>
                    Decipher, decompile, disassemble, or reverse engineer any of
                    the software comprising or in any way making up a part of
                    the Site.
                  </li>
                  <li>
                    Attempt to bypass any measures of the Site designed to
                    prevent or restrict access to the Site, or any portion of
                    the Site.
                  </li>
                  <li>
                    Harass, annoy, intimidate, or threaten any of our employees
                    or agents engaged in providing any portion of the Site to
                    you.
                  </li>
                  <li>
                    Delete the copyright or other proprietary rights notice from
                    any Content.
                  </li>
                  <li>
                    Copy or adapt the Site’s software, including but not limited
                    to Flash, PHP, HTML, JavaScript, or other code.
                  </li>
                  <li>
                    Upload or transmit (or attempt to upload or to transmit)
                    viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous
                    posting of repetitive text), that interferes with any
                    party’s uninterrupted use and enjoyment of the Site or
                    modifies, impairs, disrupts, alters, or interferes with the
                    use, features, functions, operation, or maintenance of the
                    Site.
                  </li>
                  <li>
                    Upload or transmit (or attempt to upload or to transmit) any
                    material that acts as a passive or active information
                    collection or transmission mechanism, including without
                    limitation, clear graphics interchange formats (“gifs”), 1×1
                    pixels, web bugs, cookies, or other similar devices
                    (sometimes referred to as “spyware” or “passive collection
                    mechanisms” or “pcms”).
                  </li>
                  <li>
                    Except as may be the result of standard search engine or
                    Internet browser usage, use, launch, develop, or distribute
                    any automated system, including without limitation, any
                    spider, robot, cheat utility, scraper, or offline reader
                    that accesses the Site, or using or launching any
                    unauthorized script or other software.
                  </li>
                  <li>
                    Disparage, tarnish, or otherwise harm, in our opinion, us
                    and/or the Site.
                  </li>
                  <li>
                    Use the Site in a manner inconsistent with any applicable
                    laws or regulations.
                  </li>
                </ul>
                <h2 className="font-bold">12. Amendments</h2>
                <p>
                  • CUSP may amend these T&Cs at any time by posting the revised
                  terms on the Platform. Continued use of the Platform after any
                  such changes constitutes your acceptance of the new T&Cs.
                </p>
                <h2 className="font-bold">
                  13. Governing Law and Jurisdiction
                </h2>
                <p>
                  • These T&Cs shall be governed by and construed in accordance
                  with the laws of [Applicable Jurisdiction]. Any disputes
                  arising out of or related to these T&Cs or the use of the
                  Platform shall be subject to the exclusive jurisdiction of the
                  courts in [Applicable Jurisdiction].
                </p>
                <h2 className="font-bold">14. Contact Information</h2>
                <p>
                  • If you have any questions about these T&Cs or the Platform,
                  please contact us at support@cuspsolar.com.
                </p>
                <button
                  className="bg-[#3B715A] text-white px-4 py-2 rounded-lg my-5"
                  onClick={() => setShowTermsModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 max-w-[800px] w-full mx-4 space-y-5">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
              <button
                className="text-black text-xl font-bold"
                onClick={() => setShowPrivacyModal(false)}
              >
                X
              </button>
            </div>
            <div className="space-y-4">
              <div className="h-96 overflow-y-scroll">
                <h2 className="font-bold">1. Introduction</h2>
                <p>
                  1.1 Welcome to CUSP, an e-commerce platform dedicated to
                  renewable energy solutions, a brand of Synergy Sustainability
                  Solutions Pvt. Ltd., having its registered office at B-102,
                  Kalyani Apartment, Sector 6, Vasundhra, Ghaziabad -201012,
                  Uttar Pradesh (CUSP). We value your privacy and are committed
                  to protecting your personal data. This Data Privacy Policy
                  outlines how we collect, use, share, and safeguard your
                  information in accordance with the laws of India.
                </p>

                <h2 className="font-bold">2. Information We Collect</h2>
                <p>
                  2.1 <strong>Personal Information:</strong> When you register
                  on our platform, place an order, or communicate with us, we
                  may collect personal information such as your name, email
                  address, contact number, physical address, and payment
                  details.
                </p>
                <p>
                  2.2 <strong>Non-Personal Information:</strong> We may collect
                  non-personal information such as your browser type, IP
                  address, and details about your usage of our platform to
                  improve our services.
                </p>
                <p>
                  2.3{" "}
                  <strong>
                    Sensitive Personal Data or Information (SPDI):
                  </strong>{" "}
                  We do not collect or process SPDI unless necessary for the
                  services provided on our platform. In such cases, we will
                  obtain your explicit consent.
                </p>

                <h2 className="font-bold">3. How We Use Your Information</h2>
                <p>
                  3.1 <strong>Service Delivery:</strong> If you are a solar
                  product end-user, we use your personal information to process
                  orders, provide customer support, and manage your account. If
                  you are an installer or manufacturer, we use your personal
                  information to connect you with the end user.
                </p>
                <p>
                  3.2 <strong>Communication:</strong> We may use your contact
                  details to send you important updates, promotional offers, and
                  information about our services. You can opt out of receiving
                  marketing communications at any time.
                </p>
                <p>
                  3.3 <strong>Improvement and Personalization:</strong> We use
                  data analytics to understand user behavior, improve our
                  services, and customize your experience on our platform.
                </p>
                <p>
                  3.4 <strong>Legal Compliance:</strong> We may use your
                  information to comply with legal obligations, enforce our
                  terms and conditions, and protect our rights and the rights of
                  others.
                </p>

                <h2 className="font-bold">
                  4. Information Sharing and Disclosure
                </h2>
                <p>
                  4.1 <strong>Third-Party Support Providers:</strong> We may
                  share your information with trusted third-party support
                  providers who assist us in operating our platform, its backend
                  administration, processing payments, delivering services, and
                  conducting our business. These providers are bound by
                  confidentiality agreements and are not permitted to use your
                  data for any other purpose.
                </p>
                <p>
                  4.2 <strong>Legal Requirements:</strong> We may disclose your
                  information if required by law or in response to legal
                  processes, including court orders, subpoenas, or government
                  investigations.
                </p>

                <h2 className="font-bold">5. Data Security</h2>
                <p>
                  5.1 We implement reasonable security practices and procedures
                  to protect your personal information from unauthorized access,
                  misuse, alteration, or disclosure.
                </p>
                <p>
                  5.2 While we strive to protect your data, no security system
                  is infallible. We cannot guarantee the absolute security of
                  your information, and you share your data with us at your own
                  risk.
                </p>

                <h2 className="font-bold">
                  6. Cookies and Tracking Technologies
                </h2>
                <p>
                  6.1 We use cookies and similar tracking technologies to
                  collect information about your interactions with our platform,
                  such as pages visited and links clicked. This helps us enhance
                  your user experience and deliver personalized content.
                </p>
                <p>
                  6.2 You can manage your cookie preferences through your
                  browser settings. However, disabling cookies may affect the
                  functionality of our platform.
                </p>

                <h2 className="font-bold">7. Your Rights</h2>
                <p>
                  7.1 <strong>Access and Correction:</strong> You have the right
                  to access the personal information we hold about you and
                  request corrections if necessary.
                </p>
                <p>
                  7.2 <strong>Withdrawal of Consent:</strong> You may withdraw
                  your consent to the processing of your personal data at any
                  time. However, this may affect your ability to use certain
                  features of our platform.
                </p>
                <p>
                  7.4 <strong>Grievance Redressal:</strong> If you have any
                  concerns or grievances regarding the handling of your data,
                  please contact Mrs. Minku Singh, our Grievance Officer, at +91
                  9899492280 or e-mail at{" "}
                  <a href="mailto:support@cuspsolar.com">
                    support@cuspsolar.com
                  </a>
                  . We will address your concerns in a timely manner.
                </p>

                <h2 className="font-bold">8. Data Retention</h2>
                <p>
                  8.1 We retain your personal information only as long as
                  necessary to fulfill the purposes for which it was collected
                  or as required by law.
                </p>
                <p>
                  8.2 When your personal information is no longer needed, we
                  will securely delete or anonymize it.
                </p>

                <h2 className="font-bold">9. Updates to this Policy</h2>
                <p>
                  9.1 We may update this Data Privacy Policy from time to time
                  to reflect changes in our practices or legal requirements. The
                  updated policy will be posted on our website with the
                  effective date. We encourage you to review this policy
                  periodically.
                </p>

                <h2 className="font-bold">10. Governing Law</h2>
                <p>
                  10.1 This Data Privacy Policy is governed by and construed in
                  accordance with the laws of India. Any disputes arising out of
                  or related to this policy shall be subject to the exclusive
                  jurisdiction of the courts in Ghaziabad.
                </p>

                <h2 className="font-bold">11. Contact Us</h2>
                <p>
                  11.1 If you have any questions or concerns about this Data
                  Privacy Policy or our data practices, please contact us at{" "}
                  <a href="mailto:support@cuspsolar.com">
                    support@cuspsolar.com
                  </a>
                  .
                </p>
                <button
                  className="bg-[#3B715A] text-white px-4 py-2 rounded-lg my-5"
                  onClick={() => setShowPrivacyModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-4">
        <button
          className="bg-[#004A9C] text-white px-4 py-2 rounded"
          disabled={loading}
          onClick={() => {
            if (isChecked) {
              handleSubmit();
            } else {
              toast.error("Accept Terms & Conditions before submitting...");
            }
          }}
        >
          {loading ? "Please Wait..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default PreviewDetails;
