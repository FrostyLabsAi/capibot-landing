/**
 * Email templates for CapiBot transactional emails via Resend.
 */

export function selfHostedLicenseEmail(licenseKey: string): { subject: string; html: string } {
	return {
		subject: 'Your CapiBot Self-Hosted License Key',
		html: `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#0a0a1a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e0e0e0;">
	<div style="max-width:600px;margin:0 auto;padding:40px 20px;">

		<!-- Header -->
		<div style="text-align:center;margin-bottom:32px;">
			<img src="https://capibot.io/capybara-icon.png" alt="CapiBot" width="64" height="64" style="border-radius:50%;margin-bottom:16px;" />
			<h1 style="margin:0;font-size:24px;color:#ffffff;">Welcome to CapiBot Self-Hosted!</h1>
			<p style="margin:8px 0 0;color:#9ca3af;font-size:14px;">Your private AI workforce is ready to deploy.</p>
		</div>

		<!-- One-Command Install -->
		<div style="background:#1a1a2e;border:1px solid #2a2a4a;border-radius:12px;padding:24px;margin-bottom:24px;">
			<h2 style="margin:0 0 12px;font-size:16px;color:#ffffff;">Quick Install (one command)</h2>

			<p style="margin:0 0 8px;font-size:13px;color:#9ca3af;font-weight:600;">Linux / macOS:</p>
			<div style="background:#0d0d1a;border:1px solid #333;border-radius:8px;padding:16px;overflow-x:auto;margin-bottom:16px;">
				<code style="font-family:'SF Mono',Consolas,monospace;font-size:13px;color:#60a5fa;word-break:break-all;">curl -fsSL https://capibot.io/install.sh | bash -s ${licenseKey}</code>
			</div>

			<p style="margin:0 0 8px;font-size:13px;color:#9ca3af;font-weight:600;">Windows (PowerShell):</p>
			<div style="background:#0d0d1a;border:1px solid #333;border-radius:8px;padding:16px;overflow-x:auto;">
				<code style="font-family:'SF Mono',Consolas,monospace;font-size:13px;color:#60a5fa;word-break:break-all;">irm https://capibot.io/install.ps1 -OutFile install.ps1; .\\install.ps1 -LicenseKey ${licenseKey}</code>
			</div>

			<p style="margin:12px 0 0;font-size:12px;color:#6b7280;">
				Requires at least 4GB RAM and <a href="https://docs.docker.com/get-docker/" style="color:#60a5fa;text-decoration:none;">Docker</a> installed (the Linux script installs it automatically).
			</p>
		</div>

		<!-- License Key -->
		<div style="background:#1a1a2e;border:1px solid #2a2a4a;border-radius:12px;padding:24px;margin-bottom:24px;">
			<h2 style="margin:0 0 12px;font-size:16px;color:#ffffff;">Your License Key</h2>
			<div style="background:#0d0d1a;border:1px solid #333;border-radius:8px;padding:16px;text-align:center;">
				<code style="font-family:'SF Mono',Consolas,monospace;font-size:20px;color:#34d399;letter-spacing:2px;">${licenseKey}</code>
			</div>
			<p style="margin:12px 0 0;font-size:12px;color:#6b7280;">
				Keep this safe. Your license validates on startup and re-checks every 24 hours.
				A 7-day grace period covers any network interruptions.
			</p>
		</div>

		<!-- What's Next -->
		<div style="background:#1a1a2e;border:1px solid #2a2a4a;border-radius:12px;padding:24px;margin-bottom:24px;">
			<h2 style="margin:0 0 16px;font-size:16px;color:#ffffff;">After Installation</h2>
			<table style="width:100%;border-collapse:collapse;">
				<tr>
					<td style="padding:8px 12px 8px 0;vertical-align:top;color:#60a5fa;font-size:16px;width:28px;">1.</td>
					<td style="padding:8px 0;font-size:14px;color:#d1d5db;">
						Open <strong style="color:#ffffff;">http://localhost:3002</strong> in your browser
					</td>
				</tr>
				<tr>
					<td style="padding:8px 12px 8px 0;vertical-align:top;color:#60a5fa;font-size:16px;">2.</td>
					<td style="padding:8px 0;font-size:14px;color:#d1d5db;">
						Log in with username <strong style="color:#ffffff;">admin</strong> and the password shown during install
					</td>
				</tr>
				<tr>
					<td style="padding:8px 12px 8px 0;vertical-align:top;color:#60a5fa;font-size:16px;">3.</td>
					<td style="padding:8px 0;font-size:14px;color:#d1d5db;">
						Go to <strong style="color:#ffffff;">Integrations → Keys</strong> and add your LLM API key (Anthropic, OpenAI, Alibaba, etc.)
					</td>
				</tr>
				<tr>
					<td style="padding:8px 12px 8px 0;vertical-align:top;color:#60a5fa;font-size:16px;">4.</td>
					<td style="padding:8px 0;font-size:14px;color:#d1d5db;">
						Start chatting with CapiBot or deploy a company template!
					</td>
				</tr>
			</table>
		</div>

		<!-- Links -->
		<div style="text-align:center;margin-bottom:32px;">
			<a href="https://capibot.io/en/docs/self-hosted" style="display:inline-block;background:#3b82f6;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;">
				Full Setup Guide
			</a>
		</div>

		<!-- Footer -->
		<div style="text-align:center;padding-top:24px;border-top:1px solid #2a2a4a;">
			<p style="margin:0 0 8px;font-size:13px;color:#6b7280;">
				Need help? Reply to this email or reach out at
				<a href="mailto:support@capibot.io" style="color:#60a5fa;text-decoration:none;">support@capibot.io</a>
			</p>
			<p style="margin:0;font-size:12px;color:#4b5563;">
				CapiBot Agent Orchestration — <a href="https://capibot.io" style="color:#4b5563;text-decoration:none;">capibot.io</a>
			</p>
		</div>

	</div>
</body>
</html>
`.trim(),
	};
}
