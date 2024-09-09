import React from "react";
import { useNavigate } from "react-router-dom";
const Privacypolicy = () => {
  const navigate = useNavigate();

  const handleOkClick = () => {
    navigate("/"); // Redirect to the home page or wherever you'd like
  };

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-screen md:min-h-0 md:h-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <div className="text-[#333] text-[16px] space-y-4 overflow-y-auto min-h-[400px]">
        <h2 className="font-bold">1. Introduction</h2>
        <p>
          1.1 Welcome to CUSP, an e-commerce platform dedicated to renewable
          energy solutions, a brand of Synergy Sustainability Solutions Pvt.
          Ltd., having its registered office at B-102, Kalyani Apartment, Sector
          6, Vasundhra, Ghaziabad -201012, Uttar Pradesh (CUSP). We value your
          privacy and are committed to protecting your personal data. This Data
          Privacy Policy outlines how we collect, use, share, and safeguard your
          information in accordance with the laws of India.
        </p>

        <h2 className="font-bold">2. Information We Collect</h2>
        <p>
          2.1 <strong>Personal Information:</strong> When you register on our
          platform, place an order, or communicate with us, we may collect
          personal information such as your name, email address, contact number,
          physical address, and payment details.
        </p>
        <p>
          2.2 <strong>Non-Personal Information:</strong> We may collect
          non-personal information such as your browser type, IP address, and
          details about your usage of our platform to improve our services.
        </p>
        <p>
          2.3 <strong>Sensitive Personal Data or Information (SPDI):</strong> We
          do not collect or process SPDI unless necessary for the services
          provided on our platform. In such cases, we will obtain your explicit
          consent.
        </p>

        <h2 className="font-bold">3. How We Use Your Information</h2>
        <p>
          3.1 <strong>Service Delivery:</strong> If you are a solar product
          end-user, we use your personal information to process orders, provide
          customer support, and manage your account. If you are an installer or
          manufacturer, we use your personal information to connect you with the
          end user.
        </p>
        <p>
          3.2 <strong>Communication:</strong> We may use your contact details to
          send you important updates, promotional offers, and information about
          our services. You can opt out of receiving marketing communications at
          any time.
        </p>
        <p>
          3.3 <strong>Improvement and Personalization:</strong> We use data
          analytics to understand user behavior, improve our services, and
          customize your experience on our platform.
        </p>
        <p>
          3.4 <strong>Legal Compliance:</strong> We may use your information to
          comply with legal obligations, enforce our terms and conditions, and
          protect our rights and the rights of others.
        </p>

        <h2 className="font-bold">4. Information Sharing and Disclosure</h2>
        <p>
          4.1 <strong>Third-Party Support Providers:</strong> We may share your
          information with trusted third-party support providers who assist us
          in operating our platform, its backend administration, processing
          payments, delivering services, and conducting our business. These
          providers are bound by confidentiality agreements and are not
          permitted to use your data for any other purpose.
        </p>
        <p>
          4.2 <strong>Legal Requirements:</strong> We may disclose your
          information if required by law or in response to legal processes,
          including court orders, subpoenas, or government investigations.
        </p>

        <h2 className="font-bold">5. Data Security</h2>
        <p>
          5.1 We implement reasonable security practices and procedures to
          protect your personal information from unauthorized access, misuse,
          alteration, or disclosure.
        </p>
        <p>
          5.2 While we strive to protect your data, no security system is
          infallible. We cannot guarantee the absolute security of your
          information, and you share your data with us at your own risk.
        </p>

        <h2 className="font-bold">6. Cookies and Tracking Technologies</h2>
        <p>
          6.1 We use cookies and similar tracking technologies to collect
          information about your interactions with our platform, such as pages
          visited and links clicked. This helps us enhance your user experience
          and deliver personalized content.
        </p>
        <p>
          6.2 You can manage your cookie preferences through your browser
          settings. However, disabling cookies may affect the functionality of
          our platform.
        </p>

        <h2 className="font-bold">7. Your Rights</h2>
        <p>
          7.1 <strong>Access and Correction:</strong> You have the right to
          access the personal information we hold about you and request
          corrections if necessary.
        </p>
        <p>
          7.2 <strong>Withdrawal of Consent:</strong> You may withdraw your
          consent to the processing of your personal data at any time. However,
          this may affect your ability to use certain features of our platform.
        </p>
        <p>
          7.4 <strong>Grievance Redressal:</strong> If you have any concerns or
          grievances regarding the handling of your data, please contact Mrs.
          Minku Singh, our Grievance Officer, at +91 9899492280 or e-mail at{" "}
          <a href="mailto:support@cuspsolar.com">support@cuspsolar.com</a>. We
          will address your concerns in a timely manner.
        </p>

        <h2 className="font-bold">8. Data Retention</h2>
        <p>
          8.1 We retain your personal information only as long as necessary to
          fulfill the purposes for which it was collected or as required by law.
        </p>
        <p>
          8.2 When your personal information is no longer needed, we will
          securely delete or anonymize it.
        </p>

        <h2 className="font-bold">9. Updates to this Policy</h2>
        <p>
          9.1 We may update this Data Privacy Policy from time to time to
          reflect changes in our practices or legal requirements. The updated
          policy will be posted on our website with the effective date. We
          encourage you to review this policy periodically.
        </p>

        <h2 className="font-bold">10. Governing Law</h2>
        <p>
          10.1 This Data Privacy Policy is governed by and construed in
          accordance with the laws of India. Any disputes arising out of or
          related to this policy shall be subject to the exclusive jurisdiction
          of the courts in Ghaziabad.
        </p>

        <h2 className="font-bold">11. Contact Us</h2>
        <p>
          11.1 If you have any questions or concerns about this Data Privacy
          Policy or our data practices, please contact us at{" "}
          <a href="mailto:support@cuspsolar.com">support@cuspsolar.com</a>.
        </p>
      </div>
      <div className="text-center">
        <button
          onClick={handleOkClick}
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Privacypolicy;
