export type Signal = { title: string; detail: string; evidence: string; severity: 'high' | 'medium' | 'low' };
export type Analysis = { score: number; level: string; summary: string; signals: Signal[]; actions: string[]; safeReply: string; mode: 'AI' | 'Demo analysis' };
const patterns: { title: string; detail: string; regex: RegExp; severity: Signal['severity'] }[] = [
  { title: 'Urgency or pressure', detail: 'The message pushes you to act quickly, which can reduce careful checking.', regex: /urgent|immediately|act now|within \d+ (hour|minute)|limited time|last warning|account.{0,20}(suspend|block)/i, severity: 'high' },
  { title: 'Money or payment request', detail: 'A payment, transfer, fee, gift card, or crypto request deserves independent verification.', regex: /pay|payment|transfer|gift card|crypto|bitcoin|fee|deposit|upi/i, severity: 'high' },
  { title: 'Sensitive information request', detail: 'The message may be asking for private credentials or personal details.', regex: /password|otp|one.?time pass|pin|aadhaar|pan number|bank details|card number/i, severity: 'high' },
  { title: 'Suspicious link', detail: 'Links in unexpected messages can lead to impersonation or credential theft.', regex: /https?:\/\/|www\.|bit\.ly|tinyurl/i, severity: 'medium' },
  { title: 'Unusually attractive offer', detail: 'Large rewards, guaranteed returns, or too-good-to-be-true promises should be checked carefully.', regex: /guaranteed|free prize|won.{0,20}(prize|lottery)|easy money|100% return|no risk/i, severity: 'medium' },
  { title: 'Identity or authority claim', detail: 'Claims to represent a bank, government, delivery company, employer, or support team should be verified using official channels.', regex: /bank|government|police|customs|courier|delivery|support team|hr department/i, severity: 'low' },
];
export function demoAnalyze(text: string): Analysis {
  const signals: Signal[] = [];
  for (const p of patterns) { const match = text.match(p.regex); if (match) signals.push({ title: p.title, detail: p.detail, evidence: match[0], severity: p.severity }); }
  const score = Math.min(98, Math.max(8, signals.reduce((sum, s) => sum + (s.severity === 'high' ? 27 : s.severity === 'medium' ? 16 : 7), 8)));
  const level = score >= 70 ? 'High risk' : score >= 40 ? 'Moderate risk' : 'Lower risk';
  const actions = ['Do not act on pressure or unexpected requests.', 'Verify the sender using a contact method you find independently—not details in the message.', 'Avoid sharing OTPs, passwords, payment details, or personal documents.'];
  return { score, level, summary: signals.length ? `Found ${signals.length} potential warning signal${signals.length === 1 ? '' : 's'}. These patterns are clues, not proof of fraud.` : 'No common warning patterns were detected by this demo scan. This does not prove the message is safe.', signals, actions, safeReply: 'Thanks for reaching out. I will verify this request independently through the official channel before taking any action.', mode: 'Demo analysis' };
}
