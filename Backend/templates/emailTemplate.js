export const createVerificationEmailTemplate = (verificationLink) => {
  return `

    <div style=" background:#0f1117; padding:40px 20px; font-family:Arial,sans-serif; color:#e5e7eb; " >

    <div
    style="
        max-width:650px;
        margin:0 auto;
        background:#161b22;
        border:1px solid #2d3748;
        border-radius:16px;
        overflow:hidden;
    "
    >

    <div
        style="
        padding:32px;
        border-bottom:1px solid #2d3748;
        "
    >

        <h1
        style="
            margin:0;
            font-size:28px;
            color:#ffffff;
        "
        >
        AI Weekly Digest
        </h1>

        <p
        style="
            margin-top:8px;
            color:#9ca3af;
            font-size:14px;
        "
        >
        Signal, not noise.
        </p>

    </div>

    <div style="padding:40px 32px;">

        <p
        style="
            color:#60a5fa;
            font-size:12px;
            letter-spacing:2px;
            text-transform:uppercase;
            margin-bottom:16px;
        "
        >
        Email Verification
        </p>

        <h2
        style="
            margin:0;
            font-size:32px;
            color:#ffffff;
        "
        >
        Confirm your subscription
        </h2>

        <p
        style="
            margin-top:20px;
            line-height:1.8;
            color:#cbd5e1;
        "
        >
        Thanks for subscribing to AI Weekly Digest.
        Before we can start delivering weekly AI insights,
        please verify your email address.
        </p>

        <div
        style="
            text-align:center;
            margin:40px 0;
        "
        >

        <a
            href="${verificationLink}"
            style="
            display:inline-block;
            background:#3b82f6;
            color:white;
            text-decoration:none;
            padding:14px 28px;
            border-radius:10px;
            font-weight:600;
            "
        >
            Verify Email Address
        </a>

        </div>

        <p
        style="
            font-size:13px;
            color:#94a3b8;
            line-height:1.7;
        "
        >
        If you didn't request this subscription,
        you can safely ignore this email.
        </p>

    </div>

    <div
        style="
        border-top:1px solid #2d3748;
        padding:24px 32px;
        "
    >

        <p
        style="
            margin:0;
            color:#64748b;
            font-size:12px;
            text-align:center;
        "
        >
        AI Weekly Digest · Curated AI news delivered weekly
        </p>

    </div>

    </div>

    </div>

    `;
};

export const createNewsletterTemplate = (newsletter, unsubscribeToken) => {
  const articlesHtml = newsletter.selectedArticles
    .map(
      (article, index) => `
    <div
        style="
        background:#161b22;
        border:1px solid #30363d;
        border-radius:16px;
        padding:28px;
        margin-bottom:28px;
        "
    >

        <div
        style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:18px;
        "
        >

        <span
            style="
            background:#1e293b;
            color:#60a5fa;
            padding:6px 12px;
            border-radius:999px;
            font-size:12px;
            font-weight:600;
            "
        >
            ${article.source}
        </span>

        <span
            style="
            color:#64748b;
            font-size:12px;
            font-weight:600;
            "
        >
            STORY ${index + 1}
        </span>

        </div>

        <h2
        style="
            color:#ffffff;
            margin:0 0 20px 0;
            font-size:28px;
            line-height:1.35;
        "
        >
        ${article.title}
        </h2>

        <div
        style="
            margin-bottom:18px;
        "
        >

        <p
            style="
            color:#60a5fa;
            font-size:12px;
            letter-spacing:1px;
            text-transform:uppercase;
            font-weight:700;
            margin-bottom:10px;
            "
        >
            Summary
        </p>

        <p
            style="
            color:#d1d5db;
            line-height:1.8;
            margin:0;
            "
        >
            ${article.aiSummary}
        </p>

        </div>

        <div>

        <p
            style="
            color:#34d399;
            font-size:12px;
            letter-spacing:1px;
            text-transform:uppercase;
            font-weight:700;
            margin-bottom:10px;
            "
        >
            Impact
        </p>

        <p
            style="
            color:#d1d5db;
            line-height:1.8;
            margin:0;
            "
        >
            ${article.whyItMatters}
        </p>

        </div>

        <div
        style="
            margin-top:24px;
        "
        >

        <a
            href="${article.url}"
            style="
            display:inline-block;
            background:#2563eb;
            color:white;
            text-decoration:none;
            padding:12px 20px;
            border-radius:10px;
            font-weight:600;
            "
        >
            Continue Reading →
        </a>

        </div>

    </div>

    `,
    )
    .join("");

  return `

    <!DOCTYPE html>

    <html>

    <body
    style="
        margin:0;
        padding:0;
        background:#0f1117;
        font-family:Inter,Arial,sans-serif;
    "
    >

    <div
        style="
        max-width:820px;
        margin:auto;
        padding:40px 20px;
        "
    >

    <div
    style="
        background:#161b22;
        border:1px solid #30363d;
        border-radius:20px;
        overflow:hidden;
    "
    >

    <div
        style="
        padding:48px 40px;
        text-align:center;
        border-bottom:1px solid #30363d;
        "
    >

        <div
        style="
            display:inline-block;
            padding:8px 14px;
            border-radius:999px;
            background:#1e293b;
            color:#60a5fa;
            font-size:12px;
            font-weight:600;
            margin-bottom:18px;
        "
        >
        AI WEEKLY DIGEST
        </div>

        <h1
        style="
            color:#ffffff;
            margin:0;
            font-size:42px;
            line-height:1.2;
        "
        >
        Too much is happening in AI.
        <br />
        Stay updated with our weekly digest.
        </h1>

        <p
        style="
            color:#94a3b8;
            margin-top:20px;
            font-size:16px;
            line-height:1.8;
        "
        >
        We analyze hundreds of AI developments every week
        and deliver only the stories that matter.
        </p>

    </div>

    <div
        style="
        padding:40px;
        "
    >

        <h2
        style="
            color:#ffffff;
            margin-top:0;
            margin-bottom:24px;
            font-size:30px;
        "
        >
        ${newsletter.title}
        </h2>

        <div
        style="
            background:#111827;
            border:1px solid #374151;
            border-radius:16px;
            padding:28px;
            margin-bottom:40px;
        "
        >

        <div
            style="
            color:#60a5fa;
            font-size:12px;
            font-weight:700;
            text-transform:uppercase;
            letter-spacing:2px;
            margin-bottom:14px;
            "
        >
            Week In AI
        </div>

        <p
            style="
            margin:0;
            color:#d1d5db;
            line-height:1.9;
            font-size:15px;
            "
        >
            ${newsletter.weeklySummary}
        </p>

        </div>

        ${articlesHtml}

    </div>

    <div
        style="
        border-top:1px solid #30363d;
        padding:32px;
        text-align:center;
        "
    >

        <p
        style="
            color:#94a3b8;
            line-height:1.8;
            margin:0;
        "
        >
        You're receiving this email because you subscribed
        to AI Weekly Digest.
        </p>

        <p
        style="
            color:#64748b;
            margin-top:14px;
            line-height:1.8;
        "
        >
        Signal, not noise. We read hundreds of AI updates
        every week so you don't have to.
        </p>

        <p
        style="
            margin-top:24px;
        "
        >

        <a
            href="${process.env.BACKEND_URL}/api/subscriber/unsubscribe/${unsubscribeToken}"
            style="
            color:#94a3b8;
            text-decoration:underline;
            font-size:13px;
            "
        >
            Unsubscribe
        </a>

        </p>

    </div>

    </div>

    </div>

    </body>

    </html>

    `;
};
