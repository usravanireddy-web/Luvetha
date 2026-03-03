// src/components/FounderCard.tsx
import React from "react";
import Founder from "@/assets/founder1.jpeg";

const FounderCard: React.FC = () => {
  return (
    <>
      <div className="founder-card-wrapper">
        <div className="founder-card">
          
          {/* Avatar */}
          <div className="founder-avatar">
            <div className="avatar-inner">
              <img src={Founder} alt="LakshmaReddy Kunduru" />
              <span className="online-dot" />
            </div>
          </div>

          {/* Text */}
          <p className="founder-text">
            Hello! I am <strong>LakshmaReddy Kunduru</strong>, Founder & CEO at
            <span className="brand"> Luvetha Tech Solutions</span>
          </p>

          <p className="founder-subtext">
            Top 10 Services Company in India
          </p>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        /* Hide on Mobile */
        @media (max-width: 767px) {
          .founder-card-wrapper {
            display: none;
          }
        }

        /* ================= WRAPPER ================= */
        .founder-card-wrapper {
          position: fixed;
          bottom: 110px; /* ⬅ PUSH ABOVE CHATBOT */
          right: 24px;
          z-index: 9999; /* ⬅ LOWER THAN CHATBOT */
          animation: fadeSlideUp 0.6s ease-out both;
        }

        /* Tablet adjustment */
        @media (max-width: 1024px) {
          .founder-card-wrapper {
            bottom: 120px;
            right: 16px;
          }
        }

        .founder-card {
          width: 250px;
          padding: 16px;
          padding-top: 56px;
          background: linear-gradient(145deg, #ffffff, #f4f9ff);
          border-radius: 18px;
          border: 1px solid #e6edf5;
          box-shadow: 0 18px 38px rgba(0,0,0,0.18);
          position: relative;
          text-align: center;
          animation: floatSoft 4s ease-in-out infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .founder-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 50px rgba(0,0,0,0.25);
        }

        /* ================= AVATAR ================= */
        .founder-avatar {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 50%;
          padding: 4px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .avatar-inner {
          position: relative;
        }

        .avatar-inner img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #ffffff;
          display: block;
        }

        .online-dot {
          position: absolute;
          bottom: 6px;
          right: 6px;
          width: 11px;
          height: 11px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid #ffffff;
        }

        /* ================= TEXT ================= */
        .founder-text {
          font-size: 13px;
          font-weight: 500;
          color: #111827;
          line-height: 1.45;
        }

        .founder-text strong {
          font-weight: 700;
        }

        .brand {
          color: #0284c7;
          font-weight: 700;
        }

        .founder-subtext {
          margin-top: 6px;
          font-size: 11px;
          color: #4b5563;
          font-weight: 500;
        }

        /* ================= ANIMATIONS ================= */
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </>
  );
};

export default FounderCard;
