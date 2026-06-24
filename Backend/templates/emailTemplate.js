export const createVerificationEmailTemplate = (verificationLink) => {
  return `
                <h2>
                    Welcome to AI Weekly Digest
                </h2>
    
                <p>
                    Click below to verify
                    your email.
                </p>
    
                <a href=${verificationLink}>
                    Verify Email
                </a>
            `;
};

export const createNewsletterEmailTemplate = (newsletter) => {
  return;
};

export const createNewsletterTemplate = (newsletter) => {
  const articlesHtml = newsletter.selectedArticles
    .map(
      (article) => `
            <div style="
                margin-bottom:32px;
                padding:24px;
                border:1px solid #e5e7eb;
                border-radius:12px;
                background:#fafafa;
            ">

                <div style="
                    display:inline-block;
                    background:#111827;
                    color:white;
                    padding:6px 12px;
                    border-radius:999px;
                    font-size:12px;
                    margin-bottom:12px;
                ">
                    ${article.source}
                </div>

                <h2 style="
                    margin:0 0 16px 0;
                    color:#111827;
                    font-size:24px;
                ">
                    ${article.title}
                </h2>

                <h3 style="
                    color:#2563eb;
                    margin-bottom:8px;
                ">
                    AI Summary
                </h3>

                <p style="
                    color:#374151;
                    line-height:1.7;
                ">
                    ${article.aiSummary}
                </p>

                <h3 style="
                    color:#10b981;
                    margin-top:20px;
                    margin-bottom:8px;
                ">
                    Why It Matters
                </h3>

                <p style="
                    color:#374151;
                    line-height:1.7;
                ">
                    ${article.whyItMatters}
                </p>

                <a
                    href="${article.url}"
                    style="
                        display:inline-block;
                        margin-top:16px;
                        background:#2563eb;
                        color:white;
                        text-decoration:none;
                        padding:12px 18px;
                        border-radius:8px;
                        font-weight:600;
                    "
                >
                    Read Full Article →
                </a>

            </div>
        `,
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>

    <body style="
        margin:0;
        padding:0;
        background:#f3f4f6;
        font-family:Arial,sans-serif;
    ">

        <div style="
            max-width:800px;
            margin:auto;
            padding:40px 20px;
        ">

            <div style="
                background:white;
                border-radius:16px;
                overflow:hidden;
                box-shadow:0 4px 12px rgba(0,0,0,0.08);
            ">

                <div style="
                    background:#111827;
                    color:white;
                    text-align:center;
                    padding:40px;
                ">

                    <h1 style="
                        margin:0;
                        font-size:36px;
                    ">
                        AI Weekly Digest
                    </h1>

                    <p style="
                        margin-top:12px;
                        color:#d1d5db;
                    ">
                        Curated AI news delivered to your inbox
                    </p>

                </div>

                <div style="
                    padding:40px;
                ">

                    <h2 style="
                        color:#111827;
                        margin-top:0;
                    ">
                        ${newsletter.title}
                    </h2>

                    <div style="
                        background:#eff6ff;
                        border-left:4px solid #2563eb;
                        padding:20px;
                        border-radius:8px;
                        margin-bottom:32px;
                    ">

                        <h3 style="
                            margin-top:0;
                            color:#1e40af;
                        ">
                            Weekly Overview
                        </h3>

                        <p style="
                            margin-bottom:0;
                            color:#374151;
                            line-height:1.8;
                        ">
                            ${newsletter.weeklySummary}
                        </p>

                    </div>

                    ${articlesHtml}

                </div>

                <div style="
                    background:#f9fafb;
                    text-align:center;
                    padding:24px;
                    border-top:1px solid #e5e7eb;
                ">

                    <p style="
                        color:#6b7280;
                        margin:0;
                    ">
                        AI Weekly Digest • Stay updated with the most important developments in AI.
                    </p>

                </div>

            </div>

        </div>

    </body>

    </html>
    `;
};
