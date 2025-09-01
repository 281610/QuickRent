import React from 'react'

export default function Footer() {
    return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flex: 1,   // take all available space except footer
              padding: "20px",
              opacity: 0,
              transform: "translateY(20px)",
              animation: "fadeSlideIn 0.8s ease-out forwards",
            }}
          >
            {/* Your existing page content here (headers, items, form, etc) */}
          </div>
      
          {/* Footer component here */}
          <footer
            style={{
              padding: "20px 40px",
              background: "linear-gradient(135deg, #2575fc, #6a11cb)",
              color: "white",
              textAlign: "center",
              fontSize: "14px",
              letterSpacing: "0.05em",
              animation: "fadeInUp 1s ease forwards",
              userSelect: "none",
            }}
          >
            <p style={{ margin: "0 0 8px 0" }}>
              &copy; {new Date().getFullYear()} QuickRents. All rights reserved.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <a
                href="/about"
                style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                About
              </a>
              <a
                href="/contact"
                style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Contact
              </a>
              <a
                href="/privacy"
                style={{ color: "white", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#ffd700")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                Privacy Policy
              </a>
            </div>
      
            {/* Animation keyframes */}
            <style>
              {`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(15px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                @keyframes fadeSlideIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}
            </style>
          </footer>
        </div>
      );
      
}
