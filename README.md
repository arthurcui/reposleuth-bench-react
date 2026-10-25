# Operations Dashboard — React / TypeScript

A deliberately imperfect training application for read-only engineering investigations.
Use only synthetic data and run on loopback. Do not deploy this application for real users.
The issue tracker describes user-visible symptoms; diagnoses are intentionally omitted.

## Run

Node 24+ and npm. Run `npm ci`, `npm run build`, then `npm run dev`.
Open http://127.0.0.1:4313. The dashboard uses local synthetic data; no API keys are required.

Data resets on process restart. All dates use UTC and all identifiers are fictional.
The baseline-v1 tag is the fixed source revision used for the initial issue set.
