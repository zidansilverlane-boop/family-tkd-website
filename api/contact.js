export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { formType, ...fields } = req.body;

  const subject = formType === 'summer-camp'
    ? 'Summer Camp Registration — Family TKD Website'
    : 'Free Trial Request — Family TKD Website';

  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:8px 12px;font-weight:600;color:#1E3A8A;border-bottom:1px solid #E2E8F0;text-transform:capitalize">${k.replace(/([A-Z])/g, ' $1').trim()}</td><td style="padding:8px 12px;border-bottom:1px solid #E2E8F0">${v}</td></tr>`)
    .join('');

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:linear-gradient(135deg,#1E3A8A,#1E2D5B);padding:24px;border-radius:12px 12px 0 0">
        <h1 style="color:#FFBB02;margin:0;font-size:20px">${subject}</h1>
      </div>
      <div style="padding:24px;background:#fff;border:1px solid #E2E8F0;border-top:none;border-radius:0 0 12px 12px">
        <table style="width:100%;border-collapse:collapse">${rows}</table>
        <p style="margin-top:20px;font-size:13px;color:#64748B">Submitted from the Family Taekwondo School website</p>
      </div>
    </div>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Family TKD Website <onboarding@resend.dev>',
        to: 'familytkdschool@yahoo.com',
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}
