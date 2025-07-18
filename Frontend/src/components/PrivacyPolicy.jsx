import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{
      fontFamily: "Arial, sans-serif",
      margin: "5%",
      backgroundColor: "#f9f9f9",
      color: "#333",
      lineHeight: 1.6
    }}>
      <h1 style={{ color: "#003366", borderBottom: "2px solid #003366", paddingBottom: "10px" }}>
        Privacy Policy
      </h1>
      <p><strong>Last updated:</strong> 12th June 2025</p>

      <div style={{ marginBottom: "30px" }}>
        <p>
          Iwayplus Private Limited (“Iwayplus/We/Our/Us”) is committed to protecting your privacy.
          This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our mobile applications (IPFG, Empower,com.iwayplus.rni,com.iwayplus.candor).
        </p>
        <p>
          By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
          If you do not agree with this Privacy Policy, please do not access or use the App.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>1. Information We Collect</h2>

        <h3>1.1 Personal Information</h3>
        <ul>
          <li>Name — to personalize your account and display identity on the app.</li>
          <li>Email Address — for account creation, communication, and login credentials.</li>
          <li>Mobile Number — for identity verification and sending booking confirmations.</li>
        </ul>

        <h3>1.2 Device and Usage Information</h3>
        <ul>
          <li>Device Type and Model</li>
          <li>Operating System and Version</li>
          <li>Session Logs and Usage Patterns</li>
        </ul>

        <h3>1.3 Sensor Data (Collected Offline On-Device)</h3>
        <ul>
          <li>Bluetooth</li>
          <li>Camera</li>
          <li>GPS</li>
          <li>Accelerometer</li>
          <li>Gyroscope</li>
          <li>Magnetometer</li>
        </ul>
        <p>This sensor data is used only for real-time indoor navigation functionalities and is processed on-device where possible.</p>

        <h3>1.4 Automatically Collected Information</h3>
        <ul>
          <li>Pages accessed</li>
          <li>Time and duration of usage</li>
          <li>App crash reports</li>
        </ul>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>2. Purpose of Data Collection</h2>
        <ul>
          <li>To create and manage your user account.</li>
          <li>To personalize your navigation and app experience.</li>
          <li>To process bookings and send tickets.</li>
          <li>To provide accessibility-based assistive features.</li>
          <li>To improve the functionality, security, and performance of the App.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>3. Third-Party Services</h2>
        <p>
          The App may use third-party services for analytics, crash reporting, and app functionality.
          These services may collect information subject to their own privacy policies:
        </p>
        <ul>
          <li>Google Maps SDK (if applicable)</li>
        </ul>
        <p>You can refer to the respective third-party privacy policies for more details.</p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>4. Cookies and Tracking Technologies</h2>
        <p>We may use cookies or similar technologies to:</p>
        <ul>
          <li>Maintain your login sessions.</li>
          <li>Analyze app performance and usage.</li>
          <li>Improve user experience.</li>
        </ul>
        <p>You may disable cookies through your device settings, but some features may not function properly.</p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>5. Security of Your Information</h2>
        <p>
          We use industry-standard security measures to safeguard your personal information against unauthorized access, disclosure, or misuse.
          When you access or modify your account, we use secure servers to protect your data.
        </p>
        <p>
          Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>6. Data Retention</h2>
        <p>
          We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
          comply with legal obligations, resolve disputes, and enforce agreements.
        </p>
        <p>
          After you delete your account, we may retain transaction data or other necessary records as required under applicable Indian laws,
          including but not limited to the Information Technology Act, 2000 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>7. Account Deletion</h2>
        <p>
          You may request account deletion by sending an email from your registered email ID to{" "}
          <a href="mailto:info@iwayplus.com">info@iwayplus.com</a>.
          We will process the request within 5–7 business days and send you confirmation upon successful deletion.
        </p>
        <p>Once deleted, your data will not be recoverable, and you will need to create a new account to use the App again.</p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>8. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time.
          Updates will be posted on this page with a revised "Last Updated" date.
          Your continued use of the App following the posting of changes constitutes your acceptance of such changes.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ color: "#003366" }}>9. Contact Information / Grievance Officer</h2>
        <p>If you have any questions, concerns, or complaints regarding this Privacy Policy or data handling practices, you may contact:</p>
        <p>
          <strong>Mr. Vikas Upadhyay</strong><br />
          Grievance Officer<br />
          Iwayplus Pvt Ltd<br />
          3A-2/B, R&amp;I Park, IIT Delhi, Hauz Khas, PIN - 110016<br />
          Email: <a href="mailto:info@iwayplus.com">info@iwayplus.com</a><br />
          Working Hours: Mon to Sat (9:00 to 18:00)
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
